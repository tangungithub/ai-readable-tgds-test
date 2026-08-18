# A. Token 체계

> 담당하는 것: **값의 의미와 위계**
> 목표: 정의서만 주면 AI가 토큰 체계를 읽고 **신규 Component Token을 오류 없이 생성·적용**한다

원본 자료: Figma Design `3YWinWXfs4AjGlJ59i9BFE` node `8174:1739` — "Token System Principles" (Adobe Spectrum 기반)

---

## 현황

| 단위 | 원칙 설계 | 네이밍 규칙 | 사용 규칙 | 확장 규칙 | 판별 테스트 | 코드 동기화 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| [A1 Foundation](A1-foundation.md) | 🟡 | ✅ | 🟡 | 🟡 | 🟡 | ⬜ |
| [A2 Semantic — Theme](A2-semantic-theme.md) | 🟡 | 🟡 | 🟡 | ⬜ | 🟡 | ⬜ |
| [A3 Semantic — Responsive](A3-semantic-responsive.md) | 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |
| [A4 Component Token](A4-component-token.md) | 🟡 | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |
| [A5 컬렉션 구조·참조·Mode](A5-collection-structure.md) | ✅ | — | 🟡 | ⬜ | ⬜ | ⬜ |

**진행률 8.5 / 29 ≈ 29%**  (✅ 1점 · 🟡 0.5점 · ⬜ 0점 · — 제외)

---

## 확정된 위계

| 티어 | 문법 | 예시 |
|---|---|---|
| **Foundation** | `Scale/Step` | `Red/300`, `Font Family/Gmarket Sans` |
| **Semantic (Theme)** | `Target/Role/Variant` | `Surface/Accent/Primary` |
| **Semantic (Responsive)** | `Target/Role/Variant` | `Padding/Container/Medium` |
| **Component** | `Component/Variant/State/Property` | `Button/Primary/Default/Surface` |

- 참조는 **단방향**: Foundation → Semantic → Component
- Foundation은 **비색상 포함 전부 2단**
- Semantic은 **의도만** 담고 **State를 배제** — state는 Component 티어에서만
- Component 토큰은 **판별 축만 표기** (Size 토큰이면 color 축 제외)
- Figma 변수명은 **띄어쓰기**로 단어 구분, 코드 변환 시 **camelCase**

---

## 이 영역을 막고 있는 것 (우선순위 순)

| # | 항목 | 막히는 축 | 왜 지금 해야 하는가 |
|---|---|---|---|
| 1 | **계층 간 어휘 불일치** — Primary vs Brand 혼용, Text Muted 미정의 | 네이밍 | 어휘가 흔들리면 아래 모든 규칙이 재작성됨. **최우선** |
| 2 | **Variant enum이 열려 있음** — "등"으로 끝남 | 네이밍 | 열린 집합은 판별 테스트를 만들 수 없음 |
| 3 | **Duration·Easing·Shadow의 Semantic 부재** | 원칙 설계 | Component가 참조할 상위가 없어 **참조 데드락** |
| 4 | **Background 스텝 매핑 기준 불명** — Mode 기준인가 Role 기준인가 | 사용 규칙 | A2 사용 규칙 전체가 여기 걸려 있음 |
| 5 | **Semantic Responsive 상세 규칙 공백** | 사용 규칙 | 문법만 있고 값 매핑 규칙이 없음 |
| 6 | **판별 테스트 중복** — 원칙 문서 3장·7장에 중복 존재 | 판별 테스트 | 두 벌이 어긋나면 어느 쪽이 규칙인지 알 수 없음 |
| 7 | **`_` 접두사와 네이밍 규칙 충돌** | 네이밍 | 예외인지 위반인지 불명 |
| 8 | **상태 비의존 속성(Radius 등) 예외 미정** | 네이밍 | A4 네이밍이 여기서 멈춤 |
| 9 | **codeSyntax 변환 규칙 미정의** | 코드 동기화 | 띄어쓰기 → camelCase 변환이 문서로 없음 |
| 10 | **규칙 ID · machine-readable 병행본 부재** | 판별 테스트 / 코드 동기화 | 게이트웨이(F2)가 참조할 대상이 없음 |
