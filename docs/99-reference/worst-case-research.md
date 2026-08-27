# 모범 사례가 없을 때 그 자리를 대신 채우는 것 — Worst Case 리서치

> 장표 맥락: "오늘의 일관성은 있지만, 내일의 일관성까지 책임지는 지속성이 없습니다."
> 목적: Variable이 detach되면 raw hex가 그 자리를 채우듯, **각 모범 사례가 부재할 때 실제로 무엇이 대신 들어가는지**를 근거와 함께 제시해 위기감을 만든다.
> 조사일: 2026-08-14 / 모든 수치는 1차 출처 확인 여부를 표기함

---

## 1. 핵심 결론 — 장표 한 장으로 쓸 수 있는 매핑표

시스템은 비어 있는 채로 남지 않습니다. **비어 있는 자리는 반드시 무언가로 채워지며, 그 대체물은 언제나 시스템 바깥의 것**입니다.

| # | 모범 사례 (있어야 할 것) | 없을 때 그 자리를 채우는 것 (Worst case) | 왜 위험한가 |
|---|---|---|---|
| 1 | **Variable / Token** | `#f3f4f6` — **하드코딩된 raw hex** | 값이 어디서 왔는지 아무도 모름. 바꿀 때 전수 검색해야 함 |
| 2 | **Spacing / Radius Token** | `padding: 13px` — **매직 넘버** | 의도가 사라지고 숫자만 남음 |
| 3 | **Text / Color Style** | 일회성 폰트 오버라이드 | 브랜드 변경 시 전 화면 수작업 |
| 4 | **Component (published)** | **Detached instance** | 겉모습은 그대로, 연결만 끊김 → **아무도 눈치채지 못함** |
| 5 | **Library (shared)** | **Local component / 지난 프로젝트 파일 복제** | 시스템과 무관한 평행 우주가 생김 |
| 6 | **Code Component** | `<div>` + 인라인 스타일, **`ButtonV2` / `LegacyButton`** | 같은 버튼이 3개 존재, 어느 게 진짜인지 모름 |
| 7 | **Auto Layout** | **수동 재배치 / 절대 위치** | 콘텐츠가 바뀔 때마다 사람이 손으로 다시 맞춤 |
| 8 | **Frame Naming** | **`Frame 48095626`** | AI도 사람도 이 프레임이 무엇인지 알 수 없음 |
| 9 | **Token 파이프라인** | 디자인·코드·문서 **세 곳에 따로 정의 + 수작업 동기화** | 정의가 셋이면 진실은 없음 |
| 10 | **거버넌스 / 게이트웨이** | **`!important`** | 규칙이 없으니 힘으로 이김 |

> **장표 카피 제안**: "우리가 Variable을 안 쓰면, 그 자리는 비어 있지 않습니다. `#f3f4f6`이 대신 들어갑니다."

---

## 2. 항목별 근거

### 2-1. Variable 부재 → Hard-coded value ★ 가장 강력한 근거

**Figma가 스스로 안티패턴에 이름을 붙였습니다.** Figma의 **Check designs**(Schema 2025 발표) 기능은 감지 대상 4종을 이렇게 정의합니다.

| 카테고리 | Figma 공식 문구 |
|---|---|
| Colors | "**Hard-coded color values**, contrast suggestions, and colors from libraries missing from the file" |
| Dimensions | "**Hard-coded values like spacing, padding, and corner radius**" |
| Typography | "**Hard-coded font styles and sizes** that can be replaced with text styles" |
| Components | "**Components detached** from their source library" |

추측이 아니라 **툴 벤더가 제품 기능으로 명문화한 실패 유형**이라는 점이 이 근거의 힘입니다.
→ https://help.figma.com/hc/en-us/articles/39592284074263-Check-designs-in-Figma

또한 Figma는 2024년 10월 10일부터 **스타일·변수의 detach까지 analytics에 기록**하기 시작했습니다. 즉 "변수도 끊긴다"는 것을 벤더가 측정 대상으로 인정한 것입니다.
→ https://help.figma.com/hc/en-us/articles/360039238353-Track-library-and-component-usage

---

### 2-2. Component 부재 → Detached instance ★ 수치가 가장 센 카드

**Salesforce 공식 블로그 (2025-03-25)** — 자사 Figma 감사 결과:

- "After completing a Figma audit, I discovered **thousands of detached SLDS 2 instances**."
- **button icon 컴포넌트: 약 100만 개 인스턴스 사용 중, 그중 최근 1년간 3,000건 이상이 detach**
- 디자이너의 실제 심리로 인용된 문장: *"납기가 며칠 안 남았는데 컴포넌트가 복잡해 보이니까, 그냥 detach하고 내 방식대로 만들겠다."*

→ https://www.salesforce.com/blog/figma-component-health/

**detach가 무서운 진짜 이유** — Figma 공식 정의:
> "Remove the link to the original component / Make the instance a regular frame, **while keeping the current layers and properties**"

**겉모습과 레이어는 그대로 남고 링크만 끊깁니다.** 그래서 아무도 모릅니다. 이 문장이 "오늘의 일관성 vs 내일의 일관성" 장표의 핵심입니다 — 오늘 화면은 멀쩡해 보이지만 내일의 업데이트를 받지 못하는 상태.
→ https://help.figma.com/hc/en-us/articles/360038665754-Detach-an-instance-from-the-component

**Deliveroo** — detach는 디자이너 탓이 아니라는 반전 데이터:
- **가장 많이 detach된 컴포넌트 8개 중 7개가 multi-line text를 포함**했음 → 유연성 결핍 신호
- Figma-코드 라이브러리 parity: **iOS 40% / Android 56% / Web 63%**
→ https://medium.com/deliveroo-design/how-to-understand-your-design-systems-health-and-eventually-its-success-9cbcdae13a2f

> 이 데이터는 **Slot의 존재 이유**를 그대로 증명합니다. Figma도 Slots를 "*placeholder containers enabling customization **without detaching instances***"로 소개합니다.

---

### 2-3. Library 부재 → 평행 파일 / 로컬 컴포넌트

**Figma Resource Library**가 시스템 붕괴 신호를 직접 나열합니다:
> "Watch for rising detachment rates, **duplicate styles**, **bloated libraries with hundreds of variants**, and **teams creating parallel files instead of using shared libraries**."
→ https://www.figma.com/resource-library/design-system-scaling/

**Spotify** — 파편화의 극단 사례 (2018년 기준):
- 사내에 **서로 연결되지 않은 디자인 시스템 22개**
- 디자이너 200명 / 엔지니어 2,000명 / 지원 플랫폼 45종
- 중앙집중 시스템(GLUE)이 병목이 되어 해체 → 각 팀이 각자 만들며 22개로 분화
→ https://www.shaunbent.co.uk/blog/reimagining-design-systems-at-spotify/

---

### 2-4. Code Component 부재 → `<div>`, 인라인 스타일, `ButtonV2`

**Mews (호텔 PMS)** — 빌드 시점에 디자인 시스템 컴포넌트가 만든 DOM에 표식을 붙여 실측:
- 주력 제품 **채택률 53%**, 게스트 앱 60%
- 즉 **화면 DOM의 40~47%는 디자인 시스템 바깥에서 만들어진 일회성 마크업**
→ https://developers.mews.com/design-system-adoption-metric-building/

**HTTP Archive Web Almanac** (수백만 페이지 크롤링):
- **전체 HTML 엘리먼트의 29%가 `<div>`** (2022, 2024 동일). 원문: *"divitis is still a thing."*
- **인라인 `style` 속성이 전체 페이지의 96%에 존재**
→ https://almanac.httparchive.org/en/2024/markup

**`ButtonV2` 현상** — GitHub 공개 저장소 `.tsx` 직접 조회 (2026-08-14):
`LegacyButton` 954개 파일 / `NewButton.tsx` 1,098개 / `ButtonV2.tsx` 268개
※ 부분 문자열 매칭이므로 **"통계"가 아니라 "관측"**으로 표현할 것. 대신 청중 앞에서 실시간 재현이 가능하다는 게 장점입니다.

---

### 2-5. Token 부재 → 색상 난립 (수치가 가장 극적)

**Project Wallace, "The CSS Selection – 2026"** — Majestic 상위 약 10만 도메인 홈페이지 CSS 전수 분석:

| 지표 | 중앙값(p50) | p90 | 최대 |
|---|---|---|---|
| **고유 색상 수** | **164개** | 408개 | **16,172개** |
| 고유 font-size 수 | 47개 | 99개 | — |
| 고유 z-index 수 | 18개 | 38개 | — |
| **`!important` 선언 수** | **154개** | 1,514개 | **249,021개** |

색상 포맷은 **Hex6가 97.1%** — 즉 **토큰이 아니라 생 hex가 여전히 기본값**입니다.
→ https://www.projectwallace.com/the-css-selection/2026

**Gusto** — "정의된 것"과 "실제 있는 것"의 격차를 보여주는 최고의 사례:
- 코드의 `manifest.css` 하나에 **고유 색상 101개, background-color 115개**
- 그런데 **디자인 시스템이 정의한 색은 68개**
- 저자: *"my understanding of the design system is different from what's in the front-end."*
→ https://css-tricks.com/a-quick-css-audit-and-general-notes-about-design-systems/

**WordPress wp-admin** (상시 공개 감사 리포트, 지금도 조회 가능):
셀렉터 8,873개(ID 포함 2,389개) / 고유 색상 125개 / font-size 56개 / `!important` 171회
→ https://wordpress.github.io/css-audit/public/wp-admin

**UXPin** — 자사 감사에서 **색상 변수 116개** 발견 → **베이스 8색**으로 재정리
→ https://medium.com/@marcintreder/design-system-sprint-2-one-color-palette-to-rule-them-all-d0114ed1f659

---

### 2-6. Auto Layout 부재 → 수동 재배치

Figma 공식 Auto layout 가이드의 정의:
> "When the content changes or elements are added, removed, or resized, the layout adjusts **without requiring manual repositioning**."

역으로 읽으면 **Auto Layout 부재 = 콘텐츠가 바뀔 때마다 사람이 손으로 다시 배치**. 벤더가 대체재를 "manual repositioning"으로 직접 지목한 셈입니다.
→ https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout

> ⚠️ "전체 프레임 중 몇 %가 Auto Layout을 쓴다" 같은 **공식 통계는 존재하지 않습니다.** 만들어 쓰지 마십시오.

---

### 2-7. Frame Naming 부재 → `Frame 48095626` ★ 가장 직관적인 카드

Figma 공식 포럼에 실제 보고된 레이어 이름:
> **`Frame 48095626`**, **`Oval 109384`**, **`Rectangle 12341239`**

포럼 공식 답변: *"There is no way to disable this behavior."* (플러그인으로 사후 정리하는 방법뿐이며, 새로 만들면 또 생깁니다)
→ https://forum.figma.com/ask-the-community-7/when-i-create-a-new-frame-the-number-in-the-layer-name-is-high-4m-33473

또한 Figma는 AI Rename layers 문서에서 기본 이름을 **"Figma's default naming convention"**이라 부르며 **고쳐야 할 대상으로 분류**합니다.
→ https://help.figma.com/hc/en-us/articles/24004711129879-Rename-layers-with-AI

> **장표 카피 제안**: "AI에게 우리가 건네는 건 `Button/Primary`가 아니라 `Frame 48095626`입니다."

---

### 2-8. 파이프라인 부재 → 세 곳에 따로 정의된 토큰

**zeroheight Design Systems Report 2026** (실무자 147명):
- 토큰이 **디자인 툴에 90% / 코드에 82% / 문서에 66%** 정의됨 — **세 곳에 각각 존재**
- 그런데 **동기화 자동화가 전무한 팀 60%**
- 디자인→코드 자동화 29% / 코드→디자인 6% / **양방향 5%**
- 코드 구현 만족도 54% vs 디자인 구현 만족도 72% → **코드 쪽이 항상 뒤처짐**
→ https://report.zeroheight.com/

> **핵심 문장**: "정의가 세 곳에 있는데 동기화가 없으면, 진실은 세 개가 아니라 **영 개**입니다."

---

## 3. 대가 — 이 대체물들이 실제로 만드는 손실

| 근거 | 수치 | 출처 |
|---|---|---|
| 실제 웹사이트 CSS의 **중복 선언 비율 중앙값 68%** (38개 시스템, 91개 파일) | 68% | ACM FSE 2014, Mazinanian et al. |
| **의도치 않은 클론 수정 2~3회 중 1회가 버그**로 이어짐 (확인된 결함 107건) | 1/2~1/3 | ICSE 2009, Juergens et al. |
| 디자인 시스템 **완전 도입 팀 7%**, 시스템이 "불안정" 44% | 7% / 44% | zeroheight 2026 |
| 도입 실패 원인 1위: **회사 차원 mandate 부재 73%** | 73% | zeroheight 2026 |
| **실패한 시스템의 0%만 지표를 측정** (성공한 시스템은 50%) | 0% vs 50% | Sparkbox 2021 (n=376) |

- FSE 2014: https://people.ece.ubc.ca/amesbah/resources/papers/fse14.pdf
- ICSE 2009: https://teamscale.com/hubfs/Publications/2009-do-code-clones-matter.pdf
- Sparkbox 2021: https://designsystemsurvey.sparkbox.com/2021/

---

## 4. ★ AI가 시계를 앞당긴다 — 이 장표의 결정타

이 리서치에서 가장 중요한 발견입니다. 우리 세션의 논지("AI가 기본 도구가 되는 시대")와 정확히 맞물립니다.

**GitClear, 《The Maintainability Gap: 2026 AI Code Quality Research》** — 2023~2026년 **6억 2,300만 건의 코드 변경** 분석:

| 지표 | 변화 |
|---|---|
| **중복 코드 블록** | 100만 라인당 40.3 → **73.0 (+81%)** |
| **리팩터링(코드 이동)** | 2022년 21% → **2026년 3.8%** |
| 커밋 내 복사·붙여넣기 | +41% (변경 라인의 15.7%) |
| 복붙 vs 리팩터링 성향 | 개발자가 리팩터링보다 **복붙할 확률 약 5배** |
| 파일 간 재사용(함수 호출 연결성) | **-35%** |

전작 연구(2025, 2억 1,100만 라인)에서는 **역사상 처음으로 "복사/붙여넣기"가 "이동(재사용)"을 추월**했습니다.

→ https://www.gitclear.com/the_ai_code_quality_maintainability_gap
→ https://www.gitclear.com/ai_assistant_code_quality_2025_research

**보조 근거 — AI 결과물의 신뢰도**
- Stack Overflow Developer Survey 2025 (n≈49,000): AI 정확성을 **"매우 신뢰" 3.1%**, **최대 불만은 "거의 맞는데 완전히 맞지는 않은 결과물" 66%**, **45.2%가 "AI 코드 디버깅이 더 오래 걸린다"** → https://survey.stackoverflow.co/2025/ai
- AI in Design Report 2026 (Designer Fund + Foundation Capital): 디자이너 **91%가 주 1회 이상 AI 사용**(2025년 54%에서 급등), 그런데 **62%가 "일관성 없고 신뢰할 수 없는 결과물"을 최대 난제로 지목** → https://stateofaidesign.com/chapters/tools

> **장표 카피 제안**: "AI는 일관성의 가속기가 아닙니다. **읽히지 않는 시스템 위에서 AI는 비일관성의 가속기**입니다."
> — 중복 코드 +81%, 리팩터링 21% → 3.8%. AI가 코드를 쓰기 시작하자 조직은 재사용이 아니라 복제를 하고 있습니다.

---

## 5. 장표 구성안 3가지

### 안 A — "빈자리는 채워진다" (가장 추천, 우리 세션 논지와 직결)

좌측에 모범 사례, 우측에 대체물을 1:1로 대응시킨 표 한 장. 우측은 전부 coral.

```
Variable        →  #f3f4f6
Component       →  Detached instance
Library         →  지난 프로젝트 파일 복제
Code Component  →  ButtonV2, LegacyButton
Auto Layout     →  수동 재배치
Frame Naming    →  Frame 48095626
거버넌스        →  !important
```
헤드라인: **"시스템이 비운 자리는, 시스템 바깥의 것이 채웁니다."**

### 안 B — "detach는 보이지 않는다" (오늘/내일 일관성 논지 강화)

Figma 공식 정의 인용 한 줄 + Salesforce 수치.
- *"연결만 끊고, 레이어와 속성은 그대로 남긴다"* (Figma 공식)
- 버튼 아이콘 100만 인스턴스 중 1년간 3,000+ detach (Salesforce)

헤드라인: **"오늘 화면은 멀쩡합니다. 내일의 업데이트만 도착하지 않을 뿐입니다."**

### 안 C — "AI가 시계를 앞당긴다" (리더십 임팩트 최대)

GitClear 두 수치만 크게: **중복 코드 +81% / 리팩터링 21% → 3.8%**
헤드라인: **"AI를 켜면 이 격차는 더 빨리 벌어집니다."**

> 리더십 10분 세션이라면 **안 A를 3장에, 안 C를 4장(전환)에** 배치하는 조합이 가장 강합니다. 안 C가 "병목은 AI 능력이 아니라 가독성"이라는 기존 4장 논지를 데이터로 뒷받침해 줍니다.

---

## 6. ⚠️ 쓰면 안 되는 것 (검증 실패 / 오용 위험)

1. **"Google이 41가지 파란색을 발견했다"** — 실화지만 **디자인 부채 사례가 아니라 A/B 테스트 사례**입니다. 2009년 Doug Bowman의 퇴사 글이 원전이며 오히려 **의도적 실험**이었습니다. 디자인 시스템 맥락에서 인용하면 사실 왜곡입니다. 한국 키노트에서 자주 오용되니 특히 주의하십시오.
2. **"Airbnb/Spotify/GitHub이 수백 가지 회색을 발견"** — 1차 출처를 찾지 못했습니다. 대신 출처가 명확한 **Salesforce**나 **Gusto(68 vs 101)** 를 쓰십시오.
3. **"Facebook에 고유 색상 261개"** (Nicole Sullivan) — 널리 인용되나 원전 확인 불가.
4. **"디자인→코드 핸드오프 재작업률 X%"** — 이 영역에 **검증 가능한 1차 연구가 존재하지 않습니다.** 검색 상위는 전부 벤더 마케팅 콘텐츠입니다. 대신 Sparkbox 2022의 "디자인–코드 패리티가 난제 2위(37%)"를 쓰십시오.
5. **"detach율 N% 이상이면 위험"** — 그런 업계 임계값은 없습니다. Figma는 오히려 템플릿형 컴포넌트의 높은 detach는 정상이라고 명시합니다.
6. **"Auto Layout 사용률 N%"** — 어떤 공식 출처에도 없습니다.
7. **Figma "Design Systems Report"** — **그런 연간 보고서는 존재하지 않습니다.** Figma의 디자인 시스템 전용 조사는 2018년이 마지막이며, 연간 디자인 시스템 리포트는 **zeroheight가 유일**합니다.
8. **DejaVu "JS 파일 94% 중복"** — 숫자는 진짜지만 **중복의 70%가 `node_modules`를 커밋한 저장소에서 발생**합니다. UI 복붙 증거가 아니며 반박당하기 쉽습니다.

### 인용 시 단서를 달아야 하는 것

- **zeroheight 2026**: 표본 **147명의 자기선택 설문 + 벤더 발행**. "업계 통계"가 아니라 "실무자 147명 조사"로 표현.
- **"디자인 시스템은 34% 빠르다"**: 2019년 Figma 자체 7인 팀 실험, 방법론 미공개. 시중 인용의 원출처가 이것입니다.
- **"47% 빠르다" (Sparkbox/IBM Carbon)**: 표본이 개발자 8명.
- **GitHub 코드 검색 수치**: 부분 문자열 매칭 → "통계"가 아니라 "관측".

---

## 7. 클로징에 쓸 만한 인용구

> **"The biggest existential threat to any system is neglect."**
> — Alex Schleifer (Airbnb), Brad Frost *Atomic Design* Ch.5 인용
> → https://atomicdesign.bradfrost.com/chapter-5/

> **"One experience touts modern typography sourced from Brand in 2018. An archaic internal toolset from 2013 still rocks Verdana. It's as if they are from separate companies."**
> — Nathan Curtis, *Consolidating Design Systems*
> → https://medium.com/eightshapes-llc/consolidating-design-systems-6bb7ce72f393

> **"Asking an AI agent to generate code without design system context is like asking a new engineer to start shipping code before onboarding."**
> — Ana Boyer (Figma)
> ※ 해당 글에 측정 데이터는 없습니다. **비유로만** 사용하고 근거로 제시하지 마십시오.
> → https://www.figma.com/blog/design-systems-ai-mcp/
