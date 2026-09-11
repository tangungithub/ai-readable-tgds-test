---
name: Semantic
description: Semantic Token의 의도 사전. Theme/Scale/Constant 세 컬렉션의 문법·닫힌 집합·모드 스키마를 정의한다.
owns: SEM-*
budget: 400 lines
---

> 본 파일은 **의도(intent)의 사전**이다. AI가 이름만 보고 토큰을 고르는 지점이므로, 네 파일 중 유일하게 서술이 많은 것이 정상이다.
> 공통 헌법(TKN-*)은 `token.md`, 참조 대상인 원시값은 `foundation.md`에 있다.

# 2. Semantic Token (작성 중)

## 2.1 컬렉션 구조

Semantic은 **Theme / Scale / Constant 세 컬렉션**으로 운용한다.

| 규칙 ID | 규칙 |
|---|---|
| SEM-01 | **컬렉션의 경계는 값의 종류가 아니라 모드 축이다.** 모드 축이 다른 토큰은 같은 컬렉션에 둘 수 없고, 모드 축이 같은 토큰은 나눌 이유가 없다. |
| SEM-02 | 네이밍 문법은 3세그먼트로 고정한다. Theme은 `{Target}/{Role}/{Emphasis}`, Scale·Constant는 `{Target}/{Role}/{Variant}`. 세그먼트 생략·추가를 허용하지 않는다. |
| SEM-03 | Semantic은 Foundation만 참조한다. 원시값 직접 기입을 금지한다. |
| SEM-04 | Semantic은 **의도만** 담는다. 시각 속성(색상명·수치·모양)과 상태(hover/pressed/disabled)를 이름에 담지 않는다. 상태는 Component 티어의 소관이다. |
| SEM-05 | Semantic은 **용처를 제한하지 않는다.** 상호작용 의도(Action·Link·Focus 등)를 Role에 두지 않는다. 어느 컴포넌트의 어느 속성에 쓰이는지는 Component 티어가 정의한다. 단, **놓이는 표면**(`On {Role}`·`Inverse`)은 용처가 아니라 문맥이므로 Role에 둘 수 있다(SEM-T06·T07). |
| SEM-06 | **Role과 Variant의 유효 어휘는 Target별로 선언된 닫힌 집합이다.** Target에 선언되지 않은 어휘는 사용할 수 없다. (Foundation FND-04가 Option 형식을 Set의 kind별로 정하는 것과 동형) |
| SEM-07 | 유효한 토큰은 전조합이 아니라 **등록된 조합**뿐이다. 단, Component가 요구할 단계는 사전에 공급되어야 한다(CMP-A1·A2 유지 조건). |
| SEM-08 | 모드 간 토큰 집합은 완전히 동일해야 한다. 모드 추가는 값만 추가하며 토큰 이름은 불변이다. |
| SEM-10 | **세그먼트 값이 현재 동일하더라도 토큰을 통합하거나 세그먼트를 생략하지 않는다.** 동일 값의 중복은 허용되며, 이는 향후 값이 분기할 가능성을 확보하기 위한 의도된 설계다. 중복을 근거로 한 토큰 통합·세그먼트 축소는 위반이다. |
| SEM-09 | Motion(Duration·Easing)은 현 시스템 범위 밖이다. Component 토큰은 모션을 정의하지 않는다. 인터랙션으로 범위를 확장할 때 Foundation Motion Category와 함께 재도입한다. |
| SEM-11 | **불투명도 조합.** Semantic 색 토큰은 **색 참조 1개 + 선택적 불투명도 참조 1개**로 구성한다. 불투명도는 `Effect/Opacity` 스텝만 참조하며, 알파가 섞인 원시값을 값에 직접 적지 않는다. 두 참조 모두 Foundation이므로 TKN-01(1단계 하향)과 SEM-03 안에 있다. Foundation에는 알파 Set이 없다(FND-16). 등록부 표기는 `token/README.md`, Figma에서는 색 변수 alias + 불투명도 number 변수 alias로 대응한다. |

| 컬렉션 | Figma 컬렉션 · 파일 (TKN-09) | 모드 축 | Target |
|---|---|---|---|
| **Theme** | `Semantic theme` · `token/Semantic-theme.json` | Light / Dark | Background, Fill, Text, Icon, Border, Overlay, Opacity ~~Shadow~~ |
| **Scale** | `Semantic scale` · `token/Semantic-scale.json` | Mobile / Tablet / Desktop | Padding, Gap, Size, Font Size, Line Height, Letter Spacing |
| **Constant** | `Semantic constant` · `token/Semantic-constant.json` | 없음(모드 1개) | Radius, Stroke, Font Weight, Font Family |

세 컬렉션의 Target은 Foundation Category·컴포넌트명과 겹칠 수 없다(TKN-10). 모드별 값의 표기는 TKN-11과 `token/README.md`를 따른다.

## 2.2 Theme 컬렉션

```
{Target} / {Role} / {Emphasis}

Target   ∈ { Background, Fill, Text, Icon, Border, Overlay, Opacity }
         // Shadow — 보류. Foundation `Effect/Shadow` Set 정의 후 재개한다.
Role     ∈ { Neutral, Inverse, Accent, Success, Warning, Danger, Info,
             On Neutral, On Inverse, On Accent, On Success, On Warning, On Danger, On Info }
Emphasis ∈ { Subtlest, Subtle, Default, Strong, Strongest }

Role  (Target별 닫힌 집합, SEM-06)
  Background          → { Neutral, Inverse }
  Fill                → { Neutral, Inverse, Accent, Success, Warning, Danger, Info }
  Text, Icon, Border  → 기본 7종 + On 7종 (14)
  Overlay, Opacity    → { Neutral, Inverse }
```

**어휘의 뜻.** 기본 Role 6종(Neutral·Accent·Success·Warning·Danger·Info)은 색의 **의미 계열**이다. `Inverse`는 Neutral을 모드 반대로 뒤집은 계열이고(SEM-T07), `On {Role}`은 그 Role의 **솔리드 Fill 위에 놓이는 전경**이다(SEM-T06). 유채 Role 5종(Accent·Success·Warning·Danger·Info)은 각각 Foundation의 한 hue Set에, Neutral·Inverse는 `Color/Gray`에 매핑한다.

### Target의 뜻과 기준 표면

| Target | 뜻 | Emphasis의 기준 표면 |
|---|---|---|
| **Background** | 화면·섹션의 **캔버스**. 다른 모든 것이 놓이는 바탕. `Default`(페이지 캔버스)·`Strong`(캔버스와 구분되는 두 번째 캔버스 — 섹션·사이드바)만 등록한다(SEM-T10) | 자기 자신 |
| **Fill** | 컴포넌트·요소의 **면**. `Subtlest`·`Subtle`은 틴트(옅은 면), `Default`·`Strong`·`Strongest`는 솔리드(진한 면) | Background |
| **Text / Icon / Border** — 기본 Role | Background 또는 **틴트 Fill** 위의 전경 | Background |
| **Text / Icon / Border** — `On {Role}` | **솔리드 Fill** 위의 전경 | `Fill/{Role}/Default` 이상 |
| **Overlay** | 캔버스를 덮는 스크림 | Background |
| **Opacity** | 레이어 불투명도(Disabled 등). 색이 아니라 `Effect/Opacity`를 참조한다 | — |

| 규칙 ID | 규칙 |
|---|---|
| SEM-T01 | Emphasis는 **기준 표면 대비 두드러짐**의 오름차순이다. 기준 표면은 Target과 Role이 정한다(위 표). 모드 전환 시 명도는 달라지되 대비 관계는 보존된다. |
| SEM-T02 | Emphasis는 5단계 상한이며 중간 단계 삽입을 금지한다. `Default`는 스케일의 중앙 앵커이자 미지정 시 기본 참조 대상이다. |
| SEM-T03 | **Emphasis는 Foundation 스텝 번호가 아니라 대비 등급으로 정의된다.** Foundation Color는 hue 간 동일 스텝의 명도·대비를 보장하지 않으므로(FND-15), Emphasis → Foundation 스텝의 매핑은 **Role별 등록표**로 선언한다. `On {Role}`·`Inverse`도 등록표의 대상이다. 전 Role 공통 스텝을 쓰는 일괄 매핑(예: "Strong = 0800")을 금지한다. |
| SEM-T04 | Role별 등록표는 Light·Dark 두 모드를 각각 명시하며, SEM-T05가 정한 **표면·전경 짝마다** 대비비를 함께 기록한다. Text·Icon은 4.5:1, Border는 3:1이 통과 기준이다. |
| SEM-T05 | **표면·전경 짝은 이름에서 결정된다.** `Background/{R}` 위에는 `Text·Icon·Border/{R}`(R ∈ {Neutral, Inverse}), `Fill/{R}/Subtlest·Subtle`(틴트) 위에는 `Text·Icon·Border/{R}`, `Fill/{R}/Default·Strong·Strongest`(솔리드) 위에는 `Text·Icon·Border/On {R}`을 놓는다. 즉 **Fill의 Emphasis가 `Default` 이상이면 전경은 `On`이다.** 이 표 밖의 짝은 대비를 보장하지 않으며 Component 티어가 참조해서는 안 된다. |
| SEM-T06 | **`On {Role}`.** Text·Icon·Border에만 등록한다. 값은 `Color/Gray/0000`(순백) 또는 `Color/Gray/1300`(순흑)에 `Effect/Opacity`를 조합한 **무채 값만** 참조한다(SEM-11). 기준색(0000/1300)은 Role별·모드별로 등록표가 정한다 — Fill이 밝은 Role(예: Warning)이나 다크 모드에서 Fill을 밝힌 Role은 순흑 기준이 될 수 있다. Emphasis는 **불투명도의 오름차순**이며 `Default`가 불투명(`Effect/Opacity/1000`)이다. `Default` 위로는 올라갈 수 없으므로 `Strong`·`Strongest`는 `Default`와 같은 값을 등록한다(SEM-10). 틴트 Fill 위의 유채 전경은 `On`이 아니라 기본 Role(`Text/Accent/Strong` 등)로 표현한다. |
| SEM-T07 | **`Inverse`는 Neutral의 모드 반전이다.** `{Target}/Inverse/{E}`의 Light 값은 `{Target}/Neutral/{E}`의 Dark 값, Dark 값은 Neutral의 Light 값이다. `On Inverse`는 `On Neutral`을 같은 방식으로 뒤집는다. Neutral(·On Neutral)이 등록된 **모든 Target×Emphasis 조합에 Inverse(·On Inverse)를 같은 위치에 등록**하며, 한쪽에만 있는 조합은 위반이다. 반전 표면(툴팁·토스트·다크 섹션)은 이 Role로만 표현하고, **프레임에 반대 모드를 적용하는 모드 스코핑으로 대체하지 않는다** — 한 모드 안에서 모든 토큰이 해석 가능해야 한다. |
| SEM-T08 | **유채 스텝 상한.** 유채 Role(Accent·Success·Warning·Danger·Info)의 매핑은 Foundation `0100`~`1100`만 참조한다. `1200`·`1300`은 hue 정보가 사라진 근검정이므로 유채로 표현할 이유가 없고, 그 명도는 Neutral·Inverse(`Color/Gray`)가 담당한다. |
| SEM-T09 | **솔리드 Fill의 앵커.** `Fill/{유채 R}/Default`는 `Text/On {R}/Default`가 4.5:1을 통과하는 스텝 중 **코어 색에 가장 가까운 스텝**이다. 브랜드 코어 색의 스텝을 Fill Default에 고정하지 않는다(FND-14). 코어 색이 통과하지 못하면 코어 색은 틴트·Text·Icon에서만 쓰인다. `Strong`·`Strongest`는 Default에서 On 전경과의 대비가 커지는 방향으로 한 스텝씩 이동하되 SEM-T08 상한 안에 있어야 한다. |
| SEM-T10 | **Background는 두 단계만 등록한다.** `Default`(페이지 캔버스)와 `Strong`(캔버스와 구분되는 두 번째 캔버스). 그 밖의 면 위계는 `Fill/Neutral/*`로 표현한다. Background에는 유채 Role과 `On` Role을 등록하지 않는다. **다크 모드의 `Background/Neutral/Default`는 `Color/Gray/1200`이다** — 순흑 앵커 `1300`은 캔버스로 쓰지 않는다. |

## 2.3 Scale 컬렉션

```
{Target} / {Role} / {Variant}

Target ∈ { Padding, Gap, Size, Font Size, Line Height, Letter Spacing }

Role  (Target별 닫힌 집합)
  Padding, Gap, Size                     → { Container, Layout }
  Font Size, Line Height, Letter Spacing → { Display, Heading, Body, Subtext }

Variant ∈ { Extra Small, Small, Medium, Large, Extra Large }
```

| 규칙 ID | 규칙 |
|---|---|
| SEM-S01 | Role은 **반응 방식**(브레이크포인트에 따라 값이 어떻게 변하는가)을 나타낸다. 크기는 Variant의 소관이며 Role에 크기 의미를 담지 않는다. |
| SEM-S02 | Variant는 5단계 상한이며 중간 단계 삽입을 금지한다. `Medium`이 기본 앵커다. |

## 2.4 Constant 컬렉션

```
{Target} / {Role} / {Variant}

Target ∈ { Radius, Stroke, Font Weight, Font Family }

Role  (Target별 닫힌 집합)
  Radius, Stroke              → { Container, Layout }
  Font Weight, Font Family    → { Display, Heading, Body, Subtext }

Variant  (Target별 닫힌 집합)
  Radius       → { Extra Small, Small, Medium, Large, Extra Large, Full }
  Stroke       → { Extra Small, Small, Medium, Large, Extra Large }
  Font Weight  → { Regular, Moderate, Strong }
  Font Family  → { Main, Sub }
```

| 규칙 ID | 규칙 |
|---|---|
| SEM-C01 | Constant는 모드를 갖지 않는다. 어떤 축으로도 값이 변하지 않음을 선언하는 것이 이 컬렉션의 목적이다. |
| SEM-C02 | Radius의 `Full`은 **스케일 밖의 특수값**(Foundation `Shape/Radius/1300` = 9999px, pill·원형)이며 서수 비교 대상이 아니다. `Extra Large < Full`과 같은 해석을 금지한다. |
| SEM-C03 | `Full`은 `Radius/Container/Full`만 등록한다. Layout 문맥에는 등록하지 않는다. |
| SEM-C04 | Font Weight의 Variant는 **강조 강도**의 오름차순이며 굵기 값(400·600 등)을 이름에 담지 않는다. `Regular`=강조 없음 / `Moderate`=중간 강조 / `Strong`=최대 강조. |
| SEM-C05 | Font Family의 Variant는 크기·강도가 아니라 **서체 위계**(1순위/2순위)다. 실제 서체명(Sans·Serif·SUIT·Noto)은 Foundation 값으로만 존재하며 Semantic 이름에 나타나지 않는다. |
| SEM-C06 | Font Family는 Role별 값이 모두 동일하더라도 Role 세그먼트를 유지한다(SEM-10). 현재 `{Display, Heading, Body, Subtext} × {Main, Sub}` 8조합의 값이 같더라도 8개 토큰을 모두 등록한다. |

## 2.5 검증 규칙 (Lint)

| 규칙 ID | 검증 내용 |
|---|---|
| SEM-L01 | Semantic 토큰의 참조 대상은 Foundation에 존재하는 유효한 토큰이어야 한다 (병합 JSON 교차 참조 검사) |
| SEM-L02 | Role·Variant는 해당 Target에 선언된 닫힌 집합의 구성원이어야 한다 |
| SEM-L03 | 한 컬렉션의 모든 모드는 동일한 토큰 집합을 가져야 한다 (한쪽 모드에만 존재하는 토큰 = 위반) |
| SEM-L04 | Scale과 Constant의 타이포 계열 Target은 **동일한 Role 어휘 집합**을 선언해야 한다. 단, 등록되는 Role×Variant 조합은 Target별로 달라도 된다 |
| SEM-L05 | `Line Height/{Role}/{Variant}`와 `Letter Spacing/{Role}/{Variant}`는 동일 `{Role}/{Variant}` 조합의 `Font Size` 토큰이 존재할 때만 유효하며, 그 Font Size가 참조하는 Foundation 스텝과 짝이 맞는 값을 참조해야 한다 |
| SEM-L06 | 등록되지 않은 Target×Role×Variant 조합이 존재하면 위반이다 (SEM-07) |
| SEM-L07 | SEM-T05의 모든 표면·전경 짝은 Light·Dark 양 모드에서 대비 기준(Text·Icon 4.5:1, Border 3:1)을 통과해야 한다. 불투명도가 조합된 전경은 표면 위에 합성한 결과색으로 계산한다 (SEM-T04) |
| SEM-L08 | `On {Role}` 토큰의 색 참조는 `Color/Gray/0000` 또는 `Color/Gray/1300`이어야 하며, Background에 `On` Role이나 유채 Role이 등록되어 있으면 위반이다 (SEM-T06·T10) |
| SEM-L09 | `{Target}/Inverse/{E}`의 각 모드 값은 `{Target}/Neutral/{E}`의 반대 모드 값과 같아야 한다(`On Inverse` ↔ `On Neutral` 동일). Neutral이 등록된 조합에 Inverse가 없거나 그 역이면 위반이다 (SEM-T07) |
| SEM-L10 | 유채 Role이 Foundation `1200`·`1300`을 참조하면 위반이다 (SEM-T08) |
| SEM-L11 | 불투명도 참조는 `Effect/Opacity`의 스텝이어야 하고, 색 `$value`에 알파 채널이 있는 원시값이 오면 위반이다 (SEM-11) |
| SEM-L12 | `Fill/{유채 R}/Default`는 `Text/On {R}/Default`와 4.5:1 이상이어야 하고, 코어 색 쪽으로 한 스텝 이동한 값은 4.5:1 미만이어야 한다 — "통과하는 스텝 중 코어 색에 가장 가까운 스텝"의 기계 판정 (SEM-T09) |

## 2.6 검토 노트 (Open Issues)

1. **닫힌 집합의 실제 열거 미완** — Theme의 모드별 값 매핑, 각 Target의 등록 조합 목록이 아직 없다(`token/Semantic-theme.json` 미작성). 커버리지 테스트(Button 5variant×4state / Input / Alert / Card / Table / Modal) 후 확정한다.
2. **3세그먼트 예외 후보 — 잔여분** — On-color(→ SEM-T05·T06)와 Inverse(→ SEM-T07)는 2026-09-09 확정해 목록에서 뺐다. 남은 후보: Focus ring, Selected 표면, Disabled는 **State**이므로 Component 티어의 상태 분기 표(CMP-A6)가 기존 Emphasis를 참조하는 것으로 충분한지 커버리지 테스트로 확인한다. Transparent는 `Color/Gray/0000` + `Effect/Opacity/0000` 조합으로 표현 가능하므로(SEM-11) 별도 어휘가 필요 없다.
3. **Display·Subtext의 사용처 검증** — Display 사용처가 0이면 Heading으로 흡수 가능한지, Subtext 하나가 Caption·Helper text·Overline·Badge label의 크기 폭을 5단계로 감당하는지 확인이 필요하다.
4. ~~**선행 미결(Foundation)**~~ — 2026-09-09 종결. 다크 모드 캔버스는 `Color/Gray/1200`으로 확정했다(SEM-T10). 순흑 앵커 `1300`은 `On {Role}`의 기준색과 Overlay 전용이다.
5. **Shadow 보류** — Target 선언을 주석 처리했다. Foundation `Effect/Shadow` Set과 함께 재개한다.
6. **Warning의 On 기준색** — Yellow는 흰 글씨가 통과하는 스텝이 갈색에 가깝고, 코어 색은 순흑 글씨와 짝이 자연스럽다. `On Warning`을 순흑 기준으로 두고 `Fill/Warning/Default`를 밝은 쪽 앵커로 잡을지 등록표 작성 시 결정한다(SEM-T06·T09).
7. **다크 모드의 솔리드 Fill 명도** — 다크 모드에서 유채 Fill을 밝히면 `On {Role}`의 기준색이 모드별로 갈린다. SEM-T06은 이를 허용하지만, 등록표에서 Role마다 일관되게 결정해야 한다.
