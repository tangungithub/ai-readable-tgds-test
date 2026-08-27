# tokens/ — 값 등록부

> **모든 토큰 값의 정본.** 규칙은 `docs/A-token/`의 md 파일이, **값은 이 디렉터리가** 소유한다 (TKN-03 · FND-12).
> md와 이 디렉터리가 어긋나면 **이 디렉터리가 정본**이다.

## 파일

| 파일 | 계층 | 내용 |
|---|---|---|
| `foundation.tokens.json` | Foundation | 원시값 전량 — Color 8세트, Typography, Layout, Shape, Effect |
| *(예정)* `semantic.tokens.json` | Semantic | Theme / Scale / Constant 3컬렉션 |
| *(예정)* `component.tokens.json` | Component | 컴포넌트별 토큰 |

## 형식

W3C DTCG(Design Tokens Format Module) — `$value` / `$type` / `$description`.

- 길이 값은 `{ "value": n, "unit": "px" }` 객체다.
- 경로 구조는 네이밍 문법과 1:1로 대응한다: `Color` → `Blue` → `0700` = `Color/Blue/0700`.
- `Typography/Line Height`와 `Typography/Letter Spacing`은 **생성물**이다. 손으로 고치지 않고 생성 규칙([foundation.md](../docs/A-token/foundation.md) §1.4.1)으로 재생성한다.

## 소비처

Style Dictionary 빌드, Figma Variable API 동기화, 린트(`FND-L*`)의 **공통 입력**이다.

> ⚠️ **현재 `scripts/generate-tokens.mjs`는 이 파일을 읽지 않는다.**
> 생성기는 구 스펙(`docs/A-token/token-system.md` §1.6의 JSON 블록)을 입력으로 삼고 있어 `src/tokens/*`는 아직 구값 기준이다.
> 생성기를 이 디렉터리로 재연결하는 작업이 미결이다 — [token.md](../docs/A-token/token.md) 참조.
