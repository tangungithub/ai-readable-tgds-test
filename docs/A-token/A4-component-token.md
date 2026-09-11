# A4. Component Token

> 담당: **특정 컴포넌트의 특정 상태에서의 값**. State가 표현되는 유일한 티어.
> 책임 아님: 컴포넌트가 존재하지 않는 값 (인덱스에 없는 컴포넌트의 토큰은 `CMP-A5`·`DENY-01`), 모션 (`CMP-A7`)
> 정본: [component-token.md](component-token.md). 이 트래커는 현황만 기록한다.

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ✅ | ✅ | 🟡 | 🟡 | ✅ | 🟡 |

> 2026-09-10 재판정 — v0.5 규범 문서 기준. 칸별 근거는 [README](README.md)의 재판정 표.

---

## 1. 원칙 설계 — ✅

- [x] 존재 이유: Semantic만으로 표현되지 않는 **컴포넌트별·상태별 값**을 담는다
- [x] 계층: 가변 축 문법 `{Component} [/Element] [/Variant] [/Size] [/State] / {Property}` (`CMP-N1`). 고정 4단이 아니라 **판별 축만 표기**한다 (`CMP-N2`)
- [x] 참조 방향: Semantic만 참조. Foundation 직접 참조·원시값 금지 (`CMP-A1`)
- [x] **State는 이 티어에서만** 분기한다 (`CMP-A6`)
- [x] **Component Token을 만들어야 하는 조건** — 토큰의 부재 = 시멘틱 기본값. 기본값과 같은 값은 만들지 않는다 (`CMP-A2`). 3개 이상 컴포넌트에서 반복되면 Semantic으로 승격 (`CMP-A4`)
- [x] 최상위 티어 — 자기 컴포넌트 밖에서 사용 금지 (`CMP-A3`), 3단 위계의 끝 (`TKN-01`)
- [x] 책임 경계 — 모션은 정의하지 않는다 (`CMP-A7`)

## 2. 네이밍 규칙 — ✅

- [x] 문법: `CMP-N1`~`N8` + 문법 스키마(JSON)
- [x] **판별 축만 표기** — 어떤 축의 값이 바뀌어도 토큰 값이 안 변하면 그 축을 생략 (`CMP-N2`)
- [x] **상태 비의존 속성** — State 축 자체를 생략한다. `Default`는 State 전용 예약어 (`CMP-N5`)
- [x] 축 순서 고정 Element → Variant → Size → State (`CMP-N3`), 파싱은 enum 소속 (`CMP-N4`)
- [x] Component 슬롯의 기준 집합 — `component-token.md` §3.3 인덱스 (`CMP-A5`). Figma 컴포넌트 이름과의 일치 규칙은 [D2](../D-naming/README.md)
- [x] State 닫힌 목록 — `Default` `Hover` `Pressed` `Focus` `Selected` `Disabled`
- [x] Size 닫힌 목록 — Scale Variant와 같은 어휘 (의도된 공유, 검토 노트 3)
- [x] Property — 별도 목록 없이 Semantic 세 컬렉션의 Target 합집합 (`CMP-N6`)
- [x] Variant·Element — 컴포넌트별 닫힌 집합을 컴포넌트 파일의 축 선언(§3.4 ①)에 둔다. Element 판별 기준 `CMP-N7`

## 3. 사용 규칙 — 🟡

- [x] 만들지 말아야 할 경우 — 시멘틱 기본값과 같은 값 (`CMP-A2`), 인덱스에 없는 컴포넌트 (`CMP-A5`), 모션 (`CMP-A7`)
- [x] Semantic으로 충분한데 만든 경우 — 위반 (`CMP-L03`), 3개 이상 반복이면 승격 후 폐기 (`CMP-A4`)
- [x] 전경 선택 — 짝이 되는 Fill의 Emphasis가 `On`/기본 Role을 기계적으로 정한다 (`SEM-T05`)
- [x] 형식 예시 — §3.4 상태 분기 표·상태 비의존 표
- [ ] 컴포넌트가 삭제되면 토큰은 어떻게 되는가 — 인덱스 제거 = 파일 제거로 읽히나 명시 없음
- [ ] Do / Don't 예시 (위반 사례 중심)

## 4. 확장 규칙 — 🟡

- [x] 신규 컴포넌트의 토큰 생성 절차 — 인덱스 등록제 (`CMP-A5`) + 컴포넌트 파일 3부 형식 (§3.4)
- [x] AI가 따라 할 수 있는 형태인가 — §3.4 형식 + `.agents/skills/component-token-naming`
- [x] 폐기 — `TKN-08`, 승격 시 폐기 (`CMP-A4`)
- [ ] 신규 State 추가 시 전 컴포넌트 파급 확인 절차 — State enum 개정 시 절차 없음 (복합 상태 미정, 검토 노트 1)
- [ ] 승인자 지정 (→ [F3](../F-governance/README.md))

## 5. 판별 테스트 — ✅

| 질문 | 규칙 |
|---|---|
| 문법을 통과하는가? (첫 세그먼트 = 등록 Component, 끝 = 유효 Property, 축 순서·enum 소속) | `CMP-L06` |
| 첫 세그먼트가 인덱스에 있는가? → 아니면 `DENY-01` | `CMP-L06`·`CMP-A5` |
| State 값이 enum 안에 있는가? `Default`가 다른 축에 있는가? | `CMP-L06`·`CMP-L08` |
| 참조 대상이 Semantic인가? Foundation·RAW면 → `DENY-02` | `CMP-L01`·`CMP-L02` |
| 판별 축이 아닌 축이 이름에 있는가? | `CMP-L11` |
| Property와 참조 Target이 같은가? | `CMP-L10` |
| 어휘 교집합 · Element 누락 | `CMP-L07`·`CMP-L09` |
| 같은 값·같은 의도의 토큰이 이미 있는가? | `CMP-L03`·`CMP-L05` |

- [x] 규칙 ID 부여 · 단일본 (`component-token.md` §3.5)
- [x] `DENY-01`·`DENY-02`의 토큰 측 판정 기준이 생겼다 (→ [F2](../F-governance/README.md))

## 6. 코드 동기화 — 🟡

- [x] 문법 스키마 — machine-readable JSON (§3.1)
- [x] 동기화 방향 — 등록부 → Figma 단방향 (→ [E2](../E-design-code/E2-token-sync.md))
- [ ] **`token/Component-token.json` 미작성**, 등록된 컴포넌트 0개 (커버리지 테스트 미실시)
- [ ] 컴포넌트 코드의 prop ↔ Variant/State 슬롯 대응 (→ [E1](../E-design-code/README.md))
