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
| SEM-05 | Semantic은 **용처를 제한하지 않는다.** 상호작용 의도(Action·Link·Focus 등)를 Role에 두지 않는다. 어느 컴포넌트의 어느 속성에 쓰이는지는 Component 티어가 정의한다. |
| SEM-06 | **Role과 Variant의 유효 어휘는 Target별로 선언된 닫힌 집합이다.** Target에 선언되지 않은 어휘는 사용할 수 없다. (Foundation FND-04가 Option 형식을 Set의 kind별로 정하는 것과 동형) |
| SEM-07 | 유효한 토큰은 전조합이 아니라 **등록된 조합**뿐이다. 단, Component가 요구할 단계는 사전에 공급되어야 한다(CMP-A1·A2 유지 조건). |
| SEM-08 | 모드 간 토큰 집합은 완전히 동일해야 한다. 모드 추가는 값만 추가하며 토큰 이름은 불변이다. |
| SEM-10 | **세그먼트 값이 현재 동일하더라도 토큰을 통합하거나 세그먼트를 생략하지 않는다.** 동일 값의 중복은 허용되며, 이는 향후 값이 분기할 가능성을 확보하기 위한 의도된 설계다. 중복을 근거로 한 토큰 통합·세그먼트 축소는 위반이다. |
| SEM-09 | Motion(Duration·Easing)은 현 시스템 범위 밖이다. Component 토큰은 모션을 정의하지 않는다. 인터랙션으로 범위를 확장할 때 Foundation Motion Category와 함께 재도입한다. |

| 컬렉션 | 모드 축 | Target |
|---|---|---|
| **Theme** | Light / Dark | Background, Text, Icon, Border, Overlay, Opacity ~~Shadow~~ |
| **Scale** | Mobile / Tablet / Desktop | Padding, Gap, Size, Font Size, Line Height, Letter Spacing |
| **Constant** | 없음(모드 1개) | Radius, Stroke, Font Weight, Font Family |

## 2.2 Theme 컬렉션

```
{Target} / {Role} / {Emphasis}

Target   ∈ { Background, Text, Icon, Border, Overlay, Opacity }
         // Shadow — 보류. Foundation `Effect/Shadow` Set 정의 후 재개한다.
Role     ∈ { Neutral, Accent, Success, Warning, Danger, Info }
Emphasis ∈ { Subtlest, Subtle, Default, Strong, Strongest }
```

| 규칙 ID | 규칙 |
|---|---|
| SEM-T01 | Emphasis는 **인접 표면 대비 두드러짐**의 오름차순이다. 모드 전환 시 명도는 달라지되 대비 관계는 보존된다. |
| SEM-T02 | Emphasis는 5단계 상한이며 중간 단계 삽입을 금지한다. `Default`는 스케일의 중앙 앵커이자 미지정 시 기본 참조 대상이다. |
| SEM-T03 | **Emphasis는 Foundation 스텝 번호가 아니라 대비 등급으로 정의된다.** Foundation Color는 hue 간 동일 스텝의 명도·대비를 보장하지 않으므로(FND-15), Emphasis → Foundation 스텝의 매핑은 **Role별 등록표**로 선언한다. (램프 재배치 후 교차 hue 편차가 크게 줄어 대부분의 Role이 같은 스텝으로 수렴하지만, 보장이 아니므로 등록표는 유지한다.) 전 Role 공통 스텝을 쓰는 일괄 매핑(예: "Strong = 0800")을 금지한다. |
| SEM-T04 | Role별 매핑표는 Light·Dark 두 모드를 각각 명시하며, 각 조합에 대해 그 위에 놓이는 전경색(Text·Icon)이 4.5:1을 만족하는지 함께 기록한다. |

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

## 2.6 검토 노트 (Open Issues)

1. **닫힌 집합의 실제 열거 미완** — Theme의 모드별 값 매핑, 각 Target의 등록 조합 목록이 아직 없다. 커버리지 테스트(Button 5variant×4state / Input / Alert / Card / Table / Modal) 후 확정한다.
2. **3세그먼트로 표현 불가한 예외 후보** — On-color/Inverse(Accent 배경 위 텍스트), Focus ring, Selected 표면, Disabled, Transparent. 커버리지 테스트 결과가 예외 등록 대장의 초안이 된다. (Overlay의 Role 자리가 더미가 되는 문제는 SEM-10으로 해소되어 목록에서 제외했다)
3. **Display·Subtext의 사용처 검증** — Display 사용처가 0이면 Heading으로 흡수 가능한지, Subtext 하나가 Caption·Helper text·Overline·Badge label의 크기 폭을 5단계로 감당하는지 확인이 필요하다.
4. **선행 미결(Foundation)** — Color Set 확정(대비 앵커). Theme 전체가 여기 얹혀 있다.
5. **Shadow 보류** — Target 선언을 주석 처리했다. Foundation `Effect/Shadow` Set과 함께 재개한다.
