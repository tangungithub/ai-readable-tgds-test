# A3. Semantic — Responsive 컬렉션

> 담당: **크기·간격의 의도**. 화면 폭이나 문맥에 따라 달라지는 값의 역할을 표현한다.
> 책임 아님: 색상·타이포 등 테마 의존 값 (→ A2 Theme)

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |

---

## 1. 원칙 설계 — 🟡

- [x] Semantic을 Theme / Responsive **두 컬렉션으로 분리 운용**한다는 결정
- [ ] **분리 기준 명문화** — 어떤 속성이 Responsive로 가는가 (Padding, Gap, Font Size, Radius…?)
- [ ] Mode 축의 정체 — Responsive 컬렉션의 Mode는 **Breakpoint**인가 **Density**인가
- [ ] Breakpoint 정의와의 관계 (→ [C2](../C-layout/README.md))
- [ ] 책임 경계 — Responsive가 다루지 않는 것

## 2. 네이밍 규칙 — 🟡

- [x] 문법: `Target/Role/Variant` (Theme과 동일 문법 유지)
- [x] 슬롯 의미 재정의
  | 슬롯 | 의미 | 예시 |
  |---|---|---|
  | Target | 적용 **속성** | Padding, Gap |
  | Role | 적용 **문맥 스케일** | Container (컴포넌트 등 작은 단위) |
  | Variant | **사이즈 수준** | Medium |
  → `Padding/Container/Medium`
- [ ] Target 값의 닫힌 목록
- [ ] Role 값의 닫힌 목록 — Container 외에 무엇이 있는가 (Section? Page? Inline?)
- [ ] Variant 값의 닫힌 목록 — Small/Medium/Large만인가, 수치 스텝인가
- [ ] ⚠️ Theme과 **같은 문법인데 슬롯 의미가 다른 문제** — 이름만 보고 어느 컬렉션인지 구분되는가?

## 3. 사용 규칙 — ⬜

- [ ] ⚠️ **값 매핑 규칙 전체가 공백** — 문법은 있으나 어떤 Foundation Step에 붙는지 규칙 없음
- [ ] Role 선택 기준 — 어디까지가 Container이고 어디부터가 상위 스케일인가
- [ ] Auto Layout의 gap·padding을 이 토큰으로 바인딩하는 것을 **강제할 것인가**
- [ ] 하드코딩 수치 허용 예외
- [ ] Do / Don't 예시

## 4. 확장 규칙 — ⬜

- [ ] 새 Target 추가 기준
- [ ] 새 Variant(사이즈 수준) 추가 기준
- [ ] Breakpoint 추가 시 이 컬렉션에 미치는 영향 확인 절차
- [ ] 승인자 지정

## 5. 판별 테스트 — ⬜

```
Q1. 세그먼트가 정확히 3단인가?
Q2. Target 값이 속성 이름인가? (역할 단어가 오면 위반 — Theme 문법과 혼동)
Q3. Role 값이 정의된 문맥 스케일 enum 안에 있는가?
Q4. 참조 대상이 Foundation의 Dimension 스케일인가?
Q5. 이 토큰과 같은 역할의 Theme 토큰이 중복 존재하는가?
```

- [ ] 위 질문 세트 확정 + 규칙 ID 부여

## 6. 코드 동기화 — ⬜

- [ ] Breakpoint별 값이 코드에서 어떻게 표현되는지 (CSS 변수 + 미디어쿼리? 컨테이너 쿼리?)
- [ ] JSON 스키마
- [ ] 동기화 방향 결정
