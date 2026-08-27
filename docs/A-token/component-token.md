---
name: ComponentToken
description: Component Token의 네이밍 문법과 입장 규칙, 컴포넌트 파일 인덱스. 개별 토큰은 여기 두지 않는다.
owns: CMP-*
budget: 200 lines
---

> 본 파일은 **규칙과 인덱스만** 담는다. 개별 컴포넌트 토큰은 `components/{Component}.md`에 컴포넌트당 한 파일로 둔다.
> 이 분리를 어기고 여기에 토큰을 나열하면 이 파일은 수천 줄이 되고, 문서 분리의 목적이 소멸한다.
> 공통 헌법(TKN-*)은 `token.md`, 참조 대상인 의도 토큰은 `semantic.md`에 있다.

# 3. Component Token

## 3.1 네이밍 문법

```
{Component} [/Element] [/Variant] [/Size] [/State] / {Property}

Component : 3.3 인덱스에 등록된 컴포넌트명 (필수)
Element   : 컴포넌트 내 부위 — 컴포넌트별 닫힌 집합 (조건부, CMP-N7)
Variant   : 종류 변형 — 컴포넌트별 닫힌 집합, 실명만 사용 (선택)
Size      : 크기 변형 ∈ { Extra Small, Small, Medium, Large, Extra Large } — 서수 (선택)
State     : 인터랙션 상태 ∈ { Default, Hover, Pressed, Focus, Selected, Disabled } (선택)
Property  : 값이 꽂히는 속성 = 참조하는 Semantic 토큰의 Target과 동일한 단어 (필수)
```

| 규칙 ID | 규칙 |
|---|---|
| CMP-N1 | 문법은 `{Component} [/Element] [/Variant] [/Size] [/State] / {Property}`다. Component(첫 세그먼트)와 Property(끝 세그먼트)는 필수, 대괄호 축 4개는 선택이다. |
| CMP-N2 | **판별 축만 표기한다.** 어떤 축의 값이 바뀌어도 토큰 값이 변하지 않으면 그 축은 이름에서 생략한다. 기준은 속성의 종류(색/치수)가 아니라 **값 판별 여부**다 — Ghost에만 테두리가 있으면 치수 속성에도 Variant가 붙고(`Button/Ghost/Stroke`), 상태와 무관한 Radius는 모든 축이 빠진다(`Button/Radius`). |
| CMP-N3 | 축 순서는 **Element → Variant → Size → State**로 고정한다. 생략은 허용하되 순서 교환은 금지한다. 같은 토큰에 두 가지 스펠링이 존재할 수 없다. |
| CMP-N4 | 축 생략으로 세그먼트 위치가 유동적이므로, 파싱은 위치가 아니라 **enum 소속**으로 한다. 전제로서 한 컴포넌트 안에서 Element·Variant·Size·State의 어휘와 Property 어휘는 **서로소**여야 한다. 부위 이름이 Property와 겹치면 부위 쪽이 양보한다(예: `Icon`은 Property이므로 부위는 `Leading Icon`으로 명명). |
| CMP-N5 | `Default`는 **State 축 전용 예약어**다. Variant·Element·Size에 Default라는 이름을 쓸 수 없다. 상태 비의존 토큰은 State 자체를 생략하므로(CMP-N2) "Default를 채워 넣는" 일이 없다. |
| CMP-N6 | Property는 **참조하는 Semantic 토큰의 Target과 동일한 단어**여야 한다. `.../Background` 토큰은 `Background/...`만, `.../Padding` 토큰은 `Padding/...`만 참조할 수 있다. 참조 체인의 유효성이 이름만으로 검증되도록 하는 규칙이며, Property의 유효 어휘는 별도 목록이 아니라 `semantic.md` 세 컬렉션의 Target 합집합이다. |
| CMP-N7 | **Element 판별 기준**: 같은 Property가 컴포넌트의 서로 다른 부위에 **서로 다른 값**으로 필요해지는 순간 Element 축을 선언한다(예: Input의 Label 텍스트색 ≠ Placeholder 텍스트색 → Element 필요. Button의 텍스트는 한 부위뿐 → 불필요). Element를 하나라도 선언한 컴포넌트는 **컨테이너 부위도 명시적 Element로 명명**한다(`Input/Field/...`). 암묵적 루트를 금지해 `Input/Border`가 필드 테두리인지 전체 외곽인지 모호해지는 것을 막는다. |
| CMP-N8 | 축 표기의 최소주의(CMP-N2)는 CMP-A2(기본값 재선언 금지)와 같은 철학이다. Semantic의 SEM-10(중복 유지)과 방향이 반대인 것은 **의도된 비대칭**이다 — Semantic은 공급 사전이므로 자리를 보존하고, Component는 수요 선언이므로 필요한 것만 적는다. |

### 문법 스키마 (TKN-03: 본문과 어긋나면 스키마가 정본)

```json
{
  "$schema": "token-component.schema/v1",
  "grammar": {
    "segments": ["Component", "Element?", "Variant?", "Size?", "State?", "Property"],
    "axisOrder": ["Element", "Variant", "Size", "State"],
    "axisRule": "discriminating axes only",
    "parsing": "enum-membership",
    "reserved": { "Default": "State" }
  },
  "enums": {
    "State": ["Default", "Hover", "Pressed", "Focus", "Selected", "Disabled"],
    "Size": ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
    "Property": "union of Semantic Targets (semantic.md §2.2–2.4)"
  },
  "perComponentDeclaration": {
    "elements": "closed list, [] if atomic; if non-empty must include the container element",
    "variants": "closed list, real names only",
    "sizes": "subset of Size enum",
    "properties": { "{Property}": { "axes": "subset of [Element, Variant, Size, State]" } }
  }
}
```

## 3.2 입장 규칙 (Admission Rules)

컴포넌트 토큰이 **생길 수 있는 조건**의 닫힌 정의다. 아래에 해당하지 않으면 토큰을 만들지 않는다.

| 규칙 ID | 규칙 |
|---|---|
| CMP-A1 | 컴포넌트 토큰은 **Semantic 토큰만 참조**한다. Foundation 직접 참조·원시값 기입을 금지한다. |
| CMP-A2 | **토큰의 부재는 시멘틱 기본값 사용을 의미한다.** 시멘틱 기본값과 동일한 값을 재선언하는 컴포넌트 토큰은 만들지 않는다. |
| CMP-A3 | 컴포넌트 토큰은 **자기 컴포넌트 밖에서 사용을 금지**한다. |
| CMP-A4 | 같은 결정이 **3개 이상 컴포넌트에서 반복되면 Semantic으로 승격**하고 컴포넌트 토큰을 폐기한다. |
| CMP-A5 | 신규 컴포넌트 파일 생성은 **등록제**다. 3.3 인덱스 표에 없는 컴포넌트 파일은 존재하지 않는 것으로 취급한다. |
| CMP-A6 | **상태(hover·pressed·focus·selected·disabled)는 이 계층에서만 분기한다.** 상태별로 어느 Semantic 단계를 참조하는지는 각 컴포넌트 파일의 상태 분기 표(3.4)로 표현한다. |
| CMP-A7 | **모션은 정의하지 않는다.** Motion은 현 시스템 범위 밖이므로(TKN-07) 트랜지션·애니메이션 값을 컴포넌트 토큰으로 만들지 않으며, 이는 CMP-A1의 예외가 아니라 범위 밖 선언이다. |

## 3.3 컴포넌트 인덱스

| 컴포넌트 | 파일 경로 | 설명 | 상태 |
|---|---|---|---|
| — | — | 아직 등록된 컴포넌트가 없다 | — |

## 3.4 컴포넌트 파일 형식

`components/{Component}.md`는 아래 세 부분으로 구성한다. 형식을 통일해야 파일 간 기계 대조(CMP-L05 승격 후보 탐지)가 가능하다.

**① 축 선언** — 3.1 스키마의 `perComponentDeclaration`을 그 컴포넌트의 값으로 채운 JSON 한 블록.

**② 상태 분기 표** — State 축을 가진 토큰의 등록부. 행 = State를 제외한 축 조합 + Property, 열 = 그 컴포넌트가 쓰는 State(Default 열 필수), 셀 = 참조하는 Semantic 토큰. 빈 셀은 금지한다(그 상태에서 Default와 같다면 State 축이 판별 축이 아닌지 재검토 — CMP-L11).

| 계열 (State 제외) | Default | Hover | Pressed | Disabled |
|---|---|---|---|---|
| `Button/Primary/{State}/Background` | `Background/Accent/Default` | `Background/Accent/Strong` | `Background/Accent/Strongest` | `Background/Neutral/Subtle` |

**③ 상태 비의존 표** — State 축이 없는 토큰의 등록부. 행 = 토큰 이름, 열 = 참조 Semantic 토큰.

| 토큰 | 참조 |
|---|---|
| `Button/Radius` | `Radius/Container/Medium` |
| `Button/Medium/Padding` | `Padding/Container/Medium` |

> 위 표의 토큰·참조는 형식 예시이며 등록된 토큰이 아니다.

## 3.5 검증 규칙 (Lint)

| 규칙 ID | 검증 내용 |
|---|---|
| CMP-L01 | 컴포넌트 토큰의 참조 대상은 Semantic에 존재하는 유효한 토큰이어야 한다 (병합 JSON 교차 참조 검사) |
| CMP-L02 | Foundation을 직접 참조하거나 원시값을 기입한 컴포넌트 토큰이 존재하면 위반이다 (CMP-A1) |
| CMP-L03 | 참조하는 Semantic 토큰과 값이 동일한 컴포넌트 토큰이 존재하면 위반이다 (CMP-A2) |
| CMP-L04 | 인덱스에 등록되지 않은 `components/*.md` 파일이 존재하면 위반이다 (CMP-A5) |
| CMP-L05 | 동일한 Semantic 참조가 3개 이상 컴포넌트 파일에서 반복되면 경고한다 (CMP-A4 승격 후보) |
| CMP-L06 | 토큰 이름은 3.1 문법을 통과해야 한다: 첫 세그먼트 = 등록된 Component, 끝 세그먼트 = 유효 Property, 중간 세그먼트는 축 순서(CMP-N3)와 enum 소속(CMP-N4)을 만족 |
| CMP-L07 | 한 컴포넌트의 Element·Variant·Size·State·Property 어휘에 교집합이 있으면 위반이다 (CMP-N4) |
| CMP-L08 | `Default`가 State 외의 축 enum에 선언되어 있으면 위반이다 (CMP-N5) |
| CMP-L09 | Element를 선언한 컴포넌트에 Element 세그먼트가 없는 토큰이 존재하면 위반이다 (CMP-N7) |
| CMP-L10 | Property 세그먼트와 참조 Semantic 토큰의 Target이 다르면 위반이다 (CMP-N6) |
| CMP-L11 | 토큰 이름의 축 집합은 축 선언(3.4 ①)의 해당 Property `axes`와 정확히 일치해야 한다. 또한 상태 분기 표에서 한 계열의 모든 State 셀이 같은 참조라면 State는 판별 축이 아니므로 경고한다 (CMP-N2) |

## 3.6 검토 노트 (Open Issues)

1. **복합 상태 미정** — `Hover+Selected`, `Focus+Disabled` 같은 상태 조합이 필요해질 때의 표기(State enum 확장 vs 조합 금지 선언)가 정해지지 않았다. 커버리지 테스트(Table 행 선택, Tab 등)에서 확정한다.
2. **On-color 의존** — 상태 분기 표의 전경색 참조(예: Primary 버튼 위 텍스트)는 Semantic 검토 노트 2(On-color/Inverse 예외)의 확정에 의존한다.
3. **Size 축과 Scale Variant의 어휘 공유** — 컴포넌트 Size enum이 Semantic Scale의 Variant와 같은 어휘({Extra Small…Extra Large})를 쓴다. 티어가 달라 파싱 충돌은 없으나, 의도된 공유임을 여기 명시해 둔다(컴포넌트 Medium이 Scale의 Medium을 참조하리라는 보장은 없다 — 참조는 표로만 결정된다).
