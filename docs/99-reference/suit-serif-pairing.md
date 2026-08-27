# SUIT과 짝지을 세리프(Serif) 폰트 리서치

작성일: 2026-08-18
목적: Font Family 토큰 세트에서 SUIT(산세리프, UI 본문용)와 함께 쓸 세리프 폰트 후보 조사 및 추천

---

## 1. 기준이 되는 SUIT의 스펙

추천 기준을 세우기 전에, 짝을 맞춰야 할 대상인 SUIT 자체의 스펙을 먼저 정리했다.

| 항목 | 내용 |
|---|---|
| 제작 | Sun(sunn.us), 2023년 공개 |
| Weight | 9단계 (Thin ~ Heavy) |
| 가변폰트 | 지원 (Variable Font) |
| 라이선스 | SIL OFL — 상업적 사용 포함 자유 이용 |
| 설계 목적 | UI 본문용. 한글의 기하학적 형태에 맞춰 라틴 문자·숫자를 새로 그렸고, 수직 메트릭스를 통일해 버튼·아이콘과 별도 보정 없이 정렬되도록 설계 |
| 조형 톤 | 기하학적(Geometric), 차갑고 정제된 인상. 곡선보다 직선·원의 조합에 가까움 |

이 스펙 자체가 세리프 후보를 고르는 기준의 뼈대가 된다 — SUIT이 "9단계 가변폰트 · OFL · 온스크린 최적화 · 기하학적 톤"이라는 4가지 축으로 설계된 이상, 짝이 되는 세리프도 같은 축에서 얼마나 벌어지지 않는지를 봐야 시스템으로서 결이 맞는다.

## 2. 추천 기준

아래 6가지 기준으로 후보를 평가했다. 상위 3개(언어·라이선스·확장성)는 시스템 편입 가능 여부를 가르는 필수 기준이고, 하위 3개(형태 정합성·용도·검증 사례)는 실제 사용 품질을 가르는 기준이다.

1. **언어 커버리지** — 한글 완성형과 라틴 문자가 한 세트 안에서 동일한 완성도로 설계되었는가. 라틴을 별도 폰트로 대체해야 한다면 시스템 일관성이 깨진다.
2. **라이선스** — 상업적 사용과 웹폰트 배포가 자유로운가(SIL OFL 또는 이에 준하는 조건). 재배포·서브셋팅 제약이 있으면 토큰 시스템에 실무적으로 올리기 어렵다.
3. **Weight 다양성 / 가변폰트 지원** — SUIT의 9단계 체계에 맞춰 확장할 여지가 있는가. 굵기가 1~2종뿐이면 시맨틱 토큰에서 강조 단계를 세리프로 표현할 수 없다.
4. **형태적 정합성** — x-height, 스트로크 대비, 곡선 처리가 SUIT의 기하학적 톤과 극단적으로 충돌하지 않는가. 완전히 반대 톤(붓글씨 느낌 등)이면 페어링이 아니라 이질감으로 읽힌다.
5. **용도 적합성** — 온스크린 UI 가독성에 최적화되었는지, 출판/에디토리얼용으로 설계되었는지. SUIT이 UI용이므로 세리프의 역할(인용구, 헤드라인, 에디토리얼 섹션 등)을 명확히 하는 게 전제된다.
6. **실사용 검증 사례** — 다른 프로덕트나 디자인 시스템에서 채택된 선례가 있는가. 선례가 있으면 렌더링 이슈(자간, 웹폰트 최적화 등)가 이미 걸러졌을 가능성이 높다.

## 3. 후보 비교

| 후보 | 언어 커버리지 | 라이선스 | Weight/가변 | 형태 톤 | 용도 |
|---|---|---|---|---|---|
| **Source Han Serif KR (Noto Serif KR)** | 한글 11,172자 완성형 + 한자 + 라틴, Adobe/Google 공동 설계 | SIL OFL | 7단계 정적 + Adobe Fonts 가변 버전 지원 | 전통 명조 계열이지만 Adobe Originals 수준으로 정제된 스트로크 대비 | Pan-CJK 표준급, UI·에디토리얼 겸용 가능 |
| **Ridibatang (리디바탕)** | 한글 중심, 라틴은 보조 수준 | SIL OFL 1.1 (폰트 자체 유료 판매만 금지) | 1종(Regular)만 존재, 가변 미지원 | 얇은 스트로크, 넓은 여백 — 전자책 화면 가독성에 특화 | 온스크린 리딩 최적화, 짧은 인용구·캡션에 적합 |
| **Gowun Batang (고운바탕)** | 한글 중심 | OFL, Google Fonts 등록 | 2종(Regular/Bold) | 손글씨 느낌의 부드러운 세리프, 웜(warm)한 인상 | 산세리프 짝 폰트(고운돋움)로 설계된 페어링 선례 보유 |
| **KoPub World 바탕체** | 한글 중심, 출판 표준 | 한국출판문화산업진흥원 무료 배포(별도 이용조건 확인 필요) | 3종(Light/Medium/Bold) | 정통 명조, 출판·공문서 맥락에 강함 | 문서·출판용, 웹 임베드 시 라이선스 조건 재확인 필요 |

## 4. 추천

**1순위 — Source Han Serif KR (Noto Serif KR)**

6가지 기준 중 라이선스·언어 커버리지·확장성 3가지에서 SUIT과 가장 결이 맞는다. Adobe/Google이라는 검증된 제작 주체가 SUIT처럼 "가변폰트로 넓은 굵기 스펙트럼을 제공"하는 동일한 설계 철학을 가지고 있어, Foundation 토큰 단계에서 굵기를 세분화해도 시스템이 끊기지 않는다. 다만 명조 특유의 붓끝 세리프가 SUIT의 순수 기하학적 조형과는 대비가 강한 편이므로, 본문 전체를 대체하기보다 헤드라인·인용구·에디토리얼 섹션 등 역할을 명확히 분리해서 쓰는 것을 권장한다.

**2순위 — Ridibatang (제한적 용도)**

가변폰트나 다단계 굵기가 없어 시스템 확장성 기준에서는 밀리지만, "온스크린 가독성 최적화"라는 설계 목적 자체가 SUIT과 가장 가깝다. 짧은 인용구·캡션처럼 굵기 변화가 필요 없는 단일 텍스트 블록에 한정해서 쓰면 SUIT의 UI 중심 철학과 부딪히지 않는다.

**보류 — Gowun Batang, KoPub World 바탕체**

Gowun Batang은 손글씨 느낌이 SUIT의 차가운 기하학적 톤과 결이 달라 우선순위에서 밀렸고, KoPub World 바탕체는 형태 자체는 안정적이나 라이선스 조건을 실제 배포 전에 재확인해야 한다는 점에서 후순위로 두었다.

## 5. 적용 시 주의사항

- 세리프를 본문 전체 교체용이 아니라 **역할 기반(헤드라인 강조, 인용구, 에디토리얼)** 으로 토큰에 등록할 것 — Token System 문서의 Semantic 티어 원칙(의도 기반 네이밍)과도 맞는 방향이다.
- 두 폰트를 나란히 배치했을 때 x-height 차이로 시각적 무게가 달라 보일 수 있으므로, 실제 베이스라인 그리드에 올려 놓고 눈으로 확인하는 검증 단계를 거칠 것.
- SUIT 쪽 계열사(SUITE 등 sunn.us 제작 폰트)에는 아직 자체 세리프가 없어, 이번 페어링은 동일 제작사 세트가 아니라 크로스 파운드리 조합이라는 점을 감안해야 한다.

## 출처

- [SUIT — Sun](https://sun.fo/suit/)
- [GitHub - sunn-us/SUIT](https://github.com/sunn-us/SUIT)
- [Suit | Noonnu](https://noonnu.cc/en/font_page/845)
- [Source Han Serif Korean Subset Variable | Adobe Fonts](https://fonts.adobe.com/fonts/source-han-serif-korean-subset-variable)
- [Source Han Serif — Wikipedia](https://en.wikipedia.org/wiki/Source_Han_Serif)
- [리디바탕 | 눈누](https://noonnu.cc/en/font_page/324)
- [리디바탕 — RIDI Corporation](https://ridicorp.com/ridibatang/)
- [Gowun Batang - Google Fonts](https://fonts.google.com/specimen/Gowun+Batang)
- [GitHub - yangheeryu/Gowun-Batang](https://github.com/yangheeryu/Gowun-Batang)
- [순바탕 — 한국출판문화산업진흥원](https://baro.kpipa.or.kr/font/)
- [순바탕 | 눈누](https://noonnu.cc/en/font_page/289)
