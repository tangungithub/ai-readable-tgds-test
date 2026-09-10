# AGENTS.md

> AI Readable Design System (TGDS) 레포에서 작업할 때 먼저 읽는다.
> 이 파일은 **규칙이 아니라 지도**다. 규칙 자체는 `docs/A-token/`의 규범 문서에 있고, 이 파일과 어긋나면 **규범 문서가 정본**이다.

## 이 레포는 무엇인가

디자인 시스템 **원칙의 구현 체크리스트**다. 6개 영역 · 24개 단위 × 6개 구현 축 = 132칸이고, 빈칸이 그대로 할 일이다.
동시에 토큰 시스템의 **규범 문서와 값 등록부**를 담고 있다.

`AI Readable` = 추가 설명 문서 없이, **구조 자체만으로** AI가 의도를 오류 없이 해석할 수 있는 상태.

## 정본이 어디인가 — 가장 중요한 규칙

| 무엇 | 정본 | 비고 |
|---|---|---|
| 토큰 **규칙** | `docs/A-token/{token,foundation,semantic,component-token}.md` | 파일명이 평문 슬러그 |
| 토큰 **값** | `tokens/*.tokens.json` | **md에 값을 쓰지 않는다** |
| 진행 현황 | 루트 `README.md` 대시보드 + 각 영역 `README.md` | |
| 생성물 | `src/tokens/*` | **손으로 고치지 않는다** |

**규칙은 md, 값은 json (TKN-03 · FND-12).** 이게 이 레포의 중심 규칙이다.
색 하나 바꾸는 데 md를 열지 않고, 규칙 하나 바꾸는 데 json을 열지 않는다.
md와 json이 어긋나면 **json이 맞다.**

## 규칙 ID의 접두 = 소유 파일

| 접두 | 파일 | 담당 |
|---|---|---|
| `TKN-*` | `docs/A-token/token.md` | 전 계층 공통 헌법, 문서 지도, 시스템 범위 |
| `FND-*` | `docs/A-token/foundation.md` | 원시값의 절대 규칙, Set 선언, 예외 대장 |
| `SEM-*` | `docs/A-token/semantic.md` | 의도 네이밍, 3컬렉션의 닫힌 집합 |
| `CMP-*` | `docs/A-token/component-token.md` | 컴포넌트 문법, 입장 규칙 |
| `*-L**` | 각 파일의 검증 규칙 절 | 린트 (`FND-L01`, `SEM-L04`, `CMP-L02`) |
| `DENY-*` | `docs/F-governance/` | 게이트웨이 |

`SEM-C02`를 보면 `semantic.md`를 열면 된다. **다른 파일의 규칙을 고치려면 그 파일을 열어야 한다.**

## 어떤 작업에 무엇을 읽는가

`docs/A-token/token.md` §2에 로드 트리거 표가 있다. 요약하면:

- 원시값의 **규칙**을 바꾼다 → `token.md` + `foundation.md`
- 원시값의 **값**을 바꾼다 → `tokens/foundation.tokens.json`만
- 의도 토큰을 추가한다 → `token.md` + `semantic.md`
- 컴포넌트를 만든다 → `token.md` + `component-token.md` + `semantic.md`

**필요 없는 파일은 읽지 않는다.** 문서를 나눈 목적은 파일 수가 아니라 **작업당 로드 토큰 수**를 줄이는 것이다.

## 문서 작성 규약

- **YAML 프론트매터를 쓰지 않는다.** H1 다음에 `> 담당: …` / `> 목표: …` blockquote 역할 카드를 둔다
- 파일명은 **ASCII 영문 kebab-case**, 본문은 **한국어**. 파일명에 한글을 쓰지 않는다
- `docs/` 아래는 **1단계만**. 더 깊게 중첩하지 않는다
- 링크는 **상대 경로**만. 위키 링크·절대 URL을 쓰지 않는다
- 규칙 ID는 인라인 코드로 표기한다
- 두 장르가 있다: **규범 문서**(평문 슬러그) / **단위 트래커**(`A#-` 접두, 6축 진행 표)
- 단위 트래커의 6축 순서는 고정: 원칙 설계 / 네이밍 규칙 / 사용 규칙 / 확장 규칙 / 판별 테스트 / 코드 동기화
- 판정: `✅ 1점` `🟡 0.5점` `⬜ 0점` `— 제외`. **"문서를 썼다"는 ✅가 아니다**

### 문서를 추가하면 세 곳을 같이 고친다

1. 루트 `README.md`의 해당 영역 대시보드 표 (라벨을 링크로)
2. 루트 `README.md`의 `## 📁 문서 구조` 트리
3. 해당 영역 `README.md`의 `## 현황` 표

## 하지 말아야 할 것

- **`src/tokens/*`를 손으로 고치지 말 것.** 생성물이다. 생성기의 입력은 `tokens/foundation.tokens.json`이다
- **md에 토큰 값을 쓰지 말 것** (FND-12)
- **`docs/99-reference/research.md`의 `⛔ 절대 쓰면 안 되는 것` 목록에 있는 수치를 인용하지 말 것**
- **새 규칙 ID 네임스페이스를 발명하지 말 것.** F1에서 아직 논의 중이다

## 지금 열려 있는 미결

| # | 내용 | 상세 |
|---|---|---|
| 1 | **Figma 변수 동기화** — 문서·등록부는 재배치된 색값이 정본인데 Figma에는 구값이 남아 있다 | `docs/A-token/foundation.md` §1.8 |
| 2 | **린트 실행화** — `FND-L01~L11`, `SEM-L01~L06`, `CMP-L01~L05`가 표로만 존재한다. 입력이 될 json이 생겼으니 스크립트로 만들 수 있다 | 각 규범 문서의 검증 규칙 절 |

미결의 전체 목록은 각 규범 문서 끝의 `## 검토 노트 (Open Issues)`에 있다.

## 빌드

```bash
npm run tokens:build   # scripts/generate-tokens.mjs → src/tokens/*
npm run dev            # tokens:build + vite
npm run build          # tokens:build + tsc + vite build
```

`dev`·`build` 모두 `tokens:build`를 먼저 돌리므로, 생성기가 죽으면 아무것도 실행되지 않는다.
