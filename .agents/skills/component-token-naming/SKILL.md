---
name: component-token-naming
description: TGDS 컴포넌트 토큰의 이름을 짓거나 검증할 때 사용. 컴포넌트 토큰 생성, 명명, 네이밍 검사, Element/Variant/Size/State 축 표기, components/*.md 파일 작성 요청 시 참조한다. 정본은 docs/A-token/component-token.md (CMP-*).
---

# 컴포넌트 토큰 명명

> **정본은 `docs/A-token/component-token.md`다.** 이 스킬은 요약본이며, 어긋나면 규범 문서가 맞다.
> 규칙을 고치려면 이 파일이 아니라 규범 문서를 열 것 (TKN-02).

## 문법

```
{Component} [/Element] [/Variant] [/Size] [/State] / {Property}
```

- **Component**(첫 세그먼트) · **Property**(끝 세그먼트) 필수, 가운데 4개 축은 선택 (CMP-N1)
- 예: `Button/Ghost/Stroke` · `Button/Radius` · `Input/Field/Focus/Border`

## 이름 지을 때 순서대로 판정한다

1. **판별 축만 남긴다** (CMP-N2) — 그 축의 값이 바뀌어도 토큰 값이 안 변하면 축을 생략한다. 기준은 속성 종류가 아니라 **값 판별 여부**: Ghost에만 테두리가 있으면 치수인 Stroke에도 Variant를 붙이고, 상태 무관 Radius는 모든 축을 뺀다.
2. **축 순서 고정** (CMP-N3) — Element → Variant → Size → State. 생략은 허용, 순서 교환 금지. 같은 토큰의 두 스펠링은 존재할 수 없다.
3. **파싱은 enum 소속으로** (CMP-N4) — 한 컴포넌트 안에서 Element·Variant·Size·State·Property 어휘는 서로소. 부위 이름이 Property와 겹치면 부위가 양보한다 (`Icon`은 Property → 부위는 `Leading Icon`).
4. **`Default`는 State 전용 예약어** (CMP-N5) — 다른 축에 쓸 수 없다. 상태 비의존 토큰은 State 축 자체를 생략한다.
5. **Property = 참조하는 Semantic 토큰의 Target과 동일 단어** (CMP-N6) — `.../Background`는 `Background/...`만 참조한다. Property의 유효 어휘는 별도 목록이 아니라 `semantic.md` 세 컬렉션의 Target 합집합이다.
6. **Element 선언 기준** (CMP-N7) — 같은 Property가 서로 다른 부위에 다른 값으로 필요해지는 순간 선언한다. Element를 하나라도 선언하면 **컨테이너 부위도 명시적 Element로** 명명한다 (`Input/Field/...`). 암묵적 루트 금지.

## 닫힌 어휘

| 축 | 어휘 |
|---|---|
| Size | `Extra Small` `Small` `Medium` `Large` `Extra Large` |
| State | `Default` `Hover` `Pressed` `Focus` `Selected` `Disabled` |
| Element · Variant | 컴포넌트별 닫힌 집합 — `components/{Component}.md`의 축 선언 ①에 등록된 것만 |
| Property | `semantic.md` Target 합집합 |

본문과 스키마가 어긋나면 규범 문서 §3.1의 JSON 스키마가 정본이다 (TKN-03).

## 입장 규칙 — 이름 짓기 전에 먼저 확인

- 컴포넌트 토큰은 **Semantic만 참조** (CMP-A1). Foundation 직접 참조·원시값 금지
- **시멘틱 기본값과 같은 값은 만들지 않는다** (CMP-A2). 토큰의 부재 = 기본값 사용
- 자기 컴포넌트 밖 사용 금지 (CMP-A3)
- 같은 결정이 **3개 이상 컴포넌트**에서 반복되면 Semantic으로 승격하고 폐기 (CMP-A4)
- 컴포넌트 파일은 **등록제** — 규범 문서 §3.3 인덱스에 없으면 존재하지 않는 것 (CMP-A5). 새 컴포넌트를 만들면 인덱스에 먼저 등록한다
- 상태 분기는 이 계층에서만 (CMP-A6). 모션은 범위 밖 — 정의하지 않는다 (CMP-A7)

## 산출물 형식

개별 토큰은 `components/{Component}.md`에 컴포넌트당 한 파일. 구성은 규범 문서 §3.4:
① 축 선언 JSON → ② 상태 분기 표 (State 축 토큰, 빈 셀 금지) → ③ 상태 비의존 표.

작성 후 CMP-L06~L11(문법·서로소·Default 예약·Element 강제·Target 일치·축 선언 일치)을 자가 점검한다. 린트는 아직 스크립트화되지 않았으므로 손으로 검사한다.
