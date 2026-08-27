# Token 문서 분리 구조 심층 리서치

> Token.md를 **Token.md / Foundation.md / Semantic.md / ComponentToken.md** 4개 파일로 분리하는 방안에 대한 리서치.
> 분리 목적: 컴포넌트 토큰의 양이 방대해질 때를 대비해, Foundation·Semantic 문서 길이를 획기적으로 줄여 AI의 할루시네이션을 제어한다.

- 작성일: 2026-08-20 / 기준 문서: Token.md v0.1 (2026-08-18)
- 리서치 범위: ① LLM 컨텍스트-정확도 관계 연구 ② AI 에이전트용 규칙 문서 규범(Anthropic Skills, Cursor rules, llms.txt 등) ③ 성숙한 디자인 시스템의 토큰 티어 분리 선례(M3, Spectrum, Carbon 등) ④ 컴포넌트 토큰 폭발 문제와 대응 전략

---

## 0. 결론 요약

**분리는 타당하며, 근거가 강하다.** 다만 리서치 결과, "4개로 쪼개는 것" 자체보다 아래 4가지 설계 결정이 할루시네이션 제어 효과를 좌우한다.

1. **Token.md는 '라우터'로 재정의해야 한다.** 항상 로드되는 유일한 파일로서, 계층 공통 헌법 + "어떤 작업에 어떤 파일을 로드하는가"의 트리거 표를 담는다. 이 파일이 길어지는 순간 분리 효과가 사라진다. 예산 ≤150줄.
2. **규칙(Rule)과 등록부(Registry)를 분리해야 한다.** 각 md는 규칙·문법·닫힌 집합 선언을 담고, 토큰 값의 정본은 machine-readable 데이터(JSON)로 외부화한다. 규칙은 느리게 변하고 등록부는 빠르게 자라므로, 함께 두면 등록부의 성장이 규칙 파일을 다시 비대하게 만든다.
3. **ComponentToken.md가 진짜 폭발 지점이다.** 업계 실측치(버튼 1개 = 토큰 432개, Spectrum 한때 21만 토큰/18MB)를 보면, 컴포넌트 토큰을 한 파일에 나열하는 설계는 분리 직후 다시 실패한다. ComponentToken.md에는 **문법 + 입장 규칙(admission rules) + 컴포넌트 인덱스만** 두고, 개별 등록부는 **컴포넌트당 1파일**(Spectrum S2 패턴)로 시작부터 설계할 것.
4. **파일당 예산 ≤500줄.** Anthropic(SKILL.md)과 Cursor(rules)가 독립적으로 공표한 유일한 구체 수치. 참조는 라우터에서 1홉까지만.

---

## 1. 왜 분리해야 하는가 — 측정된 근거

### 1.1 컨텍스트 길이 자체가 정확도를 깎는다

"모델이 지원하는 윈도우 크기"와 "규칙을 정확히 적용하는 길이"는 다르다는 것이 반복 측정되어 있다.

| 연구 | 발견 | 수치 |
|---|---|---|
| Chroma, Context Rot (2025) | 18개 모델 전부, 과제 난이도와 무관하게 **입력 길이 자체**가 성능을 낮춤. 관련 정보만 추린 짧은 입력이 동일 질문의 장문 입력을 전 모델에서 이김 | 핵심 정보 ~300토큰 입력 > 같은 질문이 포함된 113k토큰 입력 |
| Lost in the Middle (Liu et al., TACL 2024) | 필요한 정보가 문서 중간에 있으면 정확도 급락. **무관한 컨텍스트는 없느니만 못함** | 문서 앞 75.8% → 중간 53.8%(−22pt). 중간 배치 성능이 컨텍스트 없는 baseline(56.1%)보다 낮음 |
| RULER (NVIDIA, 2024) | 32k+ 지원을 표방한 17개 모델 중 32k에서 성능을 유지한 것은 **약 절반** | 공칭 윈도우 ≠ 유효 윈도우 |
| Databricks (2024) | 답변 품질은 윈도우 한계 훨씬 전에 정점 후 하락 | Claude 3.5 Sonnet: ~32k 정점 → 125k에서 70.6% |
| OP-RAG (2024) | 관련 부분만 골라 넣은 16k가 전체 128k를 크게 이김 | 44.43 F1 vs 34.32 F1 |

**의도 검증:** "Foundation·Semantic 파일 길이를 획기적으로 줄인다"는 분리 의도는 이 근거들과 정확히 일치한다. 특히 Lost in the Middle의 결과는, 수천 줄의 컴포넌트 토큰 목록이 함께 로드된 컨텍스트에서 Foundation 규칙 하나를 적용해야 하는 상황의 직접적인 모델이다 — 그 목록은 '중립적인 배경'이 아니라 **성능을 능동적으로 깎는 방해물(distractor)** 이다. Chroma는 방해물이 늘수록 할루시네이션이 증폭됨(일부 모델 계열은 ~2배)도 함께 측정했다.

### 1.2 규칙 수가 늘수록 개별 규칙이 '조용히' 무시된다

IFScale(2025)은 동시 지시 수와 준수율의 관계를 500개까지 직접 측정했다.

| 동시 규칙 수 | 10 | 100 | 250 | 500 |
|---|---|---|---|---|
| 최상위 모델(gemini-2.5-pro) | 100% | 98.4% | 84.8% | 68.9% |
| claude-3.7-sonnet | 100% | 94.8% | 72.9% | 52.7% |

이 연구의 두 가지 부수 발견이 문서 설계에 직결된다.

- **지배적 오류는 '수정'이 아니라 '누락(omission)'** — 규칙을 어기는 창작이 아니라, 규칙이 없는 것처럼 행동한다. 즉 문서를 아무리 정확히 써도 규칙 수가 임계를 넘으면 조용히 새어 나간다. → 문서만으로 부족하고 **기계적 게이트(린트)가 최종 방어선**이어야 한다는 사용자의 방향("기계적 게이트웨이 필요")을 정량적으로 뒷받침.
- **Primacy bias** — 규칙 밀도가 높아지면(~150개 이상) 앞쪽 규칙이 우선된다. → 각 파일에서 **절대 규칙은 반드시 최상단**에 배치.

현재 Token.md v0.1은 Foundation 장만으로 규칙 ID 18개(FND 10 + 린트 8) + 스텝 매핑 표 8개다. Semantic·Component가 같은 밀도로 한 파일에 붙으면 동시 규칙 수는 IFScale이 측정한 하락 구간에 진입한다.

### 1.3 AI 에이전트 실무 규범도 같은 방향이다

| 규범 | 내용 |
|---|---|
| Anthropic Agent Skills | 3단 프로그레시브 디스클로저: 메타데이터(이름+설명)만 상시 로드 → 필요 시 SKILL.md → 필요 시 참조 파일. **SKILL.md ≤500줄**, 초과분은 도메인별 참조 파일로 분리, **참조는 1홉까지만**(2홉 체인은 로드 실패) |
| Claude Code 공식 문서 | "비대한 CLAUDE.md는 실제 지시를 무시하게 만든다. 중요한 규칙이 노이즈에 묻힌다." 줄 단위 테스트: "이 줄을 지우면 실수가 생기는가? 아니면 잘라라" |
| Cursor rules | **규칙 파일 ≤500줄**, 큰 규칙은 조합 가능한 여러 규칙으로 분리, **내용 복사 대신 파일 참조**(중복은 부패한다) |
| llms.txt | 한 줄 링크로 구성된 소형 인덱스 파일 + 필요 시에만 가져가는 페이지별 md — Token.md가 맡아야 할 역할의 표준형 |
| AGENTS.md | 서브프로젝트별 중첩 배치, "수정 대상에 가장 가까운 파일이 이긴다" (OpenAI 모노레포에 88개) — 전역 단일 문서가 아니라 스코프 지역화가 업계 표준 |

### 1.4 분리의 실패 모드 (반대 근거)

분리 자체가 자동으로 이득은 아니다. 리서치에서 확인된 실패 모드 4가지:

1. **분리해 놓고 전부 로드하면 무의미** — Chroma의 결론은 "짧은 파일들"이 아니라 "관련 정보만 있는 짧은 컨텍스트"가 이긴다는 것. 로딩 규율(5장)이 분리와 한 몸이어야 한다.
2. **로드되지 않은 파일의 규칙은 존재하지 않는 규칙** — 라우팅이 실패하면(파일 존재를 모르거나, 상대 경로 해석 실패 — Kiro #6955 실사례) 규칙 준수율은 0이 된다. 인덱스의 로드 트리거와 경로 표기가 명확해야 하고, 라우팅용 description 품질이 곧 규칙 적용률이다.
3. **다홉 참조는 끊긴다** — 인덱스 → 주제 파일 1홉까지만. 인덱스 → A.md → B.md는 Anthropic이 명시적으로 금지하는 패턴.
4. **파일 간 중복은 드리프트를 만든다** — 같은 규칙이 두 파일에 있으면 언젠가 서로 달라지고, AI는 어느 쪽이든 근거로 삼는다. 모든 사실의 소유 파일은 정확히 하나여야 한다(4장).

---

## 2. 업계 선례 — 티어 분리는 표준, 컴포넌트 티어는 격리 대상

### 2.1 티어를 파일·네임스페이스로 물리 분리한 시스템

| 시스템 | 분리 방식 | 시사점 |
|---|---|---|
| Material Design 3 | `md.ref.*` / `md.sys.*` / `md.comp.*` — 이름만 보고 티어 식별 가능. comp 토큰은 "comp → sys 매핑 표"로 문서화되고 산문 설명이 없음 | 티어를 파일뿐 아니라 **이름 접두에도** 새길 것. comp 문서는 표 형식 등록부 |
| Adobe Spectrum S1 | src가 정확히 8개 파일: `color-palette` / `semantic-color-palette` / `color-aliases` / `color-component` / `layout` / `layout-component` / `typography` / `icons` — **파일 분리 자체가 티어 분류**. 컴포넌트 토큰은 `*-component.json`에 격리 | 사용자의 4파일 구상과 동형 |
| Adobe Spectrum S2 | **91개 파일로 재구조화: 컴포넌트당 1파일**(`accordion.json` 53개 토큰 등) + Foundation 파일들. 토큰마다 `component`, `deprecated`, `replaced_by`, `uuid` 거버넌스 메타데이터 | 컴포넌트 티어의 최종 형태는 "한 파일"이 아니라 "컴포넌트당 파일" |
| Salesforce SLDS | 전역 `--slds-g-*` / 컴포넌트 `--slds-c-*` 2네임스페이스. **SLDS 2에서는 컴포넌트 훅을 지원하지 않음**(티어 축소) | 컴포넌트 티어는 유지비가 커서 대형 시스템도 후퇴시킴 |

### 2.2 컴포넌트 티어를 의도적으로 제한한 시스템

- **IBM Carbon**: 코어(시멘틱) 토큰 ~200개 + 레이어링 모델로 대부분을 해결. 컴포넌트 토큰은 극소수 컴포넌트에만 존재하며 "**자기 컴포넌트 밖에서는 절대 사용 금지**"를 명문화.
- **Atlassian**: 팔레트 + 시멘틱 2티어에서 종료. 공개된 컴포넌트 토큰 티어 없음.
- **Shopify Polaris**: 컴포넌트 토큰 도입 논의가 공개적으로 진행됐으나 **채택하지 않음**.
- **Nathan Curtis**: 컴포넌트(object) 레벨은 선택적. "**컴포넌트 안에서 지역적으로 시작하고, 3개 이상 컴포넌트가 공유할 때 시멘틱으로 승격하라**" — 전역 네임스페이스를 단일 컴포넌트의 결정으로 오염시키지 말 것.

### 2.3 폭발의 실측치

- Nate Baldwin(전 Spectrum): 속성×변형×사이즈×상태를 전부 토큰화하면 **버튼 1개 = 3변형 × 3사이즈 × 4상태 × 12속성 = 432개**. Spectrum은 한때 **210,180개 토큰, 18MB JSON**을 관리했고, 이름은 `spectrum-button-m-warning-quiet-overbackground-textonly-focus-ring-animation-duration` 수준으로 퇴화.
- Angular Material 3 구현: 시스템 토큰 **~141개** vs 컴포넌트 토큰 **~848개** — 단 comp는 사람이 저작하는 결정이 아니라 sys 토큰으로의 **생성된 매핑**.
- 결론: 컴포넌트 토큰의 수는 시멘틱의 5~6배 이상으로 자라는 것이 구조적 귀결이며, "한 파일에 나열"은 어떤 성숙 시스템도 쓰지 않는 형태다.

### 2.4 기확정 사항과의 정합성

프로젝트에서 이미 확정한 결정들은 이 선례들과 방향이 일치한다 — 분리안이 기존 결정을 바꿀 필요는 없다.

| 기확정 사항 | 선례 정합성 |
|---|---|
| Semantic은 의도만 담고 state 배제, state는 Component 티어에서만 | M3에서 state는 comp 토큰 층위(`md.comp.*.hover.*`)에서 조합됨 |
| Component 토큰은 판별 축만 표기 | Baldwin의 "모든 축 조합 = 432개/버튼" 실패 모드에 대한 정확한 처방 |
| Semantic을 Theme/Responsive 두 컬렉션으로 분리 | Tokens Studio의 token set(파일) 단위 테마 구성 관행과 동형 |
| 예외 등록제·닫힌 집합 | Spectrum의 토큰별 거버넌스 메타데이터, DTCG `$deprecated` 관행 |

---

## 3. 4개 파일 설계안

### 3.0 전체 구조

```
Token.md                      라우터 + 계층 공통 헌법 (항상 로드, ≤150줄)
├── Foundation.md             FND 규칙 + 문법 + 게이트 (온디맨드, ≤300줄)
├── Semantic.md               SEM 규칙 + 닫힌 집합 + Theme/Responsive 스키마 (온디맨드, ≤400줄)
└── ComponentToken.md         CMP 규칙 + 입장 규칙 + 컴포넌트 인덱스 (온디맨드, ≤200줄)
    └── components/{Component}.md   컴포넌트당 1파일 등록부 (해당 컴포넌트 작업 시에만, ≤100줄)

(권고) tokens/*.tokens.json   값 등록부의 machine-readable 정본 — 3.5 참조
```

- 규칙 ID 접두를 파일과 1:1로: **TKN-**(공통 헌법) / **FND-** / **SEM-** / **CMP-**. ID만 보고 소관 파일과 로드 대상을 역추적할 수 있게 한다.
- 참조 깊이: Token.md → 각 티어 파일 1홉. 유일한 2홉인 ComponentToken.md → components/는 "인덱스 표에 경로 명시 + Token.md 트리거 표에도 직접 경로 병기"로 1홉화한다(에이전트가 ComponentToken.md를 거치지 않고도 대상 파일에 도달 가능).

### 3.1 Token.md — 라우터이자 헌법

사용자 정의("토큰이 어떻게 쓰여야 하는지")를 llms.txt·SKILL.md 패턴으로 구체화하면, 이 파일의 역할은 두 가지다: **① 어느 티어 작업에서든 성립해야 하는 공통 규칙, ② 나머지 파일로의 라우팅.**

**담을 것**

1. 계층 위계와 단방향 참조 (현 문서 서두 + FND-10의 일반화): Foundation → Semantic(Theme/Responsive) → Component, 역참조 금지, Foundation은 말단.
2. **티어 판별 기준 각 1문장** — "원시값이면 Foundation, 의도·역할이면 Semantic, 특정 컴포넌트의 결정이면 Component". 에이전트가 가장 먼저 하는 판단이 "이 값은 어느 티어인가"이므로 라우터에 있어야 한다.
3. **로드 트리거 표** (5장 매트릭스의 축약본) — 작업 유형 → 읽어야 할 파일 경로.
4. 정본 표기와 코드 변환 규칙 — 현 FND-08(Figma 공백 구분 정본, 코드 camelCase 변환)은 사실상 전 계층 공통 규칙이므로 **TKN으로 승격 이동**.
5. 규칙 ID 체계와 "본문·스키마 불일치 시 스키마 우선" 원칙.
6. **게이트웨이 절차 (TKN 규칙으로 명문화)**: "토큰을 생성·수정·사용하기 전, 해당 티어 파일을 로드하지 않았다면 진행을 중단한다", "**등록부에 없는 토큰은 존재하지 않는다 — 이름이 그럴듯해도 만들어 쓰지 않는다**", "전 파일 동시 로드 금지(작업과 무관한 티어 파일을 로드하지 않는다)".

**넣지 말 것(anti-scope):** 개별 토큰 이름·값·Set 정의. 스텝 표. 어떤 티어의 고유 규칙도 두지 않는다.

**예산 ≤150줄.** 항상 로드되는 유일한 파일이므로, 이 파일의 1줄은 다른 파일의 1줄보다 비싸다. llms.txt가 인덱스를 "한 줄 링크 + 한 줄 설명"으로 제한하는 이유와 같다.

### 3.2 Foundation.md — 절대 규칙과 보관소

사용자 정의(네이밍 컨벤션 = 절대 규칙 + 기계적 게이트웨이, 등록 요소 나열 = 불변 보관소)는 현 Token.md 1장과 거의 일치한다. 이동 시 조정할 것만 정리한다.

**담을 것:** FND-01~10(단 FND-08은 TKN으로 승격), 네이밍 문법과 kind 4종, 13단계 스케일·예외 표기법, Category/Set 목록, 예외 등록 대장, FND-L01~L08 린트.

**조정 권고 2가지**

1. **규칙과 값의 정본 분리** — 현 1.4의 스텝-값 표와 1.6의 JSON은 같은 데이터의 이중 표기다. 지금은 "불일치 시 스키마 우선"으로 봉합했지만, 이중 표기는 Cursor가 경고하는 드리프트의 전형이다. 권고: 값의 정본을 `tokens/foundation.tokens.json`으로 외부화하고, Foundation.md의 표는 제거하거나 "생성물(정본 아님)" 딱지를 붙인다. 상세는 3.5.
2. **린트의 실행화** — IFScale이 보여주듯 규칙 위반의 지배 형태는 '조용한 누락'이라 문서 강화로는 못 막는다. FND-L 규칙들을 문서 속 표로만 두지 말고, 병합된 JSON에 대해 실행되는 스크립트로 만들어 대시보드 레포(ai-readable-tgds-test)의 CI에 거는 것이 "기계적 게이트웨이"의 완성형이다. 정규식 게이트(FND-L01)는 md와 스크립트 양쪽에 두되 스크립트를 정본으로 선언.

**예산 ≤300줄.** 값 표를 외부화하면 현 1장(~280줄)은 자연스럽게 이 예산에 들어온다. 변경 빈도가 가장 낮은 파일이어야 하며, "이 파일의 diff = 시스템의 파괴적 변경"이라는 성격을 파일 머리에 선언한다.

### 3.3 Semantic.md — 의도의 사전, prose가 가장 많은 파일

Atlassian·Polaris·Carbon이 이 티어에서 시스템을 끝내는 데서 보듯, 시멘틱은 시스템의 '결정'이 사는 곳이고, AI가 **이름만 보고 토큰을 고르는** 지점이다(AI-ready design systems의 핵심 주장: `color.action.primary`는 의도만으로 선택된다). 따라서 4개 파일 중 유일하게 서술이 많아야 정상인 파일이다.

**담을 것**

1. SEM 네이밍 원칙: 시각 속성 금지·의도 필수(기확정), state 배제(기확정 — state는 Component 티어 소관임을 명시하고 CMP로 위임).
2. **레벨별 닫힌 집합 선언** — 각 세그먼트 레벨에서 사용 가능한 어휘의 완전 열거 + "**이 목록에 없는 어휘는 사용 불가**" 문장. 닫힌 집합의 완전 열거는 v0.1 리뷰 지적 ②(Variant enum이 '등'으로 열림)의 재발을 문서 구조로 차단한다.
3. **Theme / Responsive 두 컬렉션의 스키마**: 모드 목록(닫힌 집합), 모드 해석 규칙, Responsive 문법(기확정: Target=적용 속성 / Role=적용 문맥 스케일 / Variant=사이즈 수준, 예 `Padding/Container/Medium`).
4. 등록된 시멘틱 토큰 목록 — 토큰마다 `$description`(어떤 의도일 때 쓰는가) 1줄 의무. 이 설명이 곧 AI의 선택 기준이 된다.
5. Foundation 참조 규칙: Semantic은 Foundation만 참조 가능, 원시값 직접 기입 금지.

**시멘틱 목록은 md 안에 나열해도 안전하다** — 시멘틱 토큰 수는 '역할의 수'라서 유한하고 느리게 자란다(Carbon 코어 ~200개, M3 sys ~141개). 컴포넌트 티어와 달리 파일 폭발 위험이 낮다. 단 목록이 200개를 넘보면 카테고리별(색/타이포/모션) 분할을 검토.

**예산 ≤400줄.**

### 3.4 ComponentToken.md + components/ — 규칙과 등록부의 분리가 필수인 곳

분리 목적(방대해질 컴포넌트 토큰 대비)이 실제로 달성되는가는 이 파일의 설계에 달려 있다. **ComponentToken.md 한 파일에 토큰을 나열하는 순간, 2.3의 실측치가 보여주듯 이 파일은 수천 줄이 되고 — Foundation.md를 줄인 효과가 무의미해진다.** 어떤 컴포넌트 작업도 다른 컴포넌트의 토큰을 알 필요가 없으므로, 등록부는 컴포넌트 단위로 쪼개는 것이 컨텍스트 관점의 최적이다(Spectrum S2가 91개 파일로 간 이유).

**ComponentToken.md에 담을 것 (규칙 + 인덱스만, 개별 토큰 나열 금지)**

1. CMP 네이밍 문법: 판별 축만 표기하는 가변 축 문법(기확정), 상태 비의존 속성(Radius 등)의 예외 규칙, Element 슬롯 규칙(Input류 필요·Button류 불필요 — 기확정).
2. **입장 규칙(admission rules)** — 컴포넌트 토큰이 '생길 수 있는' 조건의 닫힌 정의. 선례에서 도출한 5개 초안:
   - CMP-A1. 컴포넌트 토큰은 **Semantic 토큰만 참조**한다. Foundation 직접 참조·원시값 기입 금지 (M3의 comp→sys 규칙).
   - CMP-A2. **토큰의 부재는 시멘틱 기본값 사용을 의미한다.** 시멘틱 기본값과 동일한 값을 재선언하는 컴포넌트 토큰은 만들지 않는다 (Baldwin: "필요해질 때 소수만").
   - CMP-A3. 컴포넌트 토큰은 **자기 컴포넌트 밖에서 사용 금지** (Carbon 명문 규칙).
   - CMP-A4. 같은 결정이 **3개 이상 컴포넌트에서 반복되면 Semantic으로 승격**하고 컴포넌트 토큰을 폐기한다 (Curtis).
   - CMP-A5. 신규 컴포넌트 파일 생성은 등록제 — 인덱스 표에 없는 컴포넌트 파일은 존재하지 않는 것으로 취급.
3. **컴포넌트 인덱스 표**: `컴포넌트명 | 파일 경로 | 1줄 설명 | 상태(draft/stable)`. llms.txt의 컴포넌트판.

**components/{Component}.md에 담을 것:** M3 컴포넌트 스펙 페이지처럼 **표 형식 등록부만** — `토큰명 | 참조 Semantic | 판별 축 | 비고` 한 줄씩. 설계 사유·산문 설명은 두지 않는다(사유가 필요한 결정은 대부분 Semantic 층의 결정이다). 컴포넌트당 ≤100줄이면 어떤 작업 컨텍스트도 작게 유지된다.

**예산: ComponentToken.md ≤200줄 (컴포넌트가 늘어도 인덱스 행만 증가), components/* 각 ≤100줄.**

### 3.5 값 등록부의 정본 위치 — md인가 JSON인가

현 v0.1은 md 안에 JSON을 내장하고 "스키마 우선"을 선언했다. 분리 시 두 가지 선택지가 있다.

| 방안 | 구조 | 장점 | 단점 |
|---|---|---|---|
| A. 내장 유지 | 각 md 안에 해당 티어 JSON 블록 | 파일 1개로 완결, 로드 1회 | md 길이에 JSON이 포함됨(현 Foundation JSON ~85줄), 표와 JSON 이중 표기 지속, 도구(린트·Style Dictionary·Variable API 동기화)가 md 파싱 필요 |
| B. **외부화(권고)** | `tokens/foundation.tokens.json` 등 티어별(컴포넌트는 컴포넌트별) JSON + md는 규칙만 | md가 짧아지고 규칙만 남음, DTCG/Style Dictionary(다중 파일 deep-merge가 표준 동작)/Tokens Studio(set=파일)와 정렬, 린트·디프·Figma Variable API 동기화가 JSON에 직접 작동 | 로드가 2파일이 될 수 있음(단, 값 확인이 필요한 작업만) |

B를 권고하는 결정적 이유는 도구 정합성이다: Style Dictionary는 여러 토큰 파일을 하나의 트리로 병합해 파일 간 alias를 해석하는 것이 기본 동작이고, Tokens Studio는 애초에 set=파일이며, Figma Variable API 동기화(시스템의 기존 목표)도 JSON 정본이 있어야 단순해진다. md의 표가 필요하면 JSON에서 생성하고 "생성물" 딱지를 붙인다 — 사람이 두 곳을 고치는 구조를 없애는 것이 핵심이다.

---

## 4. 중복·드리프트 방지 규율

분리된 문서 체계의 최대 리스크는 파일 간 불일치다. 4가지 규율로 막는다.

1. **단일 소유(single ownership)** — 모든 규칙·사실의 소관 파일은 정확히 하나. 다른 파일에서 필요하면 **규칙 ID로 참조**하고("FND-07의 등록제를 따른다") 문장을 복사하지 않는다. Cursor 공식 가이드의 "reference, don't copy" 원칙.
2. **규칙 ID = 소유권 표식** — TKN/FND/SEM/CMP 접두만으로 소관 파일이 결정되므로, 규칙이 어느 파일에 있어야 하는지에 대한 판단 자체가 기계적이 된다. 이동 시 기존 FND ID는 유지(FND-08만 TKN으로 개번).
3. **파일 머리 프론트매터** — 각 파일 상단에 `name / description(라우팅용 1줄 — 언제 이 파일을 읽는가) / version / scope / anti-scope`를 둔다. description은 에이전트가 로드 여부를 판단하는 근거이므로 "무엇이 있다"가 아니라 "**어떤 작업일 때 읽어라**"로 쓴다. anti-scope(이 파일에 없는 것 + 어디에 있는지)는 에이전트가 없는 정보를 이 파일에서 추측·창작하는 것을 차단한다.
4. **정합성은 병합 후 린트로 검증** — Semantic이 참조하는 Foundation 이름이 유효한지는 md 파일 단독으로 검증할 수 없다. 티어별 JSON을 병합한 트리에 대해 교차 참조 린트(SEM-L: 참조 대상이 foundation에 존재하는가, CMP-L: 참조 대상이 semantic에 존재하는가, 단방향성 위반 검사)를 실행한다. 파일 간 버전 동기화 문제도 "정본은 JSON, 검증은 병합 린트"로 흡수한다.

---

## 5. 로딩 전략 — 분리를 효과로 바꾸는 절반

Token.md의 로드 트리거 표 초안. 원칙: **작업당 로드 파일 수를 최소로, 그러나 참조 대상 티어의 등록부는 반드시 포함** (참조할 시멘틱 이름을 로드 없이 추측하는 것이 컴포넌트 작업에서 가장 개연성 높은 할루시네이션이다).

| 작업 유형 | 로드 파일 |
|---|---|
| 티어 판별이 안 된 일반 질문 | Token.md만 → 판별 후 해당 파일 |
| Foundation 스텝·예외 추가, 스케일 변경 | Token.md + Foundation.md |
| 시멘틱 토큰 생성·수정, 테마/모드/반응형 작업 | Token.md + Semantic.md (+값 필요 시 foundation.tokens.json) |
| 컴포넌트 토큰 생성·수정 | Token.md + ComponentToken.md + components/{해당}.md + Semantic.md(참조 대상 확인용) |
| 코드 생성에서 토큰 사용 | Token.md + components/{해당}.md (+Semantic.md) |
| 전체 감사·릴리스 디프 | md가 아니라 병합 JSON + 린트 스크립트로 수행 |

보조 원칙 3가지: ① 각 파일 최상단에 그 파일의 절대 규칙 배치(primacy bias 대응). ② 경로는 항상 저장소 루트 기준으로 명시(상대 경로 해석 실패 방지). ③ Token.md에 "작업과 무관한 티어 파일을 로드하지 말 것"을 명문 규칙으로 — 성실한 에이전트일수록 '전부 읽기'를 선호하는 경향이 분리 효과를 무효화한다.

---

## 6. 리스크와 완화

| 리스크 | 근거 | 완화 |
|---|---|---|
| 에이전트가 파일을 로드하지 않고 추측 | 로드 안 된 규칙 = 없는 규칙 (1.4) | TKN 게이트웨이 규칙("로드 전 진행 중단", "등록부에 없으면 존재하지 않음") + 최종 방어선은 CI 린트 |
| 라우팅 오판(엉뚱한 파일 로드) | Cursor agent-requested 규칙의 실패 모드 | 프론트매터 description을 "언제 읽는가"로 작성, Token.md 트리거 표 유지보수 |
| 교차 파일 참조의 깨짐 | md 단독으로 참조 유효성 검증 불가 | 병합 JSON 린트 (4장-4) |
| Token.md의 재비대화 | 공통 규칙이 계속 추가되는 관성 | 예산 150줄 + anti-scope 명문화, "새 규칙은 기본적으로 티어 파일 소속" 원칙 |
| ComponentToken.md의 재비대화 | 2.3의 폭발 실측치 | 인덱스만 두는 구조 + CMP-A2(부재=기본값) + CMP-A4(승격) |
| 4파일 수정의 유지비 증가 | 파일 수 × 버전 관리 | 규칙(md)은 느리게, 값(JSON)은 빠르게 변하도록 분리했으므로 실제 고빈도 수정은 JSON에 집중됨 |

---

## 7. 마이그레이션 절차 (v0.1 → 분리 구조)

1. **Token.md 축소** — 현 서두(위계·단방향·문서 원칙) + FND-08 승격분 + 티어 판별 기준 + 로드 트리거 표 + 게이트웨이 규칙(TKN-01~)으로 재작성. 나머지 전부 이동.
2. **Foundation.md 생성** — 현 1장 이동. FND ID 유지, 검토 노트(1.8)도 Foundation 소관 항목은 함께 이동(각 파일이 자기 open issue를 소유).
3. **정본 JSON 외부화 결정** — 3.5의 A/B 중 확정. B라면 `tokens/foundation.tokens.json` 분리 + md 표에 "생성물" 딱지.
4. **Semantic.md 신규 작성** — 3.3 구조. 작성 예정이던 2장을 처음부터 새 파일로 시작(이동 비용 없음 — 지금이 분리 최적 시점인 이유).
5. **ComponentToken.md + components/ 신규 작성** — 3.4 구조. 첫 컴포넌트(예: Button) 파일로 입장 규칙·표 형식을 검증.
6. **병합 린트 스크립트** — FND-L 실행화 + SEM-L/CMP-L 교차 참조 검사, 대시보드 레포 CI 연결.

각 단계 후 확인: "이 작업 유형에서 로드되는 총 줄 수가 분리 전보다 줄었는가?" — 분리의 성공 지표는 파일 수가 아니라 **작업당 로드 토큰 수**다.

---

## 8. 파일별 스켈레톤 초안

```
Token.md
  0. 프론트매터(name/description/version/scope/anti-scope)
  1. 계층 위계와 단방향 참조 (TKN-01~)
  2. 티어 판별 기준 (각 1문장)
  3. 게이트웨이 규칙 (로드 의무·등록부 외 사용 금지·과잉 로드 금지)
  4. 정본 표기·코드 변환 (구 FND-08)
  5. 규칙 ID 체계·스키마 우선 원칙
  6. 로드 트리거 표

Foundation.md
  0. 프론트매터 + 절대 규칙 선언(이 파일의 변경 = 파괴적 변경)
  1. FND-01~10 (08 제외)
  2. 네이밍 문법·kind 4종
  3. 13단계 스케일·예외 표기
  4. Category/Set 목록 (+ 값 표: 생성물 딱지 or JSON 참조)
  5. 예외 등록 대장
  6. 린트 FND-L (스크립트 정본 링크)
  7. 검토 노트 (Foundation 소관만)

Semantic.md
  0. 프론트매터
  1. SEM 원칙 (의도 필수·시각 속성 금지·state는 CMP 소관)
  2. 레벨별 닫힌 집합 (완전 열거 + "목록 외 사용 불가")
  3. Theme 컬렉션 스키마 (모드 닫힌 집합·해석 규칙)
  4. Responsive 컬렉션 스키마 (Target/Role/Variant 문법)
  5. 등록 토큰 목록 (각 $description 1줄)
  6. Foundation 참조 규칙 / 린트 SEM-L
  7. 검토 노트

ComponentToken.md
  0. 프론트매터
  1. CMP 네이밍 문법 (판별 축·상태 비의존 예외·Element 슬롯)
  2. 입장 규칙 CMP-A1~A5
  3. 컴포넌트 인덱스 표 (이름|경로|설명|상태)
  4. 린트 CMP-L
  5. 검토 노트

components/{Component}.md
  0. 프론트매터 (component, status)
  1. 판별 축 선언 (이 컴포넌트에서 유효한 축)
  2. 토큰 표 (토큰명 | 참조 Semantic | 판별 축 | 비고)
```

---

## 출처

**LLM 컨텍스트·규칙 준수**
- Chroma, Context Rot — https://research.trychroma.com/context-rot
- Liu et al., Lost in the Middle — https://arxiv.org/abs/2307.03172
- NVIDIA, RULER — https://arxiv.org/abs/2404.06654
- IFScale, How Many Instructions Can LLMs Follow at Once? — https://arxiv.org/abs/2507.11538
- Databricks, Long Context RAG Performance — https://www.databricks.com/blog/long-context-rag-performance-llms
- OP-RAG — https://arxiv.org/abs/2409.01666

**AI 에이전트 문서 규범**
- Anthropic, Effective context engineering for AI agents — https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Anthropic, Agent Skills — https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills
- Anthropic, Skill authoring best practices — https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
- Claude Code best practices — https://code.claude.com/docs/en/best-practices
- llms.txt — https://llmstxt.org/
- Cursor Rules — https://cursor.com/docs/context/rules
- AGENTS.md — https://agents.md/
- Kiro issue #6955 (참조 해석 실패 사례) — https://github.com/kirodotdev/Kiro/issues/6955

**디자인 토큰 아키텍처**
- Material 3 design tokens — https://m3.material.io/foundations/design-tokens/overview / material-web theming — https://github.com/material-components/material-web/blob/main/docs/theming/README.md
- Adobe Spectrum design data — https://github.com/adobe/spectrum-design-data / https://opensource.adobe.com/spectrum-design-data/
- Salesforce SLDS styling hooks — https://developer.salesforce.com/docs/platform/lwc/guide/create-components-css-custom-properties.html
- Atlassian design tokens — https://atlassian.design/foundations/design-tokens
- Shopify Polaris component-token 논의 — https://github.com/Shopify/polaris/discussions/10225
- IBM Carbon color tokens — https://carbondesignsystem.com/elements/color/tokens/
- Nathan Curtis, Naming Tokens in Design Systems — https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676
- Nate Baldwin, Component-level design tokens: are they worth it? — https://medium.com/@NateBaldwin/component-level-design-tokens-are-they-worth-it-d1ae4c6b19d4
- DTCG Format — https://www.designtokens.org/tr/drafts/format/
- Style Dictionary config — https://styledictionary.com/reference/config/
- Tokens Studio token sets/themes — https://documentation.tokens.studio/platform/configuration
- Angular Material 3 token 수 분석 — https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/
- AI-ready design systems — https://www.designsystems.one/ai-ready
- Figma Dev Mode MCP — https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server
