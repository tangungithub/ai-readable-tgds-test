# A4. Component Token

> 담당: **특정 컴포넌트의 특정 상태에서의 값**. State가 표현되는 유일한 티어.
> 책임 아님: 컴포넌트가 존재하지 않는 값 (컴포넌트 없는 Component Token은 `DENY-01`)

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |

---

## 1. 원칙 설계 — 🟡

- [x] 존재 이유: Semantic만으로 표현되지 않는 **컴포넌트별·상태별 값**을 담는다
- [x] 계층: **4단** (`Component/Variant/State/Property`)
- [x] 참조 방향: Semantic만 참조 (Foundation 직접 참조 금지)
- [x] **State는 이 티어에서만** 표현된다
- [ ] **Component Token을 만들어야 하는 조건** — 언제 Semantic으로 충분하고 언제 Component Token이 필요한가 ⚠️
      → 이 기준이 없으면 토큰이 컴포넌트 수만큼 무한 증식함
- [ ] 이 티어를 참조하는 상위가 있는가 (없다 = 최상위임을 명문화)
- [ ] 책임 경계

## 2. 네이밍 규칙 — 🟡

- [x] 문법: `Component/Variant/State/Property` (예: `Button/Primary/Default/Surface`)
- [x] **판별 축만 표기** 방향 확정 — Size 토큰이면 color 축 제외 등
- [ ] ⚠️ **상태 비의존 속성(Radius 등) 예외 규칙** — State 슬롯이 무의미한 속성을 어떻게 쓰는가
      - 슬롯을 비우는가 / `Default`로 채우는가 / 3단으로 줄이는가 → **미결**
- [ ] "판별 축"의 정의 — 어떤 축이 판별 축인지 판정하는 규칙
- [ ] Component 슬롯의 값이 **실재 컴포넌트 이름 집합**과 일치해야 함 → 그 기준 집합이 어디에 있는가 (→ [D2](../D-naming/README.md))
- [ ] State 값의 닫힌 목록 (Default / Hover / Pressed / Focused / Disabled / Selected …?)
- [ ] Property 값의 닫힌 목록 (Surface / Text / Border / Icon / Radius …?)
- [ ] Variant 값은 컴포넌트마다 다른데, 컴포넌트별 enum을 어디에 정의하는가

## 3. 사용 규칙 — ⬜

- [ ] Component Token을 **만들지 말아야 할** 경우
- [ ] Semantic으로 충분한데 Component Token을 만든 경우의 처리
- [ ] 컴포넌트가 삭제되면 토큰은 어떻게 되는가
- [ ] 동일 값의 Component Token 중복 허용 여부
- [ ] Do / Don't 예시

## 4. 확장 규칙 — ⬜

- [ ] 신규 컴포넌트 생성 시 토큰 생성 절차 (컴포넌트 → 토큰 순서 강제)
- [ ] 신규 State 추가 시 전 컴포넌트 파급 확인 절차
- [ ] ⚠️ **AI가 이 절차를 밟을 수 있는 형태로 적혀 있는가** — 이 영역의 목표가 "AI가 신규 Component Token을 오류 없이 생성"이므로 확장 규칙이 곧 AI 지시서
- [ ] 승인자 지정
- [ ] 폐기 절차

## 5. 판별 테스트 — ⬜

```
Q1. 세그먼트가 4단인가? (예외 속성이면 정의된 예외 형태인가)
Q2. 첫 세그먼트가 실재하는 컴포넌트 이름인가?           → 아니면 DENY-01
Q3. State 값이 정의된 enum 안에 있는가?
Q4. 참조 대상이 Semantic 토큰인가? (Foundation 직접 참조면 위반)
Q5. 참조 대상이 RAW 값인가?                            → 맞으면 DENY-02
Q6. 판별 축이 아닌 축이 이름에 포함되어 있는가?         → 있으면 위반
Q7. 같은 값·같은 의도의 토큰이 이미 존재하는가?
```

- [ ] 위 질문 세트 확정 + 규칙 ID 부여
- [ ] Q2·Q5는 게이트웨이 `DENY-01`·`DENY-02`와 직결 → [F2](../F-governance/README.md)

## 6. 코드 동기화 — ⬜

- [ ] 컴포넌트 코드의 prop ↔ Variant/State 슬롯 대응 (→ [E1 Code Connect](../E-design-code/README.md))
- [ ] JSON 스키마
- [ ] 동기화 방향 결정
