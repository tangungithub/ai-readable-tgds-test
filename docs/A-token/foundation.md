# Base Token

> 담당: **원시값 계층의 절대 규칙과 불변 보관소**
> 목표: Base 이름만 보고도 Category · Set · Option의 의미를 오해 없이 판별한다
> 정본 관계: 공통 헌법은 [token.md](token.md), 값 정본은 [../../token/Base.json](../../token/Base.json)

Base Token은 자연값 raw value 중 이 디자인 시스템에서 사용할 값을 골라 둔 컬렉션이다.
Intent나 Pattern 토큰은 자연값을 직접 참조하지 않고, 항상 Base를 거쳐야 한다.

이번 버전의 기준은 FigJam `Base Token 네이밍 설계 워크숍` 보드다.

---

## 1. 정의와 원칙

| 규칙 ID | 규칙 |
|---|---|
| `FND-01` | Base Token은 원시값만 정의한다. 이름에 사용 의도·용도·상태를 담지 않는다. |
| `FND-02` | 네이밍 문법은 `{Category}/{Set}/{Option}` 3세그먼트로 고정한다. 세그먼트 생략·추가를 허용하지 않는다. |
| `FND-03` | Category는 닫힌 집합이다: `Color` `Typography` `Layout` `Shape` `Effect`. |
| `FND-04` | 모든 Set은 §3에서 유형을 선언한다: `scale` / `nominal` / `composite` 중 하나. |
| `FND-05` | 스케일형 Set의 Option은 실제 스케일 식별값을 사용한다. 더 이상 4자리 서수 스텝(`0100`~`1300`)을 표준으로 쓰지 않는다. |
| `FND-06` | 스케일의 간격은 Set마다 다르며, 간격 규칙은 §3의 Set 선언과 값 등록부가 함께 확정한다. 전역 13단계 스케일은 없다. |
| `FND-07` | Option 내부의 하이픈은 `Typography/Line Height`와 `Typography/Letter Spacing`에서만 허용한다. 이 두 Set은 Figma 변수명을 3세그먼트로 유지하기 위해 composite Option을 사용한다. |
| ~~`FND-08`~~ | **`TKN-04`로 승격** — 이름 정본과 코드 변환 규칙은 전 계층 공통이므로 `token.md`가 소유한다. |
| `FND-09` | Option의 방향과 의미는 Set 선언이 소유한다. 같은 숫자라도 Set이 다르면 의미를 일반화하지 않는다. |
| `FND-10` | Base Token은 어떤 토큰도 참조하지 않는 말단 leaf 이다. Base를 참조할 수 있는 것은 Intent·Pattern 계층뿐이다. |
| `FND-11` | 값 `0`이 “속성 미적용”을 뜻하는 Set은 0 Option을 만들지 않는다. 토큰의 부재가 0이다. |
| `FND-12` | 원시값의 정본은 [../../token/Base.json](../../token/Base.json)이다. 문서와 등록부가 어긋나면 등록부가 맞다. |

---

## 2. 네이밍 문법

```text
{Category} / {Set} / {Option}

Category ∈ { Color, Typography, Layout, Shape, Effect }
Set      = Category별로 선언된 닫힌 집합
Option  = Set별 닫힌 값 이름
```

| Set 유형 | 문법 | 예시 | 설명 |
|---|---|---|---|
| `scale` | `{Category}/{Set}/{Value}` | `Layout/Space/24` | Option이 실제 스케일 식별값이다. 값 자체는 등록부가 확정한다. |
| `nominal` | `{Category}/{Set}/{Name}` | `Typography/Font Family/Sans` | 순서가 없는 명목형 이름이다. |
| `composite` | `{Category}/{Set}/{Base}-{Modifier}` | `Typography/Line Height/24-150` | 3세그먼트는 유지하되, Option 내부에서 기준 값과 보정값을 조합한다. |

### 2.1 코드 변환과 역변환

- Figma 정본은 `/`로 세그먼트를 나눈다.
- 코드명은 각 세그먼트를 kebab-case로 접어 CSS custom property를 만든다.
- 예: `Typography/Line Height/24-150` → `--typography-line-height-24-150`
- 역변환은 문자열 파싱이 아니라 **lookup** 이 우선이다. 생성물의 `baseLookup` 또는 토큰의 `$extensions.com.figma.canonicalName`을 사용한다.
- lookup이 없는 환경에서만 `Category`와 등록된 Set 목록을 기준으로 최장 일치 longest match 를 사용한다.

> 코드명만 보고 어떤 하이픈이 `/`였고, 어떤 하이픈이 공백이었고, 어떤 하이픈이 composite Option 내부 구분자인지 복원하려 하지 않는다. 라운드트립은 변환 규칙을 다시 적용하는 작업이 아니라 매핑 테이블 조회다.

---

## 3. Category와 Set 선언

**값은 이 문서에 두지 않는다.** 본 절은 Set의 성질과 Option 문법만 선언한다.

| Category | 포함 Set | 비고 |
|---|---|---|
| `Color` | `Blue` `Red` `Green` `Purple` `Gray` | `DIM`은 Base가 아니다. 반투명은 Intent가 색 참조와 `Effect/Opacity` 참조를 조합한다. |
| `Typography` | `Font Family` `Font Size` `Font Weight` `Line Height` `Letter Spacing` | `Line Height`와 `Letter Spacing`만 composite Option을 쓴다. |
| `Layout` | `Space` `Size` | Space는 빈 공간, Size는 오브젝트 크기다. |
| `Shape` | `Radius` `Stroke` | 0은 만들지 않는다. |
| `Effect` | `Opacity` | 0부터 100까지의 불투명도 퍼센트다. |

### 3.1 Set 선언표

| Set | 유형 | Option 문법 | 방향·의미 |
|---|---|---|---|
| `Color/Blue` `Color/Red` `Color/Green` `Color/Purple` | `scale` | `05`부터 `90`까지의 밝기 단계 | 번호가 커질수록 어두워진다. 가장 어두운 유채색은 무채색과 구분돼야 한다. |
| `Color/Gray` | `scale` | `00`, `05`, `10` … `90`, `99` | `00`은 흰색 앵커, `99`는 검정 앵커다. |
| `Typography/Font Family` | `nominal` | `Sans` `Serif` | 역할 중립 분류다. 실제 서체명은 값으로만 존재한다. |
| `Typography/Font Size` | `scale` | px 스케일 식별값 | 값이 커질수록 글자 크기가 커진다. |
| `Typography/Font Weight` | `scale` | CSS `font-weight` 식별값 | 값이 커질수록 굵어진다. |
| `Typography/Line Height` | `composite` | `{Font Size}-{Ratio}` | `Font Size × Ratio`로 계산되는 px 값이다. |
| `Typography/Letter Spacing` | `composite` | `{Font Size}-i1` 또는 `{Font Size}-i3` | `i`는 inverse를 뜻하며 음수 자간 비율이다. |
| `Layout/Space` | `scale` | px 스케일 식별값 | 오브젝트 밖의 여백·간격이다. |
| `Layout/Size` | `scale` | px 스케일 식별값 | 오브젝트 자체의 너비·높이다. |
| `Shape/Radius` | `scale` | px 스케일 식별값 | 둥글기 값이다. 0은 토큰 부재로 표현한다. |
| `Shape/Stroke` | `scale` | px 스케일 식별값 | 선 두께 값이다. 0은 토큰 부재로 표현한다. |
| `Effect/Opacity` | `scale` | percent 식별값 | 값도 퍼센트 기준이다. 0은 완전 투명, 100은 완전 불투명이다. |

### 3.2 Space vs Size 판별

`Space`는 오브젝트 **밖**의 공간이고, `Size`는 오브젝트 **자체**의 크기다.

판별 질문: “이 값이 오브젝트 사이 또는 오브젝트 경계와 내용 사이의 빈 공간인가?”

- 예 → `Layout/Space`
- 아니오 → `Layout/Size`

### 3.3 composite Set의 문법

```text
Typography/Line Height/{Font Size}-{Ratio}
  Ratio ∈ { 110, 120, 130, 140, 150 }

Typography/Letter Spacing/{Font Size}-{Inverse Ratio}
  Inverse Ratio ∈ { i1, i3 }
```

- `Font Size` 부분은 `Typography/Font Size`에 존재하는 Option이어야 한다.
- `Line Height` 값은 `Font Size × Ratio`다.
- `Letter Spacing` 값은 `Font Size × 음수 비율`이며 px로 고정한다.
- Figma의 letterSpacing 변수는 value에만 바인딩되고 unit은 노드에 남으므로, 상대값 `%`를 직접 쓰지 않는다.

---

## 4. Color 규칙

| 규칙 ID | 규칙 |
|---|---|
| `FND-13` | Color Set은 `Blue` `Red` `Green` `Purple` `Gray`만 허용한다. `Yellow`와 `Sky`는 이 Base 컬렉션의 Set이 아니다. |
| `FND-14` | 유채 색상은 밝기 단계 `05`부터 `90`까지를 사용한다. `00`과 `99` 앵커는 `Gray`에만 있다. |
| `FND-15` | 같은 Option 번호가 hue 간 동일 대비를 보장하지 않는다. Intent는 Role별 매핑표로 참조 색상을 결정해야 한다. |
| `FND-16` | Base에는 알파 색상이 없다. 반투명은 Intent에서 색 참조와 `Effect/Opacity` 참조를 조합한다. |

---

## 5. 값 등록부의 위치

| 규칙 ID | 규칙 |
|---|---|
| `FND-12` | 원시값의 정본은 [../../token/Base.json](../../token/Base.json)이다. 본 문서에는 값을 기재하지 않는다. |

- 형식: W3C DTCG — `$value` / `$type` / `$description`
- 길이 값은 `{ "value": n, "unit": "px" }` 객체다.
- 경로 구조는 네이밍 문법과 1:1로 대응한다.
- `Typography/Line Height`와 `Typography/Letter Spacing`은 composite Option으로 표현한다.
- 이 파일은 코드 생성, Figma Variable API 동기화, 린트의 공통 입력이다.

---

## 6. 검증 규칙 (Lint)

| 규칙 ID | 검증 내용 |
|---|---|
| `FND-L01` | 모든 Base 이름은 `Category/Set/Option` 3세그먼트 구조여야 한다. |
| `FND-L02` | Category는 `Color` `Typography` `Layout` `Shape` `Effect` 중 하나여야 한다. |
| `FND-L03` | Set은 §3에 선언된 닫힌 집합에 포함되어야 한다. |
| `FND-L04` | Option 내부 하이픈은 `Typography/Line Height`와 `Typography/Letter Spacing`에서만 허용한다. |
| `FND-L05` | `Typography/Line Height`의 Option은 `{Font Size}-{110|120|130|140|150}` 형식이어야 한다. |
| `FND-L06` | `Typography/Letter Spacing`의 Option은 `{Font Size}-{i1|i3}` 형식이어야 한다. |
| `FND-L07` | Base 토큰은 alias 참조를 가질 수 없다. `$value`는 원시값이어야 한다. |
| `FND-L08` | 코드 변환 결과는 대소문자 접힘 후에도 전역 유일해야 한다. |
| `FND-L09` | 코드명 → Figma명 역변환은 lookup을 우선해야 한다. 파싱 기반 복원 로직은 위반이다. |
| `FND-L10` | composite Set의 등록 값은 §3.3의 계산식과 일치해야 한다. |
| `FND-L11` | 값 `0`이 미적용을 뜻하는 `Radius`와 `Stroke`에는 0 Option이 있으면 안 된다. |
| `FND-L12` | 유채 Color Set에는 `00`·`99` Option이 있으면 안 되고, `Gray`에는 둘 다 있어야 한다. |
| `FND-L13` | `Effect/Opacity`의 값은 유리수 0..1이 아니라 Option과 같은 퍼센트 값이어야 한다. |

---

## 7. 검토 노트 (Open Issues)

1. **Intent Theme 참조 마이그레이션 필요** — 기존 `token/Intent-theme.json`은 `Color/Yellow`, `Color/Sky`, `Color/Gray/1300`, `Effect/Opacity/0400` 등 구 Base 키를 참조한다. Base 기준 변경 후 Intent 매핑표를 별도 개정해야 한다.
2. **Figma 동기화 대상 분리 필요** — 이번 기준은 FigJam 워크숍 보드와 Ihwa Base 컬렉션이다. 기존 AI Readable Design System 파일에 같은 값을 주입할지, Ihwa를 새 기준 파일로 삼을지 결정이 필요하다.
3. **FND 린트 실행화** — 생성기에는 출력 안정성 검사가 들어 있지만 `FND-L01`~`FND-L13` 전체를 독립 린트 스크립트로 실행하지는 않는다.
