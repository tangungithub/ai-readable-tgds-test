# A3. Semantic — Scale · Constant 컬렉션

> 담당: **크기·간격·타이포의 의도**. 브레이크포인트에 따라 변하는 값(Scale)과 어떤 축으로도 변하지 않는 값(Constant)의 역할을 표현한다.
> 책임 아님: 색·불투명도 등 테마 의존 값 (→ A2 Theme), Breakpoint의 px 경계값 (→ [C2](../C-layout/README.md), 토큰 범위 밖 `TKN-07`)
> 정본: [semantic.md](semantic.md) §2.1 · §2.3~2.5. 이 트래커는 현황만 기록한다.

> 이 단위는 처음에 "Semantic — Responsive"로 잡았다. v0.2에서 Semantic이 Theme / Scale / Constant 세 컬렉션으로 성문화되면서 이 단위가 Theme 밖의 두 컬렉션을 담당한다. 파일명은 유지한다.

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ✅ | ✅ | 🟡 | 🟡 | ✅ | 🟡 |

> 2026-09-10 재판정 — v0.5 규범 문서 기준. 칸별 근거는 [README](README.md)의 재판정 표.

---

## 1. 원칙 설계 — ✅

- [x] Semantic을 Theme / Scale / Constant **세 컬렉션으로 분리 운용**한다는 결정
- [x] **분리 기준** — 모드 축. Scale은 Mobile/Tablet/Desktop, Constant는 모드 없음 (`SEM-01`·`SEM-C01`)
- [x] Mode 축의 정체 — Scale의 모드는 **Breakpoint**(Mobile / Tablet / Desktop). Density는 범위 밖 (`TKN-07`)
- [x] Breakpoint 정의와의 관계 — 모드 이름은 여기서 확정, px 경계값은 토큰화하지 않고 C2가 정한다 (`TKN-07`)
- [x] 책임 경계 — Role은 반응 방식만 나타내고 크기는 Variant의 소관 (`SEM-S01`). Constant는 "변하지 않음"을 선언하는 것이 목적 (`SEM-C01`)

## 2. 네이밍 규칙 — ✅

- [x] 문법: `Target/Role/Variant` (`SEM-02`)
- [x] 슬롯 의미 — Target=적용 속성 / Role=반응 방식(`Container`·`Layout`) 또는 타이포 위계(`Display`·`Heading`·`Body`·`Subtext`) / Variant=사이즈 수준
- [x] Target 닫힌 목록 — Scale 6종, Constant 4종
- [x] Role 닫힌 목록 — Target별 선언 (`SEM-06`·`SEM-L04`)
- [x] Variant 닫힌 목록 — Scale은 `Extra Small`~`Extra Large` 5단계(`SEM-S02`), Constant는 Target별 (`Full`·`Regular/Moderate/Strong`·`Main/Sub`)
- [x] Theme과 같은 문법인데 어느 컬렉션인지 구분되는가 — Target 집합이 컬렉션 간 서로소이므로 첫 세그먼트로 판별된다

## 3. 사용 규칙 — 🟡

- [x] 금지: Role에 크기 의미를 담지 않는다 (`SEM-S01`), 중간 단계 삽입 금지 (`SEM-S02`), `Full`의 서수 비교 금지·Layout 등록 금지 (`SEM-C02`·`C03`), 서체명·굵기 값 노출 금지 (`SEM-C04`·`C05`)
- [x] 동일 값 중복은 통합하지 않는다 (`SEM-10`·`SEM-C06`)
- [ ] ⚠️ **값 매핑 규칙** — 각 Role×Variant가 어떤 Foundation 스텝에 붙는지, 모드별 등록표가 없다 (Theme의 `SEM-T03`에 해당하는 것)
- [ ] Role 선택 기준 — 어디까지가 Container이고 어디부터 Layout인가
- [ ] Auto Layout의 gap·padding 바인딩 강제 여부 (→ [B4](../B-component/README.md))
- [ ] 하드코딩 수치 허용 예외
- [ ] Do / Don't 예시

## 4. 확장 규칙 — 🟡

- [x] 새 Target·Role·Variant 추가 절차 — 닫힌 집합을 `semantic.md`에서 개정 (`TKN-02`·`TKN-05`). Variant는 5단계 상한 (`SEM-S02`)
- [x] Breakpoint(모드) 추가 시 영향 — 값만 추가, 토큰 집합은 모드 간 동일해야 한다 (`SEM-08`·`SEM-L03`)
- [x] 폐기 절차 — `TKN-08`
- [ ] 승인자 지정 (→ [F3](../F-governance/README.md))

## 5. 판별 테스트 — ✅

| 질문 | 규칙 |
|---|---|
| 세그먼트가 정확히 3단인가? | `SEM-02` |
| Target이 속성 이름인가? (Theme Target이 오면 다른 컬렉션) | `SEM-L02` (Target 집합 서로소) |
| Role·Variant가 선언된 enum 안에 있는가? | `SEM-L02` |
| 참조 대상이 Foundation 토큰인가? | `SEM-L01` |
| 모든 모드에 같은 토큰 집합이 있는가? | `SEM-L03` |
| 타이포 Target들의 Role 어휘가 같은가? | `SEM-L04` |
| Line Height·Letter Spacing이 같은 조합의 Font Size와 짝이 맞는가? | `SEM-L05` |
| 등록되지 않은 조합인가? → 위반 | `SEM-L06` |

- [x] 규칙 ID 부여 · 단일본 (`semantic.md` §2.5)

## 6. 코드 동기화 — 🟡

- [x] codeSyntax 변환 규칙 — `TKN-04`
- [x] 동기화 방향 — 등록부 → Figma 단방향 (→ [E2](../E-design-code/E2-token-sync.md))
- [x] JSON 형식 — DTCG, 모드별 값 (`SEM-08`)
- [ ] **`tokens/semantic.tokens.json` 미작성**
- [ ] Breakpoint별 값의 코드 표현 — CSS 변수 + 미디어쿼리인가 컨테이너 쿼리인가 (→ C2)
