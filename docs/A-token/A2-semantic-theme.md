# A2. Semantic — Theme 컬렉션

> 담당: **의도**. "이 값을 언제 쓰는가"를 이름으로 표현한다.
> 책임 아님: **State** (→ A4 Component 티어), **사이즈·간격** (→ A3 Responsive)

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 🟡 | 🟡 | 🟡 | ⬜ | 🟡 | ⬜ |

---

## 1. 원칙 설계 — 🟡

- [x] 존재 이유: Foundation의 값에 **의도**를 부여해 컴포넌트가 참조할 대상을 만든다
- [x] 계층 확정: **3단** (`Target/Role/Variant`)
- [x] 참조 방향: Foundation만 참조. 다른 Semantic을 참조하지 않는다
- [x] **책임 경계**: State를 담지 않는다 (의도적 배제)
- [ ] **Theme / Responsive 분리 기준 명문화** — 어떤 속성이 Theme이고 어떤 것이 Responsive인가
- [ ] **Duration · Easing · Shadow의 Semantic 정의 부재** ⚠️
      → Component가 참조할 상위가 없어 **참조 데드락**. A2 전체에서 가장 큰 구멍
- [x] Mode(Light/Dark 등) 축과 이 컬렉션의 관계 — Light/Dark 2모드. 반전 표면은 모드 스코핑이 아니라 `Inverse` Role로 표현한다(`SEM-T07`)

## 2. 네이밍 규칙 — 🟡

- [x] 문법: `Target/Role/Variant` (예: `Surface/Accent/Primary`)
- [x] 각 슬롯 의미: Target=적용 대상 / Role=역할 / Variant=변형
- [ ] ⚠️ **계층 간 어휘 불일치** — Primary vs Brand 혼용, `Text Muted` 미정의
      → 이것이 해소되기 전에는 이 축을 ✅로 볼 수 없음
- [ ] ⚠️ **Variant enum이 열려 있음** — "등"으로 끝나는 집합
- [ ] Target 슬롯 값의 닫힌 목록 (Surface / Text / Border / Icon / …?)
- [ ] Role 슬롯 값의 닫힌 목록
- [ ] `_` 접두사의 지위 — 예외인가 위반인가

## 3. 사용 규칙 — 🟡

- [x] 금지: Semantic 이름에 State 단어를 넣지 않는다
- [x] **Background 스텝 매핑 기준** — Role별 등록표(`SEM-T03`)가 모드별로 명시. 솔리드 Fill의 Default는 On 전경 4.5:1 통과 스텝 중 코어 색에 가장 가까운 스텝(`SEM-T09`)
- [x] Surface vs Background 선택 기준 — `Background`(캔버스, 2단계)와 `Fill`(요소의 면, 틴트/솔리드)로 분리(`SEM-T05`·`SEM-T10`)
- [x] Text 계열 토큰의 대비(contrast) 보장 규칙 — 표면·전경 짝 규칙(`SEM-T05`) + 짝별 대비 기록(`SEM-T04`) + 린트 `SEM-L07`·`SEM-L12`
- [ ] 유사 Role 간 선택 기준 (Accent vs Brand vs Primary가 공존한다면)
- [ ] Do / Don't 예시

## 4. 확장 규칙 — ⬜

- [ ] 새 Role 추가 기준 — 어떤 조건이면 새 의도를 인정하는가
- [ ] 새 Variant 추가 기준
- [ ] "기존 Role로 표현 가능한가"를 먼저 묻는 절차
- [ ] 승인자 지정
- [ ] 폐기 절차

## 5. 판별 테스트 — 🟡

- [x] 원칙 문서에 판별 테스트 존재 (중복본)
- [ ] 단일본 확정 + 규칙 ID 부여
- [ ] 아래 질문 세트 확정

```
Q1. 세그먼트가 정확히 3단인가?
Q2. 이름에 State를 뜻하는 단어(Hover, Pressed, Disabled …)가 있는가? → 있으면 위반
Q3. Target / Role / Variant 각 슬롯의 값이 정의된 enum 안에 있는가?
Q4. 참조 대상이 Foundation 토큰인가? (다른 Semantic을 참조하면 위반)
Q5. 같은 개념을 가리키는 다른 이름의 토큰이 이미 존재하는가? → 있으면 어휘 중복 위반
```

## 6. 코드 동기화 — ⬜

- [ ] Mode별 값이 코드에서 어떻게 표현되는지 정의
- [ ] JSON 스키마
- [ ] codeSyntax 변환 규칙
- [ ] 동기화 방향 결정
