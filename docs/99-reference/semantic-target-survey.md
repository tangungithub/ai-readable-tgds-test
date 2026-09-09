# Semantic Target 전수조사

> 목적: Semantic 티어가 다뤄야 할 **Target(적용 속성) 축의 완전 열거**와, 현재 설계에서 누락된 항목의 탐지
> 작성: 2026-08-26 · 대상: Token.md v0.1 이후 Semantic 파트 설계
> 방법: ①Figma 변수 바인딩 가능 속성 전수(하드 제약) ②W3C DTCG dimension 타입 정의 ③주요 디자인 시스템 6종(Carbon / Material 3 / Spectrum / Polaris / Atlassian / DTCG) 토큰 taxonomy 대조

---

## 0. 요약 — 발견된 것

1. **Target 누락 4건**: Letter Spacing, Radius, Stroke, Opacity — 모두 Component가 반드시 필요로 하는데 Semantic에 대응 토큰이 없다.
2. **더 큰 문제는 Target이 아니라 컬렉션 구조**다. Foundation Set 12개 중 Semantic 대응이 있는 것은 **5개뿐**이고, 나머지 7개는 Component가 참조할 대상이 없어 **CMP-A1(Semantic만 참조) 위반이 구조적으로 강제**된다. 2026-08-11 리뷰 지적 ④(Duration·Easing·Shadow 참조 데드락)와 같은 유형이 Radius·Stroke·Opacity·Font Weight·Font Family에도 존재한다.
3. **원인은 컬렉션이 2개(Theme / Scale)뿐이라서**다. 두 컬렉션의 모드 축은 각각 Light·Dark와 브레이크포인트인데, **모드에 반응하지 않는 시멘틱 값들은 어느 쪽에도 자연스럽게 속하지 않는다.**
4. **Foundation 자체의 누락 3건**: Letter Spacing, Shadow, Blur — Set이 아예 정의되어 있지 않다. Semantic 이전에 Foundation을 먼저 보완해야 한다.
5. 권고: **컬렉션의 경계는 "값의 종류"가 아니라 "모드 축"으로 정한다.** 이 규칙을 적용하면 컬렉션 3개(Theme / Scale / Constant)로 모든 Foundation Set이 소속을 갖는다.

---

## 1. 하드 제약 — Figma NUMBER 변수가 바인딩 가능한 속성 전수

Semantic 토큰은 Figma 변수로 존재해야 하므로, **바인딩 불가능한 속성은 애초에 Target이 될 수 없다.** Plugin API의 타입 유니온이 정본이다.

### 1.1 바인딩 가능 (NUMBER/FLOAT)

| 그룹 | Figma 필드 (verbatim) | 대응 Target 후보 |
|---|---|---|
| 치수 | `width` `height` `minWidth` `maxWidth` `minHeight` `maxHeight` | **Size** |
| 간격 | `itemSpacing` `counterAxisSpacing` `gridRowGap` `gridColumnGap` | **Gap** |
| 여백 | `paddingLeft` `paddingRight` `paddingTop` `paddingBottom` | **Padding** |
| 모서리 | `cornerRadius` `topLeftRadius` `topRightRadius` `bottomLeftRadius` `bottomRightRadius` | **Radius** |
| 선 | `strokeWeight` `strokeTopWeight` `strokeRightWeight` `strokeBottomWeight` `strokeLeftWeight` | **Stroke** |
| 투명도 | `opacity` (레이어 불투명도, 0~1) | **Opacity** |
| 타이포 | `fontSize` `fontWeight` `lineHeight` `letterSpacing` `paragraphSpacing` `paragraphIndent` | **Font Size / Font Weight / Line Height / Letter Spacing / Paragraph Spacing / Paragraph Indent** |
| 이펙트 | `radius`(blur) `spread` `offsetX` `offsetY` | **Blur / Shadow** |
| 레이아웃 그리드 | `sectionSize` `count` `offset` `gutterSize` | **Grid** |
| 텍스트 내용 | `characters` | 해당 없음 (토큰 대상 아님) |

문자열/컬러/타이밍 타입: `fontFamily` `fontStyle`(STRING), `color`(COLOR), Motion의 `Timing`·`Easing`(별도 변수 타입 — **Duration은 NUMBER가 아니다**).

### 1.2 바인딩 **불가능** (2026 기준) — Target 후보에서 제외

`x` / `y` 위치, `rotation`(레이어·그라디언트), **그라디언트 스톱 위치**, ~~fill/stroke 개별 opacity~~(2026-09-03 Figma 업데이트로 **색 변수의 불투명도를 number 변수로 alias 가능**해졌다 — 결합 지점은 노드가 아니라 Semantic 색 변수이며 규칙은 `semantic.md` SEM-11), 스트로크 대시 길이·간격·오프셋, 블렌드 모드, 제약(constraints)·비율 잠금, **컴포넌트 프로퍼티 정의**, 그리드 span·자식 배치, 텍스트 truncation·max-lines, 익스포트 설정, 코너 스무딩(squircle %).

> **판정**: 위 목록은 Semantic Target에서 영구 제외한다. 문서에 "제외 목록"으로 명시해 두면 AI가 존재하지 않는 토큰을 만들어내는 것을 차단할 수 있다.

### 1.3 Figma가 스스로 쓰는 분류 — `VariableScope`

```
TEXT_CONTENT, CORNER_RADIUS, WIDTH_HEIGHT, GAP, OPACITY,
STROKE_FLOAT, EFFECT_FLOAT, FONT_WEIGHT, FONT_SIZE,
LINE_HEIGHT, LETTER_SPACING, PARAGRAPH_SPACING, PARAGRAPH_INDENT
```

주목할 점: **Padding에 독립 scope가 없다**(GAP에 포함). 즉 Figma는 Padding과 Gap을 같은 부류로 본다. 우리 설계가 둘을 별도 Target으로 나누는 것은 Figma보다 세분화된 것이며, 이는 의도된 차이로 문서에 근거를 남겨두는 편이 좋다.

---

## 2. W3C DTCG — dimension 타입의 공식 범위

`https://www.designtokens.org/tr/drafts/format/` (Design Tokens Format Module 2025.10)

- 정의된 `$type`은 **총 13종**: `color` `dimension` `fontFamily` `fontWeight` `duration` `cubicBezier` `number` / (composite) `strokeStyle` `border` `transition` `shadow` `gradient` `typography`
- `dimension`의 정의(verbatim): *"an amount of distance in a single dimension in the UI, such as a **position, width, height, radius, or thickness**"*
- 단위는 `px` 또는 `rem`만 허용, 값이 0이어도 단위 필수
- **`spacing` `sizing` `borderRadius` `borderWidth` `opacity` `zIndex` 타입은 존재하지 않는다.** dimension 하나가 모든 공간 측정치를 담당하며, **하위 분류 메커니즘이 스펙에 없다** — 도구는 토큰 경로/그룹 이름으로 taxonomy를 복원한다.
- **`opacity`는 DTCG 타입이 없다.** `number`로 모델링해야 한다(percentage/ratio 타입은 §8.8 "추가 검토 중"으로만 존재).

> **시사점**: 우리 문서의 Target 축이 곧 DTCG가 제공하지 않는 하위 분류를 대신한다. Target 이름이 정확해야 Style Dictionary·Variable API 변환 시 의미가 유지된다.

---

## 3. 주요 디자인 시스템 6종 — 속성 종류 토큰화 매트릭스

| 속성 종류 | Carbon | Material 3 | Spectrum | Polaris | Atlassian |
|---|---|---|---|---|---|
| Spacing (padding/margin/gap) | ✅ `$spacing-01…13` | ❌ 전역 없음 | ✅ `spacing-*`, `base-gap-*`, `base-padding-horizontal-*` | ✅ `--p-space-400` | ✅ `space.100` |
| Padding/Gap 축 분리 | ❌ 단일 램프 | — | ✅ 분리 | ❌ 단일 | ❌ 단일 |
| 음수 spacing | ❌ | ❌ | ❌ | ❌ | ✅ `space.negative.100` |
| Fluid(뷰포트 비례) spacing | ✅ `$fluid-spacing-01…04` (vw) | ❌ | ❌ | ❌ | ❌ |
| 컨트롤 높이 | ✅ `$container-01…05` | ⚠️ 컴포넌트별 `container-height` | ✅ `component-height-100` | ❌ | ❌ |
| 아이콘 크기 | ✅ `$icon-size-01…02` | ⚠️ `md.comp.icon.size` 1개 + 컴포넌트별 | ✅ `workflow-icon-medium`, 글리프별 `chevron-icon-size-75` | ❌ | ❌ |
| **Radius** | ❌ **미토큰화**(각진 브랜드) | ✅ `md.sys.shape.corner.*` | ✅ `corner-radius-100` | ✅ `--p-border-radius-200` | ✅ `radius.small` |
| 코너별 Radius | ❌ | ✅ 방향 composite | ❌ | ❌ | ❌ |
| **Stroke / Border width** | ❌ (색만 토큰화) | ✅ 컴포넌트별 `outline-width` | ✅ `border-width-100` | ✅ `--p-border-width-025` | ✅ `border.width.focused` |
| Divider 두께 | ❌ | ✅ `md.comp.divider.thickness` | ✅ `divider-thickness-small` | ❌ | ❌ |
| **Focus ring 두께·오프셋** | ❌ | ✅ `focus-ring.width/outward-offset` | ✅ `focus-indicator-thickness`, `focus-ring-gap` | ❌ | ⚠️ 두께만 |
| Font size | ✅ composite 내부 | ✅ `typescale.*-size` | ✅ `font-size-100` | ✅ `--p-font-size-400` | ❌ **명시적 미토큰화** |
| Line height | ✅ composite 내부 | ✅ `*-line-height` | ✅ 비율 + px 두 벌 | ✅ 절대 px | ❌ |
| **Letter spacing** | ✅ composite 내부(음수 포함) | ✅ `*-tracking`(음수 포함) | ✅ `letter-spacing`, `cjk-letter-spacing` | ✅ `letter-spacing-dense` | ❌ |
| 문단 여백 | ❌ | ❌ | ✅ `heading-margin-top-multiplier`(배수) | ❌ | ❌ |
| 브레이크포인트별 타입 변화 | ✅ `fluid-heading-*` | ❌ (역할 교체로 해결) | ⚠️ 플랫폼 스케일로 해결 | ⚠️ `light-mobile` 테마 | ❌ |
| Shadow 기하(x/y/blur/spread) | ❌ 제거됨 | ⚠️ elevation level | ✅ `drop-shadow-blur-200` | ⚠️ composite 문자열 | ⚠️ composite |
| Elevation / z-index | ❌ 색 레이어 모델 | ✅ `elevation.level0…5` | ⚠️ `android-elevation`만 | ✅ `zIndex` | ✅ `elevation.surface` |
| 그리드 컬럼·거터·마진 | ✅ breakpoints 맵 | ❌ | ❌ (그리드는 토큰 밖) | ⚠️ breakpoint 길이만 | ⚠️ 코드 상수 |
| 텍스트 최대폭(measure) | ❌ | ❌ | ⚠️ 컴포넌트별만 | ❌ | ❌ |
| 밀도(density) 축 | ❌ | ⚠️ 알고리즘 | ✅ `compact/regular/spacious` | ❌ | ❌ |
| 플랫폼/디바이스 스케일 | ❌ | ❌ | ✅ **scale-set (desktop/mobile)** | ⚠️ 타입만 | ❌ |

### 3.1 특기할 선례 — Spectrum의 `scale-set`

Spectrum은 브레이크포인트가 아니라 **입력 방식(fine/coarse pointer)** 기준의 2모드(desktop/mobile)를 쓰며, 스키마 상 **컬러 테마와 완전히 동형**이다(`color-set`은 light/dark/wireframe, `scale-set`은 desktop/mobile). 값은 공식이 아니라 **두 벌을 손으로 적어 둔 것**이고, 명목 비율은 1.25배(중앙값 정확히 1.250, 862쌍 실측).

> **시사점 1**: "컬렉션 = 모드 축"이라는 우리 권고안(6장)과 정확히 같은 구조다. Spectrum은 색과 치수를 같은 메커니즘의 두 인스턴스로 취급한다.
> **시사점 2**: Spectrum 2에서는 340개 중 **20개만 scale-set을 유지**하고 나머지 신규 primitive(`spacing-*` `corner-radius-*` `border-width-*`)는 **단일 값·스케일 무관**으로 바뀌었다. 살아남은 것은 `component-height-*`(히트 타깃)와 `workflow-icon-*`뿐이다. → **모드 반응이 정말 필요한 값은 생각보다 적다.**

### 3.2 특기할 선례 — Carbon의 layout 스케일 폐기

Carbon v11은 `$layout-01…07`(페이지 단위 간격)을 **완전히 제거하고 `$spacing-*`에 흡수**시켰다.

> **시사점**: 우리의 Role = `Container / Layout` 2분할은 Carbon이 한 번 해보고 **되돌린** 구조다. 유지하려면 "Container와 Layout이 브레이크포인트에서 다르게 반응한다"는 근거가 실측으로 뒷받침되어야 한다. 커버리지 테스트에서 두 Role의 모드별 값이 같은 패턴으로 움직이면 통합하는 편이 낫다.

### 3.3 6종 모두가 토큰화하지 않는 것

코너별 Radius, 전역 텍스트 measure(최대폭), 그리드 컬럼 수(Carbon 제외), 크기별 letter-spacing 램프.

> **판정**: 위 4가지는 **우리도 토큰화하지 않는다**를 문서에 명시. 6개 시스템의 만장일치는 강한 근거다.

---

## 4. 대조 — Foundation Set ↔ Semantic 커버리지 지도

현재 Foundation이 정의한 Set과, 현 Semantic 설계(Theme 6 Target + Scale 5 Target)의 대응 관계다.

| Foundation Set | 상태 | Semantic 대응 | 판정 |
|---|---|---|---|
| `Color/*` | 미정의(TBD) | Theme: Background/Text/Icon/Border/Overlay | ⚠️ Foundation 먼저 확정 필요 |
| `Layout/Space` | ✅ 13단계 | Scale: Padding, Gap | ✅ |
| `Layout/Size` | ✅ 13단계 | Scale: Size | ✅ |
| `Typography/Font Size` | ✅ 13단계 | Scale: Font Size | ✅ |
| `Typography/Line Height` | ✅ composite | Scale: Line Height | ✅ |
| `Typography/Font Weight` | ✅ 300~800 | **없음** | ❌ **데드락** |
| `Typography/Font Family` | ✅ Sans/Serif | **없음** | ❌ **데드락** |
| `Typography/Letter Spacing` | **Set 자체가 없음** | 없음 | ❌❌ **Foundation부터 누락** |
| `Shape/Radius` | ✅ 13단계 | **없음** | ❌ **데드락** |
| `Shape/Stroke` | ✅ 7단계 | **없음** | ❌ **데드락** |
| `Effect/Opacity` | ✅ 11단계 | **없음** | ❌ **데드락** |
| `Effect/Shadow` | **Set 자체가 없음** | Theme: Shadow (Target만 존재) | ❌❌ **참조 대상 없음** |
| `Effect/Blur` | **Set 자체가 없음** | 없음 | ❌❌ |
| `Motion/Duration` | ✅ 7단계 | **없음** | ❌ **데드락**(리뷰 지적 ④) |
| `Motion/Easing` | ✅ 5단계 | **없음** | ❌ **데드락**(리뷰 지적 ④) |

**데드락의 정의**: CMP-A1은 "컴포넌트 토큰은 Semantic만 참조한다"고 정하는데, Semantic에 대응 토큰이 없으면 컴포넌트는 ①Foundation을 직접 참조(CMP-A1 위반) ②원시값 기입(위반) ③토큰 없이 하드코딩(시스템 이탈) 중 하나를 택할 수밖에 없다. **12개 정의된 Set 중 7개가 이 상태다.**

Theme의 `Shadow` Target은 특히 심각하다. **참조할 Foundation Set이 존재하지 않는 Semantic Target**이므로, 현 상태로는 정의가 불가능하다.

---

## 5. Target 후보 전수 판정표

1장의 Figma 바인딩 가능 속성 + 3장의 6개 시스템 선례를 합친 **완전 후보 목록**과 판정이다.

| # | Target 후보 | 현 설계 | 판정 | 근거 |
|---|---|---|---|---|
| 1 | **Padding** | Scale ✅ | 유지 | 전 시스템 공통 |
| 2 | **Gap** | Scale ✅ | 유지 | Figma `itemSpacing`/`counterAxisSpacing` |
| 3 | **Size** | Scale ✅ | 유지 (Role 판별 기준 확정 필요) | min/max width·height를 흡수 |
| 4 | **Font Size** | Scale ✅ | 유지 | |
| 5 | **Line Height** | Scale ✅ | 유지 (Font Size와 짝 린트 필수) | |
| 6 | **Letter Spacing** | **없음** | **🔴 추가** | Figma 바인딩 가능. Carbon·M3·Spectrum·Polaris 4/5가 토큰화. **한글(SUIT)에서 자간은 가독성의 핵심 변수**이며 Foundation Set부터 신설 필요 |
| 7 | **Radius** | **없음** | **🔴 추가** | Foundation Set 존재. 5/5 시스템 중 4개가 토큰화(Carbon만 예외이며 이는 각진 브랜드 언어 때문). 컴포넌트가 반드시 요구 |
| 8 | **Stroke** | **없음** | **🔴 추가** | Foundation Set 존재. Border 두께는 모든 입력·카드·구분선의 필수값 |
| 9 | **Opacity** | **없음** | **🔴 추가** | Foundation Set 존재. Disabled·Scrim·Overlay에 필수. 단 DTCG상 `number`이지 `dimension`이 아님 — 치수 컬렉션과 성격이 다름 |
| 10 | **Font Weight** | 없음 | 🟡 추가 검토 | Foundation Set 존재. Atlassian처럼 composite 타입 스타일로 처리하면 불필요할 수 있음 |
| 11 | **Font Family** | 없음 | 🟡 추가 검토 | 동상. Sans/Serif 2종뿐이라 Semantic 없이 Component 직접 지정도 가능하나 CMP-A1 위반 |
| 12 | **Shadow** | Theme Target ✅ | 🔴 **Foundation Set 신설 선행** | 현재 참조 대상 없음. x/y/blur/spread 4개 하위 필드 각각 바인딩 가능 |
| 13 | **Blur** | 없음 | 🟡 추가 검토 | Figma `radius`(effect) 바인딩 가능. 모달 배경 블러 등에 필요. 사용 계획이 없으면 보류 |
| 14 | **Duration** | 없음 | 🔴 추가 (Motion 소관) | Foundation Set 존재, 리뷰 지적 ④의 원 항목 |
| 15 | **Easing** | 없음 | 🔴 추가 (Motion 소관) | 동상 |
| 16 | **Paragraph Spacing** | 없음 | 🟡 보류 | Figma 바인딩 가능하나 6개 시스템 중 Spectrum만 배수로 처리. 에디토리얼/본문 콘텐츠가 있으면 필요 |
| 17 | **Paragraph Indent** | 없음 | ⚫ 제외 | 바인딩은 가능하나 토큰화 선례 0건 |
| 18 | **Grid** (`gutterSize` `sectionSize` `count` `offset`) | 없음 | 🟡 보류 | Carbon만 토큰화, Spectrum은 명시적으로 토큰 밖에 둠. 레이아웃 그리드를 시스템이 소유할 계획이 있을 때만 |
| 19 | **Elevation / Z-index** | 없음 | 🟡 보류 | Figma 변수로 바인딩 불가(레이어 순서는 변수 대상 아님). 코드 전용 토큰으로 둘지 결정 필요 |
| 20 | **Focus Ring 두께·오프셋** | 없음 | 🟡 Stroke·Gap으로 흡수 | M3·Spectrum은 전용 토큰. 우리는 `Stroke/Focus` + `Gap/Focus`로 흡수 가능 |
| 21 | 코너별 Radius | 없음 | ⚫ 제외 | 6/6 시스템 미토큰화 |
| 22 | 텍스트 최대폭(measure) | 없음 | ⚫ 제외 → Size로 흡수 | 6/6 시스템 미토큰화. 필요 시 `Size/Layout/*` |
| 23 | 음수 Spacing | 없음 | ⚫ 제외 | Atlassian만 보유. Foundation이 오름차순 단조(FND-05)라 음수는 스케일 가정을 깬다 |
| 24 | Fluid(vw 비례) 간격 | 없음 | ⚫ 제외 | Carbon만 보유. Figma 변수는 vw 단위를 표현 불가 |
| 25 | 밀도(density) 축 | 없음 | ⚫ 제외 | Spectrum만 보유. 축이 하나 더 늘어 3세그먼트를 깬다 |
| 26 | x/y·rotation·그라디언트 스톱·대시·블렌드모드 | — | ⚫ **영구 제외** | Figma 변수 바인딩 불가 |

🔴 필수 추가 6건 · 🟡 검토 7건 · ⚫ 제외 7건

---

## 6. 권고 — 컬렉션의 경계를 "모드 축"으로 정한다

4장의 데드락 7건은 Target을 추가한다고 해결되지 않는다. **Radius를 어느 컬렉션에 넣을 것인가**라는 질문에 현 구조가 답을 갖고 있지 않기 때문이다. Radius는 Light/Dark로 변하지 않고 브레이크포인트로도 변하지 않는다.

Figma에서 컬렉션이 존재하는 이유는 **모드를 공유하는 토큰을 묶기 위해서**다. 그러므로:

> **컬렉션의 경계는 값의 종류가 아니라 모드 축이다. 모드 축이 다른 토큰은 같은 컬렉션에 둘 수 없고, 모드 축이 같은 토큰은 나눌 이유가 없다.**

이 규칙을 적용한 결과:

| 컬렉션 | 모드 축 | 담는 Target |
|---|---|---|
| **Theme** | Light / Dark | Background, Text, Icon, Border, Overlay, Shadow, **Opacity** |
| **Scale** | Mobile / Tablet / Desktop | Padding, Gap, Size, Font Size, Line Height, **Letter Spacing**, (Paragraph Spacing) |
| **Constant** (신설) | 모드 1개 | **Radius, Stroke, Font Weight, Font Family, Duration, Easing** |

- **Opacity를 Theme에 두는 이유**: Scrim·Disabled 불투명도는 Light/Dark에서 실제로 다른 값을 갖는다(어두운 배경 위 스크림은 더 옅어야 한다). 모드 반응이 있으므로 Theme이 맞다.
- **Letter Spacing을 Scale에 두는 이유**: 자간은 Font Size에 종속적이며, Font Size가 브레이크포인트로 변하면 함께 변한다. Line Height와 동일한 짝 규칙을 적용한다.
- **Constant 컬렉션의 정당성**: Spectrum 2가 신규 primitive(`corner-radius-*` `border-width-*`)를 스케일 무관 단일 값으로 되돌린 것과 같은 판단이다. 모드가 1개인 컬렉션은 Figma에서 정상이며, "이 값들은 어떤 축으로도 변하지 않는다"는 선언 자체가 정보다.
- 이름 후보: `Constant` / `Style` / `Base`. Foundation과 혼동되지 않는 이름이 좋다 — **`Constant` 권장**.

### 6.1 이 구조가 해소하는 것

- 데드락 7건 전부 소속을 얻는다 → CMP-A1을 위반 없이 지킬 수 있다
- 컬렉션 판별이 기계적이 된다: "이 값이 Light/Dark로 변하는가? → Theme. 브레이크포인트로 변하는가? → Scale. 둘 다 아닌가? → Constant." AI가 이름만 보고 소속을 역추적할 수 있다
- "Responsive" 명칭 문제도 함께 해결된다. Scale은 브레이크포인트 모드를 갖는 컬렉션이라는 뜻이 되고, 그 안의 토큰이 실제로 모드별로 다른 값을 갖는 것이 **컬렉션 소속의 정의**가 된다

---

## 7. Foundation에 신설이 필요한 Set

Semantic 작업 이전에 선행되어야 한다.

| Set | Category | 유형 | 비고 |
|---|---|---|---|
| **Letter Spacing** | Typography | ordinal 또는 value-anchored | 음수 포함 필요(M3 `-0.015625rem`, Carbon `-.64px`). FND-05의 오름차순 단조 가정과 충돌하므로 **0을 중앙에 둔 diverging 스케일**이 필요 — Easing Set과 같은 방식 적용 가능 |
| **Shadow** | Effect | composite | x/y/blur/spread + color 참조. 색을 참조하므로 Foundation 말단(FND-10) 원칙과 충돌 가능 — **Shadow는 Foundation이 아니라 Semantic Theme에서만 조립**하는 방안 검토 |
| **Blur** | Effect | ordinal | 사용 계획 확인 후 |

또한 기존 미결 2건이 Semantic의 전제로 남아 있다.

- **Color Set 미정의** — Theme 전체가 여기 얹혀 있다. **대비 앵커**로 확정해야 Emphasis 축의 "모드 간 대비 보존" 규칙이 성립한다
- **Space vs Size 판별 기준** — Scale의 `Size` Target Role 설계가 여기 종속된다

---

## 8. 최종 권고안

```
Semantic 컬렉션 3종

┌─ Theme        모드: Light / Dark
│  Target ∈ { Background, Text, Icon, Border, Overlay, Shadow, Opacity }
│  Role   ∈ { Neutral, Accent, Success, Warning, Danger, Info }
│  Emphasis ∈ { Subtlest, Subtle, Default, Strong, Strongest }
│
├─ Scale        모드: Mobile / Tablet / Desktop
│  Target ∈ { Padding, Gap, Size, Font Size, Line Height, Letter Spacing }
│  Role   = Target별 닫힌 집합
│           Padding, Gap, Size                        → { Container, Layout }
│           Font Size, Line Height, Letter Spacing    → { Display, Heading, Body, Label }
│  Variant ∈ { Extra Small, Small, Medium, Large, Extra Large }
│
└─ Constant     모드: 없음(1개)
   Target ∈ { Radius, Stroke, Font Weight, Font Family, Duration, Easing }
   Role   = Target별 닫힌 집합 (설계 필요)
   Variant / Emphasis = Target별 (설계 필요)
```

### 실행 순서

1. Foundation: Color Set 확정(대비 앵커) → Letter Spacing Set 신설 → Space/Size 판별 기준 확정
2. Constant 컬렉션의 Role·Variant 축 설계 (Radius·Stroke는 Theme의 Emphasis 어휘 재사용이 자연스러울 수 있음)
3. Theme / Scale / Constant 3종으로 커버리지 테스트 — Button(5 variant × 4 state), Input, Alert, Card, Table, Modal
4. 표현 불가 케이스를 예외 등록 대장으로 확정
5. `Semantic.md` 작성

---

## 9. 출처

**Figma / 표준**
- Figma Plugin API — [VariableBindableNodeField](https://developers.figma.com/docs/plugins/api/VariableBindableNodeField/) · [VariableBindableTextField](https://developers.figma.com/docs/plugins/api/VariableBindableTextField/) · [VariableBindableEffectField](https://developers.figma.com/docs/plugins/api/VariableBindableEffectField/) · [VariableBindableLayoutGridField](https://developers.figma.com/docs/plugins/api/VariableBindableLayoutGridField/) · [VariableBindablePaintField](https://developers.figma.com/docs/plugins/api/VariableBindablePaintField/) · [VariableScope](https://developers.figma.com/docs/plugins/api/VariableScope/)
- [Figma Help — Overview of variables, collections, and modes](https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes)
- [W3C DTCG — Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/drafts/format/)

**디자인 시스템**
- [Carbon — Spacing](https://carbondesignsystem.com/elements/spacing/overview/) · [Type sets](https://carbondesignsystem.com/elements/typography/type-sets/) · [2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/) · [v11 마이그레이션(layout 토큰 제거)](https://github.com/carbon-design-system/carbon/blob/main/docs/migration/v11.md)
- [Material 3 — Shape scale tokens](https://m3.material.io/styles/shape/shape-scale-tokens) · [Window size classes](https://m3.material.io/foundations/layout/applying-layout/window-size-classes) · `@material/web/tokens` 소스
- [adobe/spectrum-design-data — 토큰 소스](https://github.com/adobe/spectrum-design-data/tree/main/packages/tokens/src) · [scale-set 스키마](https://raw.githubusercontent.com/adobe/spectrum-design-data/main/packages/tokens/schemas/token-types/scale-set.json) · [Platform scale](https://spectrum.adobe.com/page/platform-scale/)
- [Shopify/polaris — polaris-tokens/src](https://github.com/Shopify/polaris/tree/main/polaris-tokens/src)
- [Atlassian — Design tokens](https://atlassian.design/foundations/design-tokens) · [llms-tokens.txt](https://atlassian.design/llms-tokens.txt)
- [Tokens Studio — Dimension token type](https://docs.tokens.studio/manage-tokens/token-types/dimension/)
