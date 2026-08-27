---
name: Foundation
description: Foundation Token의 절대 규칙과 원시값 등록부. 스케일·예외·린트를 정의한다. 이 파일의 diff는 시스템의 파괴적 변경이다.
owns: FND-*
budget: 300 lines
---

> 본 파일은 **원시값 계층의 절대 규칙과 불변 보관소**다.
> 공통 헌법(TKN-*)은 `token.md`에 있다. 먼저 읽고 올 것.
> **이 파일의 변경 = 시스템 전역 영향.** 값 하나를 바꾸면 모든 계층이 따라 바뀐다.

# 1. Foundation Token

## 1.1 정의와 원칙

Foundation Token은 시스템의 모든 시각 값의 **원천(primitive)** 을 정의하는 유일한 계층이다.

| 규칙 ID | 규칙 |
|---|---|
| FND-01 | Foundation Token은 원시값만 정의한다. 이름에 사용 의도·용도·상태를 담지 않는다. (의도는 Semantic, 상태는 Component 계층의 책임) |
| FND-02 | 네이밍 문법은 `{Category}/{Set}/{Option}` 3세그먼트로 고정한다. 세그먼트 생략·추가를 허용하지 않는다. |
| FND-03 | Category는 닫힌 집합이다: `Color` `Typography` `Layout` `Shape` `Effect` — 이 5개 외의 Category를 생성할 수 없다. Category의 추가는 시스템 범위 확장에 해당하며 본 규칙의 개정을 요구한다. |
| FND-04 | 모든 Set은 §1.4에 유형(kind)을 선언한다: `ordinal`(서수 스케일형) / `value-anchored`(값 직결형) / `nominal`(명목형) / `composite`(조합형) 중 하나. |
| FND-05 | ordinal Set의 표준 스케일은 **13단계**이며, Option은 **네 자리 숫자** `0100`~`1300`으로 표기한다. 스텝 번호가 클수록 값이 크다(오름차순 단조). |
| FND-06 | 스케일 예외(중간값 삽입)는 **십의 자리를 5로 치환**해 표기한다(예: `0650`). 경계 밖 확장(`0050`, `1350`)도 같은 규칙을 따른다. |
| FND-07 | 예외 스텝은 **사전 등록제**다. 본 문서 1.5의 예외 등록 대장에 없는 예외 스텝은 사용할 수 없으며, `exceptions.allowed = false`인 Set에는 어떤 예외 스텝도 추가할 수 없다. |
| ~~FND-08~~ | **TKN-04로 승격** — 이름 정본과 코드 변환 규칙은 전 계층 공통이므로 `token.md`가 소유한다. |
| FND-09 | 스텝 번호의 의미(값과의 관계·방향)는 §1.4 Set 선언에 명시한다. 스텝 번호를 임의로 해석하지 않는다. |
| FND-10 | Foundation Token은 어떤 토큰도 참조하지 않는 말단(leaf)이다. Foundation을 참조할 수 있는 것은 Semantic·Component 계층뿐이다. |
| FND-11 | **값 0이 "속성 미적용"을 의미하는 Set은 0 스텝을 정의하지 않는다.** 토큰의 부재가 곧 0이다(Radius·Stroke). 0이 유의미한 값인 Set만 0 스텝을 등록하며, 그 표기는 `0000`으로 통일한다(Opacity·Letter Spacing의 `0100`은 각 Set의 스케일 기준점으로 별도 선언한다). |

## 1.2 네이밍 문법

```
{Category} / {Set} / {Option}

Category ∈ { Color, Typography, Layout, Shape, Effect }
Set      = Category별로 선언된 닫힌 집합 (1.4 참조)
Option   = Set의 kind에 따라 결정 (아래 표 참조)
```

| Set kind | Option 형식 | 예시 | 설명 |
|---|---|---|---|
| ordinal | 4자리 스텝 번호 | `Layout/Space/0400` | 스텝 번호는 순서만 보장. 실제 값은 값 등록부(§1.6)가 확정 |
| value-anchored | 값 그 자체인 숫자 | `Typography/Font Weight/700` | 스텝 번호가 곧 실제 값(또는 표준 규격 값) |
| nominal | 이름(명사) | `Typography/Font Family/Sans` | 순서 없음. 열거된 이름만 사용 |
| composite | 규칙으로 조합된 문자열 | `Typography/Line Height/300-150` | 구성 요소별 유효성 규칙을 따름 (1.4.2 참조) |

### 13단계 스케일링과 예외 표기 (ordinal Set)

- 표준 스텝: `0100 0200 0300 0400 0500 0600 0700 0800 0900 1000 1100 1200 1300` (13단계)
- 예외 스텝: 십의 자리를 5로 치환 — `0050`(0100 아래), `0150`(0100~0200 사이), … `1350`(1300 위)
- 예외는 FND-07에 따라 **등록된 것만** 유효하다. 스케일이 13단계가 아닌 Set(Stroke, Opacity, Color/White, Color/Black)은 §1.4에 자체 스텝 범위를 선언한다.

## 1.3 Category 목록

| Category | 포함 Set | 비고 |
|---|---|---|
| Color | Blue, Gray, Red, Green, Yellow, Sky, White, Black | 색상 램프 6종(13단계) + 알파 2종(11단계) |
| Typography | Font Size, Line Height, Letter Spacing, Font Weight, Font Family | |
| Layout | Space, Size | |
| Shape | Radius, Stroke | |
| Effect | Opacity | |

## 1.4 Set 선언

**값은 이 문서에 두지 않는다.** 모든 원시값의 정본은 `../../tokens/foundation.tokens.json`이다(FND-12, §1.6). 본 절은 Set의 **성질**만 선언한다.

| Set | kind | 스텝 | 예외 | 스텝 번호의 의미 (FND-09) |
|---|---|---|---|---|
| `Color/Blue` `Color/Gray` `Color/Red` `Color/Green` `Color/Yellow` `Color/Sky` | ordinal | 13 (`0100`~`1300`) | 불가 | hue 내 **명도 내림차순**(번호↑ = 어두움). OKLCH 명도 균등 |
| `Color/White` `Color/Black` | ordinal | 11 (`0000`~`1000`) | 불가 | **불투명도 오름차순**. `Effect/Opacity`와 동일한 제곱 스케일 |
| `Typography/Font Size` | ordinal | 13 | **허용** | px 오름차순 |
| `Typography/Line Height` | composite | — | — | §1.4.1 문법 |
| `Typography/Letter Spacing` | composite | — | — | §1.4.1 문법 |
| `Typography/Font Weight` | value-anchored | 6 (`300`~`800`) | 불가 | 숫자가 곧 CSS `font-weight` 값 |
| `Typography/Font Family` | nominal | 2 (`Sans` `Serif`) | 불가 | 순서 없음. 역할 중립 분류이며 실제 서체명은 값으로만 존재 |
| `Layout/Space` | ordinal | 13 | **허용** | px 오름차순 |
| `Layout/Size` | ordinal | 13 | **허용** | px 오름차순 |
| `Shape/Radius` | ordinal | 13 | 불가 | px 오름차순. 0 스텝 없음(FND-11). `1300`=9999px는 pill·원형용 |
| `Shape/Stroke` | ordinal | 6 (`0100`~`0600`) | 불가 | px 오름차순. 0 스텝 없음(FND-11) |
| `Effect/Opacity` | ordinal | 11 (`0000`~`1000`) | 불가 | `value = (step/100)²` % |

> **Space vs Size 판별**: `Space`는 오브젝트 **밖**의 공간(여백·간격)이고, `Size`는 오브젝트 **안**의 크기(높이·너비)다.
> 판별 질문 — *"이 값이 오브젝트 사이 또는 오브젝트 경계와 내용 사이의 빈 공간인가?"* → 예: Space / 아니오: Size

### 1.4.1 composite Set의 문법

```
Typography/Line Height/{Font Size Step}-{Line Height Step}
  Line Height Step ∈ { 0100, 0200, 0300, 0400 }   →  100% / 120% / 140% / 150%

Typography/Letter Spacing/{Font Size Step}-{Letter Spacing Step}
  Letter Spacing Step ∈ { 0100, 0200, 0300, 0400, 0500 }   →  0% / -1% / -1.5% / -2% / -3%
```

- 첫 요소는 `Typography/Font Size`에 존재하는 스텝이어야 하며, **등록된 예외 스텝(`0050` `0150` `0650` `0950` `1150`)도 조합 대상**이다. 유효 Font Size 스텝은 18개이므로 Line Height 72개, Letter Spacing 90개의 Option이 생성된다.
- **두 Set의 값은 생성물이다.** Line Height = `fontSize × 배율`, Letter Spacing = `fontSize × 비율`을 **소수점 둘째 자리에서 반올림**한 px. 생성 규칙은 값 등록부의 `$description`에 병기한다.
- 스텝 번호는 순서만 보장한다(FND-09). Line Height는 행간 오름차순, **Letter Spacing은 자간 조임의 오름차순**(번호↑ = 값이 작아짐)이며 FND-05의 오름차순 단조가 적용되지 않는다.
- **Letter Spacing이 px 고정값인 근거**: Figma의 `letterSpacing`은 `{ value, unit }` 구조이며 변수는 `value`에만 바인딩되고 `unit`은 노드에 남는다. 상대값(%)으로 두면 같은 토큰이 노드 설정에 따라 PIXELS 또는 PERCENT로 다르게 해석되므로, px로 고정해 이 비결정성을 제거한다.

### 1.4.2 Color 램프의 생성 규칙

| 규칙 ID | 규칙 |
|---|---|
| FND-13 | 색 램프는 **OKLCH 명도(L)가 등간격**이 되도록 생성한다. 양 끝(`0100`·`1300`)의 L과 각 스텝의 색상·채도 특성은 보존하되, 중간 스텝은 L 등간격으로 재표본한다. |
| FND-14 | **브랜드 코어 색을 특정 스텝 번호에 고정하지 않는다.** hue마다 코어 색의 명도가 다르므로 스텝 고정은 램프를 찌그러뜨린다. 코어 색이 놓이는 스텝은 hue마다 다르며, Semantic 매핑표(SEM-T03)가 이를 지정한다. |
| FND-15 | **스텝 번호는 hue 내 순서만 보장한다. hue 간 동일 스텝의 명도·대비는 보장하지 않는다.** 교차 hue 일반화(예: "0800이면 어디서나 흰 글씨가 통과한다")를 금지한다. |

## 1.5 예외 등록 대장 (Registered Exceptions)

FND-07에 따라, 예외 스텝은 아래 대장에 등록된 것만 유효하다. 신규 예외는 본 대장에 추가하는 변경(거버넌스 승인)을 통해서만 생성할 수 있다.

| Set | 예외 Step | 값 | 등록일 |
|---|---|---|---|
| Layout/Space | 0050 | 1px | 2026-08-18 |
| Layout/Space | 1350 | 120px | 2026-08-18 |
| Typography/Font Size | 0050 | 9px | 2026-08-18 |
| Typography/Font Size | 0150 | 11px | 2026-08-18 |
| Typography/Font Size | 0650 | 22px | 2026-08-18 |
| Typography/Font Size | 0950 | 36px | 2026-08-18 |
| Typography/Font Size | 1150 | 60px | 2026-08-18 |

## 1.6 값 등록부의 위치

| 규칙 ID | 규칙 |
|---|---|
| FND-12 | **원시값의 정본은 `../../tokens/foundation.tokens.json`이다.** 본 문서에는 값을 기재하지 않는다. 문서와 등록부가 어긋나면 등록부가 정본이다(TKN-03). |

- 형식: W3C DTCG(Design Tokens Format Module) — `$value` / `$type` / `$description`. 길이 값은 `{ "value": n, "unit": "px" }` 객체다.
- 경로 구조는 본 문서의 네이밍 문법과 1:1로 대응한다: `Color` → `Blue` → `0700` = `Color/Blue/0700`.
- `Typography/Line Height`·`Typography/Letter Spacing`은 **생성물**이다. 손으로 고치지 않고 생성 규칙(§1.4.1)으로 재생성한다.
- 이 파일은 Style Dictionary 빌드와 Figma Variable API 동기화, 그리고 §1.7 린트의 **공통 입력**이다.

## 1.7 검증 규칙 (Lint)

| 규칙 ID | 검증 내용 |
|---|---|
| FND-L01 | 모든 Foundation 토큰 이름은 정규식 `^(Color|Typography|Layout|Shape|Effect)\/[A-Z][A-Za-z]*( [A-Z][A-Za-z]*)*\/(\d{4}(-\d{4})?|\d{3}|[A-Z][A-Za-z]*)$` 을 통과해야 한다 |
| FND-L02 | Category·Set·Option은 각각 §1.4 선언과 값 등록부(`../../tokens/foundation.tokens.json`)에 동시에 존재해야 한다. 한쪽에만 있으면 위반이다 |
| FND-L03 | 4자리 Option의 십의 자리는 0 또는 5만 허용한다. 5인 경우 해당 Set의 `exceptions.registered`에 존재해야 한다 |
| FND-L04 | `exceptions.allowed = false`인 Set에 표준 스텝 외 Option이 존재하면 위반이다 |
| FND-L05 | Line Height Option의 첫 요소는 Font Size의 유효 스텝(예외 포함)이어야 하고, 둘째 요소는 {0100, 0200, 0300, 0400}이어야 한다 |
| FND-L09 | Letter Spacing Option의 첫 요소는 Font Size의 유효 스텝(예외 포함)이어야 하고, 둘째 요소는 {0100, 0200, 0300, 0400, 0500}이어야 한다 |
| FND-L10 | composite Set(Line Height·Letter Spacing)의 등록 값은 `valueRule`을 그대로 적용해 재계산한 값과 일치해야 한다 (Letter Spacing은 소수점 둘째 자리 반올림 후 비교) |
| FND-L06 | ordinal Set의 값은 §1.4에 선언된 방향으로 단조여야 한다 (Color는 명도 내림차순, Letter Spacing은 자간 조임 오름차순, 그 외는 값 오름차순) |
| FND-L11 | 색 램프의 인접 스텝 OKLCH 명도 차(ΔL)는 램프 내에서 균등해야 한다 — 최대/최소 비율 1.15 이내 (FND-13) |
| FND-L07 | Foundation 토큰은 alias(참조)를 가질 수 없다 — 원시값만 허용 (FND-10) |
| FND-L08 | 코드 변환 결과는 케이스 폴딩 후에도 전역 유일해야 한다 (예: `Gmarket Sans` vs `GMarket sans` 동시 등록 금지) |

## 1.8 검토 노트 (Open Issues)

작성 과정에서 발견된 미결 사항이다. 확정 시 본문·값 등록부에 반영하고 이 목록에서 제거한다.

1. **Color 램프 재배치의 Figma 반영 미완** — 본 문서와 값 등록부는 FND-13에 따라 **재배치된 값**을 정본으로 삼는다. Figma 변수 컬렉션에는 아직 구값이 남아 있으므로 동기화가 필요하다. 재배치로 브랜드 코어 색이 놓이는 스텝이 이동했다: Blue `#0081ff`→0600 근방, Red `#ef4444`→0600, Green `#22c55e`→0500, Sky `#0ea5e9`→0500, Yellow `#facc15`→0300, Gray `#71717a`→0700 유지. 코어 색의 hex를 바이트 단위로 보존해야 한다면 램프 균등성과 맞바꿔야 하므로 별도 결정이 필요하다.
2. **교차 hue 대비 — 재배치로 크게 개선되었으나 완전 해소는 아님** — `0700` 기준 휘도 편차가 0.468 → **0.047**로 줄었고, 흰 글씨 4.5:1 통과 최초 스텝이 Red만 `0700`, 나머지 5개 hue가 모두 `0800`으로 수렴했다. 그래도 FND-15(교차 hue 미보장)는 유지하며, Semantic 매핑은 SEM-T03의 Role별 등록표를 따른다.
3. **구 컬렉션 잔존** — Brand Guidelines 페이지가 구 컬렉션(`Brand/*` `Sky/*`, 3자리·`Color/` 접두 없음)을 참조하고 있다. 현재 검토 보류.
4. **`Color/Sky` 이름 충돌** — 신·구 컬렉션 양쪽에 `Sky`가 존재한다. 구 컬렉션 정리 시 함께 처리한다.
5. **`Effect/Shadow` Set 보류** — Semantic Theme의 `Shadow` Target과 함께 보류 상태다. 재개 시 composite 유형으로 정의하되, 색을 참조해야 하므로 FND-10(말단 원칙)과의 관계를 먼저 정리해야 한다.

---
