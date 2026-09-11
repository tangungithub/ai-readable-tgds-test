# A. Token 체계

> 담당하는 것: **값의 의미와 위계**
> 목표: 정의서만 주면 AI가 토큰 체계를 읽고 **신규 Component Token을 오류 없이 생성·적용**한다

원본 자료: Figma Design `3YWinWXfs4AjGlJ59i9BFE` node `8174:1739` — "Token System Principles" (Adobe Spectrum 기반)

## 이 영역의 두 가지 문서

| 종류 | 파일 | 역할 |
|---|---|---|
| **규범 문서** | [token.md](token.md) · [foundation.md](foundation.md) · [semantic.md](semantic.md) · [component-token.md](component-token.md) | 규칙 그 자체. 파일명이 평문 슬러그다 |
| **단위 트래커** | [A2](A2-semantic-theme.md) · [A3](A3-semantic-responsive.md) · [A4](A4-component-token.md) · [A5](A5-collection-structure.md) | 6개 구현 축의 진행 현황. 파일명이 `A#-` 접두다 |

**규범 문서가 정본이다.** 트래커나 본 README와 어긋날 경우 규범 문서를 기준으로 한다.

규범 문서의 진입점은 **[token.md](token.md)** — 문서 지도와 로드 트리거 표가 있어 어떤 작업에 무엇을 읽어야 하는지 알려준다.
**값은 md에 없다.** 모든 원시값은 [`token/Foundation.json`](../../token/Foundation.json)이 정본이다(TKN-03).

> ~~token-system.md~~ 는 v0.2에서 멈춘 구 스펙이었다. 생성기가 `token/Foundation.json`으로 재연결되면서 삭제되었다.

---

## 현황

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| [A1 Foundation](foundation.md) | 🟡 | ✅ | 🟡 | 🟡 | ✅ | 🟡 |
| [A2 Semantic — Theme](A2-semantic-theme.md) | ✅ | 🟡 | 🟡 | 🟡 | ✅ | 🟡 |
| [A3 Semantic — Scale · Constant](A3-semantic-responsive.md) | ✅ | ✅ | 🟡 | 🟡 | ✅ | 🟡 |
| [A4 Component Token](A4-component-token.md) | ✅ | ✅ | 🟡 | 🟡 | ✅ | 🟡 |
| [A5 컬렉션 구조·참조·Mode](A5-collection-structure.md) | ✅ | — | 🟡 | 🟡 | ✅ | 🟡 |

**진행률 20.5 / 29 ≈ 71%**  (✅ 1점 · 🟡 0.5점 · ⬜ 0점 · — 제외) — 2026-09-10 재판정 (이전 8.5 / 29)

### 2026-09-10 재판정 근거 (규범 문서 v0.5 기준)

트래커는 2026-08-26 이후 갱신되지 않아 v0.3~v0.5에서 작성된 규칙(`TKN-*` 8 · `FND-*` 16 · `SEM-*` 28 · `CMP-*` 15 · 린트 35)이 반영돼 있지 않았다. 판정은 [구현 축 6가지](../00-overview/implementation-axes.md)의 체크 항목대로만 했다. **변경된 칸만** 적는다.

| 칸 | 이전 | 이후 | 근거 |
|---|:---:|:---:|---|
| A1 네이밍 | 🟡 | **✅** | 유일한 열린 enum이던 Color Set이 6종으로 닫혔다(§1.3). 모든 Set의 kind·스텝 범위·방향 선언(§1.4), 예외 표기(`FND-06`), 표기 정본(`TKN-04`) |
| A1 판별 테스트 | 🟡 | **✅** | `FND-L01`~`L12` 단일본·ID. 이전 잔여 사유(Color·Easing TBD)는 Color 확정·Motion 범위 밖 선언(`TKN-07`)으로 소멸 |
| A2 원칙 설계 | 🟡 | **✅** | 분리 기준 = 모드 축(`SEM-01`), Motion 데드락 해소(`SEM-09`), 모드 관계(`SEM-T07`). Shadow는 보류로 **선언**됨 |
| A2 확장 규칙 | ⬜ | 🟡 | 개정 경로(`TKN-02`·`05`), 상한(`SEM-T02`), 승격 조건(`CMP-A4`), 폐기(`TKN-08`). 승인자 없음 |
| A2 판별 테스트 | 🟡 | **✅** | `SEM-L01`~`L12`. 구 스펙 삭제로 중복 해소 |
| A2 코드 동기화 | ⬜ | 🟡 | 변환(`TKN-04`)·방향(E2)·형식(`SEM-11`, token/README). **`Semantic-theme.json`·`Semantic-scale.json`·`Semantic-constant.json` 값 미등록(스켈레톤만)** |
| A3 원칙 설계 | 🟡 | **✅** | 모드 = Mobile/Tablet/Desktop, Constant 무모드(`SEM-C01`), px 값은 범위 밖(`TKN-07`) |
| A3 네이밍 | 🟡 | **✅** | §2.3·2.4 Target·Role·Variant 전부 닫힘. Target 집합이 컬렉션 간 서로소라 이름만으로 컬렉션 판별 |
| A3 사용 규칙 | ⬜ | 🟡 | 금지 `SEM-S01`·`S02`·`C02`~`C06`. Role×Variant → Foundation 스텝 등록표 없음 |
| A3 확장 규칙 | ⬜ | 🟡 | `SEM-08`·`S02`, `TKN-08`. 승인자 없음 |
| A3 판별 테스트 | ⬜ | **✅** | `SEM-L02`~`L06` |
| A3 코드 동기화 | ⬜ | 🟡 | 형식·방향만. 파일 없음, 모드의 코드 표현 미정 |
| A4 원칙 설계 | 🟡 | **✅** | 입장 규칙 `CMP-A1`~`A7`. 생성 조건은 `CMP-A2`(기본값 재선언 금지)·`A4`(승격) |
| A4 네이밍 | 🟡 | **✅** | 가변 축 문법 `CMP-N1`~`N8` + JSON 스키마. 상태 비의존 = State 축 생략(`N2`·`N5`), State·Size enum 닫힘, Property = Target 합집합(`N6`), Component 기준 집합 = §3.3 인덱스(`A5`) |
| A4 사용 규칙 | ⬜ | 🟡 | `CMP-A2`~`A5`·`L03`, §3.4 형식 예시. 컴포넌트 삭제 시 처리·Don't 예시 없음 |
| A4 확장 규칙 | ⬜ | 🟡 | 등록제(`CMP-A5`) + 파일 3부 형식(§3.4) = AI 지시서. State 추가 파급·승인자 없음 |
| A4 판별 테스트 | ⬜ | **✅** | `CMP-L01`~`L11`. `DENY-01`·`02`의 토큰 측 판정 기준 확보 |
| A4 코드 동기화 | ⬜ | 🟡 | 문법 스키마·방향. **`Component-token.json` 값 미등록(스켈레톤만)**, 등록 컴포넌트 0 |
| A5 확장 규칙 | ⬜ | 🟡 | 새 컬렉션 조건(`SEM-01`), 모드 추가 파급(`SEM-08`), 파일 소유(`TKN-02`), 범위 재도입(`TKN-07`). 승인자 없음 |
| A5 판별 테스트 | ⬜ | **✅** | 소유 파일별 린트로 단일본 확정(`FND-L07`·`SEM-L01`·`L03`·`L11`·`CMP-L01`·`L02`) |
| A5 코드 동기화 | ⬜ | 🟡 | `TKN-04`, 방향, Foundation 생성기. 린트 실행화·REST 스키마 없음 |

유지된 🟡의 잔여 사유: **A1 원칙 설계** 13단계를 택한 근거 없음 · **A1 사용 규칙** Do/Don't 없음(Space↔Size 판별은 확정) · **A1 확장 규칙** 승인자 없음(폐기는 `TKN-08`로 확보) · **A1 코드 동기화** Figma 구값 잔존, 어긋남 감지 없음 · **A2 네이밍** `_` 접두사 지위, 등록 조합 열거 · **A5 사용 규칙** Do/Don't 없음.

---

## 확정된 위계

| 티어 | 문법 | 예시 |
|---|---|---|
| **Foundation** | `Category/Set/Option` (3세그먼트 고정) | `Typography/Font Size/0400`, `Color/Gray/0000` |
| **Semantic (Theme)** | `Target/Role/Emphasis` | `Fill/Accent/Default`, `Text/On Accent/Default` |
| **Semantic (Scale · Constant)** | `Target/Role/Variant` | `Padding/Container/Medium`, `Radius/Container/Full` |
| **Component** | `{Component} [/Element] [/Variant] [/Size] [/State] / {Property}` — 판별 축만 표기 | `Button/Primary/Hover/Fill`, `Button/Radius` |

- 참조는 **단방향 1단계 하향**: Foundation → Semantic → Component (`TKN-01`)
- Foundation의 Category는 **닫힌 5종**: `Color` `Typography` `Layout` `Shape` `Effect` (`FND-03`). Motion은 범위 밖, Shadow는 보류 (`TKN-07`)
- Foundation은 **어떤 토큰도 참조하지 않는 말단(leaf)**이며 알파 값이 없다 (`FND-10`·`FND-16`)
- Semantic은 **의도만** 담고 State·용처를 배제한다 (`SEM-04`·`SEM-05`). 컬렉션의 경계는 모드 축이다 (`SEM-01`)
- Component 토큰은 **판별 축만 표기**하고 시멘틱 기본값을 재선언하지 않는다 (`CMP-N2`·`CMP-A2`)
- 이름의 정본은 **Figma 표기**(띄어쓰기·대문자 시작), 코드 변환은 세그먼트 경계 중첩 + 내부 camelCase (`TKN-04`)

---

## 이 영역을 막고 있는 것 (우선순위 순)

| # | 항목 | 막히는 축 | 왜 지금 해야 하는가 |
|---|---|---|---|
| 1 | **`token/Semantic-theme.json` 미작성** — 어휘는 닫혔으나 Role별 등록표(`SEM-T03`)·등록 조합(`SEM-07`)이 없다 | A2·A3 코드 동기화 / A3 사용 규칙 | 값이 없으면 `SEM-L*` 12개를 돌릴 대상이 없고, `DENY-02`의 토큰 집합 전제가 비어 있다. Warning의 On 기준색·다크 솔리드 명도(검토 노트 6·7)도 여기서 결정된다 |
| 2 | **커버리지 테스트 미실시** — Button 5variant×4state / Input / Alert / Card / Table / Modal | A4 코드 동기화 / A4 확장 규칙 | 컴포넌트 인덱스가 0개다. 복합 상태(CMP 검토 노트 1)·Display·Subtext 존치(SEM 검토 노트 3)는 실제 컴포넌트를 만들어 봐야 닫힌다 |
| 3 | **Do / Don't 예시 부재** | A1~A5 사용 규칙 **5칸 전부** | 사용 규칙 축의 유일한 공통 잔여. 위반 사례를 규범 문서에 붙이면 5칸이 ✅로 간다 |
| 4 | **승인자 미지정** (→ [F3](../F-governance/README.md)) | A1~A5 확장 규칙 **5칸 전부** | 확장 규칙 축의 유일한 공통 잔여. F3 결정 하나에 5칸이 걸려 있다 |
| 5 | **린트 실행화** — 35개 린트가 표로만 있다 | A5 코드 동기화 / F2 | 입력(`Foundation.json`)이 생겼으므로 `FND-L*` 12개는 지금 스크립트로 만들 수 있다 |
| 6 | **Figma 변수 동기화** — 구값 잔존, 구 컬렉션(`Brand/*`·`Sky` 충돌) 미정리 (foundation.md 검토 노트 1·3·4) | A1 코드 동기화 | 코드 → Figma 단방향이 선언됐으니 REST API 주입(E2 작업 2)만 남았다 |
| 7 | **Shadow 보류** — `Effect/Shadow` Set과 Semantic Target 동시 보류. 색을 참조해야 해 `FND-10`(말단)과 충돌 | A1·A2 범위 | 범위 밖이 아니라 보류이므로 언젠가 결정해야 한다 |
| 8 | 잔여 소항목 — `_` 접두사 지위(A2 네이밍), 13단계 근거(A1 원칙), 유채 `1200`·`1300` 존치(foundation.md 검토 노트 7) | 각 1칸 | 결정만 하면 되는 항목 |

> 이전 목록의 Color Set 미정의 · 계층 간 어휘 불일치 · Variant enum 열림 · Duration·Easing·Shadow 데드락 · Background 매핑 기준 · Responsive 문법 공백 · 상태 비의존 속성 예외 · 동기화 방향 미정은 v0.3~v0.5로 해소되어 제거했다. `_` 접두사와 Shadow만 남았다.
