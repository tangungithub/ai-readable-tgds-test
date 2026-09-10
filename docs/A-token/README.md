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
**값은 md에 없다.** 모든 원시값은 [`tokens/foundation.tokens.json`](../../tokens/foundation.tokens.json)이 정본이다(TKN-03).

> ~~token-system.md~~ 는 v0.2에서 멈춘 구 스펙이었다. 생성기가 `tokens/foundation.tokens.json`으로 재연결되면서 삭제되었다.

---

## 현황

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| [A1 Foundation](foundation.md) | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 |
| [A2 Semantic — Theme](A2-semantic-theme.md) | 🟡 | 🟡 | 🟡 | ⬜ | 🟡 | ⬜ |
| [A3 Semantic — Responsive](A3-semantic-responsive.md) | 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |
| [A4 Component Token](A4-component-token.md) | 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |
| [A5 컬렉션 구조·참조·Mode](A5-collection-structure.md) | ✅ | — | 🟡 | ⬜ | ⬜ | ⬜ |

**진행률 8.5 / 29 ≈ 29%**  (✅ 1점 · 🟡 0.5점 · ⬜ 0점 · — 제외)

### A1 재판정 근거 (token-system.md v0.1 기준)

| 축 | 이전 | 이후 | 근거 |
|---|:---:|:---:|---|
| 원칙 설계 | 🟡 | 🟡 | FND-01·FND-10 으로 책임 경계와 leaf 성격이 문장화됨. 다만 **13단계를 택한 근거**는 여전히 없음 |
| 네이밍 규칙 | ✅ | **🟡** | 문법은 3세그먼트로 닫혔으나 **Color 의 Set 목록이 미정의(열린 enum)**. "enum 이 하나라도 열려 있으면 🟡을 넘지 못한다"는 판정 원칙을 적용 |
| 사용 규칙 | 🟡 | 🟡 | FND-01·07·10 으로 금지 사항은 생겼으나, Do/Don't 예시와 **Space ↔ Size 판별 기준**(1.8 #5)이 없음 |
| 확장 규칙 | 🟡 | 🟡 | FND-06·07 예외 표기법과 사전 등록제 + 등록 대장 확보. **승인자 지정과 폐기 절차**가 없음 |
| 판별 테스트 | 🟡 | 🟡 | FND-L01~L08 로 규칙 ID 와 machine-readable 병행본 확보. Color·Easing 이 TBD 라 **FND-L02 를 전 범위에 적용할 수 없음** |
| 코드 동기화 | ⬜ | **🟡** | FND-08 로 변환 규칙이 선언되고, 스키마에서 CSS·TS 를 생성하는 경로가 생김. **동기화 방향(Figma 원본 vs 코드 원본)과 어긋남 감지**는 미정 |

> 합계는 3.0 으로 이전과 같다. 네이밍이 내려가고 코드 동기화가 올라간 것이 상쇄된 결과이며, 진전이 없었다는 뜻은 아니다.

---

## 확정된 위계

| 티어 | 문법 | 예시 |
|---|---|---|
| **Foundation** | `Category/Set/Option` (3세그먼트 고정) | `Typography/Font Size/0400`, `Typography/Font Family/Sans` |
| **Semantic (Theme)** | `Target/Role/Variant` | `Surface/Accent/Primary` |
| **Semantic (Responsive)** | `Target/Role/Variant` | `Padding/Container/Medium` |
| **Component** | `Component/Variant/State/Property` | `Button/Primary/Default/Surface` |

- 참조는 **단방향**: Foundation → Semantic → Component
- Foundation 의 Category 는 **닫힌 6종**: `Color` `Typography` `Layout` `Shape` `Effect` `Motion` (FND-03)
- Foundation 은 **어떤 토큰도 참조하지 않는 말단(leaf)** (FND-10)
- Semantic 은 **의도만** 담고 **State 를 배제** — state 는 Component 티어에서만
- Component 토큰은 **판별 축만 표기** (Size 토큰이면 color 축 제외)
- Figma 변수명은 **띄어쓰기**로 단어 구분, 코드 변환은 **세그먼트 경계는 중첩 · 세그먼트 내부는 camelCase · 숫자 Option 은 bracket** (FND-08)

---

## 이 영역을 막고 있는 것 (우선순위 순)

| # | 항목 | 막히는 축 | 왜 지금 해야 하는가 |
|---|---|---|---|
| 1 | **Color Set 미정의** — 팔레트·스텝 수·스텝 번호의 의미(명도 앵커/대비 앵커, 방향) | 네이밍 / 판별 테스트 | Foundation 에서 유일하게 열려 있는 enum. **A1 네이밍이 ✅로 못 가는 단일 원인**이자 Semantic 매핑의 전제 |
| 2 | **계층 간 어휘 불일치** — Primary vs Brand 혼용, Text Muted 미정의 | 네이밍 | 어휘가 흔들리면 아래 모든 규칙이 재작성됨 |
| 3 | **Variant enum 이 열려 있음** — "등"으로 끝남 | 네이밍 | 열린 집합은 판별 테스트를 만들 수 없음 |
| 4 | **Duration·Easing·Shadow 의 Semantic 부재** | 원칙 설계 | Component 가 참조할 상위가 없어 **참조 데드락**. Easing 은 Foundation 커브값(0100~0900)부터 미정 |
| 5 | **Background 스텝 매핑 기준 불명** — Mode 기준인가 Role 기준인가 | 사용 규칙 | A2 사용 규칙 전체가 여기 걸려 있음 |
| 6 | **Semantic Responsive 상세 규칙 공백** | 사용 규칙 | 문법만 있고 값 매핑 규칙이 없음 |
| 7 | **`_` 접두사와 네이밍 규칙 충돌** | 네이밍 | 예외인지 위반인지 불명 |
| 8 | **상태 비의존 속성(Radius 등) 예외 미정** | 네이밍 | A4 네이밍이 여기서 멈춤 |
| 9 | **동기화 방향 미정** — Figma 가 원본인가 코드가 원본인가 | 코드 동기화 | 변환 규칙(FND-08)은 생겼으나 어긋남 발생 시 어느 쪽을 고칠지 정해지지 않음 |

> 이전 목록의 "codeSyntax 변환 규칙 미정의"와 "규칙 ID · machine-readable 병행본 부재"는 token-system.md 로 해소되어 제거했다.
