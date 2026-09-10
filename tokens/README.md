# tokens/ — 값 등록부

> **모든 토큰 값의 정본.** 규칙은 `docs/A-token/`의 md 파일이, **값은 이 디렉터리가** 소유한다 (TKN-03 · FND-12).
> md와 이 디렉터리가 어긋나면 **이 디렉터리가 정본**이다.

## 파일

| 파일 | 계층 | 내용 |
|---|---|---|
| `foundation.tokens.json` | Foundation | 원시값 전량 — Color 6세트(Gray는 순백·순흑 앵커 포함), Typography, Layout, Shape, Effect |
| *(예정)* `semantic.tokens.json` | Semantic | Theme / Scale / Constant 3컬렉션 |
| *(예정)* `component.tokens.json` | Component | 컴포넌트별 토큰 |

## 형식

W3C DTCG(Design Tokens Format Module) — `$value` / `$type` / `$description`.

- 길이 값은 `{ "value": n, "unit": "px" }` 객체다.
- 경로 구조는 네이밍 문법과 1:1로 대응한다: `Color` → `Blue` → `0700` = `Color/Blue/0700`.
- `Typography/Line Height`와 `Typography/Letter Spacing`은 **생성물**이다. 손으로 고치지 않고 생성 규칙([foundation.md](../docs/A-token/foundation.md) §1.4.1)으로 재생성한다.
- Foundation에는 알파(반투명) 값이 없다. `Color/Gray/0000`(순백)·`Color/Gray/1300`(순흑)은 램프 밖의 고정 앵커다(FND-16).

### Semantic 색 토큰의 불투명도 조합 (SEM-11)

Semantic 색 토큰은 **색 참조 1개 + 선택적 불투명도 참조 1개**로 구성한다. 불투명도는 `Effect/Opacity` 스텝만 참조하며, 알파가 섞인 원시값을 `$value`에 직접 적지 않는다.

```json
"Text": { "On Accent": { "Subtle": {
  "$type": "color",
  "$value": "{Color.Gray.0000}",
  "$extensions": { "tgds": { "opacity": "{Effect.Opacity.0800}" } }
} } }
```

- `$value`는 DTCG 표준 alias, 불투명도는 `$extensions.tgds.opacity`에 alias로 둔다. 둘 다 Foundation 참조이므로 TKN-01(1단계 하향)을 지킨다.
- Figma 동기화 시 `$value`는 색 변수 alias로, `opacity`는 그 색 변수의 불투명도에 바인딩되는 number 변수 alias로 옮긴다(Figma 2026-09-03 변수 업데이트).
- 코드 생성 시 두 참조를 `rgb(from var(--color) r g b / var(--opacity))` 형태로 합성한다. 합성 방식은 생성기의 책임이며 등록부는 참조만 보유한다.
- 모드별 값이 다른 토큰은 `$value`와 `opacity`를 모드마다 각각 적는다(SEM-08).

## 소비처

Style Dictionary 빌드, Figma Variable API 동기화, 린트(`FND-L*`)의 **공통 입력**이다.

`scripts/generate-tokens.mjs`(`npm run tokens:build`)가 `foundation.tokens.json`을 읽어 `src/tokens/*`를 생성한다.
