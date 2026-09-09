---
name: Token
description: 토큰 시스템의 진입점. 문서 지도와 로드 트리거, 전 계층 공통 헌법(TKN-*)을 정의한다. 개별 토큰과 계층별 규칙은 이 파일에 두지 않는다.
owns: TKN-*
budget: 150 lines
---

# Token System — 가이드

> 본 파일은 **라우터이자 헌법**이다. 어떤 파일을 읽어야 하는지와, 전 계층에 공통으로 적용되는 규칙만 담는다.
> 계층별 규칙과 토큰 등록부는 각 파일이 소유한다. **필요한 파일만 읽는다.**

- 문서 버전: v0.5 (2026-09-09)
- 변경 이력은 §5

---

## 1. 문서 지도

| 파일 | 소유 규칙 | 담는 것 | 예산 |
|---|---|---|---|
| **[token.md](token.md)** (본 파일) | `TKN-*` | 문서 지도, 로드 트리거, 공통 헌법, 시스템 범위 선언 | 150줄 |
| **[foundation.md](foundation.md)** | `FND-*` | 원시값의 절대 규칙, 스케일·예외 대장, 값 등록부, 린트 | 300줄 |
| **[semantic.md](semantic.md)** | `SEM-*` | 의도 네이밍, 3컬렉션의 닫힌 집합과 모드 스키마, 린트 | 400줄 |
| **[component-token.md](component-token.md)** | `CMP-*` | 컴포넌트 네이밍 문법, 입장 규칙, 컴포넌트 인덱스, 린트 | 200줄 |
| **components/{Component}.md** | — | 개별 컴포넌트의 토큰 등록부(표만) | 각 100줄 |
| **[tokens/*.tokens.json](../../tokens/)** | — | **모든 토큰 값의 정본**(DTCG 형식). 규칙은 md, 값은 여기 | — |

**규칙 ID의 접두는 곧 소유 파일이다.** `SEM-C02`를 보면 `semantic.md`를 열면 된다. 린트 규칙은 `*-L**` 형식을 쓴다(`FND-L01`, `SEM-L04`, `CMP-L02`).

## 2. 로드 트리거 — 어떤 작업에 무엇을 읽는가

| 작업 | 읽을 파일 |
|---|---|
| 원시값의 **규칙**을 바꾼다 (스케일 성질, 예외 등록) | [token.md](token.md) + **[foundation.md](foundation.md)** |
| 원시값의 **값**을 바꾼다 | **[tokens/foundation.tokens.json](../../tokens/foundation.tokens.json)**만 |
| 의도 토큰을 추가한다 (색 역할, 간격 역할, 타이포 역할) | [token.md](token.md) + **[semantic.md](semantic.md)** |
| 컴포넌트를 새로 만든다 | [token.md](token.md) + **[component-token.md](component-token.md)** + semantic.md |
| 기존 컴포넌트의 토큰을 고친다 | [token.md](token.md) + component-token.md + **components/{해당}.md** |
| 토큰 이름을 코드로 변환한다 | [token.md](token.md) (TKN-04)만 |
| 시스템 전체 구조를 파악한다 | [token.md](token.md)만 |

**필요 없는 파일은 읽지 않는다.** 이 문서 집합이 나뉜 목적은 파일 수를 줄이는 것이 아니라 **작업당 로드 토큰 수를 줄이는 것**이다.

## 3. 공통 헌법 (TKN)

| 규칙 ID | 규칙 |
|---|---|
| TKN-01 | 계층은 **Foundation → Semantic → Component** 3단이며, 참조는 **단방향 1단계 하향**만 허용한다. 계층을 건너뛰거나 역방향으로 참조할 수 없다. |
| TKN-02 | 규칙 ID의 접두는 소유 파일과 1:1로 대응한다: `TKN` / `FND` / `SEM` / `CMP`. 다른 파일의 규칙을 개정하려면 그 파일을 열어야 한다. |
| TKN-03 | **규칙과 값의 정본을 분리한다.** 규칙은 md 파일이, **값은 `../../tokens/*.tokens.json`이 정본**이다. md에는 값을 기재하지 않으며, 둘이 어긋나면 등록부가 정본이다. |
| TKN-04 | 이름의 정본(canonical form)은 **Figma 표기**다 — 단어를 띄어쓰기로 구분하고 각 단어는 대문자로 시작한다(예: `Font Size`). 계층 구분은 `/`를 사용한다. 코드 변환은 선언된 규칙으로만 수행한다: **세그먼트 경계는 중첩으로 보존**, **세그먼트 내부는 camelCase**. 축약어를 사용하지 않는다. |
| TKN-05 | **모든 어휘 목록은 닫힌 집합이다.** 열거된 목록에 없는 이름은 생성할 수 없으며, 목록에 "등"·"기타"를 쓰지 않는다. |
| TKN-06 | **예외는 사전 등록제다.** 각 파일의 등록 대장에 없는 예외는 존재하지 않는 것으로 취급한다. |
| TKN-07 | **시스템 범위**는 §4에 선언한다. 범위 밖 속성은 토큰으로 만들지 않으며, 이는 참조 규칙(TKN-01)의 위반이 아니라 범위 밖 선언이다. |
| TKN-08 | 폐기(deprecation)는 토큰 `$description`에 `[DEPRECATED - use {대체 토큰}]`을 표기하고 유예 기간 후 제거한다. **폐기 표기는 TKN-04의 명명 규칙에서 제외되는 유일한 예외다.** |

## 4. 시스템 범위

| 영역 | 상태 | 비고 |
|---|---|---|
| Color | 정의됨 | 6 hue × 13단계. Gray만 순백·순흑 앵커 `0000`·`1300`을 더해 14단계(FND-16). **알파 Set은 없다** — 반투명은 Semantic이 색 참조와 `Effect/Opacity` 참조를 조합해 만든다(SEM-11). 값은 `../../tokens/foundation.tokens.json` |
| Typography, Layout, Shape, Effect(Opacity) | 정의됨 | `foundation.md` §1.4 |
| **Shadow / Blur** | **보류** | Semantic Theme의 `Shadow` Target도 함께 주석 처리 상태 |
| **Motion (Duration · Easing)** | **범위 밖** | 인터랙션으로 확장할 때 Foundation Category와 함께 재도입한다. 근거 자료는 [easing-token-rule.md](../99-reference/easing-token-rule.md)에 보존 |
| Grid / Breakpoint 값, z-index, 밀도(density) | 범위 밖 | 토큰화하지 않는다 |

Figma 변수로 바인딩할 수 없는 속성(레이어 x·y 위치, 회전, 그라디언트 스톱 위치, 스트로크 대시, 블렌드 모드, 코너 스무딩)은 **어느 계층에서도 토큰으로 만들지 않는다.** 근거는 [semantic-target-survey.md](../99-reference/semantic-target-survey.md) §1.2.

## 5. 변경 이력

| 버전 | 날짜 | 변경 |
|---|---|---|
| v0.5 | 2026-09-09 | **On-color · Inverse · 불투명도 조합 확정** — Semantic Theme의 `Background`를 캔버스 전용으로 좁히고 `Fill` Target 신설, `On {Role}` 7종·`Inverse` Role 추가, 표면·전경 짝 규칙(SEM-T05), 유채 스텝 상한(SEM-T08), 솔리드 Fill 앵커(SEM-T09), 불투명도 조합(SEM-11), 린트 SEM-L07~L12. Foundation은 `Color/White`·`Color/Black` 알파 Set을 폐지하고 `Color/Gray`에 순백·순흑 앵커 `0000`·`1300`을 등록(FND-16). 근거: Figma 2026-09-03 변수 업데이트(색 변수의 불투명도를 number 변수로 alias) |
| v0.4 | 2026-08-27 | **Component 네이밍 문법 작성** — ComponentToken §3.1 확정(가변 축 문법 CMP-N1~N8, 문법 스키마), §3.4 컴포넌트 파일 형식(축 선언·상태 분기 표·상태 비의존 표) 신설, 린트 CMP-L06~L11 추가. Element 판별 기준·상태 매핑 표 형식의 미결 해소 |
| v0.4 | 2026-08-26 | **값 외부화** — 모든 원시값을 `../../tokens/foundation.tokens.json`으로 이전하고 foundation.md는 규칙만 보유(346→160줄). Color Set 확정(6 hue×13단계 + White·Black 11단계). **색 램프를 OKLCH 명도 등간격으로 재배치**(FND-13~15, FND-L11). SEM-T03·T04 신설 |
| v0.3 | 2026-08-26 | **4파일 분리** — 본 파일을 라우터+헌법으로 축소하고 Foundation / Semantic / ComponentToken 분리. FND-08을 TKN-04로 승격. Radius·Stroke에서 0 스텝 제거(FND-11). Space vs Size 판별 기준 확정. Shadow Target 주석 처리 |
| v0.2 | 2026-08-26 | `Typography/Letter Spacing` Set 신설. Line Height·Letter Spacing의 둘째 요소를 순수 서수로 통일. Motion Category 제외(6종→5종). Semantic 3컬렉션(Theme/Scale/Constant) 성문화 |
| v0.1 | 2026-08-18 | Foundation 파트 최초 작성 |

## 6. 관련 문서

| 문서 | 내용 |
|---|---|
| [semantic-target-survey.md](../99-reference/semantic-target-survey.md) | Target 축의 완전 열거, Figma 바인딩 가능 속성 전수, 디자인 시스템 6종 대조 |
| [token-doc-split-research.md](../99-reference/token-doc-split-research.md) | 본 분리 구조의 근거와 파일별 예산 산출 |
| [easing-token-rule.md](../99-reference/easing-token-rule.md) | 범위 밖으로 보류된 Motion/Easing 스케일 설계안 |
| [suit-serif-pairing.md](../99-reference/suit-serif-pairing.md) | Font Family의 Sans/Serif 선정 근거 |
