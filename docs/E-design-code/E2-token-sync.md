# E2. 토큰 동기화 파이프라인

> 담당: **정의된 토큰이 Figma와 코드 양쪽에 같은 값으로 존재하게 만드는 장치**
> 책임 아님: 컴포넌트 대응 관계(→ E1), AI 접근 경로(→ E3)

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ⬜ | — | ⬜ | ⬜ | ⬜ | ⬜ |

---

## 현재 상태 — 파이프라인이 끊겨 있다

```
[Figma 변수]        [tokens/foundation.tokens.json]        [src/tokens/*]
   구값                      정본 (v0.4)                      구값
     ↑                            │                              ↑
     └──── 동기화 없음 ────────────┘                              │
                                                                 │
              scripts/generate-tokens.mjs ──────────────────────┘
              입력: docs/A-token/token-system.md §1.6  ← 구 스펙
```

세 곳의 값이 서로 다르다. **정본은 `tokens/foundation.tokens.json`** 하나뿐이고(TKN-03 · FND-12), 나머지 둘이 따라와야 한다.

---

## 작업 1 — 생성기 재연결 (선행)

### 현재 계약

`scripts/generate-tokens.mjs` (`npm run tokens:build`, `dev`·`build`에 체이닝됨)

**입력** — `const SPEC = 'docs/A-token/token-system.md'` 한 곳.
`readSchema()`가 정규식 ` ```json ... ``` `으로 블록을 긁고 **정확히 1개가 아니면 throw** 한다.

```js
if (blocks.length !== 1) throw new Error(`Expected exactly 1 json block in ${SPEC}, found ${blocks.length}.`)
```

파싱하는 스키마 형태(구 스펙 §1.6):

```
{ $schema, collection, grammar, categories, scaleNotation,
  sets: { "Category/Set": { kind, unit, steps|options|pattern, valueRule, exceptions:{allowed,registered}, status } } }
```

`kind ∈ ordinal | value-anchored | nominal | composite`.

**출력** — 세 파일, 전부 무조건 덮어씀:

| 파일 | 내용 |
|---|---|
| `src/tokens/foundation.css` | `:root { --{category}-{set}-{option}: … }` |
| `src/tokens/foundation.ts` | `foundation`, `foundationUnits`, `foundationOrder`, `foundationLookup` + 타입 |
| `src/tokens/foundation.tokens.json` | 역방향 매핑 테이블 (Figma 이름 ↔ CSS 변수 ↔ TS 경로) |

### 바꿀 것

**`readSchema()`와 `collect()`만 갈아끼우면 된다.** `emitCss` / `emitTs` / `emitTokensJson`은 `sets` 배열 형태만 맞으면 그대로 쓸 수 있다.

`collect()`가 만드는 중간 형태:

```js
sets = [{ fullName, category, setName, unit, kind,
          options: [{ canonical, code, value, isException }] }]
```

새 입력은 `tokens/foundation.tokens.json` (W3C DTCG):

```
{ Category: { Set: { "$description", "0100": { "$value": {value,unit}|"#hex"|number, "$type" } } } }
```

- `$type` ∈ `dimension` | `color` | `fontWeight` | `fontFamily` | `number`
- `dimension`의 `$value`는 `{ "value": n, "unit": "px" }` **객체**다. 구 스키마의 평문 숫자와 다르다
- `canonical`은 키 그대로(`0100`, `Sans`, `0400-0300`), `code`는 기존 `camel()`·`pad()` 규칙 유지
- `isException`은 DTCG에 표현이 없다 → **십의 자리가 5인 4자리 키**로 판정하거나 `$extensions`에 표기를 추가한다
- `status: "TBD"` 스킵 분기는 불필요해진다. 등록부에 없는 것은 존재하지 않는 것이다

### 검증

```bash
npm run tokens:build
```

- 통과 후 `src/tokens/foundation.css`에 `--color-blue-0700`이 새 값으로 들어갔는지 확인
- Color 8세트 × (13 또는 11) + Typography(Font Size 18 · Line Height 72 · Letter Spacing 90 · Weight 6 · Family 2) + Layout(15+13) + Shape(13+6) + Effect(11) 이 전부 출력되는지 개수로 확인
- `npm run build`까지 통과시킨다

### 마무리

생성기가 `tokens/`를 읽기 시작하면 **`docs/A-token/token-system.md`를 삭제한다.** 그때까지는 남겨 둔다(지우면 빌드가 깨진다).

> ⚠️ **규칙 ID 충돌 주의.** 생성기 주석의 `FND-11`(매핑 테이블) · `FND-13`(CSS 변수 명명)은 **구 스펙 번호**다.
> v0.4에서 `FND-11`은 "0 스텝 미정의", `FND-13`은 "색 램프 OKLCH 등간격 생성"이다. 주석을 그대로 믿지 말고 `foundation.md`를 확인할 것.

---

## 작업 2 — Figma 변수 동기화 (후행)

`tokens/foundation.tokens.json` → Figma Variables REST API.

- 방향은 **코드 → Figma 단방향**으로 정한다. Figma에서 손으로 고친 값은 다음 동기화에 덮인다
- 색 램프는 OKLCH 명도 등간격으로 **재배치된 값**이 정본이다. Figma에는 아직 구값이 남아 있다
- 재배치로 브랜드 코어 색이 놓이는 스텝이 이동했다 — `foundation.md` §1.8 검토 노트 1 참조

---

## 6축 판정 근거

| 축 | 판정 | 사유 |
|---|:---:|---|
| 원칙 설계 | ⬜ | 동기화 방향(Figma 원본 vs 코드 원본)이 문서에 선언되지 않았다 |
| 네이밍 규칙 | — | 파이프라인에는 식별자 문법이 없다 |
| 사용 규칙 | ⬜ | 언제 돌리는가(수동 / pre-commit / CI)가 미정 |
| 확장 규칙 | ⬜ | Semantic·Component 계층이 추가될 때의 절차가 없다 |
| 판별 테스트 | ⬜ | "동기화가 됐다"를 판정하는 검사가 없다 |
| 코드 동기화 | ⬜ | 생성기가 정본을 읽지 않는다 |

**이 문서를 쓴 것만으로는 어떤 칸도 ✅가 되지 않는다.** 생성기가 실제로 `tokens/`를 읽고 빌드가 통과하면 코드 동기화 축이 🟡로 올라간다.
