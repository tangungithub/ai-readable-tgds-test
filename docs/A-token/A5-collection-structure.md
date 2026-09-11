# A5. 컬렉션 구조 · 참조 · Mode

> 담당: **컬렉션들 사이의 관계**. 개별 티어가 아니라 티어 간 규칙을 다룬다.
> A1~A4가 각 층의 규칙이라면, A5는 **층 사이의 규칙**이다.
> 정본: [token.md](token.md) §3 공통 헌법(`TKN-*`) + [semantic.md](semantic.md) §2.1.

| 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| ✅ | — | 🟡 | 🟡 | ✅ | 🟡 |

> 네이밍 축은 A5에 해당하지 않습니다 (개별 토큰 이름은 A1~A4의 책임).
> 2026-09-10 재판정 — v0.5 규범 문서 기준. 칸별 근거는 [README](README.md)의 재판정 표.

---

## 1. 원칙 설계 — ✅

- [x] **5컬렉션 구조**: Foundation / Semantic-Theme / Semantic-Scale / Semantic-Constant / Component
- [x] **3단 위계**: Foundation → Semantic → Component (`TKN-01`)
- [x] **단방향 1단계 하향 참조** — 역방향·건너뛰기·동일 티어 간 참조 금지 (`TKN-01`, `FND-10`, `SEM-03`, `CMP-A1`)
- [x] Semantic을 세 컬렉션으로 나누는 기준 — 모드 축 (`SEM-01`)

## 2. 네이밍 규칙 — 해당 없음

## 3. 사용 규칙 — 🟡

- [x] 티어 건너뛰기 금지 (`TKN-01`)
- [x] Duration · Easing · Shadow의 참조 데드락 — Motion은 **범위 밖 선언**으로 해소 (`TKN-07`·`SEM-09`·`CMP-A7`, 범위 밖은 참조 규칙 위반이 아니다). Shadow는 Foundation·Semantic 양쪽에서 **보류**
- [x] Mode 축의 정의 — Theme: Light/Dark · Scale: Mobile/Tablet/Desktop · Constant·Foundation: 없음 (semantic.md §2.1 표)
- [x] Mode 간 값이 없을 때 — fallback 없음. 모드 간 토큰 집합은 동일해야 하며 빈 모드는 위반 (`SEM-08`·`SEM-L03`)
- [x] 문서·값 어긋남의 우선순위 — 등록부가 정본 (`TKN-03`)
- [x] 반투명 조합(색 참조 + `Effect/Opacity` 참조)은 두 참조 모두 Foundation이므로 `TKN-01` 안이다 (`SEM-11`)
- [ ] Do / Don't 예시

## 4. 확장 규칙 — 🟡

- [x] **새 컬렉션을 여는 조건** — 모드 축이 다르면 새 컬렉션, 같으면 나누지 않는다 (`SEM-01`)
- [x] 새 Mode 추가 시 파급 — 값만 추가, 토큰 이름 불변, 전 모드 집합 동일 검사 (`SEM-08`·`SEM-L03`)
- [x] 티어 간 규칙 변경 — 규칙 ID 접두가 소유 파일이므로 그 파일을 열어야 한다 (`TKN-02`). Foundation 변경은 파괴적 변경으로 선언
- [x] 범위 확장(Motion·Shadow 재도입) 절차 — Foundation Category와 Semantic Target을 함께 재도입 (`TKN-07`)
- [ ] 승인자 지정 (→ [F3](../F-governance/README.md))

## 5. 판별 테스트 — ✅

단일본을 A5에 두지 않고 **각 소유 파일의 린트 절**에 둔다 (`TKN-02`). 여기서는 대응표만 유지한다.

| 질문 | 규칙 |
|---|---|
| Foundation이 무엇을 참조하는가? → 위반 | `FND-L07` |
| Semantic의 참조 대상이 Foundation에 실재하는가? (동일 티어·dangling 검출) | `SEM-L01` |
| Component의 참조 대상이 Semantic에 실재하는가? (건너뛰기·dangling 검출) | `CMP-L01`·`CMP-L02` |
| 순환 참조가 있는가? | 위 세 규칙이 모두 통과하면 구조상 불가능 |
| 모드가 정의된 컬렉션에서 값이 비어 있는 모드가 있는가? | `SEM-L03` |
| 불투명도 참조가 `Effect/Opacity` 스텝인가? | `SEM-L11` |

- [x] 판별 테스트 중복 해소 — 구 스펙(`token-system.md`) 삭제로 단일본 확정

## 6. 코드 동기화 — 🟡

- [x] codeSyntax 변환 규칙 — 세그먼트 경계는 중첩, 내부는 camelCase (`TKN-04`)
- [x] 동기화 방향 — 등록부 → Figma 단방향 (→ [E2](../E-design-code/E2-token-sync.md))
- [x] Foundation은 machine-readable 형식으로 존재하고 생성기가 읽는다 (`token/Foundation.json`, `FND-12`)
- [x] Semantic·Component 컬렉션의 코드 표현 — **Figma 컬렉션당 json 파일 1개**(`TKN-09`), 루트 그룹 전역 유일(`TKN-10`), 모드는 파일 루트 선언 + 모드 키 객체 값(`TKN-11`). 컴포넌트는 `Component-token.json`의 최상위 그룹 (`CMP-A5`)
- [ ] Variable REST API 추출·주입 스키마 (E2 작업 2)
- [ ] **린트의 machine-readable 병행본** — `FND-L*` 12 · `SEM-L*` 12 · `CMP-L*` 11, 35개가 표로만 존재한다 (→ CLAUDE.md 미결 2)
