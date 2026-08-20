/**
 * GENERATED FILE — do not edit by hand.
 * Source: docs/A-token/token-system.md section 1.6
 * Regenerate: npm run tokens:build
 *
 * Shape follows FND-08: segment boundaries become object nesting, words
 * inside a segment become camelCase, numeric options stay bracket-accessed.
 *   Typography/Font Size/0400  ->  foundation.typography.fontSize['0400']
 *
 * Not emitted (unresolved in the spec):
 *   - Color (status: TBD)
 *   - Motion/Easing (5/5 steps are TBD)
 */

/** Raw values. Units are carried separately in `foundationUnits`. */
export const foundation = {
  "typography": {
    "fontSize": {
      "1000": 40,
      "1100": 48,
      "1150": 60,
      "1200": 72,
      "1300": 96,
      "0050": 9,
      "0100": 10,
      "0150": 11,
      "0200": 12,
      "0300": 14,
      "0400": 16,
      "0500": 18,
      "0600": 20,
      "0650": 22,
      "0700": 24,
      "0800": 28,
      "0900": 32,
      "0950": 36
    },
    "lineHeight": {
      "0050-100": 9,
      "0050-120": 10.8,
      "0050-140": 12.6,
      "0050-150": 13.5,
      "0100-100": 10,
      "0100-120": 12,
      "0100-140": 14,
      "0100-150": 15,
      "0150-100": 11,
      "0150-120": 13.2,
      "0150-140": 15.4,
      "0150-150": 16.5,
      "0200-100": 12,
      "0200-120": 14.4,
      "0200-140": 16.8,
      "0200-150": 18,
      "0300-100": 14,
      "0300-120": 16.8,
      "0300-140": 19.6,
      "0300-150": 21,
      "0400-100": 16,
      "0400-120": 19.2,
      "0400-140": 22.4,
      "0400-150": 24,
      "0500-100": 18,
      "0500-120": 21.6,
      "0500-140": 25.2,
      "0500-150": 27,
      "0600-100": 20,
      "0600-120": 24,
      "0600-140": 28,
      "0600-150": 30,
      "0650-100": 22,
      "0650-120": 26.4,
      "0650-140": 30.8,
      "0650-150": 33,
      "0700-100": 24,
      "0700-120": 28.8,
      "0700-140": 33.6,
      "0700-150": 36,
      "0800-100": 28,
      "0800-120": 33.6,
      "0800-140": 39.2,
      "0800-150": 42,
      "0900-100": 32,
      "0900-120": 38.4,
      "0900-140": 44.8,
      "0900-150": 48,
      "0950-100": 36,
      "0950-120": 43.2,
      "0950-140": 50.4,
      "0950-150": 54,
      "1000-100": 40,
      "1000-120": 48,
      "1000-140": 56,
      "1000-150": 60,
      "1100-100": 48,
      "1100-120": 57.6,
      "1100-140": 67.2,
      "1100-150": 72,
      "1150-100": 60,
      "1150-120": 72,
      "1150-140": 84,
      "1150-150": 90,
      "1200-100": 72,
      "1200-120": 86.4,
      "1200-140": 100.8,
      "1200-150": 108,
      "1300-100": 96,
      "1300-120": 115.2,
      "1300-140": 134.4,
      "1300-150": 144
    },
    "fontWeight": {
      "300": 300,
      "400": 400,
      "500": 500,
      "600": 600,
      "700": 700,
      "800": 800
    },
    "fontFamily": {
      "sans": "SUIT Variable",
      "serif": "Noto Serif KR"
    }
  },
  "layout": {
    "space": {
      "1000": 40,
      "1100": 48,
      "1200": 72,
      "1300": 96,
      "1350": 120,
      "0050": 1,
      "0100": 2,
      "0200": 4,
      "0300": 6,
      "0400": 8,
      "0500": 12,
      "0600": 16,
      "0700": 20,
      "0800": 24,
      "0900": 32
    },
    "size": {
      "1000": 64,
      "1100": 80,
      "1200": 96,
      "1300": 128,
      "0100": 4,
      "0200": 8,
      "0300": 12,
      "0400": 16,
      "0500": 20,
      "0600": 24,
      "0700": 32,
      "0800": 40,
      "0900": 48
    }
  },
  "shape": {
    "radius": {
      "1000": 24,
      "1100": 32,
      "1200": 40,
      "1300": 9999,
      "0100": 0,
      "0200": 2,
      "0300": 4,
      "0400": 6,
      "0500": 8,
      "0600": 10,
      "0700": 12,
      "0800": 16,
      "0900": 20
    },
    "stroke": {
      "0100": 0,
      "0200": 1,
      "0300": 2,
      "0400": 3,
      "0500": 4,
      "0600": 6,
      "0700": 8
    }
  },
  "effect": {
    "opacity": {
      "1000": 100,
      "0000": 0,
      "0100": 1,
      "0200": 4,
      "0300": 9,
      "0400": 16,
      "0500": 25,
      "0600": 36,
      "0700": 49,
      "0800": 64,
      "0900": 81
    }
  },
  "motion": {
    "duration": {
      "0100": 0,
      "0200": 100,
      "0300": 150,
      "0400": 250,
      "0500": 350,
      "0600": 500,
      "0700": 700
    }
  }
} as const;

/** Unit for each Set, as declared in the schema. `null` = unitless (nominal). */
export const foundationUnits = {
  "typography": {
    "fontSize": "px",
    "lineHeight": "px",
    "fontWeight": "css-font-weight",
    "fontFamily": null
  },
  "layout": {
    "space": "px",
    "size": "px"
  },
  "shape": {
    "radius": "px",
    "stroke": "px"
  },
  "effect": {
    "opacity": "%"
  },
  "motion": {
    "duration": "ms"
  }
} as const;

/**
 * Option keys in scale order.
 *
 * `foundation` is for lookup only — do NOT iterate it. JavaScript reorders
 * integer-like keys ahead of the rest, so Object.keys() on an ordinal Set
 * yields 1000, 1100, ... before 0050, 0100 and the scale reads out scrambled.
 * FND-05 makes step order meaningful, so iterate through this array instead.
 */
export const foundationOrder = {
  "typography": {
    "fontSize": [
      "0050",
      "0100",
      "0150",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0650",
      "0700",
      "0800",
      "0900",
      "0950",
      "1000",
      "1100",
      "1150",
      "1200",
      "1300"
    ],
    "lineHeight": [
      "0050-100",
      "0050-120",
      "0050-140",
      "0050-150",
      "0100-100",
      "0100-120",
      "0100-140",
      "0100-150",
      "0150-100",
      "0150-120",
      "0150-140",
      "0150-150",
      "0200-100",
      "0200-120",
      "0200-140",
      "0200-150",
      "0300-100",
      "0300-120",
      "0300-140",
      "0300-150",
      "0400-100",
      "0400-120",
      "0400-140",
      "0400-150",
      "0500-100",
      "0500-120",
      "0500-140",
      "0500-150",
      "0600-100",
      "0600-120",
      "0600-140",
      "0600-150",
      "0650-100",
      "0650-120",
      "0650-140",
      "0650-150",
      "0700-100",
      "0700-120",
      "0700-140",
      "0700-150",
      "0800-100",
      "0800-120",
      "0800-140",
      "0800-150",
      "0900-100",
      "0900-120",
      "0900-140",
      "0900-150",
      "0950-100",
      "0950-120",
      "0950-140",
      "0950-150",
      "1000-100",
      "1000-120",
      "1000-140",
      "1000-150",
      "1100-100",
      "1100-120",
      "1100-140",
      "1100-150",
      "1150-100",
      "1150-120",
      "1150-140",
      "1150-150",
      "1200-100",
      "1200-120",
      "1200-140",
      "1200-150",
      "1300-100",
      "1300-120",
      "1300-140",
      "1300-150"
    ],
    "fontWeight": [
      "300",
      "400",
      "500",
      "600",
      "700",
      "800"
    ],
    "fontFamily": [
      "sans",
      "serif"
    ]
  },
  "layout": {
    "space": [
      "0050",
      "0100",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0700",
      "0800",
      "0900",
      "1000",
      "1100",
      "1200",
      "1300",
      "1350"
    ],
    "size": [
      "0100",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0700",
      "0800",
      "0900",
      "1000",
      "1100",
      "1200",
      "1300"
    ]
  },
  "shape": {
    "radius": [
      "0100",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0700",
      "0800",
      "0900",
      "1000",
      "1100",
      "1200",
      "1300"
    ],
    "stroke": [
      "0100",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0700"
    ]
  },
  "effect": {
    "opacity": [
      "0000",
      "0100",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0700",
      "0800",
      "0900",
      "1000"
    ]
  },
  "motion": {
    "duration": [
      "0100",
      "0200",
      "0300",
      "0400",
      "0500",
      "0600",
      "0700"
    ]
  }
} as const;

/**
 * Reverse mapping, CSS custom property -> canonical Figma name + TS path.
 *
 * FND-11 forbids recovering the canonical name by parsing the code name:
 * a hyphen in `--typography-font-size-0400` could have come from a segment
 * boundary or from the space inside "Font Size", and the string alone cannot
 * tell you which. Look it up here instead of taking the name apart.
 */
export const foundationLookup: Readonly<Record<string, { canonical: string; ts: string }>> = {
  "--typography-font-size-0050": {
    "canonical": "Typography/Font Size/0050",
    "ts": "foundation.typography.fontSize['0050']"
  },
  "--typography-font-size-0100": {
    "canonical": "Typography/Font Size/0100",
    "ts": "foundation.typography.fontSize['0100']"
  },
  "--typography-font-size-0150": {
    "canonical": "Typography/Font Size/0150",
    "ts": "foundation.typography.fontSize['0150']"
  },
  "--typography-font-size-0200": {
    "canonical": "Typography/Font Size/0200",
    "ts": "foundation.typography.fontSize['0200']"
  },
  "--typography-font-size-0300": {
    "canonical": "Typography/Font Size/0300",
    "ts": "foundation.typography.fontSize['0300']"
  },
  "--typography-font-size-0400": {
    "canonical": "Typography/Font Size/0400",
    "ts": "foundation.typography.fontSize['0400']"
  },
  "--typography-font-size-0500": {
    "canonical": "Typography/Font Size/0500",
    "ts": "foundation.typography.fontSize['0500']"
  },
  "--typography-font-size-0600": {
    "canonical": "Typography/Font Size/0600",
    "ts": "foundation.typography.fontSize['0600']"
  },
  "--typography-font-size-0650": {
    "canonical": "Typography/Font Size/0650",
    "ts": "foundation.typography.fontSize['0650']"
  },
  "--typography-font-size-0700": {
    "canonical": "Typography/Font Size/0700",
    "ts": "foundation.typography.fontSize['0700']"
  },
  "--typography-font-size-0800": {
    "canonical": "Typography/Font Size/0800",
    "ts": "foundation.typography.fontSize['0800']"
  },
  "--typography-font-size-0900": {
    "canonical": "Typography/Font Size/0900",
    "ts": "foundation.typography.fontSize['0900']"
  },
  "--typography-font-size-0950": {
    "canonical": "Typography/Font Size/0950",
    "ts": "foundation.typography.fontSize['0950']"
  },
  "--typography-font-size-1000": {
    "canonical": "Typography/Font Size/1000",
    "ts": "foundation.typography.fontSize['1000']"
  },
  "--typography-font-size-1100": {
    "canonical": "Typography/Font Size/1100",
    "ts": "foundation.typography.fontSize['1100']"
  },
  "--typography-font-size-1150": {
    "canonical": "Typography/Font Size/1150",
    "ts": "foundation.typography.fontSize['1150']"
  },
  "--typography-font-size-1200": {
    "canonical": "Typography/Font Size/1200",
    "ts": "foundation.typography.fontSize['1200']"
  },
  "--typography-font-size-1300": {
    "canonical": "Typography/Font Size/1300",
    "ts": "foundation.typography.fontSize['1300']"
  },
  "--typography-line-height-0050-100": {
    "canonical": "Typography/Line Height/0050-100",
    "ts": "foundation.typography.lineHeight['0050-100']"
  },
  "--typography-line-height-0050-120": {
    "canonical": "Typography/Line Height/0050-120",
    "ts": "foundation.typography.lineHeight['0050-120']"
  },
  "--typography-line-height-0050-140": {
    "canonical": "Typography/Line Height/0050-140",
    "ts": "foundation.typography.lineHeight['0050-140']"
  },
  "--typography-line-height-0050-150": {
    "canonical": "Typography/Line Height/0050-150",
    "ts": "foundation.typography.lineHeight['0050-150']"
  },
  "--typography-line-height-0100-100": {
    "canonical": "Typography/Line Height/0100-100",
    "ts": "foundation.typography.lineHeight['0100-100']"
  },
  "--typography-line-height-0100-120": {
    "canonical": "Typography/Line Height/0100-120",
    "ts": "foundation.typography.lineHeight['0100-120']"
  },
  "--typography-line-height-0100-140": {
    "canonical": "Typography/Line Height/0100-140",
    "ts": "foundation.typography.lineHeight['0100-140']"
  },
  "--typography-line-height-0100-150": {
    "canonical": "Typography/Line Height/0100-150",
    "ts": "foundation.typography.lineHeight['0100-150']"
  },
  "--typography-line-height-0150-100": {
    "canonical": "Typography/Line Height/0150-100",
    "ts": "foundation.typography.lineHeight['0150-100']"
  },
  "--typography-line-height-0150-120": {
    "canonical": "Typography/Line Height/0150-120",
    "ts": "foundation.typography.lineHeight['0150-120']"
  },
  "--typography-line-height-0150-140": {
    "canonical": "Typography/Line Height/0150-140",
    "ts": "foundation.typography.lineHeight['0150-140']"
  },
  "--typography-line-height-0150-150": {
    "canonical": "Typography/Line Height/0150-150",
    "ts": "foundation.typography.lineHeight['0150-150']"
  },
  "--typography-line-height-0200-100": {
    "canonical": "Typography/Line Height/0200-100",
    "ts": "foundation.typography.lineHeight['0200-100']"
  },
  "--typography-line-height-0200-120": {
    "canonical": "Typography/Line Height/0200-120",
    "ts": "foundation.typography.lineHeight['0200-120']"
  },
  "--typography-line-height-0200-140": {
    "canonical": "Typography/Line Height/0200-140",
    "ts": "foundation.typography.lineHeight['0200-140']"
  },
  "--typography-line-height-0200-150": {
    "canonical": "Typography/Line Height/0200-150",
    "ts": "foundation.typography.lineHeight['0200-150']"
  },
  "--typography-line-height-0300-100": {
    "canonical": "Typography/Line Height/0300-100",
    "ts": "foundation.typography.lineHeight['0300-100']"
  },
  "--typography-line-height-0300-120": {
    "canonical": "Typography/Line Height/0300-120",
    "ts": "foundation.typography.lineHeight['0300-120']"
  },
  "--typography-line-height-0300-140": {
    "canonical": "Typography/Line Height/0300-140",
    "ts": "foundation.typography.lineHeight['0300-140']"
  },
  "--typography-line-height-0300-150": {
    "canonical": "Typography/Line Height/0300-150",
    "ts": "foundation.typography.lineHeight['0300-150']"
  },
  "--typography-line-height-0400-100": {
    "canonical": "Typography/Line Height/0400-100",
    "ts": "foundation.typography.lineHeight['0400-100']"
  },
  "--typography-line-height-0400-120": {
    "canonical": "Typography/Line Height/0400-120",
    "ts": "foundation.typography.lineHeight['0400-120']"
  },
  "--typography-line-height-0400-140": {
    "canonical": "Typography/Line Height/0400-140",
    "ts": "foundation.typography.lineHeight['0400-140']"
  },
  "--typography-line-height-0400-150": {
    "canonical": "Typography/Line Height/0400-150",
    "ts": "foundation.typography.lineHeight['0400-150']"
  },
  "--typography-line-height-0500-100": {
    "canonical": "Typography/Line Height/0500-100",
    "ts": "foundation.typography.lineHeight['0500-100']"
  },
  "--typography-line-height-0500-120": {
    "canonical": "Typography/Line Height/0500-120",
    "ts": "foundation.typography.lineHeight['0500-120']"
  },
  "--typography-line-height-0500-140": {
    "canonical": "Typography/Line Height/0500-140",
    "ts": "foundation.typography.lineHeight['0500-140']"
  },
  "--typography-line-height-0500-150": {
    "canonical": "Typography/Line Height/0500-150",
    "ts": "foundation.typography.lineHeight['0500-150']"
  },
  "--typography-line-height-0600-100": {
    "canonical": "Typography/Line Height/0600-100",
    "ts": "foundation.typography.lineHeight['0600-100']"
  },
  "--typography-line-height-0600-120": {
    "canonical": "Typography/Line Height/0600-120",
    "ts": "foundation.typography.lineHeight['0600-120']"
  },
  "--typography-line-height-0600-140": {
    "canonical": "Typography/Line Height/0600-140",
    "ts": "foundation.typography.lineHeight['0600-140']"
  },
  "--typography-line-height-0600-150": {
    "canonical": "Typography/Line Height/0600-150",
    "ts": "foundation.typography.lineHeight['0600-150']"
  },
  "--typography-line-height-0650-100": {
    "canonical": "Typography/Line Height/0650-100",
    "ts": "foundation.typography.lineHeight['0650-100']"
  },
  "--typography-line-height-0650-120": {
    "canonical": "Typography/Line Height/0650-120",
    "ts": "foundation.typography.lineHeight['0650-120']"
  },
  "--typography-line-height-0650-140": {
    "canonical": "Typography/Line Height/0650-140",
    "ts": "foundation.typography.lineHeight['0650-140']"
  },
  "--typography-line-height-0650-150": {
    "canonical": "Typography/Line Height/0650-150",
    "ts": "foundation.typography.lineHeight['0650-150']"
  },
  "--typography-line-height-0700-100": {
    "canonical": "Typography/Line Height/0700-100",
    "ts": "foundation.typography.lineHeight['0700-100']"
  },
  "--typography-line-height-0700-120": {
    "canonical": "Typography/Line Height/0700-120",
    "ts": "foundation.typography.lineHeight['0700-120']"
  },
  "--typography-line-height-0700-140": {
    "canonical": "Typography/Line Height/0700-140",
    "ts": "foundation.typography.lineHeight['0700-140']"
  },
  "--typography-line-height-0700-150": {
    "canonical": "Typography/Line Height/0700-150",
    "ts": "foundation.typography.lineHeight['0700-150']"
  },
  "--typography-line-height-0800-100": {
    "canonical": "Typography/Line Height/0800-100",
    "ts": "foundation.typography.lineHeight['0800-100']"
  },
  "--typography-line-height-0800-120": {
    "canonical": "Typography/Line Height/0800-120",
    "ts": "foundation.typography.lineHeight['0800-120']"
  },
  "--typography-line-height-0800-140": {
    "canonical": "Typography/Line Height/0800-140",
    "ts": "foundation.typography.lineHeight['0800-140']"
  },
  "--typography-line-height-0800-150": {
    "canonical": "Typography/Line Height/0800-150",
    "ts": "foundation.typography.lineHeight['0800-150']"
  },
  "--typography-line-height-0900-100": {
    "canonical": "Typography/Line Height/0900-100",
    "ts": "foundation.typography.lineHeight['0900-100']"
  },
  "--typography-line-height-0900-120": {
    "canonical": "Typography/Line Height/0900-120",
    "ts": "foundation.typography.lineHeight['0900-120']"
  },
  "--typography-line-height-0900-140": {
    "canonical": "Typography/Line Height/0900-140",
    "ts": "foundation.typography.lineHeight['0900-140']"
  },
  "--typography-line-height-0900-150": {
    "canonical": "Typography/Line Height/0900-150",
    "ts": "foundation.typography.lineHeight['0900-150']"
  },
  "--typography-line-height-0950-100": {
    "canonical": "Typography/Line Height/0950-100",
    "ts": "foundation.typography.lineHeight['0950-100']"
  },
  "--typography-line-height-0950-120": {
    "canonical": "Typography/Line Height/0950-120",
    "ts": "foundation.typography.lineHeight['0950-120']"
  },
  "--typography-line-height-0950-140": {
    "canonical": "Typography/Line Height/0950-140",
    "ts": "foundation.typography.lineHeight['0950-140']"
  },
  "--typography-line-height-0950-150": {
    "canonical": "Typography/Line Height/0950-150",
    "ts": "foundation.typography.lineHeight['0950-150']"
  },
  "--typography-line-height-1000-100": {
    "canonical": "Typography/Line Height/1000-100",
    "ts": "foundation.typography.lineHeight['1000-100']"
  },
  "--typography-line-height-1000-120": {
    "canonical": "Typography/Line Height/1000-120",
    "ts": "foundation.typography.lineHeight['1000-120']"
  },
  "--typography-line-height-1000-140": {
    "canonical": "Typography/Line Height/1000-140",
    "ts": "foundation.typography.lineHeight['1000-140']"
  },
  "--typography-line-height-1000-150": {
    "canonical": "Typography/Line Height/1000-150",
    "ts": "foundation.typography.lineHeight['1000-150']"
  },
  "--typography-line-height-1100-100": {
    "canonical": "Typography/Line Height/1100-100",
    "ts": "foundation.typography.lineHeight['1100-100']"
  },
  "--typography-line-height-1100-120": {
    "canonical": "Typography/Line Height/1100-120",
    "ts": "foundation.typography.lineHeight['1100-120']"
  },
  "--typography-line-height-1100-140": {
    "canonical": "Typography/Line Height/1100-140",
    "ts": "foundation.typography.lineHeight['1100-140']"
  },
  "--typography-line-height-1100-150": {
    "canonical": "Typography/Line Height/1100-150",
    "ts": "foundation.typography.lineHeight['1100-150']"
  },
  "--typography-line-height-1150-100": {
    "canonical": "Typography/Line Height/1150-100",
    "ts": "foundation.typography.lineHeight['1150-100']"
  },
  "--typography-line-height-1150-120": {
    "canonical": "Typography/Line Height/1150-120",
    "ts": "foundation.typography.lineHeight['1150-120']"
  },
  "--typography-line-height-1150-140": {
    "canonical": "Typography/Line Height/1150-140",
    "ts": "foundation.typography.lineHeight['1150-140']"
  },
  "--typography-line-height-1150-150": {
    "canonical": "Typography/Line Height/1150-150",
    "ts": "foundation.typography.lineHeight['1150-150']"
  },
  "--typography-line-height-1200-100": {
    "canonical": "Typography/Line Height/1200-100",
    "ts": "foundation.typography.lineHeight['1200-100']"
  },
  "--typography-line-height-1200-120": {
    "canonical": "Typography/Line Height/1200-120",
    "ts": "foundation.typography.lineHeight['1200-120']"
  },
  "--typography-line-height-1200-140": {
    "canonical": "Typography/Line Height/1200-140",
    "ts": "foundation.typography.lineHeight['1200-140']"
  },
  "--typography-line-height-1200-150": {
    "canonical": "Typography/Line Height/1200-150",
    "ts": "foundation.typography.lineHeight['1200-150']"
  },
  "--typography-line-height-1300-100": {
    "canonical": "Typography/Line Height/1300-100",
    "ts": "foundation.typography.lineHeight['1300-100']"
  },
  "--typography-line-height-1300-120": {
    "canonical": "Typography/Line Height/1300-120",
    "ts": "foundation.typography.lineHeight['1300-120']"
  },
  "--typography-line-height-1300-140": {
    "canonical": "Typography/Line Height/1300-140",
    "ts": "foundation.typography.lineHeight['1300-140']"
  },
  "--typography-line-height-1300-150": {
    "canonical": "Typography/Line Height/1300-150",
    "ts": "foundation.typography.lineHeight['1300-150']"
  },
  "--typography-font-weight-300": {
    "canonical": "Typography/Font Weight/300",
    "ts": "foundation.typography.fontWeight['300']"
  },
  "--typography-font-weight-400": {
    "canonical": "Typography/Font Weight/400",
    "ts": "foundation.typography.fontWeight['400']"
  },
  "--typography-font-weight-500": {
    "canonical": "Typography/Font Weight/500",
    "ts": "foundation.typography.fontWeight['500']"
  },
  "--typography-font-weight-600": {
    "canonical": "Typography/Font Weight/600",
    "ts": "foundation.typography.fontWeight['600']"
  },
  "--typography-font-weight-700": {
    "canonical": "Typography/Font Weight/700",
    "ts": "foundation.typography.fontWeight['700']"
  },
  "--typography-font-weight-800": {
    "canonical": "Typography/Font Weight/800",
    "ts": "foundation.typography.fontWeight['800']"
  },
  "--typography-font-family-sans": {
    "canonical": "Typography/Font Family/Sans",
    "ts": "foundation.typography.fontFamily.sans"
  },
  "--typography-font-family-serif": {
    "canonical": "Typography/Font Family/Serif",
    "ts": "foundation.typography.fontFamily.serif"
  },
  "--layout-space-0050": {
    "canonical": "Layout/Space/0050",
    "ts": "foundation.layout.space['0050']"
  },
  "--layout-space-0100": {
    "canonical": "Layout/Space/0100",
    "ts": "foundation.layout.space['0100']"
  },
  "--layout-space-0200": {
    "canonical": "Layout/Space/0200",
    "ts": "foundation.layout.space['0200']"
  },
  "--layout-space-0300": {
    "canonical": "Layout/Space/0300",
    "ts": "foundation.layout.space['0300']"
  },
  "--layout-space-0400": {
    "canonical": "Layout/Space/0400",
    "ts": "foundation.layout.space['0400']"
  },
  "--layout-space-0500": {
    "canonical": "Layout/Space/0500",
    "ts": "foundation.layout.space['0500']"
  },
  "--layout-space-0600": {
    "canonical": "Layout/Space/0600",
    "ts": "foundation.layout.space['0600']"
  },
  "--layout-space-0700": {
    "canonical": "Layout/Space/0700",
    "ts": "foundation.layout.space['0700']"
  },
  "--layout-space-0800": {
    "canonical": "Layout/Space/0800",
    "ts": "foundation.layout.space['0800']"
  },
  "--layout-space-0900": {
    "canonical": "Layout/Space/0900",
    "ts": "foundation.layout.space['0900']"
  },
  "--layout-space-1000": {
    "canonical": "Layout/Space/1000",
    "ts": "foundation.layout.space['1000']"
  },
  "--layout-space-1100": {
    "canonical": "Layout/Space/1100",
    "ts": "foundation.layout.space['1100']"
  },
  "--layout-space-1200": {
    "canonical": "Layout/Space/1200",
    "ts": "foundation.layout.space['1200']"
  },
  "--layout-space-1300": {
    "canonical": "Layout/Space/1300",
    "ts": "foundation.layout.space['1300']"
  },
  "--layout-space-1350": {
    "canonical": "Layout/Space/1350",
    "ts": "foundation.layout.space['1350']"
  },
  "--layout-size-0100": {
    "canonical": "Layout/Size/0100",
    "ts": "foundation.layout.size['0100']"
  },
  "--layout-size-0200": {
    "canonical": "Layout/Size/0200",
    "ts": "foundation.layout.size['0200']"
  },
  "--layout-size-0300": {
    "canonical": "Layout/Size/0300",
    "ts": "foundation.layout.size['0300']"
  },
  "--layout-size-0400": {
    "canonical": "Layout/Size/0400",
    "ts": "foundation.layout.size['0400']"
  },
  "--layout-size-0500": {
    "canonical": "Layout/Size/0500",
    "ts": "foundation.layout.size['0500']"
  },
  "--layout-size-0600": {
    "canonical": "Layout/Size/0600",
    "ts": "foundation.layout.size['0600']"
  },
  "--layout-size-0700": {
    "canonical": "Layout/Size/0700",
    "ts": "foundation.layout.size['0700']"
  },
  "--layout-size-0800": {
    "canonical": "Layout/Size/0800",
    "ts": "foundation.layout.size['0800']"
  },
  "--layout-size-0900": {
    "canonical": "Layout/Size/0900",
    "ts": "foundation.layout.size['0900']"
  },
  "--layout-size-1000": {
    "canonical": "Layout/Size/1000",
    "ts": "foundation.layout.size['1000']"
  },
  "--layout-size-1100": {
    "canonical": "Layout/Size/1100",
    "ts": "foundation.layout.size['1100']"
  },
  "--layout-size-1200": {
    "canonical": "Layout/Size/1200",
    "ts": "foundation.layout.size['1200']"
  },
  "--layout-size-1300": {
    "canonical": "Layout/Size/1300",
    "ts": "foundation.layout.size['1300']"
  },
  "--shape-radius-0100": {
    "canonical": "Shape/Radius/0100",
    "ts": "foundation.shape.radius['0100']"
  },
  "--shape-radius-0200": {
    "canonical": "Shape/Radius/0200",
    "ts": "foundation.shape.radius['0200']"
  },
  "--shape-radius-0300": {
    "canonical": "Shape/Radius/0300",
    "ts": "foundation.shape.radius['0300']"
  },
  "--shape-radius-0400": {
    "canonical": "Shape/Radius/0400",
    "ts": "foundation.shape.radius['0400']"
  },
  "--shape-radius-0500": {
    "canonical": "Shape/Radius/0500",
    "ts": "foundation.shape.radius['0500']"
  },
  "--shape-radius-0600": {
    "canonical": "Shape/Radius/0600",
    "ts": "foundation.shape.radius['0600']"
  },
  "--shape-radius-0700": {
    "canonical": "Shape/Radius/0700",
    "ts": "foundation.shape.radius['0700']"
  },
  "--shape-radius-0800": {
    "canonical": "Shape/Radius/0800",
    "ts": "foundation.shape.radius['0800']"
  },
  "--shape-radius-0900": {
    "canonical": "Shape/Radius/0900",
    "ts": "foundation.shape.radius['0900']"
  },
  "--shape-radius-1000": {
    "canonical": "Shape/Radius/1000",
    "ts": "foundation.shape.radius['1000']"
  },
  "--shape-radius-1100": {
    "canonical": "Shape/Radius/1100",
    "ts": "foundation.shape.radius['1100']"
  },
  "--shape-radius-1200": {
    "canonical": "Shape/Radius/1200",
    "ts": "foundation.shape.radius['1200']"
  },
  "--shape-radius-1300": {
    "canonical": "Shape/Radius/1300",
    "ts": "foundation.shape.radius['1300']"
  },
  "--shape-stroke-0100": {
    "canonical": "Shape/Stroke/0100",
    "ts": "foundation.shape.stroke['0100']"
  },
  "--shape-stroke-0200": {
    "canonical": "Shape/Stroke/0200",
    "ts": "foundation.shape.stroke['0200']"
  },
  "--shape-stroke-0300": {
    "canonical": "Shape/Stroke/0300",
    "ts": "foundation.shape.stroke['0300']"
  },
  "--shape-stroke-0400": {
    "canonical": "Shape/Stroke/0400",
    "ts": "foundation.shape.stroke['0400']"
  },
  "--shape-stroke-0500": {
    "canonical": "Shape/Stroke/0500",
    "ts": "foundation.shape.stroke['0500']"
  },
  "--shape-stroke-0600": {
    "canonical": "Shape/Stroke/0600",
    "ts": "foundation.shape.stroke['0600']"
  },
  "--shape-stroke-0700": {
    "canonical": "Shape/Stroke/0700",
    "ts": "foundation.shape.stroke['0700']"
  },
  "--effect-opacity-0000": {
    "canonical": "Effect/Opacity/0000",
    "ts": "foundation.effect.opacity['0000']"
  },
  "--effect-opacity-0100": {
    "canonical": "Effect/Opacity/0100",
    "ts": "foundation.effect.opacity['0100']"
  },
  "--effect-opacity-0200": {
    "canonical": "Effect/Opacity/0200",
    "ts": "foundation.effect.opacity['0200']"
  },
  "--effect-opacity-0300": {
    "canonical": "Effect/Opacity/0300",
    "ts": "foundation.effect.opacity['0300']"
  },
  "--effect-opacity-0400": {
    "canonical": "Effect/Opacity/0400",
    "ts": "foundation.effect.opacity['0400']"
  },
  "--effect-opacity-0500": {
    "canonical": "Effect/Opacity/0500",
    "ts": "foundation.effect.opacity['0500']"
  },
  "--effect-opacity-0600": {
    "canonical": "Effect/Opacity/0600",
    "ts": "foundation.effect.opacity['0600']"
  },
  "--effect-opacity-0700": {
    "canonical": "Effect/Opacity/0700",
    "ts": "foundation.effect.opacity['0700']"
  },
  "--effect-opacity-0800": {
    "canonical": "Effect/Opacity/0800",
    "ts": "foundation.effect.opacity['0800']"
  },
  "--effect-opacity-0900": {
    "canonical": "Effect/Opacity/0900",
    "ts": "foundation.effect.opacity['0900']"
  },
  "--effect-opacity-1000": {
    "canonical": "Effect/Opacity/1000",
    "ts": "foundation.effect.opacity['1000']"
  },
  "--motion-duration-0100": {
    "canonical": "Motion/Duration/0100",
    "ts": "foundation.motion.duration['0100']"
  },
  "--motion-duration-0200": {
    "canonical": "Motion/Duration/0200",
    "ts": "foundation.motion.duration['0200']"
  },
  "--motion-duration-0300": {
    "canonical": "Motion/Duration/0300",
    "ts": "foundation.motion.duration['0300']"
  },
  "--motion-duration-0400": {
    "canonical": "Motion/Duration/0400",
    "ts": "foundation.motion.duration['0400']"
  },
  "--motion-duration-0500": {
    "canonical": "Motion/Duration/0500",
    "ts": "foundation.motion.duration['0500']"
  },
  "--motion-duration-0600": {
    "canonical": "Motion/Duration/0600",
    "ts": "foundation.motion.duration['0600']"
  },
  "--motion-duration-0700": {
    "canonical": "Motion/Duration/0700",
    "ts": "foundation.motion.duration['0700']"
  }
};

export type Foundation = typeof foundation;
export type FoundationCategory = keyof Foundation;

export type FontSizeStep = keyof Foundation['typography']['fontSize'];
export type LineHeightOption = keyof Foundation['typography']['lineHeight'];
export type SpaceStep = keyof Foundation['layout']['space'];
export type SizeStep = keyof Foundation['layout']['size'];
export type RadiusStep = keyof Foundation['shape']['radius'];
export type StrokeStep = keyof Foundation['shape']['stroke'];
export type OpacityStep = keyof Foundation['effect']['opacity'];
export type DurationStep = keyof Foundation['motion']['duration'];
