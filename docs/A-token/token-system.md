# Token System

> 본 문서는 AI Readable Design System의 토큰 정의 문서이다.
> 사람이 읽는 규칙 본문과 기계가 읽는 스키마(JSON)를 병행 표기하며, 모든 규칙에는 규칙 ID를 부여한다.
> 계층 구조: **Foundation → Semantic(Theme / Responsive) → Component**, 참조는 단방향(상위 계층 → 하위 계층)만 허용한다.

- 문서 버전: v0.1 (2026-08-18)
- 작성 범위: **1. Foundation Token** (Semantic / Component 파트는 작성 예정)

---

# 1. Foundation Token

## 1.1 정의와 원칙

Foundation Token은 시스템의 모든 시각 값의 **원천(primitive)** 을 정의하는 유일한 계층이다.

| 규칙 ID | 규칙 |
|---|---|
| FND-01 | Foundation Token은 원시값만 정의한다. 이름에 사용 의도·용도·상태를 담지 않는다. (의도는 Semantic, 상태는 Component 계층의 책임) |
| FND-02 | 네이밍 문법은 `{Category}/{Set}/{Option}` 3세그먼트로 고정한다. 세그먼트 생략·추가를 허용하지 않는다. |
| FND-03 | Category는 닫힌 집합이다: `Color` `Typography` `Layout` `Shape` `Effect` `Motion` — 이 6개 외의 Category를 생성할 수 없다. |
| FND-04 | 모든 Set은 스키마에 유형(kind)을 선언한다: `ordinal`(서수 스케일형) / `value-anchored`(값 직결형) / `nominal`(명목형) / `composite`(조합형) 중 하나. |
| FND-05 | ordinal Set의 표준 스케일은 **13단계**이며, Option은 **네 자리 숫자** `0100`~`1300`으로 표기한다. 스텝 번호가 클수록 값이 크다(오름차순 단조). |
| FND-06 | 스케일 예외(중간값 삽입)는 **십의 자리를 5로 치환**해 표기한다(예: `0650`). 경계 밖 확장(`0050`, `1350`)도 같은 규칙을 따른다. |
| FND-07 | 예외 스텝은 **사전 등록제**다. 본 문서 1.5의 예외 등록 대장에 없는 예외 스텝은 사용할 수 없으며, `exceptions.allowed = false`인 Set에는 어떤 예외 스텝도 추가할 수 없다. |
| FND-08 | 이름의 정본(canonical form)은 Figma 표기(단어를 띄어쓰기로 구분, 예: `Font Size`)이다. 코드 변환은 선언된 변환 규칙(세그먼트 경계는 중첩으로 보존, 세그먼트 내부는 camelCase)으로만 수행한다. |
| FND-09 | 스텝 번호의 의미(값과의 관계·매핑 함수)는 Set별 스키마에 선언한다. 스텝 번호를 임의로 해석하지 않는다. |
| FND-10 | Foundation Token은 어떤 토큰도 참조하지 않는 말단(leaf)이다. Foundation을 참조할 수 있는 것은 Semantic·Component 계층뿐이다. |

## 1.2 네이밍 문법

```
{Category} / {Set} / {Option}

Category ∈ { Color, Typography, Layout, Shape, Effect, Motion }
Set      = Category별로 선언된 닫힌 집합 (1.4 참조)
Option   = Set의 kind에 따라 결정 (아래 표 참조)
```

| Set kind | Option 형식 | 예시 | 설명 |
|---|---|---|---|
| ordinal | 4자리 스텝 번호 | `Layout/Space/0400` = 8px | 스텝 번호는 순서만 보장. 실제 값은 스키마의 매핑 테이블로 확정 |
| value-anchored | 값 그 자체인 숫자 | `Typography/Font Weight/700` | 스텝 번호가 곧 실제 값(또는 표준 규격 값) |
| nominal | 이름(명사) | `Typography/Font Family/Sans` | 순서 없음. 열거된 이름만 사용 |
| composite | 규칙으로 조합된 문자열 | `Typography/Line Height/300-150` | 구성 요소별 유효성 규칙을 따름 (1.4.2 참조) |

### 13단계 스케일링과 예외 표기 (ordinal Set)

- 표준 스텝: `0100 0200 0300 0400 0500 0600 0700 0800 0900 1000 1100 1200 1300` (13단계)
- 예외 스텝: 십의 자리를 5로 치환 — `0050`(0100 아래), `0150`(0100~0200 사이), … `1350`(1300 위)
- 예외는 FND-07에 따라 **등록된 것만** 유효하다. 스케일이 13단계가 아닌 Set(Stroke, Opacity, Duration, Easing)은 스키마에 자체 스텝 범위를 선언한다.

## 1.3 Category 목록

| Category | 포함 Set | 비고 |
|---|---|---|
| Color | (정의 예정) | 색상 팔레트. 스텝 번호의 의미(명도 기준/대비 기준, 방향)를 스키마에 선언할 것 |
| Typography | Font Size, Line Height, Font Weight, Font Family | |
| Layout | Space, Size | |
| Shape | Radius, Stroke | |
| Effect | Opacity | |
| Motion | Duration, Easing | |

## 1.4 Set 정의

### 1.4.1 Layout

**Space** — ordinal, 13단계, 예외 허용

| Step | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 | 0800 | 0900 | 1000 | 1100 | 1200 | 1300 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| px | 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 72 | 96 |

**Size** — ordinal, 13단계, 예외 허용

| Step | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 | 0800 | 0900 | 1000 | 1100 | 1200 | 1300 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| px | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 80 | 96 | 128 |

### 1.4.2 Typography

**Font Size** — ordinal, 13단계, 예외 허용

| Step | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 | 0800 | 0900 | 1000 | 1100 | 1200 | 1300 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| px | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 40 | 48 | 72 | 96 |

**Line Height** — composite, 예외 스텝 별도 없음(구성 요소 규칙을 따름)

```
Option = {Font Size Step}-{Line Height Number}

Font Size Step     : Font Size Set에 존재하는 스텝(등록된 예외 스텝 포함)만 사용 가능
Line Height Number : { 100, 120, 140, 150 } 만 사용 (폰트 크기 대비 %)
```

- 예: `Typography/Line Height/300-150` = Font Size 0300(14px) × 150% = 21px
- 유효성: 첫 요소가 Font Size에 없는 스텝이면 위반이다 (예: `0250-140`은 Font Size에 0250이 등록되어 있지 않으므로 무효)

**Font Weight** — value-anchored, 예외 불가

```
Option ∈ { 300, 400, 500, 600, 700, 800 }   (숫자가 곧 CSS font-weight 값)
```

**Font Family** — nominal, 예외 불가

| Option | 값 |
|---|---|
| `Sans` | Suit Variable |
| `Serif` | Noto Serif KR |

- 등록된 서체는 위 2종뿐이다. Option 이름은 역할 중립적 분류(Sans/Serif)를 사용하고, 실제 서체명은 값으로만 존재한다. (서체 교체 시 토큰 이름이 불변)

### 1.4.3 Shape

**Radius** — ordinal, 13단계, **예외 불가**

| Step | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 | 0800 | 0900 | 1000 | 1100 | 1200 | 1300 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| px | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 9999 |

- `1300`(9999px)은 pill/원형 처리를 위한 최대값이다.

**Stroke** — ordinal, **7단계**(0100~0700), **예외 불가**

| Step | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 |
|---|---|---|---|---|---|---|---|
| px | 0 | 1 | 2 | 3 | 4 | 6 | 8 |

### 1.4.4 Effect

**Opacity** — ordinal, **11단계**(0000~1000), **예외 불가**

| Step | 0000 | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 | 0800 | 0900 | 1000 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| % | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |

- 매핑 함수: `value = (step / 100)²` — 지각 특성을 반영한 제곱 스케일이다. (FND-09에 따라 스키마에 함수로 선언)

### 1.4.5 Motion

**Duration** — ordinal, **7단계**(0100~0700), **예외 불가**

| Step | 0100 | 0200 | 0300 | 0400 | 0500 | 0600 | 0700 |
|---|---|---|---|---|---|---|---|
| ms | 0 | 100 | 150 | 250 | 350 | 500 | 700 |

**Easing** — ordinal, **5단계**(0100/0300/0500/0700/0900, 홀수 백 단위만 사용)

| Step | 0100 | 0300 | 0500 | 0700 | 0900 |
|---|---|---|---|---|---|
| 커브 | (정의 예정) | (정의 예정) | (정의 예정) | (정의 예정) | (정의 예정) |

- 확장 규칙: 십의 자리를 5로 치환해 **Emphasized(오버슈트) 변형**을 표기한다. 예: `0350` = 0300의 Emphasized 변형
- Emphasized 확장 스텝도 FND-07의 등록제를 따른다. (현재 등록된 확장: 없음)

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

## 1.6 Machine-Readable 스키마

아래 JSON은 본 장의 단일 진실 원천(source of truth)이다. 문서 본문과 스키마가 불일치할 경우 스키마를 기준으로 본문을 수정한다.

```json
{
  "$schema": "token-foundation.schema/v1",
  "collection": "Foundation",
  "grammar": {
    "segments": ["Category", "Set", "Option"],
    "arity": 3,
    "canonicalCase": "space-separated words (Figma)",
    "codeTransform": {
      "segmentBoundary": "object nesting",
      "withinSegment": "camelCase",
      "numericOption": "bracket notation"
    }
  },
  "categories": ["Color", "Typography", "Layout", "Shape", "Effect", "Motion"],
  "scaleNotation": {
    "standardSteps": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
    "digits": 4,
    "direction": "higher step = larger value",
    "exceptionRule": "replace tens digit with 5 (e.g., 0050, 0650, 1350); registered exceptions only"
  },
  "sets": {
    "Color": { "status": "TBD" },
    "Typography/Font Size": {
      "kind": "ordinal", "unit": "px",
      "steps": { "100": 10, "200": 12, "300": 14, "400": 16, "500": 18, "600": 20, "700": 24, "800": 28, "900": 32, "1000": 40, "1100": 48, "1200": 72, "1300": 96 },
      "exceptions": { "allowed": true, "registered": { "50": 9, "150": 11, "650": 22, "950": 36, "1150": 60 } }
    },
    "Typography/Line Height": {
      "kind": "composite",
      "pattern": "^(?<fontSizeStep>\\d{4})-(?<lineHeight>100|120|140|150)$",
      "constraints": ["fontSizeStep must exist in Typography/Font Size (incl. registered exceptions)"],
      "valueRule": "fontSize(fontSizeStep) * lineHeight / 100"
    },
    "Typography/Font Weight": {
      "kind": "value-anchored", "unit": "css-font-weight",
      "options": [300, 400, 500, 600, 700, 800],
      "exceptions": { "allowed": false }
    },
    "Typography/Font Family": {
      "kind": "nominal",
      "options": { "Sans": "Suit Variable", "Serif": "Noto Serif KR" },
      "exceptions": { "allowed": false }
    },
    "Layout/Space": {
      "kind": "ordinal", "unit": "px",
      "steps": { "100": 2, "200": 4, "300": 6, "400": 8, "500": 12, "600": 16, "700": 20, "800": 24, "900": 32, "1000": 40, "1100": 48, "1200": 72, "1300": 96 },
      "exceptions": { "allowed": true, "registered": { "50": 1, "1350": 120 } }
    },
    "Layout/Size": {
      "kind": "ordinal", "unit": "px",
      "steps": { "100": 4, "200": 8, "300": 12, "400": 16, "500": 20, "600": 24, "700": 32, "800": 40, "900": 48, "1000": 64, "1100": 80, "1200": 96, "1300": 128 },
      "exceptions": { "allowed": true, "registered": {} }
    },
    "Shape/Radius": {
      "kind": "ordinal", "unit": "px",
      "steps": { "100": 0, "200": 2, "300": 4, "400": 6, "500": 8, "600": 10, "700": 12, "800": 16, "900": 20, "1000": 24, "1100": 32, "1200": 40, "1300": 9999 },
      "exceptions": { "allowed": false }
    },
    "Shape/Stroke": {
      "kind": "ordinal", "unit": "px",
      "steps": { "100": 0, "200": 1, "300": 2, "400": 3, "500": 4, "600": 6, "700": 8 },
      "exceptions": { "allowed": false }
    },
    "Effect/Opacity": {
      "kind": "ordinal", "unit": "%",
      "steps": { "0": 0, "100": 1, "200": 4, "300": 9, "400": 16, "500": 25, "600": 36, "700": 49, "800": 64, "900": 81, "1000": 100 },
      "valueFunction": "(step/100)^2",
      "exceptions": { "allowed": false }
    },
    "Motion/Duration": {
      "kind": "ordinal", "unit": "ms",
      "steps": { "100": 0, "200": 100, "300": 150, "400": 250, "500": 350, "600": 500, "700": 700 },
      "exceptions": { "allowed": false }
    },
    "Motion/Easing": {
      "kind": "ordinal", "unit": "cubic-bezier",
      "steps": { "100": "TBD", "300": "TBD", "500": "TBD", "700": "TBD", "900": "TBD" },
      "extensionRule": "tens digit 5 = Emphasized (overshoot) variant; registered only",
      "exceptions": { "allowed": true, "registered": {} }
    }
  }
}
```

## 1.7 검증 규칙 (Lint)

| 규칙 ID | 검증 내용 |
|---|---|
| FND-L01 | 모든 Foundation 토큰 이름은 정규식 `^(Color|Typography|Layout|Shape|Effect|Motion)\/[A-Z][A-Za-z]*( [A-Z][A-Za-z]*)*\/(\d{4}(-\d{3})?|\d{3}|[A-Z][A-Za-z]*)$` 을 통과해야 한다 |
| FND-L02 | Category·Set·Option은 각각 1.6 스키마에 선언된 집합의 구성원이어야 한다 (미선언 이름 사용 = 위반) |
| FND-L03 | 4자리 Option의 십의 자리는 0 또는 5만 허용한다. 5인 경우 해당 Set의 `exceptions.registered`에 존재해야 한다 |
| FND-L04 | `exceptions.allowed = false`인 Set에 표준 스텝 외 Option이 존재하면 위반이다 |
| FND-L05 | Line Height Option의 첫 요소는 Font Size의 유효 스텝(예외 포함)이어야 하고, 둘째 요소는 {100, 120, 140, 150}이어야 한다 |
| FND-L06 | ordinal Set의 값은 스텝 오름차순으로 단조 증가해야 한다 (스키마 무결성 검사) |
| FND-L07 | Foundation 토큰은 alias(참조)를 가질 수 없다 — 원시값만 허용 (FND-10) |
| FND-L08 | 코드 변환 결과는 케이스 폴딩 후에도 전역 유일해야 한다 (예: `Gmarket Sans` vs `GMarket sans` 동시 등록 금지) |

## 1.8 검토 노트 (Open Issues)

작성 과정에서 발견된 미결 사항이다. 확정 시 본문·스키마에 반영하고 이 목록에서 제거한다.

1. **0값 스텝의 표기 불일치** — Radius·Stroke·Duration은 값 0을 스텝 `0100`에 두는 반면, Opacity만 `0000`을 사용한다. AI가 "0100 = 최솟값"이라는 일반화를 학습하기 어려워지므로, ①모든 Set에서 값 0은 `0000`으로 통일하거나 ②Opacity도 `0100`부터 시작하도록 통일하는 것을 권장한다.
2. **Color Set 미정의** — 팔레트(Hue 목록), 스텝 수, 스텝 번호의 의미(명도 앵커인지 대비 앵커인지, 방향)가 미정이다. 특히 스텝 의미 선언(FND-09)은 Semantic 매핑의 전제이므로 우선 확정이 필요하다.
3. **Easing 커브 값 미정의** — 0100~0900 각 스텝의 cubic-bezier 값과 Emphasized 확장(X50)의 등록 목록이 필요하다.
4. **Line Height의 예외 Font Size 조합 정책** — 예외 스텝(예: 0650)과 조합한 `0650-140` 등을 허용할지 명시가 필요하다. 현재 스키마는 "Font Size에 존재하는 스텝(예외 포함)"으로 허용하고 있다.
5. **Size와 Space의 용도 경계** — 두 Set 모두 px 치수로, 어떤 값이 Space이고 어떤 값이 Size인지 판별 기준(간격 vs 요소 크기)을 한 문장으로 명시하면 오분류를 막을 수 있다.

---

# 2. Semantic Token (작성 예정)

> Theme / Responsive 두 컬렉션으로 분리 운용한다. 문법과 규칙은 확정 후 본 장에 작성한다.

# 3. Component Token (작성 예정)

> 판별 축만 표기하는 가변 축 문법을 사용한다. 문법과 규칙은 확정 후 본 장에 작성한다.
