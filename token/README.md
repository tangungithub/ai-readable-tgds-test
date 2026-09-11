# token/ — 값 등록부

> **모든 토큰 값의 정본.** 규칙은 `docs/A-token/`의 md 파일이, **값은 이 디렉터리가** 소유한다 (TKN-03 · FND-12).
> md와 이 디렉터리가 어긋나면 **이 디렉터리가 정본**이다.

## 파일 = Figma 컬렉션 (TKN-09)

Figma 변수 컬렉션 하나가 json 파일 하나다. 대응은 고정이며, 컬렉션이나 파일을 하나 늘리는 것은 `token.md`의 헌법 개정이다.

| Figma 컬렉션 | 파일 | 티어 | 모드 | 규칙 |
|---|---|---|---|---|
| `Foundation` | `Foundation.json` | Foundation | 없음 | [foundation.md](../docs/A-token/foundation.md) |
| `Semantic theme` | `Semantic-theme.json` | Semantic | Light / Dark | [semantic.md](../docs/A-token/semantic.md) §2.2 |
| `Semantic scale` | `Semantic-scale.json` | Semantic | Mobile / Tablet / Desktop | [semantic.md](../docs/A-token/semantic.md) §2.3 |
| `Semantic constant` | `Semantic-constant.json` | Semantic | 없음 | [semantic.md](../docs/A-token/semantic.md) §2.4 |
| `Component token` | `Component-token.json` | Component | 없음 | [component-token.md](../docs/A-token/component-token.md) |

파일명은 Figma 컬렉션명의 띄어쓰기를 `-`로 바꾼 것이며 대소문자를 보존한다. `Foundation.json`만 값이 있고, 나머지 넷은 루트 메타데이터만 있는 스켈레톤이다(등록표 미작성).

## 형식

W3C DTCG(Design Tokens Format Module) — `$value` / `$type` / `$description`, 그룹은 중첩 객체.

### 루트 메타데이터

모든 파일의 루트에 `$extensions.tgds`로 컬렉션·티어·모드를 선언한다. 이것이 파일의 신원이며 생성기·린트·Figma 동기화가 여기서 컬렉션을 식별한다.

```json
{
  "$extensions": { "tgds": { "collection": "Semantic theme", "tier": "semantic", "modes": ["Light", "Dark"] } }
}
```

`modes`가 빈 배열이면 단일 모드 컬렉션이다(Figma에서는 이름 무관한 모드 1개).

### 경로와 참조

- 경로 구조는 네이밍 문법과 1:1로 대응한다: `Color` → `Blue` → `0700` = `Color/Blue/0700`. 세그먼트에 띄어쓰기가 있으면 그대로 키로 쓴다(`"Font Size"`, `"On Accent"`).
- 참조는 DTCG alias `{Root.Group.Leaf}`이며 **파일을 지정하지 않는다.** 다섯 파일은 하나의 이름공간으로 병합되고, 그래서 루트 그룹 이름은 다섯 파일을 통틀어 유일해야 한다(TKN-10). 참조 방향은 TKN-01(1단계 하향)을 따른다.
- 길이 값은 `{ "value": n, "unit": "px" }` 객체다.

### 모드별 값 (TKN-11)

루트가 모드를 2개 이상 선언한 파일에서는 **모든 `$value`가 모드명을 키로 한 객체**다. 선언된 모드 전부가 키로 있어야 하며(SEM-08 · SEM-L03), 빠진 모드는 위반이다. 모드가 없는 파일은 단일값이다.

```json
"Background": { "Neutral": { "Default": {
  "$type": "color",
  "$value": { "Light": "{Color.Gray.0000}", "Dark": "{Color.Gray.1200}" }
} } }
```

### 불투명도 조합 (SEM-11)

Semantic 색 토큰은 **색 참조 1개 + 선택적 불투명도 참조 1개**로 구성한다. 불투명도는 `Effect/Opacity` 스텝만 참조하며, 알파가 섞인 원시값을 `$value`에 직접 적지 않는다. 모드가 있으면 `opacity`도 `$value`와 같은 모양(모드 키 객체)으로 적는다.

```json
"Text": { "On Accent": { "Subtle": {
  "$type": "color",
  "$value":      { "Light": "{Color.Gray.0000}",     "Dark": "{Color.Gray.0000}" },
  "$extensions": { "tgds": { "opacity": { "Light": "{Effect.Opacity.0800}", "Dark": "{Effect.Opacity.0800}" } } }
} } }
```

- Figma 동기화 시 `$value`는 색 변수 alias로, `opacity`는 그 색 변수의 불투명도에 바인딩되는 number 변수 alias로 옮긴다(Figma 2026-09-03 변수 업데이트).
- 코드 생성 시 두 참조를 `rgb(from var(--color) r g b / var(--opacity))` 형태로 합성한다. 합성 방식은 생성기의 책임이며 등록부는 참조만 보유한다.

### 컴포넌트 그룹 (CMP-A5 · §3.4)

`Component-token.json`의 **최상위 그룹 하나가 컴포넌트 하나**다. 그룹 이름은 `component-token.md` §3.3 인덱스에 등록된 컴포넌트명이어야 하고, 그 아래는 토큰 이름의 세그먼트(`[Element] [Variant] [Size] [State] Property`)를 그대로 중첩한다. 컴포넌트 그룹의 `$extensions.tgds.axes`에 축 선언(§3.1 `perComponentDeclaration`)을 둔다.

```json
"Button": {
  "$extensions": { "tgds": { "axes": {
    "elements": [], "variants": ["Primary", "Ghost"], "sizes": ["Small", "Medium", "Large"],
    "properties": { "Fill": { "axes": ["Variant", "State"] }, "Text": { "axes": ["Variant", "State"] }, "Radius": { "axes": [] } }
  } } },
  "Primary": { "Hover": { "Fill": { "$type": "color", "$value": "{Fill.Accent.Strong}" } } },
  "Radius":  { "$type": "dimension", "$value": "{Radius.Container.Medium}" }
}
```

> 위 예시는 형식 설명용이며 등록된 토큰이 아니다.

### Foundation 전용

- `Typography/Line Height`와 `Typography/Letter Spacing`은 **생성물**이다. 손으로 고치지 않고 생성 규칙([foundation.md](../docs/A-token/foundation.md) §1.4.1)으로 재생성한다.
- Foundation에는 알파(반투명) 값이 없다. `Color/Gray/0000`(순백)·`Color/Gray/1300`(순흑)은 램프 밖의 고정 앵커다(FND-16).

## 소비처

Style Dictionary 빌드, Figma Variable API 동기화, 린트(`*-L*`)의 **공통 입력**이다. 다섯 파일을 병합한 뒤 참조를 해석한다.

`scripts/generate-tokens.mjs`(`npm run tokens:build`)가 현재는 `Foundation.json`만 읽어 `src/tokens/*`를 생성한다. Semantic·Component 파일에 값이 채워지면 같은 생성기가 파일 순서대로 병합해 읽도록 확장한다([E2](../docs/E-design-code/E2-token-sync.md)).
