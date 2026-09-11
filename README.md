# AI Readable Design System — TGDS

> **AI Readable** = 추가 설명 문서 없이, **구조 자체만으로** AI가 의도를 오류 없이 해석할 수 있는 상태

디자인 시스템 **원칙의 구현 체크리스트**입니다.
**6개 영역 · 24개 단위 × 6개 구현 축 = 132칸.** 빈칸이 그대로 할 일 목록입니다.

- **최종 업데이트**: 2026-09-10
- **전체 진행률**: **26.0 / 132 ≈ 20%** (2026-08-26: 11.5 / 132 ≈ 9%)

| | |
|---|---|
| 축 정의 | [구현 축 6가지](docs/00-overview/implementation-axes.md) |
| 정의·목표 | [AI Readable 정의](docs/00-overview/definition.md) |
| 5요소 대조 | [소개 세션 5요소 ↔ 원칙 영역](docs/00-overview/element-mapping.md) |
| 진행 계획 | [로드맵](docs/00-overview/roadmap.md) |
| 토큰 규범 | [토큰 문서 진입점](docs/A-token/token.md) — 문서 지도 · 로드 트리거 |
| 토큰 값 | [값 등록부](tokens/) — 모든 토큰 값의 정본 |

---

## 📊 대시보드

`✅ 충족`  `🟡 부분`  `⬜ 미착수`  `—` 해당 없음

### [A. Token 체계](docs/A-token/) — 20.5 / 29 ≈ **71%**

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| [A1 Foundation](docs/A-token/foundation.md) | 🟡 | ✅ | 🟡 | 🟡 | ✅ | 🟡 |
| [A2 Semantic — Theme](docs/A-token/A2-semantic-theme.md) | ✅ | 🟡 | 🟡 | 🟡 | ✅ | 🟡 |
| [A3 Semantic — Scale · Constant](docs/A-token/A3-semantic-responsive.md) | ✅ | ✅ | 🟡 | 🟡 | ✅ | 🟡 |
| [A4 Component Token](docs/A-token/A4-component-token.md) | ✅ | ✅ | 🟡 | 🟡 | ✅ | 🟡 |
| [A5 컬렉션 구조·참조·Mode](docs/A-token/A5-collection-structure.md) | ✅ | — | 🟡 | 🟡 | ✅ | 🟡 |

### [B. Component 아키텍처](docs/B-component/) — 2.0 / 30 ≈ **7%**

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| B1 컴포넌트 분류 체계 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| B2 Property · Variant 모델 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| B3 State 모델 | 🟡 | 🟡 | ⬜ | ⬜ | 🟡 | ⬜ |
| B4 구조 · 조합 규칙 *(Auto Layout)* | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| B5 유연성 · 변형 수용 *(Slot)* | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

### [C. Layout & Structure](docs/C-layout/) — 1.0 / 18 ≈ **6%**

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| C1 Spacing · Grid | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| C2 Breakpoint · Responsive | 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |
| C3 화면 구조 · 템플릿 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

### [D. 식별 · 메타데이터](docs/D-naming/) — 0 / 18 = **0%**

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| D1 프레임 · 레이어 네이밍 *(Frame Naming)* | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| D2 컴포넌트 · 에셋 네이밍 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| D3 파일 · 페이지 · 라이브러리 구조 | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |

### [E. Design–Code 연결](docs/E-design-code/) — 1.5 / 16 ≈ **9%**

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| E1 컴포넌트 매핑 *(Code Connect)* | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ |
| [E2 토큰 동기화 파이프라인](docs/E-design-code/E2-token-sync.md) | 🟡 | — | 🟡 | ⬜ | ⬜ | 🟡 |
| E3 도구 · AI 접근 경로 | ⬜ | — | ⬜ | ⬜ | ⬜ | ⬜ |

### [F. 검증 · 거버넌스](docs/F-governance/) — 1.0 / 21 ≈ **5%**

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| F1 판별 테스트 통합본 | ⬜ | ⬜ | ⬜ | ⬜ | — | ⬜ |
| F2 게이트웨이 Deny 규칙 | 🟡 | 🟡 | ⬜ | ⬜ | — | ⬜ |
| F3 기여 · 변경 절차 | ⬜ | — | ⬜ | ⬜ | — | — |
| F4 버전 · Deprecation | ⬜ | — | ⬜ | ⬜ | — | ⬜ |
| F5 활용 지표 | ⬜ | — | ⬜ | ⬜ | — | ⬜ |

---

## 🔒 지금 막혀 있는 것

규범 문서 v0.5로 **어휘와 집합은 닫혔습니다.** 이제 막고 있는 것은 "결정"이 아니라 **값과 실물**입니다 — 등록부, 컴포넌트, 실행되는 린트.
아래 6개는 각각 여러 칸을 동시에 막고 있어서, 이것부터 풀지 않으면 나머지를 채워도 다시 뜯게 됩니다.

| # | 막고 있는 것 | 어디서 | 무엇이 막혀 있는가 |
|---|---|---|---|
| 1 | **Semantic 값 등록부 미작성** — 어휘는 닫혔으나 `tokens/semantic.tokens.json`(Role별 등록표 `SEM-T03`·등록 조합 `SEM-07`)이 없다 | [A2](docs/A-token/A2-semantic-theme.md) · [A3](docs/A-token/A3-semantic-responsive.md) | A2·A3 코드 동기화, `SEM-L*` 12개 실행, `DENY-02`의 토큰 집합 전제 |
| 2 | **커버리지 테스트 미실시** — Button · Input · Alert · Card · Table · Modal | [A4](docs/A-token/A4-component-token.md) | 컴포넌트 인덱스 0개 → A4 코드 동기화. 복합 State(B3)·Display/Subtext 존치·Warning On 기준색이 여기서 닫힌다 |
| 3 | **DS 프로젝트 경계 미정의** | [D3](docs/D-naming/) | `DENY-03` — "외부에서 제작"을 판정하려면 외부가 어디인지 정의돼야 함 |
| 4 | **Figma 컴포넌트 이름 ↔ 토큰 인덱스 일치 규칙 부재** — 토큰 측 기준 집합은 생겼다(`CMP-A5` 인덱스, `CMP-L06`). Figma 측 이름이 이를 따르는지 판정할 규칙이 없다 | [D2](docs/D-naming/) | `DENY-01`의 Figma 측 판정, B1 분류 체계 |
| 5 | **Breakpoint px 경계값 미정의** — 모드 이름(Mobile / Tablet / Desktop)은 확정됐고 값은 토큰 범위 밖(`TKN-07`) | [C2](docs/C-layout/) | A3 코드 동기화(미디어쿼리 vs 컨테이너 쿼리), C1 Grid |
| 6 | **린트 실행화 · Figma 변수 동기화** — 35개 린트가 표로만 있고, Figma에는 구값이 남아 있다 | [E2](docs/E-design-code/E2-token-sync.md) · [F2](docs/F-governance/) | A 영역 코드 동기화 축 6칸의 ✅, 게이트웨이 전부 |

> 이전 목록의 **계층 간 어휘 불일치**(→ `Accent` 단일화, `Text/Neutral/Subtle`), **State 닫힌 목록**(→ `CMP-N1` 6종), **Duration·Easing·Shadow 데드락**(→ Motion 범위 밖 `TKN-07`, Shadow 보류)은 v0.5로 해소됐습니다.
> 게이트웨이 Deny 3종 중 `DENY-01`·`DENY-02`는 토큰 측 판정 규칙(`CMP-L06`·`CMP-L02`)이 생겼습니다. 남은 전제는 판정 **대상**(1·4)과 경계(3)입니다.

---

## 📐 판정 원칙

- **"문서를 썼다"는 ✅가 아닙니다.** 각 축의 체크 항목을 실제로 만족해야 ✅입니다.
- **네이밍 축은 enum이 하나라도 열려 있으면 🟡을 넘지 못합니다.** "등", "기타"로 끝나는 집합은 판별할 수 없습니다.
- **판별 테스트 축이 이 대시보드의 핵심입니다.** AI Readable = 설명 없이 판정 가능한 상태이므로, 이 축이 곧 AI Readable 여부입니다.
- 사용 규칙에 **금지 사항이 없으면** 그 축은 미완입니다. 금지가 없으면 판별할 것도 없습니다.

---

## 📁 문서 구조

```
docs/
├── 00-overview/      정의 · 구현 축 · 5요소 대조 · 로드맵
├── A-token/          규범 문서(token/foundation/semantic/component-token) · 단위 트래커 A2~A5
├── B-component/      B1~B5
├── C-layout/         C1~C3
├── D-naming/         D1~D3
├── E-design-code/    E1~E3 (E2는 파일 분리됨)
├── F-governance/     F1~F5
├── 90-materials/     발표 · 제작 자료 (규범 아님)
└── 99-reference/     근거 리서치

CLAUDE.md             레포 작업 규약 (AI 에이전트용 지도)
tokens/               모든 토큰 값의 정본 (DTCG 형식)
scripts/              생성기
src/tokens/           생성물 — 손으로 고치지 않는다
```

> A3의 파일명은 `A3-semantic-responsive.md`로 유지하되, 단위 이름은 규범 문서를 따라 "Scale · Constant"로 부릅니다.
> B~F는 아직 미착수 단위가 많아 영역당 한 파일로 묶어 두었습니다.
> 작업이 시작되는 단위부터 A 영역처럼 파일을 분리합니다.

### 문서의 세 종류

| 종류 | 위치 | 정본 여부 |
|---|---|---|
| **규범** | `docs/A-token/token.md` 외 3개 | ✅ 규칙의 정본 |
| **값 등록부** | `tokens/*.tokens.json` | ✅ **값의 정본** — md와 어긋나면 이쪽이 맞다 |
| 트래커 · 리서치 · 발표 자료 | 그 외 전부 | ❌ 규범과 어긋나면 규범이 맞다 |

**규칙은 md, 값은 json.** 색 하나를 바꾸는 데 문서를 열 필요가 없고, 규칙 하나를 바꾸는 데 값 파일을 열 필요가 없다.

### 생성 파이프라인

`scripts/generate-tokens.mjs`는 `tokens/foundation.tokens.json`을 입력으로 `src/tokens/*`를 생성합니다.
구 스펙(`token-system.md`)은 생성기 재연결과 함께 삭제되었습니다.
