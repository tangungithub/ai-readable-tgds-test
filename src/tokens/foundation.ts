/**
 * GENERATED FILE — do not edit by hand.
 * Source: token/Foundation.json
 * Regenerate: npm run tokens:build
 *
 * Shape follows TKN-04: segment boundaries become object nesting, words
 * inside a segment become camelCase, numeric options stay bracket-accessed.
 *   Typography/Font Size/0400  ->  foundation.typography.fontSize['0400']
 */

/** Raw values. Units are carried separately in `foundationUnits`. */
export const foundation = {
  "color": {
    "blue": {
      "1000": "#094181",
      "1100": "#0a315f",
      "1200": "#0a213f",
      "1300": "#071222",
      "0100": "#f7faff",
      "0200": "#d3e6ff",
      "0300": "#aed1ff",
      "0400": "#88bbff",
      "0500": "#60a5ff",
      "0600": "#308dff",
      "0700": "#0077ed",
      "0800": "#0264c8",
      "0900": "#0653a4"
    },
    "gray": {
      "1000": "#404046",
      "1100": "#303034",
      "1200": "#202022",
      "1300": "#000000",
      "0000": "#ffffff",
      "0100": "#f3f3f3",
      "0200": "#dddddf",
      "0300": "#c7c8cc",
      "0400": "#b3b3b9",
      "0500": "#9e9ea6",
      "0600": "#8a8a93",
      "0700": "#777780",
      "0800": "#64646c",
      "0900": "#525259"
    },
    "red": {
      "1000": "#7a181a",
      "1100": "#5a1515",
      "1200": "#3d1110",
      "1300": "#210b0a",
      "0100": "#fdf1f0",
      "0200": "#ffd3ce",
      "0300": "#ffb3ac",
      "0400": "#ff9188",
      "0500": "#fe6a63",
      "0600": "#f04746",
      "0700": "#d53436",
      "0800": "#b82429",
      "0900": "#9a191f"
    },
    "green": {
      "1000": "#025321",
      "1100": "#063e19",
      "1200": "#092b12",
      "1300": "#08180b",
      "0100": "#f1f8f2",
      "0200": "#c3edcb",
      "0300": "#8ae39d",
      "0400": "#4fd575",
      "0500": "#1fc15c",
      "0600": "#0eaa4d",
      "0700": "#009440",
      "0800": "#007d36",
      "0900": "#00682b"
    },
    "yellow": {
      "1000": "#564400",
      "1100": "#413301",
      "1200": "#2d2404",
      "1300": "#1b1505",
      "0100": "#faf8f0",
      "0200": "#ffe083",
      "0300": "#f5c813",
      "0400": "#ddb409",
      "0500": "#c5a000",
      "0600": "#ad8c00",
      "0700": "#967a00",
      "0800": "#806700",
      "0900": "#6b5500"
    },
    "sky": {
      "1000": "#00486b",
      "1100": "#033750",
      "1200": "#072536",
      "1300": "#07151e",
      "0100": "#f0f6fa",
      "0200": "#c6e4f9",
      "0300": "#93d3fe",
      "0400": "#5ec1fb",
      "0500": "#2badef",
      "0600": "#0898d7",
      "0700": "#0083bb",
      "0800": "#006fa0",
      "0900": "#005b85"
    }
  },
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
    "fontWeight": {
      "300": 300,
      "400": 400,
      "500": 500,
      "600": 600,
      "700": 700,
      "800": 800
    },
    "fontFamily": {
      "sans": [
        "Suit Variable"
      ],
      "serif": [
        "Noto Serif KR"
      ]
    },
    "lineHeight": {
      "0050-0100": 9,
      "0050-0200": 10.8,
      "0050-0300": 12.6,
      "0050-0400": 13.5,
      "0100-0100": 10,
      "0100-0200": 12,
      "0100-0300": 14,
      "0100-0400": 15,
      "0150-0100": 11,
      "0150-0200": 13.2,
      "0150-0300": 15.4,
      "0150-0400": 16.5,
      "0200-0100": 12,
      "0200-0200": 14.4,
      "0200-0300": 16.8,
      "0200-0400": 18,
      "0300-0100": 14,
      "0300-0200": 16.8,
      "0300-0300": 19.6,
      "0300-0400": 21,
      "0400-0100": 16,
      "0400-0200": 19.2,
      "0400-0300": 22.4,
      "0400-0400": 24,
      "0500-0100": 18,
      "0500-0200": 21.6,
      "0500-0300": 25.2,
      "0500-0400": 27,
      "0600-0100": 20,
      "0600-0200": 24,
      "0600-0300": 28,
      "0600-0400": 30,
      "0650-0100": 22,
      "0650-0200": 26.4,
      "0650-0300": 30.8,
      "0650-0400": 33,
      "0700-0100": 24,
      "0700-0200": 28.8,
      "0700-0300": 33.6,
      "0700-0400": 36,
      "0800-0100": 28,
      "0800-0200": 33.6,
      "0800-0300": 39.2,
      "0800-0400": 42,
      "0900-0100": 32,
      "0900-0200": 38.4,
      "0900-0300": 44.8,
      "0900-0400": 48,
      "0950-0100": 36,
      "0950-0200": 43.2,
      "0950-0300": 50.4,
      "0950-0400": 54,
      "1000-0100": 40,
      "1000-0200": 48,
      "1000-0300": 56,
      "1000-0400": 60,
      "1100-0100": 48,
      "1100-0200": 57.6,
      "1100-0300": 67.2,
      "1100-0400": 72,
      "1150-0100": 60,
      "1150-0200": 72,
      "1150-0300": 84,
      "1150-0400": 90,
      "1200-0100": 72,
      "1200-0200": 86.4,
      "1200-0300": 100.8,
      "1200-0400": 108,
      "1300-0100": 96,
      "1300-0200": 115.2,
      "1300-0300": 134.4,
      "1300-0400": 144
    },
    "letterSpacing": {
      "0050-0100": 0,
      "0050-0200": -0.09,
      "0050-0300": -0.14,
      "0050-0400": -0.18,
      "0050-0500": -0.27,
      "0100-0100": 0,
      "0100-0200": -0.1,
      "0100-0300": -0.15,
      "0100-0400": -0.2,
      "0100-0500": -0.3,
      "0150-0100": 0,
      "0150-0200": -0.11,
      "0150-0300": -0.17,
      "0150-0400": -0.22,
      "0150-0500": -0.33,
      "0200-0100": 0,
      "0200-0200": -0.12,
      "0200-0300": -0.18,
      "0200-0400": -0.24,
      "0200-0500": -0.36,
      "0300-0100": 0,
      "0300-0200": -0.14,
      "0300-0300": -0.21,
      "0300-0400": -0.28,
      "0300-0500": -0.42,
      "0400-0100": 0,
      "0400-0200": -0.16,
      "0400-0300": -0.24,
      "0400-0400": -0.32,
      "0400-0500": -0.48,
      "0500-0100": 0,
      "0500-0200": -0.18,
      "0500-0300": -0.27,
      "0500-0400": -0.36,
      "0500-0500": -0.54,
      "0600-0100": 0,
      "0600-0200": -0.2,
      "0600-0300": -0.3,
      "0600-0400": -0.4,
      "0600-0500": -0.6,
      "0650-0100": 0,
      "0650-0200": -0.22,
      "0650-0300": -0.33,
      "0650-0400": -0.44,
      "0650-0500": -0.66,
      "0700-0100": 0,
      "0700-0200": -0.24,
      "0700-0300": -0.36,
      "0700-0400": -0.48,
      "0700-0500": -0.72,
      "0800-0100": 0,
      "0800-0200": -0.28,
      "0800-0300": -0.42,
      "0800-0400": -0.56,
      "0800-0500": -0.84,
      "0900-0100": 0,
      "0900-0200": -0.32,
      "0900-0300": -0.48,
      "0900-0400": -0.64,
      "0900-0500": -0.96,
      "0950-0100": 0,
      "0950-0200": -0.36,
      "0950-0300": -0.54,
      "0950-0400": -0.72,
      "0950-0500": -1.08,
      "1000-0100": 0,
      "1000-0200": -0.4,
      "1000-0300": -0.6,
      "1000-0400": -0.8,
      "1000-0500": -1.2,
      "1100-0100": 0,
      "1100-0200": -0.48,
      "1100-0300": -0.72,
      "1100-0400": -0.96,
      "1100-0500": -1.44,
      "1150-0100": 0,
      "1150-0200": -0.6,
      "1150-0300": -0.9,
      "1150-0400": -1.2,
      "1150-0500": -1.8,
      "1200-0100": 0,
      "1200-0200": -0.72,
      "1200-0300": -1.08,
      "1200-0400": -1.44,
      "1200-0500": -2.16,
      "1300-0100": 0,
      "1300-0200": -0.96,
      "1300-0300": -1.44,
      "1300-0400": -1.92,
      "1300-0500": -2.88
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
      "0100": 1,
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
      "0100": 1,
      "0200": 2,
      "0300": 3,
      "0400": 4,
      "0500": 6,
      "0600": 8
    }
  },
  "effect": {
    "opacity": {
      "1000": 1,
      "0000": 0,
      "0100": 0.01,
      "0200": 0.04,
      "0300": 0.09,
      "0400": 0.16,
      "0500": 0.25,
      "0600": 0.36,
      "0700": 0.49,
      "0800": 0.64,
      "0900": 0.81
    }
  }
} as const;

/** Unit for each Set. `null` = unitless (colors, ratios, nominal values). */
export const foundationUnits = {
  "color": {
    "blue": null,
    "gray": null,
    "red": null,
    "green": null,
    "yellow": null,
    "sky": null
  },
  "typography": {
    "fontSize": "px",
    "fontWeight": "css-font-weight",
    "fontFamily": null,
    "lineHeight": "px",
    "letterSpacing": "px"
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
    "opacity": null
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
  "color": {
    "blue": [
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
    "gray": [
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
      "1000",
      "1100",
      "1200",
      "1300"
    ],
    "red": [
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
    "green": [
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
    "yellow": [
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
    "sky": [
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
    ],
    "lineHeight": [
      "0050-0100",
      "0050-0200",
      "0050-0300",
      "0050-0400",
      "0100-0100",
      "0100-0200",
      "0100-0300",
      "0100-0400",
      "0150-0100",
      "0150-0200",
      "0150-0300",
      "0150-0400",
      "0200-0100",
      "0200-0200",
      "0200-0300",
      "0200-0400",
      "0300-0100",
      "0300-0200",
      "0300-0300",
      "0300-0400",
      "0400-0100",
      "0400-0200",
      "0400-0300",
      "0400-0400",
      "0500-0100",
      "0500-0200",
      "0500-0300",
      "0500-0400",
      "0600-0100",
      "0600-0200",
      "0600-0300",
      "0600-0400",
      "0650-0100",
      "0650-0200",
      "0650-0300",
      "0650-0400",
      "0700-0100",
      "0700-0200",
      "0700-0300",
      "0700-0400",
      "0800-0100",
      "0800-0200",
      "0800-0300",
      "0800-0400",
      "0900-0100",
      "0900-0200",
      "0900-0300",
      "0900-0400",
      "0950-0100",
      "0950-0200",
      "0950-0300",
      "0950-0400",
      "1000-0100",
      "1000-0200",
      "1000-0300",
      "1000-0400",
      "1100-0100",
      "1100-0200",
      "1100-0300",
      "1100-0400",
      "1150-0100",
      "1150-0200",
      "1150-0300",
      "1150-0400",
      "1200-0100",
      "1200-0200",
      "1200-0300",
      "1200-0400",
      "1300-0100",
      "1300-0200",
      "1300-0300",
      "1300-0400"
    ],
    "letterSpacing": [
      "0050-0100",
      "0050-0200",
      "0050-0300",
      "0050-0400",
      "0050-0500",
      "0100-0100",
      "0100-0200",
      "0100-0300",
      "0100-0400",
      "0100-0500",
      "0150-0100",
      "0150-0200",
      "0150-0300",
      "0150-0400",
      "0150-0500",
      "0200-0100",
      "0200-0200",
      "0200-0300",
      "0200-0400",
      "0200-0500",
      "0300-0100",
      "0300-0200",
      "0300-0300",
      "0300-0400",
      "0300-0500",
      "0400-0100",
      "0400-0200",
      "0400-0300",
      "0400-0400",
      "0400-0500",
      "0500-0100",
      "0500-0200",
      "0500-0300",
      "0500-0400",
      "0500-0500",
      "0600-0100",
      "0600-0200",
      "0600-0300",
      "0600-0400",
      "0600-0500",
      "0650-0100",
      "0650-0200",
      "0650-0300",
      "0650-0400",
      "0650-0500",
      "0700-0100",
      "0700-0200",
      "0700-0300",
      "0700-0400",
      "0700-0500",
      "0800-0100",
      "0800-0200",
      "0800-0300",
      "0800-0400",
      "0800-0500",
      "0900-0100",
      "0900-0200",
      "0900-0300",
      "0900-0400",
      "0900-0500",
      "0950-0100",
      "0950-0200",
      "0950-0300",
      "0950-0400",
      "0950-0500",
      "1000-0100",
      "1000-0200",
      "1000-0300",
      "1000-0400",
      "1000-0500",
      "1100-0100",
      "1100-0200",
      "1100-0300",
      "1100-0400",
      "1100-0500",
      "1150-0100",
      "1150-0200",
      "1150-0300",
      "1150-0400",
      "1150-0500",
      "1200-0100",
      "1200-0200",
      "1200-0300",
      "1200-0400",
      "1200-0500",
      "1300-0100",
      "1300-0200",
      "1300-0300",
      "1300-0400",
      "1300-0500"
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
      "0600"
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
  }
} as const;

/**
 * Reverse mapping, CSS custom property -> canonical Figma name + TS path.
 *
 * The reverse transform is a lookup, never a parse: a hyphen in
 * `--typography-font-size-0400` could have come from a segment boundary or
 * from the space inside "Font Size", and the string alone cannot tell you
 * which. Look it up here instead of taking the name apart.
 */
export const foundationLookup: Readonly<Record<string, { canonical: string; ts: string }>> = {
  "--color-blue-0100": {
    "canonical": "Color/Blue/0100",
    "ts": "foundation.color.blue['0100']"
  },
  "--color-blue-0200": {
    "canonical": "Color/Blue/0200",
    "ts": "foundation.color.blue['0200']"
  },
  "--color-blue-0300": {
    "canonical": "Color/Blue/0300",
    "ts": "foundation.color.blue['0300']"
  },
  "--color-blue-0400": {
    "canonical": "Color/Blue/0400",
    "ts": "foundation.color.blue['0400']"
  },
  "--color-blue-0500": {
    "canonical": "Color/Blue/0500",
    "ts": "foundation.color.blue['0500']"
  },
  "--color-blue-0600": {
    "canonical": "Color/Blue/0600",
    "ts": "foundation.color.blue['0600']"
  },
  "--color-blue-0700": {
    "canonical": "Color/Blue/0700",
    "ts": "foundation.color.blue['0700']"
  },
  "--color-blue-0800": {
    "canonical": "Color/Blue/0800",
    "ts": "foundation.color.blue['0800']"
  },
  "--color-blue-0900": {
    "canonical": "Color/Blue/0900",
    "ts": "foundation.color.blue['0900']"
  },
  "--color-blue-1000": {
    "canonical": "Color/Blue/1000",
    "ts": "foundation.color.blue['1000']"
  },
  "--color-blue-1100": {
    "canonical": "Color/Blue/1100",
    "ts": "foundation.color.blue['1100']"
  },
  "--color-blue-1200": {
    "canonical": "Color/Blue/1200",
    "ts": "foundation.color.blue['1200']"
  },
  "--color-blue-1300": {
    "canonical": "Color/Blue/1300",
    "ts": "foundation.color.blue['1300']"
  },
  "--color-gray-0000": {
    "canonical": "Color/Gray/0000",
    "ts": "foundation.color.gray['0000']"
  },
  "--color-gray-0100": {
    "canonical": "Color/Gray/0100",
    "ts": "foundation.color.gray['0100']"
  },
  "--color-gray-0200": {
    "canonical": "Color/Gray/0200",
    "ts": "foundation.color.gray['0200']"
  },
  "--color-gray-0300": {
    "canonical": "Color/Gray/0300",
    "ts": "foundation.color.gray['0300']"
  },
  "--color-gray-0400": {
    "canonical": "Color/Gray/0400",
    "ts": "foundation.color.gray['0400']"
  },
  "--color-gray-0500": {
    "canonical": "Color/Gray/0500",
    "ts": "foundation.color.gray['0500']"
  },
  "--color-gray-0600": {
    "canonical": "Color/Gray/0600",
    "ts": "foundation.color.gray['0600']"
  },
  "--color-gray-0700": {
    "canonical": "Color/Gray/0700",
    "ts": "foundation.color.gray['0700']"
  },
  "--color-gray-0800": {
    "canonical": "Color/Gray/0800",
    "ts": "foundation.color.gray['0800']"
  },
  "--color-gray-0900": {
    "canonical": "Color/Gray/0900",
    "ts": "foundation.color.gray['0900']"
  },
  "--color-gray-1000": {
    "canonical": "Color/Gray/1000",
    "ts": "foundation.color.gray['1000']"
  },
  "--color-gray-1100": {
    "canonical": "Color/Gray/1100",
    "ts": "foundation.color.gray['1100']"
  },
  "--color-gray-1200": {
    "canonical": "Color/Gray/1200",
    "ts": "foundation.color.gray['1200']"
  },
  "--color-gray-1300": {
    "canonical": "Color/Gray/1300",
    "ts": "foundation.color.gray['1300']"
  },
  "--color-red-0100": {
    "canonical": "Color/Red/0100",
    "ts": "foundation.color.red['0100']"
  },
  "--color-red-0200": {
    "canonical": "Color/Red/0200",
    "ts": "foundation.color.red['0200']"
  },
  "--color-red-0300": {
    "canonical": "Color/Red/0300",
    "ts": "foundation.color.red['0300']"
  },
  "--color-red-0400": {
    "canonical": "Color/Red/0400",
    "ts": "foundation.color.red['0400']"
  },
  "--color-red-0500": {
    "canonical": "Color/Red/0500",
    "ts": "foundation.color.red['0500']"
  },
  "--color-red-0600": {
    "canonical": "Color/Red/0600",
    "ts": "foundation.color.red['0600']"
  },
  "--color-red-0700": {
    "canonical": "Color/Red/0700",
    "ts": "foundation.color.red['0700']"
  },
  "--color-red-0800": {
    "canonical": "Color/Red/0800",
    "ts": "foundation.color.red['0800']"
  },
  "--color-red-0900": {
    "canonical": "Color/Red/0900",
    "ts": "foundation.color.red['0900']"
  },
  "--color-red-1000": {
    "canonical": "Color/Red/1000",
    "ts": "foundation.color.red['1000']"
  },
  "--color-red-1100": {
    "canonical": "Color/Red/1100",
    "ts": "foundation.color.red['1100']"
  },
  "--color-red-1200": {
    "canonical": "Color/Red/1200",
    "ts": "foundation.color.red['1200']"
  },
  "--color-red-1300": {
    "canonical": "Color/Red/1300",
    "ts": "foundation.color.red['1300']"
  },
  "--color-green-0100": {
    "canonical": "Color/Green/0100",
    "ts": "foundation.color.green['0100']"
  },
  "--color-green-0200": {
    "canonical": "Color/Green/0200",
    "ts": "foundation.color.green['0200']"
  },
  "--color-green-0300": {
    "canonical": "Color/Green/0300",
    "ts": "foundation.color.green['0300']"
  },
  "--color-green-0400": {
    "canonical": "Color/Green/0400",
    "ts": "foundation.color.green['0400']"
  },
  "--color-green-0500": {
    "canonical": "Color/Green/0500",
    "ts": "foundation.color.green['0500']"
  },
  "--color-green-0600": {
    "canonical": "Color/Green/0600",
    "ts": "foundation.color.green['0600']"
  },
  "--color-green-0700": {
    "canonical": "Color/Green/0700",
    "ts": "foundation.color.green['0700']"
  },
  "--color-green-0800": {
    "canonical": "Color/Green/0800",
    "ts": "foundation.color.green['0800']"
  },
  "--color-green-0900": {
    "canonical": "Color/Green/0900",
    "ts": "foundation.color.green['0900']"
  },
  "--color-green-1000": {
    "canonical": "Color/Green/1000",
    "ts": "foundation.color.green['1000']"
  },
  "--color-green-1100": {
    "canonical": "Color/Green/1100",
    "ts": "foundation.color.green['1100']"
  },
  "--color-green-1200": {
    "canonical": "Color/Green/1200",
    "ts": "foundation.color.green['1200']"
  },
  "--color-green-1300": {
    "canonical": "Color/Green/1300",
    "ts": "foundation.color.green['1300']"
  },
  "--color-yellow-0100": {
    "canonical": "Color/Yellow/0100",
    "ts": "foundation.color.yellow['0100']"
  },
  "--color-yellow-0200": {
    "canonical": "Color/Yellow/0200",
    "ts": "foundation.color.yellow['0200']"
  },
  "--color-yellow-0300": {
    "canonical": "Color/Yellow/0300",
    "ts": "foundation.color.yellow['0300']"
  },
  "--color-yellow-0400": {
    "canonical": "Color/Yellow/0400",
    "ts": "foundation.color.yellow['0400']"
  },
  "--color-yellow-0500": {
    "canonical": "Color/Yellow/0500",
    "ts": "foundation.color.yellow['0500']"
  },
  "--color-yellow-0600": {
    "canonical": "Color/Yellow/0600",
    "ts": "foundation.color.yellow['0600']"
  },
  "--color-yellow-0700": {
    "canonical": "Color/Yellow/0700",
    "ts": "foundation.color.yellow['0700']"
  },
  "--color-yellow-0800": {
    "canonical": "Color/Yellow/0800",
    "ts": "foundation.color.yellow['0800']"
  },
  "--color-yellow-0900": {
    "canonical": "Color/Yellow/0900",
    "ts": "foundation.color.yellow['0900']"
  },
  "--color-yellow-1000": {
    "canonical": "Color/Yellow/1000",
    "ts": "foundation.color.yellow['1000']"
  },
  "--color-yellow-1100": {
    "canonical": "Color/Yellow/1100",
    "ts": "foundation.color.yellow['1100']"
  },
  "--color-yellow-1200": {
    "canonical": "Color/Yellow/1200",
    "ts": "foundation.color.yellow['1200']"
  },
  "--color-yellow-1300": {
    "canonical": "Color/Yellow/1300",
    "ts": "foundation.color.yellow['1300']"
  },
  "--color-sky-0100": {
    "canonical": "Color/Sky/0100",
    "ts": "foundation.color.sky['0100']"
  },
  "--color-sky-0200": {
    "canonical": "Color/Sky/0200",
    "ts": "foundation.color.sky['0200']"
  },
  "--color-sky-0300": {
    "canonical": "Color/Sky/0300",
    "ts": "foundation.color.sky['0300']"
  },
  "--color-sky-0400": {
    "canonical": "Color/Sky/0400",
    "ts": "foundation.color.sky['0400']"
  },
  "--color-sky-0500": {
    "canonical": "Color/Sky/0500",
    "ts": "foundation.color.sky['0500']"
  },
  "--color-sky-0600": {
    "canonical": "Color/Sky/0600",
    "ts": "foundation.color.sky['0600']"
  },
  "--color-sky-0700": {
    "canonical": "Color/Sky/0700",
    "ts": "foundation.color.sky['0700']"
  },
  "--color-sky-0800": {
    "canonical": "Color/Sky/0800",
    "ts": "foundation.color.sky['0800']"
  },
  "--color-sky-0900": {
    "canonical": "Color/Sky/0900",
    "ts": "foundation.color.sky['0900']"
  },
  "--color-sky-1000": {
    "canonical": "Color/Sky/1000",
    "ts": "foundation.color.sky['1000']"
  },
  "--color-sky-1100": {
    "canonical": "Color/Sky/1100",
    "ts": "foundation.color.sky['1100']"
  },
  "--color-sky-1200": {
    "canonical": "Color/Sky/1200",
    "ts": "foundation.color.sky['1200']"
  },
  "--color-sky-1300": {
    "canonical": "Color/Sky/1300",
    "ts": "foundation.color.sky['1300']"
  },
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
  "--typography-line-height-0050-0100": {
    "canonical": "Typography/Line Height/0050-0100",
    "ts": "foundation.typography.lineHeight['0050-0100']"
  },
  "--typography-line-height-0050-0200": {
    "canonical": "Typography/Line Height/0050-0200",
    "ts": "foundation.typography.lineHeight['0050-0200']"
  },
  "--typography-line-height-0050-0300": {
    "canonical": "Typography/Line Height/0050-0300",
    "ts": "foundation.typography.lineHeight['0050-0300']"
  },
  "--typography-line-height-0050-0400": {
    "canonical": "Typography/Line Height/0050-0400",
    "ts": "foundation.typography.lineHeight['0050-0400']"
  },
  "--typography-line-height-0100-0100": {
    "canonical": "Typography/Line Height/0100-0100",
    "ts": "foundation.typography.lineHeight['0100-0100']"
  },
  "--typography-line-height-0100-0200": {
    "canonical": "Typography/Line Height/0100-0200",
    "ts": "foundation.typography.lineHeight['0100-0200']"
  },
  "--typography-line-height-0100-0300": {
    "canonical": "Typography/Line Height/0100-0300",
    "ts": "foundation.typography.lineHeight['0100-0300']"
  },
  "--typography-line-height-0100-0400": {
    "canonical": "Typography/Line Height/0100-0400",
    "ts": "foundation.typography.lineHeight['0100-0400']"
  },
  "--typography-line-height-0150-0100": {
    "canonical": "Typography/Line Height/0150-0100",
    "ts": "foundation.typography.lineHeight['0150-0100']"
  },
  "--typography-line-height-0150-0200": {
    "canonical": "Typography/Line Height/0150-0200",
    "ts": "foundation.typography.lineHeight['0150-0200']"
  },
  "--typography-line-height-0150-0300": {
    "canonical": "Typography/Line Height/0150-0300",
    "ts": "foundation.typography.lineHeight['0150-0300']"
  },
  "--typography-line-height-0150-0400": {
    "canonical": "Typography/Line Height/0150-0400",
    "ts": "foundation.typography.lineHeight['0150-0400']"
  },
  "--typography-line-height-0200-0100": {
    "canonical": "Typography/Line Height/0200-0100",
    "ts": "foundation.typography.lineHeight['0200-0100']"
  },
  "--typography-line-height-0200-0200": {
    "canonical": "Typography/Line Height/0200-0200",
    "ts": "foundation.typography.lineHeight['0200-0200']"
  },
  "--typography-line-height-0200-0300": {
    "canonical": "Typography/Line Height/0200-0300",
    "ts": "foundation.typography.lineHeight['0200-0300']"
  },
  "--typography-line-height-0200-0400": {
    "canonical": "Typography/Line Height/0200-0400",
    "ts": "foundation.typography.lineHeight['0200-0400']"
  },
  "--typography-line-height-0300-0100": {
    "canonical": "Typography/Line Height/0300-0100",
    "ts": "foundation.typography.lineHeight['0300-0100']"
  },
  "--typography-line-height-0300-0200": {
    "canonical": "Typography/Line Height/0300-0200",
    "ts": "foundation.typography.lineHeight['0300-0200']"
  },
  "--typography-line-height-0300-0300": {
    "canonical": "Typography/Line Height/0300-0300",
    "ts": "foundation.typography.lineHeight['0300-0300']"
  },
  "--typography-line-height-0300-0400": {
    "canonical": "Typography/Line Height/0300-0400",
    "ts": "foundation.typography.lineHeight['0300-0400']"
  },
  "--typography-line-height-0400-0100": {
    "canonical": "Typography/Line Height/0400-0100",
    "ts": "foundation.typography.lineHeight['0400-0100']"
  },
  "--typography-line-height-0400-0200": {
    "canonical": "Typography/Line Height/0400-0200",
    "ts": "foundation.typography.lineHeight['0400-0200']"
  },
  "--typography-line-height-0400-0300": {
    "canonical": "Typography/Line Height/0400-0300",
    "ts": "foundation.typography.lineHeight['0400-0300']"
  },
  "--typography-line-height-0400-0400": {
    "canonical": "Typography/Line Height/0400-0400",
    "ts": "foundation.typography.lineHeight['0400-0400']"
  },
  "--typography-line-height-0500-0100": {
    "canonical": "Typography/Line Height/0500-0100",
    "ts": "foundation.typography.lineHeight['0500-0100']"
  },
  "--typography-line-height-0500-0200": {
    "canonical": "Typography/Line Height/0500-0200",
    "ts": "foundation.typography.lineHeight['0500-0200']"
  },
  "--typography-line-height-0500-0300": {
    "canonical": "Typography/Line Height/0500-0300",
    "ts": "foundation.typography.lineHeight['0500-0300']"
  },
  "--typography-line-height-0500-0400": {
    "canonical": "Typography/Line Height/0500-0400",
    "ts": "foundation.typography.lineHeight['0500-0400']"
  },
  "--typography-line-height-0600-0100": {
    "canonical": "Typography/Line Height/0600-0100",
    "ts": "foundation.typography.lineHeight['0600-0100']"
  },
  "--typography-line-height-0600-0200": {
    "canonical": "Typography/Line Height/0600-0200",
    "ts": "foundation.typography.lineHeight['0600-0200']"
  },
  "--typography-line-height-0600-0300": {
    "canonical": "Typography/Line Height/0600-0300",
    "ts": "foundation.typography.lineHeight['0600-0300']"
  },
  "--typography-line-height-0600-0400": {
    "canonical": "Typography/Line Height/0600-0400",
    "ts": "foundation.typography.lineHeight['0600-0400']"
  },
  "--typography-line-height-0650-0100": {
    "canonical": "Typography/Line Height/0650-0100",
    "ts": "foundation.typography.lineHeight['0650-0100']"
  },
  "--typography-line-height-0650-0200": {
    "canonical": "Typography/Line Height/0650-0200",
    "ts": "foundation.typography.lineHeight['0650-0200']"
  },
  "--typography-line-height-0650-0300": {
    "canonical": "Typography/Line Height/0650-0300",
    "ts": "foundation.typography.lineHeight['0650-0300']"
  },
  "--typography-line-height-0650-0400": {
    "canonical": "Typography/Line Height/0650-0400",
    "ts": "foundation.typography.lineHeight['0650-0400']"
  },
  "--typography-line-height-0700-0100": {
    "canonical": "Typography/Line Height/0700-0100",
    "ts": "foundation.typography.lineHeight['0700-0100']"
  },
  "--typography-line-height-0700-0200": {
    "canonical": "Typography/Line Height/0700-0200",
    "ts": "foundation.typography.lineHeight['0700-0200']"
  },
  "--typography-line-height-0700-0300": {
    "canonical": "Typography/Line Height/0700-0300",
    "ts": "foundation.typography.lineHeight['0700-0300']"
  },
  "--typography-line-height-0700-0400": {
    "canonical": "Typography/Line Height/0700-0400",
    "ts": "foundation.typography.lineHeight['0700-0400']"
  },
  "--typography-line-height-0800-0100": {
    "canonical": "Typography/Line Height/0800-0100",
    "ts": "foundation.typography.lineHeight['0800-0100']"
  },
  "--typography-line-height-0800-0200": {
    "canonical": "Typography/Line Height/0800-0200",
    "ts": "foundation.typography.lineHeight['0800-0200']"
  },
  "--typography-line-height-0800-0300": {
    "canonical": "Typography/Line Height/0800-0300",
    "ts": "foundation.typography.lineHeight['0800-0300']"
  },
  "--typography-line-height-0800-0400": {
    "canonical": "Typography/Line Height/0800-0400",
    "ts": "foundation.typography.lineHeight['0800-0400']"
  },
  "--typography-line-height-0900-0100": {
    "canonical": "Typography/Line Height/0900-0100",
    "ts": "foundation.typography.lineHeight['0900-0100']"
  },
  "--typography-line-height-0900-0200": {
    "canonical": "Typography/Line Height/0900-0200",
    "ts": "foundation.typography.lineHeight['0900-0200']"
  },
  "--typography-line-height-0900-0300": {
    "canonical": "Typography/Line Height/0900-0300",
    "ts": "foundation.typography.lineHeight['0900-0300']"
  },
  "--typography-line-height-0900-0400": {
    "canonical": "Typography/Line Height/0900-0400",
    "ts": "foundation.typography.lineHeight['0900-0400']"
  },
  "--typography-line-height-0950-0100": {
    "canonical": "Typography/Line Height/0950-0100",
    "ts": "foundation.typography.lineHeight['0950-0100']"
  },
  "--typography-line-height-0950-0200": {
    "canonical": "Typography/Line Height/0950-0200",
    "ts": "foundation.typography.lineHeight['0950-0200']"
  },
  "--typography-line-height-0950-0300": {
    "canonical": "Typography/Line Height/0950-0300",
    "ts": "foundation.typography.lineHeight['0950-0300']"
  },
  "--typography-line-height-0950-0400": {
    "canonical": "Typography/Line Height/0950-0400",
    "ts": "foundation.typography.lineHeight['0950-0400']"
  },
  "--typography-line-height-1000-0100": {
    "canonical": "Typography/Line Height/1000-0100",
    "ts": "foundation.typography.lineHeight['1000-0100']"
  },
  "--typography-line-height-1000-0200": {
    "canonical": "Typography/Line Height/1000-0200",
    "ts": "foundation.typography.lineHeight['1000-0200']"
  },
  "--typography-line-height-1000-0300": {
    "canonical": "Typography/Line Height/1000-0300",
    "ts": "foundation.typography.lineHeight['1000-0300']"
  },
  "--typography-line-height-1000-0400": {
    "canonical": "Typography/Line Height/1000-0400",
    "ts": "foundation.typography.lineHeight['1000-0400']"
  },
  "--typography-line-height-1100-0100": {
    "canonical": "Typography/Line Height/1100-0100",
    "ts": "foundation.typography.lineHeight['1100-0100']"
  },
  "--typography-line-height-1100-0200": {
    "canonical": "Typography/Line Height/1100-0200",
    "ts": "foundation.typography.lineHeight['1100-0200']"
  },
  "--typography-line-height-1100-0300": {
    "canonical": "Typography/Line Height/1100-0300",
    "ts": "foundation.typography.lineHeight['1100-0300']"
  },
  "--typography-line-height-1100-0400": {
    "canonical": "Typography/Line Height/1100-0400",
    "ts": "foundation.typography.lineHeight['1100-0400']"
  },
  "--typography-line-height-1150-0100": {
    "canonical": "Typography/Line Height/1150-0100",
    "ts": "foundation.typography.lineHeight['1150-0100']"
  },
  "--typography-line-height-1150-0200": {
    "canonical": "Typography/Line Height/1150-0200",
    "ts": "foundation.typography.lineHeight['1150-0200']"
  },
  "--typography-line-height-1150-0300": {
    "canonical": "Typography/Line Height/1150-0300",
    "ts": "foundation.typography.lineHeight['1150-0300']"
  },
  "--typography-line-height-1150-0400": {
    "canonical": "Typography/Line Height/1150-0400",
    "ts": "foundation.typography.lineHeight['1150-0400']"
  },
  "--typography-line-height-1200-0100": {
    "canonical": "Typography/Line Height/1200-0100",
    "ts": "foundation.typography.lineHeight['1200-0100']"
  },
  "--typography-line-height-1200-0200": {
    "canonical": "Typography/Line Height/1200-0200",
    "ts": "foundation.typography.lineHeight['1200-0200']"
  },
  "--typography-line-height-1200-0300": {
    "canonical": "Typography/Line Height/1200-0300",
    "ts": "foundation.typography.lineHeight['1200-0300']"
  },
  "--typography-line-height-1200-0400": {
    "canonical": "Typography/Line Height/1200-0400",
    "ts": "foundation.typography.lineHeight['1200-0400']"
  },
  "--typography-line-height-1300-0100": {
    "canonical": "Typography/Line Height/1300-0100",
    "ts": "foundation.typography.lineHeight['1300-0100']"
  },
  "--typography-line-height-1300-0200": {
    "canonical": "Typography/Line Height/1300-0200",
    "ts": "foundation.typography.lineHeight['1300-0200']"
  },
  "--typography-line-height-1300-0300": {
    "canonical": "Typography/Line Height/1300-0300",
    "ts": "foundation.typography.lineHeight['1300-0300']"
  },
  "--typography-line-height-1300-0400": {
    "canonical": "Typography/Line Height/1300-0400",
    "ts": "foundation.typography.lineHeight['1300-0400']"
  },
  "--typography-letter-spacing-0050-0100": {
    "canonical": "Typography/Letter Spacing/0050-0100",
    "ts": "foundation.typography.letterSpacing['0050-0100']"
  },
  "--typography-letter-spacing-0050-0200": {
    "canonical": "Typography/Letter Spacing/0050-0200",
    "ts": "foundation.typography.letterSpacing['0050-0200']"
  },
  "--typography-letter-spacing-0050-0300": {
    "canonical": "Typography/Letter Spacing/0050-0300",
    "ts": "foundation.typography.letterSpacing['0050-0300']"
  },
  "--typography-letter-spacing-0050-0400": {
    "canonical": "Typography/Letter Spacing/0050-0400",
    "ts": "foundation.typography.letterSpacing['0050-0400']"
  },
  "--typography-letter-spacing-0050-0500": {
    "canonical": "Typography/Letter Spacing/0050-0500",
    "ts": "foundation.typography.letterSpacing['0050-0500']"
  },
  "--typography-letter-spacing-0100-0100": {
    "canonical": "Typography/Letter Spacing/0100-0100",
    "ts": "foundation.typography.letterSpacing['0100-0100']"
  },
  "--typography-letter-spacing-0100-0200": {
    "canonical": "Typography/Letter Spacing/0100-0200",
    "ts": "foundation.typography.letterSpacing['0100-0200']"
  },
  "--typography-letter-spacing-0100-0300": {
    "canonical": "Typography/Letter Spacing/0100-0300",
    "ts": "foundation.typography.letterSpacing['0100-0300']"
  },
  "--typography-letter-spacing-0100-0400": {
    "canonical": "Typography/Letter Spacing/0100-0400",
    "ts": "foundation.typography.letterSpacing['0100-0400']"
  },
  "--typography-letter-spacing-0100-0500": {
    "canonical": "Typography/Letter Spacing/0100-0500",
    "ts": "foundation.typography.letterSpacing['0100-0500']"
  },
  "--typography-letter-spacing-0150-0100": {
    "canonical": "Typography/Letter Spacing/0150-0100",
    "ts": "foundation.typography.letterSpacing['0150-0100']"
  },
  "--typography-letter-spacing-0150-0200": {
    "canonical": "Typography/Letter Spacing/0150-0200",
    "ts": "foundation.typography.letterSpacing['0150-0200']"
  },
  "--typography-letter-spacing-0150-0300": {
    "canonical": "Typography/Letter Spacing/0150-0300",
    "ts": "foundation.typography.letterSpacing['0150-0300']"
  },
  "--typography-letter-spacing-0150-0400": {
    "canonical": "Typography/Letter Spacing/0150-0400",
    "ts": "foundation.typography.letterSpacing['0150-0400']"
  },
  "--typography-letter-spacing-0150-0500": {
    "canonical": "Typography/Letter Spacing/0150-0500",
    "ts": "foundation.typography.letterSpacing['0150-0500']"
  },
  "--typography-letter-spacing-0200-0100": {
    "canonical": "Typography/Letter Spacing/0200-0100",
    "ts": "foundation.typography.letterSpacing['0200-0100']"
  },
  "--typography-letter-spacing-0200-0200": {
    "canonical": "Typography/Letter Spacing/0200-0200",
    "ts": "foundation.typography.letterSpacing['0200-0200']"
  },
  "--typography-letter-spacing-0200-0300": {
    "canonical": "Typography/Letter Spacing/0200-0300",
    "ts": "foundation.typography.letterSpacing['0200-0300']"
  },
  "--typography-letter-spacing-0200-0400": {
    "canonical": "Typography/Letter Spacing/0200-0400",
    "ts": "foundation.typography.letterSpacing['0200-0400']"
  },
  "--typography-letter-spacing-0200-0500": {
    "canonical": "Typography/Letter Spacing/0200-0500",
    "ts": "foundation.typography.letterSpacing['0200-0500']"
  },
  "--typography-letter-spacing-0300-0100": {
    "canonical": "Typography/Letter Spacing/0300-0100",
    "ts": "foundation.typography.letterSpacing['0300-0100']"
  },
  "--typography-letter-spacing-0300-0200": {
    "canonical": "Typography/Letter Spacing/0300-0200",
    "ts": "foundation.typography.letterSpacing['0300-0200']"
  },
  "--typography-letter-spacing-0300-0300": {
    "canonical": "Typography/Letter Spacing/0300-0300",
    "ts": "foundation.typography.letterSpacing['0300-0300']"
  },
  "--typography-letter-spacing-0300-0400": {
    "canonical": "Typography/Letter Spacing/0300-0400",
    "ts": "foundation.typography.letterSpacing['0300-0400']"
  },
  "--typography-letter-spacing-0300-0500": {
    "canonical": "Typography/Letter Spacing/0300-0500",
    "ts": "foundation.typography.letterSpacing['0300-0500']"
  },
  "--typography-letter-spacing-0400-0100": {
    "canonical": "Typography/Letter Spacing/0400-0100",
    "ts": "foundation.typography.letterSpacing['0400-0100']"
  },
  "--typography-letter-spacing-0400-0200": {
    "canonical": "Typography/Letter Spacing/0400-0200",
    "ts": "foundation.typography.letterSpacing['0400-0200']"
  },
  "--typography-letter-spacing-0400-0300": {
    "canonical": "Typography/Letter Spacing/0400-0300",
    "ts": "foundation.typography.letterSpacing['0400-0300']"
  },
  "--typography-letter-spacing-0400-0400": {
    "canonical": "Typography/Letter Spacing/0400-0400",
    "ts": "foundation.typography.letterSpacing['0400-0400']"
  },
  "--typography-letter-spacing-0400-0500": {
    "canonical": "Typography/Letter Spacing/0400-0500",
    "ts": "foundation.typography.letterSpacing['0400-0500']"
  },
  "--typography-letter-spacing-0500-0100": {
    "canonical": "Typography/Letter Spacing/0500-0100",
    "ts": "foundation.typography.letterSpacing['0500-0100']"
  },
  "--typography-letter-spacing-0500-0200": {
    "canonical": "Typography/Letter Spacing/0500-0200",
    "ts": "foundation.typography.letterSpacing['0500-0200']"
  },
  "--typography-letter-spacing-0500-0300": {
    "canonical": "Typography/Letter Spacing/0500-0300",
    "ts": "foundation.typography.letterSpacing['0500-0300']"
  },
  "--typography-letter-spacing-0500-0400": {
    "canonical": "Typography/Letter Spacing/0500-0400",
    "ts": "foundation.typography.letterSpacing['0500-0400']"
  },
  "--typography-letter-spacing-0500-0500": {
    "canonical": "Typography/Letter Spacing/0500-0500",
    "ts": "foundation.typography.letterSpacing['0500-0500']"
  },
  "--typography-letter-spacing-0600-0100": {
    "canonical": "Typography/Letter Spacing/0600-0100",
    "ts": "foundation.typography.letterSpacing['0600-0100']"
  },
  "--typography-letter-spacing-0600-0200": {
    "canonical": "Typography/Letter Spacing/0600-0200",
    "ts": "foundation.typography.letterSpacing['0600-0200']"
  },
  "--typography-letter-spacing-0600-0300": {
    "canonical": "Typography/Letter Spacing/0600-0300",
    "ts": "foundation.typography.letterSpacing['0600-0300']"
  },
  "--typography-letter-spacing-0600-0400": {
    "canonical": "Typography/Letter Spacing/0600-0400",
    "ts": "foundation.typography.letterSpacing['0600-0400']"
  },
  "--typography-letter-spacing-0600-0500": {
    "canonical": "Typography/Letter Spacing/0600-0500",
    "ts": "foundation.typography.letterSpacing['0600-0500']"
  },
  "--typography-letter-spacing-0650-0100": {
    "canonical": "Typography/Letter Spacing/0650-0100",
    "ts": "foundation.typography.letterSpacing['0650-0100']"
  },
  "--typography-letter-spacing-0650-0200": {
    "canonical": "Typography/Letter Spacing/0650-0200",
    "ts": "foundation.typography.letterSpacing['0650-0200']"
  },
  "--typography-letter-spacing-0650-0300": {
    "canonical": "Typography/Letter Spacing/0650-0300",
    "ts": "foundation.typography.letterSpacing['0650-0300']"
  },
  "--typography-letter-spacing-0650-0400": {
    "canonical": "Typography/Letter Spacing/0650-0400",
    "ts": "foundation.typography.letterSpacing['0650-0400']"
  },
  "--typography-letter-spacing-0650-0500": {
    "canonical": "Typography/Letter Spacing/0650-0500",
    "ts": "foundation.typography.letterSpacing['0650-0500']"
  },
  "--typography-letter-spacing-0700-0100": {
    "canonical": "Typography/Letter Spacing/0700-0100",
    "ts": "foundation.typography.letterSpacing['0700-0100']"
  },
  "--typography-letter-spacing-0700-0200": {
    "canonical": "Typography/Letter Spacing/0700-0200",
    "ts": "foundation.typography.letterSpacing['0700-0200']"
  },
  "--typography-letter-spacing-0700-0300": {
    "canonical": "Typography/Letter Spacing/0700-0300",
    "ts": "foundation.typography.letterSpacing['0700-0300']"
  },
  "--typography-letter-spacing-0700-0400": {
    "canonical": "Typography/Letter Spacing/0700-0400",
    "ts": "foundation.typography.letterSpacing['0700-0400']"
  },
  "--typography-letter-spacing-0700-0500": {
    "canonical": "Typography/Letter Spacing/0700-0500",
    "ts": "foundation.typography.letterSpacing['0700-0500']"
  },
  "--typography-letter-spacing-0800-0100": {
    "canonical": "Typography/Letter Spacing/0800-0100",
    "ts": "foundation.typography.letterSpacing['0800-0100']"
  },
  "--typography-letter-spacing-0800-0200": {
    "canonical": "Typography/Letter Spacing/0800-0200",
    "ts": "foundation.typography.letterSpacing['0800-0200']"
  },
  "--typography-letter-spacing-0800-0300": {
    "canonical": "Typography/Letter Spacing/0800-0300",
    "ts": "foundation.typography.letterSpacing['0800-0300']"
  },
  "--typography-letter-spacing-0800-0400": {
    "canonical": "Typography/Letter Spacing/0800-0400",
    "ts": "foundation.typography.letterSpacing['0800-0400']"
  },
  "--typography-letter-spacing-0800-0500": {
    "canonical": "Typography/Letter Spacing/0800-0500",
    "ts": "foundation.typography.letterSpacing['0800-0500']"
  },
  "--typography-letter-spacing-0900-0100": {
    "canonical": "Typography/Letter Spacing/0900-0100",
    "ts": "foundation.typography.letterSpacing['0900-0100']"
  },
  "--typography-letter-spacing-0900-0200": {
    "canonical": "Typography/Letter Spacing/0900-0200",
    "ts": "foundation.typography.letterSpacing['0900-0200']"
  },
  "--typography-letter-spacing-0900-0300": {
    "canonical": "Typography/Letter Spacing/0900-0300",
    "ts": "foundation.typography.letterSpacing['0900-0300']"
  },
  "--typography-letter-spacing-0900-0400": {
    "canonical": "Typography/Letter Spacing/0900-0400",
    "ts": "foundation.typography.letterSpacing['0900-0400']"
  },
  "--typography-letter-spacing-0900-0500": {
    "canonical": "Typography/Letter Spacing/0900-0500",
    "ts": "foundation.typography.letterSpacing['0900-0500']"
  },
  "--typography-letter-spacing-0950-0100": {
    "canonical": "Typography/Letter Spacing/0950-0100",
    "ts": "foundation.typography.letterSpacing['0950-0100']"
  },
  "--typography-letter-spacing-0950-0200": {
    "canonical": "Typography/Letter Spacing/0950-0200",
    "ts": "foundation.typography.letterSpacing['0950-0200']"
  },
  "--typography-letter-spacing-0950-0300": {
    "canonical": "Typography/Letter Spacing/0950-0300",
    "ts": "foundation.typography.letterSpacing['0950-0300']"
  },
  "--typography-letter-spacing-0950-0400": {
    "canonical": "Typography/Letter Spacing/0950-0400",
    "ts": "foundation.typography.letterSpacing['0950-0400']"
  },
  "--typography-letter-spacing-0950-0500": {
    "canonical": "Typography/Letter Spacing/0950-0500",
    "ts": "foundation.typography.letterSpacing['0950-0500']"
  },
  "--typography-letter-spacing-1000-0100": {
    "canonical": "Typography/Letter Spacing/1000-0100",
    "ts": "foundation.typography.letterSpacing['1000-0100']"
  },
  "--typography-letter-spacing-1000-0200": {
    "canonical": "Typography/Letter Spacing/1000-0200",
    "ts": "foundation.typography.letterSpacing['1000-0200']"
  },
  "--typography-letter-spacing-1000-0300": {
    "canonical": "Typography/Letter Spacing/1000-0300",
    "ts": "foundation.typography.letterSpacing['1000-0300']"
  },
  "--typography-letter-spacing-1000-0400": {
    "canonical": "Typography/Letter Spacing/1000-0400",
    "ts": "foundation.typography.letterSpacing['1000-0400']"
  },
  "--typography-letter-spacing-1000-0500": {
    "canonical": "Typography/Letter Spacing/1000-0500",
    "ts": "foundation.typography.letterSpacing['1000-0500']"
  },
  "--typography-letter-spacing-1100-0100": {
    "canonical": "Typography/Letter Spacing/1100-0100",
    "ts": "foundation.typography.letterSpacing['1100-0100']"
  },
  "--typography-letter-spacing-1100-0200": {
    "canonical": "Typography/Letter Spacing/1100-0200",
    "ts": "foundation.typography.letterSpacing['1100-0200']"
  },
  "--typography-letter-spacing-1100-0300": {
    "canonical": "Typography/Letter Spacing/1100-0300",
    "ts": "foundation.typography.letterSpacing['1100-0300']"
  },
  "--typography-letter-spacing-1100-0400": {
    "canonical": "Typography/Letter Spacing/1100-0400",
    "ts": "foundation.typography.letterSpacing['1100-0400']"
  },
  "--typography-letter-spacing-1100-0500": {
    "canonical": "Typography/Letter Spacing/1100-0500",
    "ts": "foundation.typography.letterSpacing['1100-0500']"
  },
  "--typography-letter-spacing-1150-0100": {
    "canonical": "Typography/Letter Spacing/1150-0100",
    "ts": "foundation.typography.letterSpacing['1150-0100']"
  },
  "--typography-letter-spacing-1150-0200": {
    "canonical": "Typography/Letter Spacing/1150-0200",
    "ts": "foundation.typography.letterSpacing['1150-0200']"
  },
  "--typography-letter-spacing-1150-0300": {
    "canonical": "Typography/Letter Spacing/1150-0300",
    "ts": "foundation.typography.letterSpacing['1150-0300']"
  },
  "--typography-letter-spacing-1150-0400": {
    "canonical": "Typography/Letter Spacing/1150-0400",
    "ts": "foundation.typography.letterSpacing['1150-0400']"
  },
  "--typography-letter-spacing-1150-0500": {
    "canonical": "Typography/Letter Spacing/1150-0500",
    "ts": "foundation.typography.letterSpacing['1150-0500']"
  },
  "--typography-letter-spacing-1200-0100": {
    "canonical": "Typography/Letter Spacing/1200-0100",
    "ts": "foundation.typography.letterSpacing['1200-0100']"
  },
  "--typography-letter-spacing-1200-0200": {
    "canonical": "Typography/Letter Spacing/1200-0200",
    "ts": "foundation.typography.letterSpacing['1200-0200']"
  },
  "--typography-letter-spacing-1200-0300": {
    "canonical": "Typography/Letter Spacing/1200-0300",
    "ts": "foundation.typography.letterSpacing['1200-0300']"
  },
  "--typography-letter-spacing-1200-0400": {
    "canonical": "Typography/Letter Spacing/1200-0400",
    "ts": "foundation.typography.letterSpacing['1200-0400']"
  },
  "--typography-letter-spacing-1200-0500": {
    "canonical": "Typography/Letter Spacing/1200-0500",
    "ts": "foundation.typography.letterSpacing['1200-0500']"
  },
  "--typography-letter-spacing-1300-0100": {
    "canonical": "Typography/Letter Spacing/1300-0100",
    "ts": "foundation.typography.letterSpacing['1300-0100']"
  },
  "--typography-letter-spacing-1300-0200": {
    "canonical": "Typography/Letter Spacing/1300-0200",
    "ts": "foundation.typography.letterSpacing['1300-0200']"
  },
  "--typography-letter-spacing-1300-0300": {
    "canonical": "Typography/Letter Spacing/1300-0300",
    "ts": "foundation.typography.letterSpacing['1300-0300']"
  },
  "--typography-letter-spacing-1300-0400": {
    "canonical": "Typography/Letter Spacing/1300-0400",
    "ts": "foundation.typography.letterSpacing['1300-0400']"
  },
  "--typography-letter-spacing-1300-0500": {
    "canonical": "Typography/Letter Spacing/1300-0500",
    "ts": "foundation.typography.letterSpacing['1300-0500']"
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
  }
};

export type Foundation = typeof foundation;
export type FoundationCategory = keyof Foundation;

export type BlueStep = keyof Foundation['color']['blue'];
export type GrayStep = keyof Foundation['color']['gray'];
export type RedStep = keyof Foundation['color']['red'];
export type GreenStep = keyof Foundation['color']['green'];
export type YellowStep = keyof Foundation['color']['yellow'];
export type SkyStep = keyof Foundation['color']['sky'];
export type FontSizeStep = keyof Foundation['typography']['fontSize'];
export type FontWeightStep = keyof Foundation['typography']['fontWeight'];
export type FontFamilyOption = keyof Foundation['typography']['fontFamily'];
export type LineHeightOption = keyof Foundation['typography']['lineHeight'];
export type LetterSpacingOption = keyof Foundation['typography']['letterSpacing'];
export type SpaceStep = keyof Foundation['layout']['space'];
export type SizeStep = keyof Foundation['layout']['size'];
export type RadiusStep = keyof Foundation['shape']['radius'];
export type StrokeStep = keyof Foundation['shape']['stroke'];
export type OpacityStep = keyof Foundation['effect']['opacity'];
