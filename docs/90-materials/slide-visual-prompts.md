# AI Readable Design System — 슬라이드 비주얼 Gemini 프롬프트 (9장)

구성안의 슬라이드별 "비주얼 제안"을 무드보드 규칙에 맞춰 프롬프트화한 것입니다.

**사용법**
- 각 코드 블록 전체를 그대로 복사해 Gemini에 붙여넣습니다. 블록당 이미지 1장.
- 모든 장은 **16:9** (프레젠테이션 규격) 고정입니다.
- 이미지에는 텍스트를 넣지 않습니다. 헤드라인·라벨은 생성 후 Figma에서 텍스트 레이어로 얹습니다. 각 프롬프트가 텍스트 자리를 비워 두도록 지시되어 있습니다.
- 결과물이 네온/3D/회색 다크로 나오면 재생성하세요. 프롬프트를 줄여서 다시 넣으면 스타일이 무너집니다.

**Hue 내러티브** (색이 이야기 흐름을 따라갑니다)

| 슬라이드 | 구간 | 주 hue |
|---|---|---|
| 1 타이틀 | 커버 | green |
| 2 문제 | 문제 | coral |
| 3 원인 | 문제 | coral + blue |
| 4 전환 | 반전 | purple + coral |
| 5 정의 | 해법 진입 | coral → green |
| 6 핵심 요소 | 구조 | blue |
| 7 게이트웨이 | 강제 | green + coral |
| 8 효과 | 결과 | green + blue + purple |
| 9 클로징 | 수미상관 | green (1장과 동일) |

---

## 슬라이드 1 / 타이틀 / green · 다크 블리드

```
A full-bleed keynote title-slide background. The entire canvas is very dark
forest green.

In the right two-thirds of the frame, an abstract constellation of a
design-system: five small rounded rectangles connected into a loose network.
Three of them are filled dark forest green with a 2px bright emerald green
border, one is filled dark navy with a 2px bright azure blue border, and one is
filled deep violet with a 2px vivid purple border. Each rectangle holds two or
three rounded skeleton bars in its own accent color. Two of the rectangles
bleed off the top and right frame edges, cut mid-shape.

The rectangles are connected by thin dashed pale lines with small triangular
arrowheads. One of these dashed lines passes through a small circle outlined in
2px bright azure blue containing a solid four-point sparkle. At the visual
center of the network sits a small filled circle in bright emerald green with
one wide soft radial glow behind it — the only glow in the image.

The left third of the frame is completely empty dark forest green, reserved
for the presentation title.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: full-bleed very dark forest green.

TEXT — Render no text of any kind. Keep the left third of the frame completely
empty and uncluttered, where the presentation title and subtitle will be placed
later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 2 / 문제 — 확장 속도 ∝ 일관성 붕괴 / coral

```
An editorial diverging-lines diagram on a pure white background, occupying the
lower 70% of the frame.

Two thin 2px lines start together at the left edge at the same point and
diverge as they travel right. The upper line, in bright azure blue, rises
steadily toward the upper right and ends in a small triangular arrowhead — it
represents growing service scale. The lower line, in bright coral, sags
downward toward the lower right and ends in a small triangular arrowhead — it
represents declining consistency.

The widening wedge-shaped gap between the two lines is filled with a flat,
solid, very light coral tint — one single flat color, no gradient.

Along the upper blue line, three small rounded rectangles sit at even
intervals, each filled dark navy with a 2px bright azure blue border, neatly
aligned to the line. Along the lower coral line, three small rounded
rectangles sit at uneven intervals, each filled dark umber with a 2px bright
coral border, progressively more tilted and misaligned as they move right. Each
small rectangle holds two short skeleton bars in its own accent color. The
rightmost rectangle bleeds off the right frame edge.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: pure white.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 25% of the frame where a headline will be placed later, and clean empty
space inside the coral wedge where a short caption will be placed later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 3 / 원인 — 끊어진 연결 / coral + blue

```
An editorial broken-connection diagram on a pure white background.

On the left third of the frame, one large rounded rectangle filled dark navy
with a 2px bright azure blue border — the design system. Inside it, four
rounded skeleton bars in bright azure blue, stacked with even spacing, widths
stepping down in a tidy deliberate rhythm.

On the right third of the frame, three smaller rounded rectangles stacked
vertically with even gaps — the platform codebases. Each is filled dark umber
with a 2px bright coral border and holds three rounded skeleton bars in bright
coral at mismatched widths and uneven spacing. The bottom rectangle bleeds off
the lower right frame edge.

Three thin dashed pale lines run from the right edge of the navy rectangle
toward each of the three coral rectangles, each ending in a small triangular
arrowhead. Every dashed line is visibly interrupted at its midpoint by a clear
empty break, and at each break two short diagonal slash marks in bright coral
cut across where the line should continue.

On the middle of the topmost dashed line, before its break, a small rounded
pill outlined in muted grey rides on the line, left empty inside.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: pure white.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 25% of the frame where a headline will be placed later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 4 / 전환 — 병목은 능력이 아니라 가독성 / purple + coral

```
A single editorial diagram split into a left panel and a right panel of equal
size on a pure white background, occupying the lower 70% of the frame.

LEFT PANEL — a rounded rectangle filled with deep violet, bordered in 2px vivid
purple — the AI. In its upper-left corner, a small circular badge outlined in
2px vivid purple containing a solid four-point sparkle. Below the badge, a
wide horizontal capability gauge: a rounded track outlined in 2px vivid purple,
filled almost completely from the left with solid vivid purple. Under the
gauge, three rounded skeleton bars in vivid purple, stacked with even spacing
in a tidy deliberate rhythm.

RIGHT PANEL — a rounded rectangle filled with near-black charcoal, bordered in
2px bright coral — the unreadable design system. Inside it, five rounded
skeleton bars in bright coral at mismatched widths, uneven spacing and slight
misalignment, reading as structure that cannot be parsed.

Between the two panels, a thin dashed pale line with a small triangular
arrowhead runs from the left panel toward the right panel, but stops short of
reaching it: at its end, just before the right panel's border, two short bold
diagonal slash marks in bright coral form a clear X, blocking the connection.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: pure white.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 25% of the frame where a headline will be placed later, and clean empty
space directly beneath each panel where a short caption will be placed later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 5 / 정의 — 설명 문서 대신 구조 / coral → green · 다크 블리드

```
Two horizontal transformation flows stacked vertically with a large gap, on a
full-bleed near-black charcoal background.

TOP FLOW (the old way) — at the left, a messy overlapping stack of five rounded
document sheets outlined in 2px muted grey, each holding several muted grey
skeleton bars, the sheets slightly rotated against each other, reading as heavy
explanatory documentation. From the stack, a thick, wide dashed pale line runs
right, ending in a triangular arrowhead. At the right end, a rounded rectangle
filled dark umber with a 2px bright coral border, holding three rounded
skeleton bars in bright coral at mismatched widths and uneven spacing, reading
as unreliable output.

BOTTOM FLOW (the AI-readable way) — at the left, one single compact rounded
rectangle filled dark forest green with a 2px bright emerald green border,
holding three rounded skeleton bars in bright emerald green in a tidy
deliberate rhythm, reading as self-describing structure. From it, a thin clean
dashed pale line runs right, passing through a small circle outlined in 2px
bright azure blue containing a solid four-point sparkle, then continues to a
triangular arrowhead. At the right end, a rounded rectangle filled dark forest
green with a 2px bright emerald green border, holding three tidy rounded
skeleton bars in bright emerald green, reading as correct, consistent output.

The left document stack of the top flow partially bleeds off the left frame
edge.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: full-bleed near-black charcoal.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 20% of the frame where the definition headline will be placed later,
and clean empty space to the right of each flow's arrowhead for short captions.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 6 / 핵심 요소 5가지 카드 / blue

```
Five equal rounded rectangular cards arranged side by side in a single
horizontal row, with even gaps, spanning the frame, on a pure white background.
The rightmost card partially bleeds off the right frame edge.

Every card is identical in treatment: filled dark navy with a 2px bright azure
blue border. In the upper portion of each card sits one distinct geometric
outline glyph, drawn in a single pale sky-blue 2px stroke with generous space
around it:

Card 1 — a hexagon.
Card 2 — a pair of angle brackets.
Card 3 — a four-dot square cluster.
Card 4 — a rounded rectangle containing a smaller dashed-outline rounded
rectangle inside it.
Card 5 — a pen nib.

Below each glyph, leave a clean empty horizontal band for a card title to be
added later, and beneath that band, two short rounded skeleton bars in bright
azure blue, stacked with even spacing.

Above the row of cards, floating near the upper right of the frame, a small
circle outlined in 2px vivid purple containing a solid four-point sparkle,
with a short thin dashed pale line and triangular arrowhead pointing down
toward the cards.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: pure white.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 25% of the frame where a headline will be placed later, and keep the
empty band inside each card reserved for its title.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

카드-요소 매핑(파일 제작 시 Figma에서 라벨을 얹을 때 사용): 1 hexagon = Variable, 2 angle brackets = Code Connect, 3 four-dot cluster = Auto Layout, 4 dashed inner rectangle = Slot, 5 pen nib = Frame Naming.

---

## 슬라이드 7 / 게이트웨이 — 위반은 빌드되지 않는다 / green + coral

```
A horizontal pipeline diagram on a pure white background, running from left to
right across the middle of the frame.

From the left edge, a thin dashed pale line runs right, carrying a loose row of
five small rounded square tiles traveling along it, each filled dark forest
green with a 2px bright emerald green border and holding one short emerald
skeleton bar. The leftmost tile bleeds off the left frame edge.

At the center of the frame, the line passes through a tall vertical gate: a
tall narrow rounded rectangle slab filled near-black charcoal, taller than the
tiles, with a single hexagon glyph outlined in a pale sky-blue 2px stroke at
its center.

To the right of the gate, the dashed line continues with a triangular arrowhead
into a wide rounded rectangle at the right edge, filled dark forest green with
a 2px bright emerald green border, holding three tidy emerald skeleton bars —
the final build. Two green tiles have passed the gate and sit on this segment
of the line.

Directly below the gate, three small rounded square tiles fall downward in a
loose vertical scatter, each filled dark umber with a 2px bright coral border,
each accompanied by a small X drawn as two short bold diagonal slash marks in
bright coral. Short dashed pale lines trace their downward fall.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: pure white.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 20% of the frame where a headline will be placed later, and clean empty
space to the right of each falling coral tile where short deny-reason captions
will be placed later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 8 / 효과 — 비용·품질·속도 / green + blue + purple

```
Three equal rounded rectangular stat cards arranged side by side with even
gaps across the upper middle of the frame, and one wide banner below them, on
a pure white background.

CARD 1 (left) — filled dark forest green with a 2px bright emerald green
border. Near its top, one wide rounded skeleton bar in bright emerald green
standing in for a large stat figure, and below it two shorter emerald skeleton
bars.

CARD 2 (center) — filled dark navy with a 2px bright azure blue border. Near
its top, one wide rounded skeleton bar in bright azure blue standing in for a
large stat figure, and below it two shorter azure skeleton bars.

CARD 3 (right) — filled deep violet with a 2px vivid purple border. Near its
top, one wide rounded skeleton bar in vivid purple standing in for a large stat
figure, and below it two shorter purple skeleton bars.

Below the three cards, spanning the full width of the frame and bleeding off
both the left and right edges, a wide rounded rectangle filled near-black
charcoal with no border. At its left end, a small circular badge outlined in
2px vivid purple containing a solid four-point sparkle. To the right of the
badge, two long muted grey skeleton bars.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: pure white.

TEXT — Render no text of any kind. Leave a clean, uncluttered empty area across
the top 20% of the frame where a headline will be placed later, and keep clean
empty space directly beneath each card's skeleton bars for labels to be added
later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 슬라이드 9 / 클로징 — 다시 연결된 시스템 / green · 다크 블리드 (1장과 수미상관)

```
A full-bleed keynote closing-slide background. The entire canvas is very dark
forest green — the same canvas as the title slide.

In the right two-thirds of the frame, the healed version of a broken system:
one central rounded rectangle filled dark forest green with a 2px bright
emerald green border, holding four rounded skeleton bars in bright emerald
green, widths stepping down in a tidy deliberate rhythm. One wide soft radial
glow sits behind this central rectangle — the only glow in the image.

From the central rectangle, three thin dashed pale lines run outward, unbroken
and continuous from end to end, each ending in a small triangular arrowhead at
a smaller rounded rectangle. All three smaller rectangles are filled dark
forest green with 2px bright emerald green borders and hold two tidy emerald
skeleton bars each. One of them bleeds off the right frame edge, another off
the top edge.

One of the three dashed lines passes through a small circle outlined in 2px
bright azure blue containing a solid four-point sparkle. On another dashed
line rides a small rounded pill outlined in bright emerald green, left empty
inside.

The left third of the frame is completely empty dark forest green, reserved
for the closing message.

STYLE — follow this exactly:

Editorial vector illustration in the visual language of a modern design-systems
keynote. Flat 2D. No 3D, no perspective, no photography.

SURFACES — Rounded rectangles and circles, corner radius 12-16px, arranged with
generous negative space, on either a pure white background or a full-bleed
tinted-dark background. Every dark panel is a TINTED dark: a deeply darkened
version of its own accent hue — dark forest green, dark navy, dark plum, dark
umber, near-black charcoal — never a neutral grey. Each panel carries a crisp
2px border in the bright, fully saturated version of that same hue, and any
label inside that panel uses the same hue. Panels of different hues sit side by
side to read as different semantic categories.

CONTENT — Content inside panels is never real text. It is rendered as rounded
skeleton bars of varying widths and staggered lengths, in the panel's accent
color, evenly spaced. These bars stand in for copy, code, and UI without
committing to any words.

LINE WORK — Thin, even 2px strokes throughout. Relationships between elements
are drawn as dashed lines with small triangular arrowheads; a dashed line may
carry a small rounded pill label riding on top of it.

ICONOGRAPHY — Simple geometric outline glyphs (hexagon, four-diamond cluster,
angle brackets, open book, pen nib, four-point sparkle), each drawn in a single
pale sky-blue or pale lavender stroke with generous space around it. The
four-point sparkle always signifies AI.

LIGHTING — Flat and even. No blur shadows, no bevels, no texture, no ambient
occlusion. If a shadow appears at all it is a hard solid-color offset with zero
blur. The single permitted soft effect is one wide radial glow behind a central
focal sphere.

COMPOSITION — Asymmetric and deliberately cropped: some elements bleed off the
frame edge instead of sitting neatly centered. Diagrammatic clarity over
decoration. The overall feel is calm, technical, confident, premium — a
design-systems conference slide, never clip-art, never a stock illustration.

Background: full-bleed very dark forest green.

TEXT — Render no text of any kind. Keep the left third of the frame completely
empty and uncluttered, where the closing message and next-step ask will be
placed later.

AVOID — no neon glow, no bloom, no lens flare, no cyberpunk aesthetic. No 3D
render, no isometric view, no glassmorphism, no gradient mesh, no noise texture.
No photorealism, no photographs, no human faces, no stock-photo hands. No soft
blurred drop shadows. No busy background patterns. No real company logos or
trademarks. No centered symmetrical clip-art layout. No watermark, no signature.

Aspect ratio 16:9.
```

---

## 생성 후 체크포인트

- **다크 패널이 회색으로 나오면 실패** — 초록·남색 등 자기 색의 어두운 버전이어야 합니다. 재생성하세요.
- **네온 글로우·3D가 섞이면 실패** — 프롬프트 축약 없이 그대로 다시 넣으면 대부분 해결됩니다.
- 패널 안에 글자가 생성됐다면 그 부분만 Figma에서 덮거나 재생성합니다.
- 1장과 9장은 같은 dark forest green 캔버스로 나와야 수미상관이 성립합니다. 두 장을 나란히 놓고 톤을 비교하세요.
- 텍스트는 전부 Figma에서: 헤드라인(상단 빈 영역), 6장의 카드 라벨(Variable / Code Connect / Auto Layout / Slot / Frame Naming), 7장의 Deny 사유 3건.
