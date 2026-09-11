# E2. 토큰 동기화 파이프라인

> 담당: **정의된 토큰이 Figma와 코드 양쪽에 같은 값으로 존재하게 만드는 장치**
> 책임 아님: 컴포넌트 대응 관계(→ E1), AI 접근 경로(→ E3)

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 🟡 | — | 🟡 | ⬜ | ⬜ | 🟡 |

---

## 현재 상태 — 코드 쪽은 연결됨, Figma는 미연결

```
[Figma 변수]        [tokens/foundation.tokens.json]        [src/tokens/*]
   구값                      정본 (v0.5)                      정본 추종 ✓
     ↑                            │                              ↑
     └──── 동기화 없음 ────────────┘                              │
                                  └── scripts/generate-tokens.mjs ┘
                                      (npm run tokens:build)
```

**정본은 `tokens/foundation.tokens.json`** 하나뿐이고(TKN-03 · FND-12), `src/tokens/*`는 생성기가 정본을 읽어 따라온다. Figma가 남은 미연결 구간이다(작업 2).

---

## 작업 1 — 생성기 재연결 ✅ (2026-08-27 완료)

### 계약 (재연결 후)

`scripts/generate-tokens.mjs` (`npm run tokens:build`, `dev`·`build`에 체이닝됨)

**입력** — `const REGISTRY = 'tokens/foundation.tokens.json'` 한 곳 (W3C DTCG).

- Set의 kind는 별도 선언 없이 **옵션 키의 형태로 판별**한다: 하이픈 포함 → composite, 4자리 숫자 → ordinal, 그 외 숫자 → value-anchored, 나머지 → nominal
- 예외 스텝은 **십의 자리가 5인 4자리 키**로 판정한다(FND-06)
- `JSON.parse`가 정수형 키(`1000` 등)를 앞으로 끌어올리므로 숫자 스케일은 생성기가 재정렬한다
- 무결성 게이트: Set 내 `$type`·단위 균일, nominal 단일 단어, composite 첫 세그먼트의 Font Size 스텝 존재, ordinal 숫자값 단조 증가

**출력** — 세 파일, 전부 무조건 덮어씀:

| 파일 | 내용 |
|---|---|
| `src/tokens/foundation.css` | `:root { --{category}-{set}-{option}: … }` |
| `src/tokens/foundation.ts` | `foundation`, `foundationUnits`, `foundationOrder`, `foundationLookup` + 타입 |
| `src/tokens/foundation.tokens.json` | 역방향 매핑 테이블 (Figma 이름 ↔ CSS 변수 ↔ TS 경로) |

### 검증 결과 (2026-08-27)

- `npm run tokens:build` 통과 — **346 토큰 · 18 Set**
- 개수 일치: Color 8세트(6×13 + 2×11) · Font Size 18 · Line Height 72 · Letter Spacing 90 · Weight 6 · Family 2 · Space 15 · Size 13 · Radius 13 · Stroke 6 · Opacity 11
- `--color-blue-0700: #0077ed` — 재배치된 새 값으로 등록부와 일치
- `npm run build`(tsc + vite)까지 통과
- `docs/A-token/token-system.md`(구 스펙) 삭제 완료. 생성기 주석의 구 스펙 규칙 번호(`FND-11`·`FND-13`)도 함께 제거했다

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
| 원칙 설계 | 🟡 | 방향은 **등록부(코드) → Figma 단방향**으로 선언했다(작업 2). 동기화 단위(컬렉션별/전체)와 주기는 미정 |
| 네이밍 규칙 | — | 파이프라인에는 식별자 문법이 없다 |
| 사용 규칙 | 🟡 | 금지(Figma 손수정은 덮인다)·우선순위(`TKN-03`)·변환 규칙(`TKN-04`)은 있다. 언제 돌리는가(수동 / pre-commit / CI)가 미정 |
| 확장 규칙 | ⬜ | Semantic·Component 계층이 추가될 때의 절차가 없다 |
| 판별 테스트 | ⬜ | "동기화가 됐다"를 판정하는 검사가 없다 |
| 코드 동기화 | 🟡 | 생성기가 정본(`tokens/foundation.tokens.json`)을 읽고 빌드가 통과한다. Figma 구간(작업 2)이 남아 ✅는 아니다 |

**코드 방향은 연결되었다.** Figma 동기화(작업 2)까지 자동화되어야 코드 동기화 축이 ✅가 된다.
