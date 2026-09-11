# A2. Semantic — Theme 컬렉션

> 담당: **의도**. "이 값을 언제 쓰는가"를 이름으로 표현한다.
> 책임 아님: **State** (→ A4 Component 티어), **크기·간격** (→ A3 Scale · Constant)
> 정본: [semantic.md](semantic.md) §2.1~2.2 · §2.5. 이 트래커는 현황만 기록한다.

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ✅ | 🟡 | 🟡 | 🟡 | ✅ | 🟡 |

> 2026-09-10 재판정 — v0.5 규범 문서 기준. 칸별 근거는 [README](README.md)의 재판정 표.

---

## 1. 원칙 설계 — ✅

- [x] 존재 이유: Foundation의 값에 **의도**를 부여해 컴포넌트가 참조할 대상을 만든다
- [x] 계층 확정: **3단** (`Target/Role/Emphasis`, `SEM-02`)
- [x] 참조 방향: Foundation만 참조. 다른 Semantic을 참조하지 않는다 (`SEM-03`, `TKN-01`)
- [x] **책임 경계**: State·시각 속성·용처를 담지 않는다 (`SEM-04`·`SEM-05`)
- [x] **Theme / Scale / Constant 분리 기준** — 값의 종류가 아니라 **모드 축**이 컬렉션의 경계다 (`SEM-01`)
- [x] **Duration · Easing · Shadow** — Motion은 시스템 범위 밖으로 선언해 참조 데드락을 해소 (`SEM-09`·`TKN-07`·`CMP-A7`). Shadow는 Foundation `Effect/Shadow`와 함께 **보류** (semantic.md 검토 노트 5)
- [x] Mode 축과의 관계 — Light/Dark 2모드. 반전 표면은 모드 스코핑이 아니라 `Inverse` Role로 표현한다 (`SEM-T07`)

## 2. 네이밍 규칙 — 🟡

- [x] 문법: `Target/Role/Emphasis` (예: `Fill/Accent/Default`)
- [x] 각 슬롯 의미: Target=적용 대상 / Role=색의 의미 계열(+ `On {Role}`·`Inverse`) / Emphasis=기준 표면 대비 두드러짐 (`SEM-T01`)
- [x] 계층 간 어휘 통일 — Primary·Brand는 어휘에서 제거, 유채 브랜드 Role은 `Accent` 하나. `Text Muted`는 `Text/Neutral/Subtle`로 표현
- [x] Target 닫힌 목록 — 7종 (`Background` `Fill` `Text` `Icon` `Border` `Overlay` `Opacity`). Shadow는 보류
- [x] Role 닫힌 목록 — Target별 선언 (`SEM-06`). 기본 6 + `Inverse` + `On` 7
- [x] Emphasis 닫힌 목록 — 5단계 상한, 중간 삽입 금지 (`SEM-T02`)
- [ ] `_` 접두사의 지위 — `TKN-04` 정본 표기에 `_`가 없으므로 위반으로 읽히나, 명시된 규칙이 없다
- [ ] **등록 조합의 실제 열거** — 유효 토큰은 전조합이 아니라 등록된 조합뿐인데(`SEM-07`) 목록이 없다 (semantic.md 검토 노트 1)

## 3. 사용 규칙 — 🟡

- [x] 금지: Semantic 이름에 State 단어를 넣지 않는다 (`SEM-04`)
- [x] 금지: 표면·전경 짝 표(`SEM-T05`) 밖의 짝을 Component가 참조하지 않는다
- [x] **Background 스텝 매핑 기준** — Role별 등록표(`SEM-T03`)가 모드별로 명시. 솔리드 Fill의 Default는 On 전경 4.5:1 통과 스텝 중 코어 색에 가장 가까운 스텝(`SEM-T09`)
- [x] Background vs Fill 선택 기준 — `Background`(캔버스, 2단계)와 `Fill`(요소의 면, 틴트/솔리드)로 분리(`SEM-T05`·`SEM-T10`)
- [x] Text 계열 토큰의 대비 보장 규칙 — 표면·전경 짝 규칙(`SEM-T05`) + 짝별 대비 기록(`SEM-T04`) + 린트 `SEM-L07`·`SEM-L12`
- [x] 유사 Role 간 선택 기준 — Accent/Brand/Primary 공존 자체가 해소됨. 틴트 위 유채 전경은 기본 Role, 솔리드 위는 `On {Role}` (`SEM-T06`)
- [ ] Do / Don't 예시

## 4. 확장 규칙 — 🟡

- [x] 새 Role·Emphasis 추가 절차 — Target별 닫힌 집합을 `semantic.md`에서 개정 (`TKN-02`·`TKN-05`). Emphasis는 5단계 상한 (`SEM-T02`)
- [x] "기존 Role로 표현 가능한가"를 먼저 묻는 절차 — 같은 결정이 3개 이상 컴포넌트에서 반복될 때만 Semantic으로 승격 (`CMP-A4`)
- [x] 모드 추가 시 영향 — 값만 추가, 토큰 이름 불변 (`SEM-08`, `SEM-L03`)
- [x] 폐기 절차 — `$description`에 `[DEPRECATED - use …]` 표기 후 유예 제거 (`TKN-08`)
- [ ] 승인자 지정 (→ [F3](../F-governance/README.md))

## 5. 판별 테스트 — ✅

- [x] 단일본 — `semantic.md` §2.5 검증 규칙 (`SEM-L01`~`SEM-L12`). 구 스펙의 중복본은 삭제됨
- [x] 규칙 ID 부여
- [x] 질문 세트 확정 — 아래 대응표

| 질문 | 규칙 |
|---|---|
| 세그먼트가 정확히 3단인가? | `SEM-02` |
| 이름에 State 단어가 있는가? → 위반 | `SEM-04` (`SEM-L02` 닫힌 집합 소속으로 검출) |
| Target / Role / Emphasis가 선언된 enum 안에 있는가? | `SEM-L02` |
| 참조 대상이 Foundation 토큰인가? | `SEM-L01` |
| 등록되지 않은 조합인가? → 위반 | `SEM-L06` |
| 표면·전경 짝이 양 모드에서 대비를 통과하는가? | `SEM-L07`·`SEM-L12` |
| `On`·`Inverse`·유채 스텝 상한·불투명도 조합 | `SEM-L08`~`SEM-L11` |

> 이전 Q5(같은 개념을 가리키는 다른 이름 = 어휘 중복)는 별도 질문이 아니라 닫힌 집합(`SEM-06`·`SEM-L02`)이 막는다. 동일 **값**의 중복은 의도된 설계다(`SEM-10`).

## 6. 코드 동기화 — 🟡

- [x] codeSyntax 변환 규칙 — `TKN-04`
- [x] 동기화 방향 — 등록부(코드) → Figma 단방향 (→ [E2](../E-design-code/E2-token-sync.md))
- [x] JSON 형식 — DTCG alias + `$extensions.tgds.opacity` 불투명도 참조, 모드별 값 (`SEM-11`, [token/README](../../token/README.md))
- [ ] **`token/Semantic-theme.json` 미작성** — 형식은 정해졌으나 파일이 없다
- [ ] Mode별 값의 코드 표현(CSS 변수 스코프 등)과 생성기 확장
