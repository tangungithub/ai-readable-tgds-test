/**
 * GENERATED FILE — do not edit by hand.
 * Source: token/Foundation.json
 * Regenerate: npm run tokens:build
 *
 * Shape follows TKN-04: segment boundaries become object nesting, words
 * inside a segment become camelCase, numeric options stay bracket-accessed.
 *   Typography/Line Height/24-150 -> foundation.typography.lineHeight['24-150']
 */

/** Raw values. Units are carried separately in `foundationUnits`. */
export const foundation = {
  "color": {
    "blue": {
      "10": "#d7e6fa",
      "20": "#b8d2f6",
      "30": "#96bef3",
      "40": "#74a9f1",
      "50": "#0077ed",
      "60": "#005bb8",
      "70": "#024085",
      "80": "#042854",
      "90": "#031126",
      "05": "#f7faff"
    },
    "red": {
      "10": "#ffe0e0",
      "20": "#ffc7c9",
      "30": "#ffadb0",
      "40": "#ff9197",
      "50": "#ff385c",
      "60": "#c52644",
      "70": "#8d192e",
      "80": "#570f1b",
      "90": "#270609",
      "05": "#fff8f8"
    },
    "green": {
      "10": "#e1f5e4",
      "20": "#c9efd0",
      "30": "#b0e9bb",
      "40": "#93e3a5",
      "50": "#30d66e",
      "60": "#19a250",
      "70": "#0c7135",
      "80": "#06431e",
      "90": "#021a09",
      "05": "#f4fdf6"
    },
    "purple": {
      "10": "#f4e1fb",
      "20": "#ebc9f7",
      "30": "#e3aff5",
      "40": "#db95f4",
      "50": "#ca4af1",
      "60": "#9c35bb",
      "70": "#6f2485",
      "80": "#441552",
      "90": "#1d0824",
      "05": "#fdf8ff"
    },
    "gray": {
      "10": "#e1e1e1",
      "20": "#c8c8c8",
      "30": "#b0b0b0",
      "40": "#989898",
      "50": "#666666",
      "60": "#4f4f4f",
      "70": "#383838",
      "80": "#242424",
      "90": "#101010",
      "99": "#000000",
      "00": "#ffffff",
      "05": "#fafafa"
    }
  },
  "typography": {
    "fontFamily": {
      "sans": [
        "SUIT Variable"
      ],
      "serif": [
        "Noto Serif KR"
      ]
    },
    "fontSize": {
      "10": 10,
      "11": 11,
      "12": 12,
      "14": 14,
      "16": 16,
      "18": 18,
      "20": 20,
      "22": 22,
      "24": 24,
      "28": 28,
      "32": 32,
      "36": 36,
      "40": 40,
      "44": 44,
      "48": 48,
      "56": 56,
      "64": 64,
      "72": 72,
      "80": 80,
      "96": 96
    },
    "fontWeight": {
      "300": 300,
      "400": 400,
      "500": 500,
      "600": 600,
      "700": 700
    },
    "lineHeight": {
      "10-110": 11,
      "10-120": 12,
      "10-130": 13,
      "10-140": 14,
      "10-150": 15,
      "11-110": 12.1,
      "11-120": 13.2,
      "11-130": 14.3,
      "11-140": 15.4,
      "11-150": 16.5,
      "12-110": 13.2,
      "12-120": 14.4,
      "12-130": 15.6,
      "12-140": 16.8,
      "12-150": 18,
      "14-110": 15.4,
      "14-120": 16.8,
      "14-130": 18.2,
      "14-140": 19.6,
      "14-150": 21,
      "16-110": 17.6,
      "16-120": 19.2,
      "16-130": 20.8,
      "16-140": 22.4,
      "16-150": 24,
      "18-110": 19.8,
      "18-120": 21.6,
      "18-130": 23.4,
      "18-140": 25.2,
      "18-150": 27,
      "20-110": 22,
      "20-120": 24,
      "20-130": 26,
      "20-140": 28,
      "20-150": 30,
      "22-110": 24.2,
      "22-120": 26.4,
      "22-130": 28.6,
      "22-140": 30.8,
      "22-150": 33,
      "24-110": 26.4,
      "24-120": 28.8,
      "24-130": 31.2,
      "24-140": 33.6,
      "24-150": 36,
      "28-110": 30.8,
      "28-120": 33.6,
      "28-130": 36.4,
      "28-140": 39.2,
      "28-150": 42,
      "32-110": 35.2,
      "32-120": 38.4,
      "32-130": 41.6,
      "32-140": 44.8,
      "32-150": 48,
      "36-110": 39.6,
      "36-120": 43.2,
      "36-130": 46.8,
      "36-140": 50.4,
      "36-150": 54,
      "40-110": 44,
      "40-120": 48,
      "40-130": 52,
      "40-140": 56,
      "40-150": 60,
      "44-110": 48.4,
      "44-120": 52.8,
      "44-130": 57.2,
      "44-140": 61.6,
      "44-150": 66,
      "48-110": 52.8,
      "48-120": 57.6,
      "48-130": 62.4,
      "48-140": 67.2,
      "48-150": 72,
      "56-110": 61.6,
      "56-120": 67.2,
      "56-130": 72.8,
      "56-140": 78.4,
      "56-150": 84,
      "64-110": 70.4,
      "64-120": 76.8,
      "64-130": 83.2,
      "64-140": 89.6,
      "64-150": 96,
      "72-110": 79.2,
      "72-120": 86.4,
      "72-130": 93.6,
      "72-140": 100.8,
      "72-150": 108,
      "80-110": 88,
      "80-120": 96,
      "80-130": 104,
      "80-140": 112,
      "80-150": 120,
      "96-110": 105.6,
      "96-120": 115.2,
      "96-130": 124.8,
      "96-140": 134.4,
      "96-150": 144
    },
    "letterSpacing": {
      "10-i1": -0.1,
      "10-i3": -0.3,
      "11-i1": -0.11,
      "11-i3": -0.33,
      "12-i1": -0.12,
      "12-i3": -0.36,
      "14-i1": -0.14,
      "14-i3": -0.42,
      "16-i1": -0.16,
      "16-i3": -0.48,
      "18-i1": -0.18,
      "18-i3": -0.54,
      "20-i1": -0.2,
      "20-i3": -0.6,
      "22-i1": -0.22,
      "22-i3": -0.66,
      "24-i1": -0.24,
      "24-i3": -0.72,
      "28-i1": -0.28,
      "28-i3": -0.84,
      "32-i1": -0.32,
      "32-i3": -0.96,
      "36-i1": -0.36,
      "36-i3": -1.08,
      "40-i1": -0.4,
      "40-i3": -1.2,
      "44-i1": -0.44,
      "44-i3": -1.32,
      "48-i1": -0.48,
      "48-i3": -1.44,
      "56-i1": -0.56,
      "56-i3": -1.68,
      "64-i1": -0.64,
      "64-i3": -1.92,
      "72-i1": -0.72,
      "72-i3": -2.16,
      "80-i1": -0.8,
      "80-i3": -2.4,
      "96-i1": -0.96,
      "96-i3": -2.88
    }
  },
  "layout": {
    "space": {
      "1": 1,
      "2": 2,
      "4": 4,
      "6": 6,
      "8": 8,
      "12": 12,
      "16": 16,
      "20": 20,
      "24": 24,
      "32": 32,
      "40": 40,
      "48": 48,
      "56": 56,
      "64": 64,
      "72": 72,
      "80": 80,
      "96": 96,
      "112": 112,
      "128": 128
    },
    "size": {
      "1": 1,
      "2": 2,
      "4": 4,
      "8": 8,
      "12": 12,
      "16": 16,
      "20": 20,
      "24": 24,
      "32": 32,
      "40": 40,
      "48": 48,
      "56": 56,
      "64": 64,
      "80": 80,
      "96": 96,
      "112": 112,
      "128": 128
    }
  },
  "shape": {
    "radius": {
      "1": 1,
      "2": 2,
      "4": 4,
      "6": 6,
      "8": 8,
      "10": 10,
      "12": 12,
      "16": 16,
      "20": 20,
      "24": 24,
      "32": 32,
      "40": 40,
      "9999": 9999
    },
    "stroke": {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "6": 6,
      "8": 8
    }
  },
  "effect": {
    "opacity": {
      "0": 0,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "60": 60,
      "70": 70,
      "80": 80,
      "90": 90,
      "100": 100
    }
  }
} as const;

/** Unit for each Set. `null` = unitless (colors, ratios, nominal values). */
export const foundationUnits = {
  "color": {
    "blue": null,
    "red": null,
    "green": null,
    "purple": null,
    "gray": null
  },
  "typography": {
    "fontFamily": null,
    "fontSize": "px",
    "fontWeight": "css-font-weight",
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

/** Leaf token options in scale order. */
export const foundationOrder = {
  "color": {
    "blue": [
      "05",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90"
    ],
    "red": [
      "05",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90"
    ],
    "green": [
      "05",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90"
    ],
    "purple": [
      "05",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90"
    ],
    "gray": [
      "00",
      "05",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "99"
    ]
  },
  "typography": {
    "fontFamily": [
      "sans",
      "serif"
    ],
    "fontSize": [
      "10",
      "11",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
      "28",
      "32",
      "36",
      "40",
      "44",
      "48",
      "56",
      "64",
      "72",
      "80",
      "96"
    ],
    "fontWeight": [
      "300",
      "400",
      "500",
      "600",
      "700"
    ],
    "lineHeight": [
      "10-110",
      "10-120",
      "10-130",
      "10-140",
      "10-150",
      "11-110",
      "11-120",
      "11-130",
      "11-140",
      "11-150",
      "12-110",
      "12-120",
      "12-130",
      "12-140",
      "12-150",
      "14-110",
      "14-120",
      "14-130",
      "14-140",
      "14-150",
      "16-110",
      "16-120",
      "16-130",
      "16-140",
      "16-150",
      "18-110",
      "18-120",
      "18-130",
      "18-140",
      "18-150",
      "20-110",
      "20-120",
      "20-130",
      "20-140",
      "20-150",
      "22-110",
      "22-120",
      "22-130",
      "22-140",
      "22-150",
      "24-110",
      "24-120",
      "24-130",
      "24-140",
      "24-150",
      "28-110",
      "28-120",
      "28-130",
      "28-140",
      "28-150",
      "32-110",
      "32-120",
      "32-130",
      "32-140",
      "32-150",
      "36-110",
      "36-120",
      "36-130",
      "36-140",
      "36-150",
      "40-110",
      "40-120",
      "40-130",
      "40-140",
      "40-150",
      "44-110",
      "44-120",
      "44-130",
      "44-140",
      "44-150",
      "48-110",
      "48-120",
      "48-130",
      "48-140",
      "48-150",
      "56-110",
      "56-120",
      "56-130",
      "56-140",
      "56-150",
      "64-110",
      "64-120",
      "64-130",
      "64-140",
      "64-150",
      "72-110",
      "72-120",
      "72-130",
      "72-140",
      "72-150",
      "80-110",
      "80-120",
      "80-130",
      "80-140",
      "80-150",
      "96-110",
      "96-120",
      "96-130",
      "96-140",
      "96-150"
    ],
    "letterSpacing": [
      "10-i1",
      "10-i3",
      "11-i1",
      "11-i3",
      "12-i1",
      "12-i3",
      "14-i1",
      "14-i3",
      "16-i1",
      "16-i3",
      "18-i1",
      "18-i3",
      "20-i1",
      "20-i3",
      "22-i1",
      "22-i3",
      "24-i1",
      "24-i3",
      "28-i1",
      "28-i3",
      "32-i1",
      "32-i3",
      "36-i1",
      "36-i3",
      "40-i1",
      "40-i3",
      "44-i1",
      "44-i3",
      "48-i1",
      "48-i3",
      "56-i1",
      "56-i3",
      "64-i1",
      "64-i3",
      "72-i1",
      "72-i3",
      "80-i1",
      "80-i3",
      "96-i1",
      "96-i3"
    ]
  },
  "layout": {
    "space": [
      "1",
      "2",
      "4",
      "6",
      "8",
      "12",
      "16",
      "20",
      "24",
      "32",
      "40",
      "48",
      "56",
      "64",
      "72",
      "80",
      "96",
      "112",
      "128"
    ],
    "size": [
      "1",
      "2",
      "4",
      "8",
      "12",
      "16",
      "20",
      "24",
      "32",
      "40",
      "48",
      "56",
      "64",
      "80",
      "96",
      "112",
      "128"
    ]
  },
  "shape": {
    "radius": [
      "1",
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "16",
      "20",
      "24",
      "32",
      "40",
      "9999"
    ],
    "stroke": [
      "1",
      "2",
      "3",
      "4",
      "6",
      "8"
    ]
  },
  "effect": {
    "opacity": [
      "0",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "100"
    ]
  }
} as const;

/**
 * Reverse mapping, CSS custom property -> canonical Figma name + TS path.
 *
 * The reverse transform is a lookup, never a parse: a hyphen in
 * `--typography-line-height-24-150` could have come from a segment boundary,
 * from the space inside "Line Height", or from a composite Option. Look it up here instead of taking
 * the name apart.
 */
export const foundationLookup: Readonly<Record<string, { canonical: string; ts: string }>> = {
  "--color-blue-05": {
    "canonical": "Color/Blue/05",
    "ts": "foundation.color.blue['05']"
  },
  "--color-blue-10": {
    "canonical": "Color/Blue/10",
    "ts": "foundation.color.blue['10']"
  },
  "--color-blue-20": {
    "canonical": "Color/Blue/20",
    "ts": "foundation.color.blue['20']"
  },
  "--color-blue-30": {
    "canonical": "Color/Blue/30",
    "ts": "foundation.color.blue['30']"
  },
  "--color-blue-40": {
    "canonical": "Color/Blue/40",
    "ts": "foundation.color.blue['40']"
  },
  "--color-blue-50": {
    "canonical": "Color/Blue/50",
    "ts": "foundation.color.blue['50']"
  },
  "--color-blue-60": {
    "canonical": "Color/Blue/60",
    "ts": "foundation.color.blue['60']"
  },
  "--color-blue-70": {
    "canonical": "Color/Blue/70",
    "ts": "foundation.color.blue['70']"
  },
  "--color-blue-80": {
    "canonical": "Color/Blue/80",
    "ts": "foundation.color.blue['80']"
  },
  "--color-blue-90": {
    "canonical": "Color/Blue/90",
    "ts": "foundation.color.blue['90']"
  },
  "--color-red-05": {
    "canonical": "Color/Red/05",
    "ts": "foundation.color.red['05']"
  },
  "--color-red-10": {
    "canonical": "Color/Red/10",
    "ts": "foundation.color.red['10']"
  },
  "--color-red-20": {
    "canonical": "Color/Red/20",
    "ts": "foundation.color.red['20']"
  },
  "--color-red-30": {
    "canonical": "Color/Red/30",
    "ts": "foundation.color.red['30']"
  },
  "--color-red-40": {
    "canonical": "Color/Red/40",
    "ts": "foundation.color.red['40']"
  },
  "--color-red-50": {
    "canonical": "Color/Red/50",
    "ts": "foundation.color.red['50']"
  },
  "--color-red-60": {
    "canonical": "Color/Red/60",
    "ts": "foundation.color.red['60']"
  },
  "--color-red-70": {
    "canonical": "Color/Red/70",
    "ts": "foundation.color.red['70']"
  },
  "--color-red-80": {
    "canonical": "Color/Red/80",
    "ts": "foundation.color.red['80']"
  },
  "--color-red-90": {
    "canonical": "Color/Red/90",
    "ts": "foundation.color.red['90']"
  },
  "--color-green-05": {
    "canonical": "Color/Green/05",
    "ts": "foundation.color.green['05']"
  },
  "--color-green-10": {
    "canonical": "Color/Green/10",
    "ts": "foundation.color.green['10']"
  },
  "--color-green-20": {
    "canonical": "Color/Green/20",
    "ts": "foundation.color.green['20']"
  },
  "--color-green-30": {
    "canonical": "Color/Green/30",
    "ts": "foundation.color.green['30']"
  },
  "--color-green-40": {
    "canonical": "Color/Green/40",
    "ts": "foundation.color.green['40']"
  },
  "--color-green-50": {
    "canonical": "Color/Green/50",
    "ts": "foundation.color.green['50']"
  },
  "--color-green-60": {
    "canonical": "Color/Green/60",
    "ts": "foundation.color.green['60']"
  },
  "--color-green-70": {
    "canonical": "Color/Green/70",
    "ts": "foundation.color.green['70']"
  },
  "--color-green-80": {
    "canonical": "Color/Green/80",
    "ts": "foundation.color.green['80']"
  },
  "--color-green-90": {
    "canonical": "Color/Green/90",
    "ts": "foundation.color.green['90']"
  },
  "--color-purple-05": {
    "canonical": "Color/Purple/05",
    "ts": "foundation.color.purple['05']"
  },
  "--color-purple-10": {
    "canonical": "Color/Purple/10",
    "ts": "foundation.color.purple['10']"
  },
  "--color-purple-20": {
    "canonical": "Color/Purple/20",
    "ts": "foundation.color.purple['20']"
  },
  "--color-purple-30": {
    "canonical": "Color/Purple/30",
    "ts": "foundation.color.purple['30']"
  },
  "--color-purple-40": {
    "canonical": "Color/Purple/40",
    "ts": "foundation.color.purple['40']"
  },
  "--color-purple-50": {
    "canonical": "Color/Purple/50",
    "ts": "foundation.color.purple['50']"
  },
  "--color-purple-60": {
    "canonical": "Color/Purple/60",
    "ts": "foundation.color.purple['60']"
  },
  "--color-purple-70": {
    "canonical": "Color/Purple/70",
    "ts": "foundation.color.purple['70']"
  },
  "--color-purple-80": {
    "canonical": "Color/Purple/80",
    "ts": "foundation.color.purple['80']"
  },
  "--color-purple-90": {
    "canonical": "Color/Purple/90",
    "ts": "foundation.color.purple['90']"
  },
  "--color-gray-00": {
    "canonical": "Color/Gray/00",
    "ts": "foundation.color.gray['00']"
  },
  "--color-gray-05": {
    "canonical": "Color/Gray/05",
    "ts": "foundation.color.gray['05']"
  },
  "--color-gray-10": {
    "canonical": "Color/Gray/10",
    "ts": "foundation.color.gray['10']"
  },
  "--color-gray-20": {
    "canonical": "Color/Gray/20",
    "ts": "foundation.color.gray['20']"
  },
  "--color-gray-30": {
    "canonical": "Color/Gray/30",
    "ts": "foundation.color.gray['30']"
  },
  "--color-gray-40": {
    "canonical": "Color/Gray/40",
    "ts": "foundation.color.gray['40']"
  },
  "--color-gray-50": {
    "canonical": "Color/Gray/50",
    "ts": "foundation.color.gray['50']"
  },
  "--color-gray-60": {
    "canonical": "Color/Gray/60",
    "ts": "foundation.color.gray['60']"
  },
  "--color-gray-70": {
    "canonical": "Color/Gray/70",
    "ts": "foundation.color.gray['70']"
  },
  "--color-gray-80": {
    "canonical": "Color/Gray/80",
    "ts": "foundation.color.gray['80']"
  },
  "--color-gray-90": {
    "canonical": "Color/Gray/90",
    "ts": "foundation.color.gray['90']"
  },
  "--color-gray-99": {
    "canonical": "Color/Gray/99",
    "ts": "foundation.color.gray['99']"
  },
  "--typography-font-family-sans": {
    "canonical": "Typography/Font Family/Sans",
    "ts": "foundation.typography.fontFamily.sans"
  },
  "--typography-font-family-serif": {
    "canonical": "Typography/Font Family/Serif",
    "ts": "foundation.typography.fontFamily.serif"
  },
  "--typography-font-size-10": {
    "canonical": "Typography/Font Size/10",
    "ts": "foundation.typography.fontSize['10']"
  },
  "--typography-font-size-11": {
    "canonical": "Typography/Font Size/11",
    "ts": "foundation.typography.fontSize['11']"
  },
  "--typography-font-size-12": {
    "canonical": "Typography/Font Size/12",
    "ts": "foundation.typography.fontSize['12']"
  },
  "--typography-font-size-14": {
    "canonical": "Typography/Font Size/14",
    "ts": "foundation.typography.fontSize['14']"
  },
  "--typography-font-size-16": {
    "canonical": "Typography/Font Size/16",
    "ts": "foundation.typography.fontSize['16']"
  },
  "--typography-font-size-18": {
    "canonical": "Typography/Font Size/18",
    "ts": "foundation.typography.fontSize['18']"
  },
  "--typography-font-size-20": {
    "canonical": "Typography/Font Size/20",
    "ts": "foundation.typography.fontSize['20']"
  },
  "--typography-font-size-22": {
    "canonical": "Typography/Font Size/22",
    "ts": "foundation.typography.fontSize['22']"
  },
  "--typography-font-size-24": {
    "canonical": "Typography/Font Size/24",
    "ts": "foundation.typography.fontSize['24']"
  },
  "--typography-font-size-28": {
    "canonical": "Typography/Font Size/28",
    "ts": "foundation.typography.fontSize['28']"
  },
  "--typography-font-size-32": {
    "canonical": "Typography/Font Size/32",
    "ts": "foundation.typography.fontSize['32']"
  },
  "--typography-font-size-36": {
    "canonical": "Typography/Font Size/36",
    "ts": "foundation.typography.fontSize['36']"
  },
  "--typography-font-size-40": {
    "canonical": "Typography/Font Size/40",
    "ts": "foundation.typography.fontSize['40']"
  },
  "--typography-font-size-44": {
    "canonical": "Typography/Font Size/44",
    "ts": "foundation.typography.fontSize['44']"
  },
  "--typography-font-size-48": {
    "canonical": "Typography/Font Size/48",
    "ts": "foundation.typography.fontSize['48']"
  },
  "--typography-font-size-56": {
    "canonical": "Typography/Font Size/56",
    "ts": "foundation.typography.fontSize['56']"
  },
  "--typography-font-size-64": {
    "canonical": "Typography/Font Size/64",
    "ts": "foundation.typography.fontSize['64']"
  },
  "--typography-font-size-72": {
    "canonical": "Typography/Font Size/72",
    "ts": "foundation.typography.fontSize['72']"
  },
  "--typography-font-size-80": {
    "canonical": "Typography/Font Size/80",
    "ts": "foundation.typography.fontSize['80']"
  },
  "--typography-font-size-96": {
    "canonical": "Typography/Font Size/96",
    "ts": "foundation.typography.fontSize['96']"
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
  "--typography-line-height-10-110": {
    "canonical": "Typography/Line Height/10-110",
    "ts": "foundation.typography.lineHeight['10-110']"
  },
  "--typography-line-height-10-120": {
    "canonical": "Typography/Line Height/10-120",
    "ts": "foundation.typography.lineHeight['10-120']"
  },
  "--typography-line-height-10-130": {
    "canonical": "Typography/Line Height/10-130",
    "ts": "foundation.typography.lineHeight['10-130']"
  },
  "--typography-line-height-10-140": {
    "canonical": "Typography/Line Height/10-140",
    "ts": "foundation.typography.lineHeight['10-140']"
  },
  "--typography-line-height-10-150": {
    "canonical": "Typography/Line Height/10-150",
    "ts": "foundation.typography.lineHeight['10-150']"
  },
  "--typography-line-height-11-110": {
    "canonical": "Typography/Line Height/11-110",
    "ts": "foundation.typography.lineHeight['11-110']"
  },
  "--typography-line-height-11-120": {
    "canonical": "Typography/Line Height/11-120",
    "ts": "foundation.typography.lineHeight['11-120']"
  },
  "--typography-line-height-11-130": {
    "canonical": "Typography/Line Height/11-130",
    "ts": "foundation.typography.lineHeight['11-130']"
  },
  "--typography-line-height-11-140": {
    "canonical": "Typography/Line Height/11-140",
    "ts": "foundation.typography.lineHeight['11-140']"
  },
  "--typography-line-height-11-150": {
    "canonical": "Typography/Line Height/11-150",
    "ts": "foundation.typography.lineHeight['11-150']"
  },
  "--typography-line-height-12-110": {
    "canonical": "Typography/Line Height/12-110",
    "ts": "foundation.typography.lineHeight['12-110']"
  },
  "--typography-line-height-12-120": {
    "canonical": "Typography/Line Height/12-120",
    "ts": "foundation.typography.lineHeight['12-120']"
  },
  "--typography-line-height-12-130": {
    "canonical": "Typography/Line Height/12-130",
    "ts": "foundation.typography.lineHeight['12-130']"
  },
  "--typography-line-height-12-140": {
    "canonical": "Typography/Line Height/12-140",
    "ts": "foundation.typography.lineHeight['12-140']"
  },
  "--typography-line-height-12-150": {
    "canonical": "Typography/Line Height/12-150",
    "ts": "foundation.typography.lineHeight['12-150']"
  },
  "--typography-line-height-14-110": {
    "canonical": "Typography/Line Height/14-110",
    "ts": "foundation.typography.lineHeight['14-110']"
  },
  "--typography-line-height-14-120": {
    "canonical": "Typography/Line Height/14-120",
    "ts": "foundation.typography.lineHeight['14-120']"
  },
  "--typography-line-height-14-130": {
    "canonical": "Typography/Line Height/14-130",
    "ts": "foundation.typography.lineHeight['14-130']"
  },
  "--typography-line-height-14-140": {
    "canonical": "Typography/Line Height/14-140",
    "ts": "foundation.typography.lineHeight['14-140']"
  },
  "--typography-line-height-14-150": {
    "canonical": "Typography/Line Height/14-150",
    "ts": "foundation.typography.lineHeight['14-150']"
  },
  "--typography-line-height-16-110": {
    "canonical": "Typography/Line Height/16-110",
    "ts": "foundation.typography.lineHeight['16-110']"
  },
  "--typography-line-height-16-120": {
    "canonical": "Typography/Line Height/16-120",
    "ts": "foundation.typography.lineHeight['16-120']"
  },
  "--typography-line-height-16-130": {
    "canonical": "Typography/Line Height/16-130",
    "ts": "foundation.typography.lineHeight['16-130']"
  },
  "--typography-line-height-16-140": {
    "canonical": "Typography/Line Height/16-140",
    "ts": "foundation.typography.lineHeight['16-140']"
  },
  "--typography-line-height-16-150": {
    "canonical": "Typography/Line Height/16-150",
    "ts": "foundation.typography.lineHeight['16-150']"
  },
  "--typography-line-height-18-110": {
    "canonical": "Typography/Line Height/18-110",
    "ts": "foundation.typography.lineHeight['18-110']"
  },
  "--typography-line-height-18-120": {
    "canonical": "Typography/Line Height/18-120",
    "ts": "foundation.typography.lineHeight['18-120']"
  },
  "--typography-line-height-18-130": {
    "canonical": "Typography/Line Height/18-130",
    "ts": "foundation.typography.lineHeight['18-130']"
  },
  "--typography-line-height-18-140": {
    "canonical": "Typography/Line Height/18-140",
    "ts": "foundation.typography.lineHeight['18-140']"
  },
  "--typography-line-height-18-150": {
    "canonical": "Typography/Line Height/18-150",
    "ts": "foundation.typography.lineHeight['18-150']"
  },
  "--typography-line-height-20-110": {
    "canonical": "Typography/Line Height/20-110",
    "ts": "foundation.typography.lineHeight['20-110']"
  },
  "--typography-line-height-20-120": {
    "canonical": "Typography/Line Height/20-120",
    "ts": "foundation.typography.lineHeight['20-120']"
  },
  "--typography-line-height-20-130": {
    "canonical": "Typography/Line Height/20-130",
    "ts": "foundation.typography.lineHeight['20-130']"
  },
  "--typography-line-height-20-140": {
    "canonical": "Typography/Line Height/20-140",
    "ts": "foundation.typography.lineHeight['20-140']"
  },
  "--typography-line-height-20-150": {
    "canonical": "Typography/Line Height/20-150",
    "ts": "foundation.typography.lineHeight['20-150']"
  },
  "--typography-line-height-22-110": {
    "canonical": "Typography/Line Height/22-110",
    "ts": "foundation.typography.lineHeight['22-110']"
  },
  "--typography-line-height-22-120": {
    "canonical": "Typography/Line Height/22-120",
    "ts": "foundation.typography.lineHeight['22-120']"
  },
  "--typography-line-height-22-130": {
    "canonical": "Typography/Line Height/22-130",
    "ts": "foundation.typography.lineHeight['22-130']"
  },
  "--typography-line-height-22-140": {
    "canonical": "Typography/Line Height/22-140",
    "ts": "foundation.typography.lineHeight['22-140']"
  },
  "--typography-line-height-22-150": {
    "canonical": "Typography/Line Height/22-150",
    "ts": "foundation.typography.lineHeight['22-150']"
  },
  "--typography-line-height-24-110": {
    "canonical": "Typography/Line Height/24-110",
    "ts": "foundation.typography.lineHeight['24-110']"
  },
  "--typography-line-height-24-120": {
    "canonical": "Typography/Line Height/24-120",
    "ts": "foundation.typography.lineHeight['24-120']"
  },
  "--typography-line-height-24-130": {
    "canonical": "Typography/Line Height/24-130",
    "ts": "foundation.typography.lineHeight['24-130']"
  },
  "--typography-line-height-24-140": {
    "canonical": "Typography/Line Height/24-140",
    "ts": "foundation.typography.lineHeight['24-140']"
  },
  "--typography-line-height-24-150": {
    "canonical": "Typography/Line Height/24-150",
    "ts": "foundation.typography.lineHeight['24-150']"
  },
  "--typography-line-height-28-110": {
    "canonical": "Typography/Line Height/28-110",
    "ts": "foundation.typography.lineHeight['28-110']"
  },
  "--typography-line-height-28-120": {
    "canonical": "Typography/Line Height/28-120",
    "ts": "foundation.typography.lineHeight['28-120']"
  },
  "--typography-line-height-28-130": {
    "canonical": "Typography/Line Height/28-130",
    "ts": "foundation.typography.lineHeight['28-130']"
  },
  "--typography-line-height-28-140": {
    "canonical": "Typography/Line Height/28-140",
    "ts": "foundation.typography.lineHeight['28-140']"
  },
  "--typography-line-height-28-150": {
    "canonical": "Typography/Line Height/28-150",
    "ts": "foundation.typography.lineHeight['28-150']"
  },
  "--typography-line-height-32-110": {
    "canonical": "Typography/Line Height/32-110",
    "ts": "foundation.typography.lineHeight['32-110']"
  },
  "--typography-line-height-32-120": {
    "canonical": "Typography/Line Height/32-120",
    "ts": "foundation.typography.lineHeight['32-120']"
  },
  "--typography-line-height-32-130": {
    "canonical": "Typography/Line Height/32-130",
    "ts": "foundation.typography.lineHeight['32-130']"
  },
  "--typography-line-height-32-140": {
    "canonical": "Typography/Line Height/32-140",
    "ts": "foundation.typography.lineHeight['32-140']"
  },
  "--typography-line-height-32-150": {
    "canonical": "Typography/Line Height/32-150",
    "ts": "foundation.typography.lineHeight['32-150']"
  },
  "--typography-line-height-36-110": {
    "canonical": "Typography/Line Height/36-110",
    "ts": "foundation.typography.lineHeight['36-110']"
  },
  "--typography-line-height-36-120": {
    "canonical": "Typography/Line Height/36-120",
    "ts": "foundation.typography.lineHeight['36-120']"
  },
  "--typography-line-height-36-130": {
    "canonical": "Typography/Line Height/36-130",
    "ts": "foundation.typography.lineHeight['36-130']"
  },
  "--typography-line-height-36-140": {
    "canonical": "Typography/Line Height/36-140",
    "ts": "foundation.typography.lineHeight['36-140']"
  },
  "--typography-line-height-36-150": {
    "canonical": "Typography/Line Height/36-150",
    "ts": "foundation.typography.lineHeight['36-150']"
  },
  "--typography-line-height-40-110": {
    "canonical": "Typography/Line Height/40-110",
    "ts": "foundation.typography.lineHeight['40-110']"
  },
  "--typography-line-height-40-120": {
    "canonical": "Typography/Line Height/40-120",
    "ts": "foundation.typography.lineHeight['40-120']"
  },
  "--typography-line-height-40-130": {
    "canonical": "Typography/Line Height/40-130",
    "ts": "foundation.typography.lineHeight['40-130']"
  },
  "--typography-line-height-40-140": {
    "canonical": "Typography/Line Height/40-140",
    "ts": "foundation.typography.lineHeight['40-140']"
  },
  "--typography-line-height-40-150": {
    "canonical": "Typography/Line Height/40-150",
    "ts": "foundation.typography.lineHeight['40-150']"
  },
  "--typography-line-height-44-110": {
    "canonical": "Typography/Line Height/44-110",
    "ts": "foundation.typography.lineHeight['44-110']"
  },
  "--typography-line-height-44-120": {
    "canonical": "Typography/Line Height/44-120",
    "ts": "foundation.typography.lineHeight['44-120']"
  },
  "--typography-line-height-44-130": {
    "canonical": "Typography/Line Height/44-130",
    "ts": "foundation.typography.lineHeight['44-130']"
  },
  "--typography-line-height-44-140": {
    "canonical": "Typography/Line Height/44-140",
    "ts": "foundation.typography.lineHeight['44-140']"
  },
  "--typography-line-height-44-150": {
    "canonical": "Typography/Line Height/44-150",
    "ts": "foundation.typography.lineHeight['44-150']"
  },
  "--typography-line-height-48-110": {
    "canonical": "Typography/Line Height/48-110",
    "ts": "foundation.typography.lineHeight['48-110']"
  },
  "--typography-line-height-48-120": {
    "canonical": "Typography/Line Height/48-120",
    "ts": "foundation.typography.lineHeight['48-120']"
  },
  "--typography-line-height-48-130": {
    "canonical": "Typography/Line Height/48-130",
    "ts": "foundation.typography.lineHeight['48-130']"
  },
  "--typography-line-height-48-140": {
    "canonical": "Typography/Line Height/48-140",
    "ts": "foundation.typography.lineHeight['48-140']"
  },
  "--typography-line-height-48-150": {
    "canonical": "Typography/Line Height/48-150",
    "ts": "foundation.typography.lineHeight['48-150']"
  },
  "--typography-line-height-56-110": {
    "canonical": "Typography/Line Height/56-110",
    "ts": "foundation.typography.lineHeight['56-110']"
  },
  "--typography-line-height-56-120": {
    "canonical": "Typography/Line Height/56-120",
    "ts": "foundation.typography.lineHeight['56-120']"
  },
  "--typography-line-height-56-130": {
    "canonical": "Typography/Line Height/56-130",
    "ts": "foundation.typography.lineHeight['56-130']"
  },
  "--typography-line-height-56-140": {
    "canonical": "Typography/Line Height/56-140",
    "ts": "foundation.typography.lineHeight['56-140']"
  },
  "--typography-line-height-56-150": {
    "canonical": "Typography/Line Height/56-150",
    "ts": "foundation.typography.lineHeight['56-150']"
  },
  "--typography-line-height-64-110": {
    "canonical": "Typography/Line Height/64-110",
    "ts": "foundation.typography.lineHeight['64-110']"
  },
  "--typography-line-height-64-120": {
    "canonical": "Typography/Line Height/64-120",
    "ts": "foundation.typography.lineHeight['64-120']"
  },
  "--typography-line-height-64-130": {
    "canonical": "Typography/Line Height/64-130",
    "ts": "foundation.typography.lineHeight['64-130']"
  },
  "--typography-line-height-64-140": {
    "canonical": "Typography/Line Height/64-140",
    "ts": "foundation.typography.lineHeight['64-140']"
  },
  "--typography-line-height-64-150": {
    "canonical": "Typography/Line Height/64-150",
    "ts": "foundation.typography.lineHeight['64-150']"
  },
  "--typography-line-height-72-110": {
    "canonical": "Typography/Line Height/72-110",
    "ts": "foundation.typography.lineHeight['72-110']"
  },
  "--typography-line-height-72-120": {
    "canonical": "Typography/Line Height/72-120",
    "ts": "foundation.typography.lineHeight['72-120']"
  },
  "--typography-line-height-72-130": {
    "canonical": "Typography/Line Height/72-130",
    "ts": "foundation.typography.lineHeight['72-130']"
  },
  "--typography-line-height-72-140": {
    "canonical": "Typography/Line Height/72-140",
    "ts": "foundation.typography.lineHeight['72-140']"
  },
  "--typography-line-height-72-150": {
    "canonical": "Typography/Line Height/72-150",
    "ts": "foundation.typography.lineHeight['72-150']"
  },
  "--typography-line-height-80-110": {
    "canonical": "Typography/Line Height/80-110",
    "ts": "foundation.typography.lineHeight['80-110']"
  },
  "--typography-line-height-80-120": {
    "canonical": "Typography/Line Height/80-120",
    "ts": "foundation.typography.lineHeight['80-120']"
  },
  "--typography-line-height-80-130": {
    "canonical": "Typography/Line Height/80-130",
    "ts": "foundation.typography.lineHeight['80-130']"
  },
  "--typography-line-height-80-140": {
    "canonical": "Typography/Line Height/80-140",
    "ts": "foundation.typography.lineHeight['80-140']"
  },
  "--typography-line-height-80-150": {
    "canonical": "Typography/Line Height/80-150",
    "ts": "foundation.typography.lineHeight['80-150']"
  },
  "--typography-line-height-96-110": {
    "canonical": "Typography/Line Height/96-110",
    "ts": "foundation.typography.lineHeight['96-110']"
  },
  "--typography-line-height-96-120": {
    "canonical": "Typography/Line Height/96-120",
    "ts": "foundation.typography.lineHeight['96-120']"
  },
  "--typography-line-height-96-130": {
    "canonical": "Typography/Line Height/96-130",
    "ts": "foundation.typography.lineHeight['96-130']"
  },
  "--typography-line-height-96-140": {
    "canonical": "Typography/Line Height/96-140",
    "ts": "foundation.typography.lineHeight['96-140']"
  },
  "--typography-line-height-96-150": {
    "canonical": "Typography/Line Height/96-150",
    "ts": "foundation.typography.lineHeight['96-150']"
  },
  "--typography-letter-spacing-10-i1": {
    "canonical": "Typography/Letter Spacing/10-i1",
    "ts": "foundation.typography.letterSpacing['10-i1']"
  },
  "--typography-letter-spacing-10-i3": {
    "canonical": "Typography/Letter Spacing/10-i3",
    "ts": "foundation.typography.letterSpacing['10-i3']"
  },
  "--typography-letter-spacing-11-i1": {
    "canonical": "Typography/Letter Spacing/11-i1",
    "ts": "foundation.typography.letterSpacing['11-i1']"
  },
  "--typography-letter-spacing-11-i3": {
    "canonical": "Typography/Letter Spacing/11-i3",
    "ts": "foundation.typography.letterSpacing['11-i3']"
  },
  "--typography-letter-spacing-12-i1": {
    "canonical": "Typography/Letter Spacing/12-i1",
    "ts": "foundation.typography.letterSpacing['12-i1']"
  },
  "--typography-letter-spacing-12-i3": {
    "canonical": "Typography/Letter Spacing/12-i3",
    "ts": "foundation.typography.letterSpacing['12-i3']"
  },
  "--typography-letter-spacing-14-i1": {
    "canonical": "Typography/Letter Spacing/14-i1",
    "ts": "foundation.typography.letterSpacing['14-i1']"
  },
  "--typography-letter-spacing-14-i3": {
    "canonical": "Typography/Letter Spacing/14-i3",
    "ts": "foundation.typography.letterSpacing['14-i3']"
  },
  "--typography-letter-spacing-16-i1": {
    "canonical": "Typography/Letter Spacing/16-i1",
    "ts": "foundation.typography.letterSpacing['16-i1']"
  },
  "--typography-letter-spacing-16-i3": {
    "canonical": "Typography/Letter Spacing/16-i3",
    "ts": "foundation.typography.letterSpacing['16-i3']"
  },
  "--typography-letter-spacing-18-i1": {
    "canonical": "Typography/Letter Spacing/18-i1",
    "ts": "foundation.typography.letterSpacing['18-i1']"
  },
  "--typography-letter-spacing-18-i3": {
    "canonical": "Typography/Letter Spacing/18-i3",
    "ts": "foundation.typography.letterSpacing['18-i3']"
  },
  "--typography-letter-spacing-20-i1": {
    "canonical": "Typography/Letter Spacing/20-i1",
    "ts": "foundation.typography.letterSpacing['20-i1']"
  },
  "--typography-letter-spacing-20-i3": {
    "canonical": "Typography/Letter Spacing/20-i3",
    "ts": "foundation.typography.letterSpacing['20-i3']"
  },
  "--typography-letter-spacing-22-i1": {
    "canonical": "Typography/Letter Spacing/22-i1",
    "ts": "foundation.typography.letterSpacing['22-i1']"
  },
  "--typography-letter-spacing-22-i3": {
    "canonical": "Typography/Letter Spacing/22-i3",
    "ts": "foundation.typography.letterSpacing['22-i3']"
  },
  "--typography-letter-spacing-24-i1": {
    "canonical": "Typography/Letter Spacing/24-i1",
    "ts": "foundation.typography.letterSpacing['24-i1']"
  },
  "--typography-letter-spacing-24-i3": {
    "canonical": "Typography/Letter Spacing/24-i3",
    "ts": "foundation.typography.letterSpacing['24-i3']"
  },
  "--typography-letter-spacing-28-i1": {
    "canonical": "Typography/Letter Spacing/28-i1",
    "ts": "foundation.typography.letterSpacing['28-i1']"
  },
  "--typography-letter-spacing-28-i3": {
    "canonical": "Typography/Letter Spacing/28-i3",
    "ts": "foundation.typography.letterSpacing['28-i3']"
  },
  "--typography-letter-spacing-32-i1": {
    "canonical": "Typography/Letter Spacing/32-i1",
    "ts": "foundation.typography.letterSpacing['32-i1']"
  },
  "--typography-letter-spacing-32-i3": {
    "canonical": "Typography/Letter Spacing/32-i3",
    "ts": "foundation.typography.letterSpacing['32-i3']"
  },
  "--typography-letter-spacing-36-i1": {
    "canonical": "Typography/Letter Spacing/36-i1",
    "ts": "foundation.typography.letterSpacing['36-i1']"
  },
  "--typography-letter-spacing-36-i3": {
    "canonical": "Typography/Letter Spacing/36-i3",
    "ts": "foundation.typography.letterSpacing['36-i3']"
  },
  "--typography-letter-spacing-40-i1": {
    "canonical": "Typography/Letter Spacing/40-i1",
    "ts": "foundation.typography.letterSpacing['40-i1']"
  },
  "--typography-letter-spacing-40-i3": {
    "canonical": "Typography/Letter Spacing/40-i3",
    "ts": "foundation.typography.letterSpacing['40-i3']"
  },
  "--typography-letter-spacing-44-i1": {
    "canonical": "Typography/Letter Spacing/44-i1",
    "ts": "foundation.typography.letterSpacing['44-i1']"
  },
  "--typography-letter-spacing-44-i3": {
    "canonical": "Typography/Letter Spacing/44-i3",
    "ts": "foundation.typography.letterSpacing['44-i3']"
  },
  "--typography-letter-spacing-48-i1": {
    "canonical": "Typography/Letter Spacing/48-i1",
    "ts": "foundation.typography.letterSpacing['48-i1']"
  },
  "--typography-letter-spacing-48-i3": {
    "canonical": "Typography/Letter Spacing/48-i3",
    "ts": "foundation.typography.letterSpacing['48-i3']"
  },
  "--typography-letter-spacing-56-i1": {
    "canonical": "Typography/Letter Spacing/56-i1",
    "ts": "foundation.typography.letterSpacing['56-i1']"
  },
  "--typography-letter-spacing-56-i3": {
    "canonical": "Typography/Letter Spacing/56-i3",
    "ts": "foundation.typography.letterSpacing['56-i3']"
  },
  "--typography-letter-spacing-64-i1": {
    "canonical": "Typography/Letter Spacing/64-i1",
    "ts": "foundation.typography.letterSpacing['64-i1']"
  },
  "--typography-letter-spacing-64-i3": {
    "canonical": "Typography/Letter Spacing/64-i3",
    "ts": "foundation.typography.letterSpacing['64-i3']"
  },
  "--typography-letter-spacing-72-i1": {
    "canonical": "Typography/Letter Spacing/72-i1",
    "ts": "foundation.typography.letterSpacing['72-i1']"
  },
  "--typography-letter-spacing-72-i3": {
    "canonical": "Typography/Letter Spacing/72-i3",
    "ts": "foundation.typography.letterSpacing['72-i3']"
  },
  "--typography-letter-spacing-80-i1": {
    "canonical": "Typography/Letter Spacing/80-i1",
    "ts": "foundation.typography.letterSpacing['80-i1']"
  },
  "--typography-letter-spacing-80-i3": {
    "canonical": "Typography/Letter Spacing/80-i3",
    "ts": "foundation.typography.letterSpacing['80-i3']"
  },
  "--typography-letter-spacing-96-i1": {
    "canonical": "Typography/Letter Spacing/96-i1",
    "ts": "foundation.typography.letterSpacing['96-i1']"
  },
  "--typography-letter-spacing-96-i3": {
    "canonical": "Typography/Letter Spacing/96-i3",
    "ts": "foundation.typography.letterSpacing['96-i3']"
  },
  "--layout-space-1": {
    "canonical": "Layout/Space/1",
    "ts": "foundation.layout.space['1']"
  },
  "--layout-space-2": {
    "canonical": "Layout/Space/2",
    "ts": "foundation.layout.space['2']"
  },
  "--layout-space-4": {
    "canonical": "Layout/Space/4",
    "ts": "foundation.layout.space['4']"
  },
  "--layout-space-6": {
    "canonical": "Layout/Space/6",
    "ts": "foundation.layout.space['6']"
  },
  "--layout-space-8": {
    "canonical": "Layout/Space/8",
    "ts": "foundation.layout.space['8']"
  },
  "--layout-space-12": {
    "canonical": "Layout/Space/12",
    "ts": "foundation.layout.space['12']"
  },
  "--layout-space-16": {
    "canonical": "Layout/Space/16",
    "ts": "foundation.layout.space['16']"
  },
  "--layout-space-20": {
    "canonical": "Layout/Space/20",
    "ts": "foundation.layout.space['20']"
  },
  "--layout-space-24": {
    "canonical": "Layout/Space/24",
    "ts": "foundation.layout.space['24']"
  },
  "--layout-space-32": {
    "canonical": "Layout/Space/32",
    "ts": "foundation.layout.space['32']"
  },
  "--layout-space-40": {
    "canonical": "Layout/Space/40",
    "ts": "foundation.layout.space['40']"
  },
  "--layout-space-48": {
    "canonical": "Layout/Space/48",
    "ts": "foundation.layout.space['48']"
  },
  "--layout-space-56": {
    "canonical": "Layout/Space/56",
    "ts": "foundation.layout.space['56']"
  },
  "--layout-space-64": {
    "canonical": "Layout/Space/64",
    "ts": "foundation.layout.space['64']"
  },
  "--layout-space-72": {
    "canonical": "Layout/Space/72",
    "ts": "foundation.layout.space['72']"
  },
  "--layout-space-80": {
    "canonical": "Layout/Space/80",
    "ts": "foundation.layout.space['80']"
  },
  "--layout-space-96": {
    "canonical": "Layout/Space/96",
    "ts": "foundation.layout.space['96']"
  },
  "--layout-space-112": {
    "canonical": "Layout/Space/112",
    "ts": "foundation.layout.space['112']"
  },
  "--layout-space-128": {
    "canonical": "Layout/Space/128",
    "ts": "foundation.layout.space['128']"
  },
  "--layout-size-1": {
    "canonical": "Layout/Size/1",
    "ts": "foundation.layout.size['1']"
  },
  "--layout-size-2": {
    "canonical": "Layout/Size/2",
    "ts": "foundation.layout.size['2']"
  },
  "--layout-size-4": {
    "canonical": "Layout/Size/4",
    "ts": "foundation.layout.size['4']"
  },
  "--layout-size-8": {
    "canonical": "Layout/Size/8",
    "ts": "foundation.layout.size['8']"
  },
  "--layout-size-12": {
    "canonical": "Layout/Size/12",
    "ts": "foundation.layout.size['12']"
  },
  "--layout-size-16": {
    "canonical": "Layout/Size/16",
    "ts": "foundation.layout.size['16']"
  },
  "--layout-size-20": {
    "canonical": "Layout/Size/20",
    "ts": "foundation.layout.size['20']"
  },
  "--layout-size-24": {
    "canonical": "Layout/Size/24",
    "ts": "foundation.layout.size['24']"
  },
  "--layout-size-32": {
    "canonical": "Layout/Size/32",
    "ts": "foundation.layout.size['32']"
  },
  "--layout-size-40": {
    "canonical": "Layout/Size/40",
    "ts": "foundation.layout.size['40']"
  },
  "--layout-size-48": {
    "canonical": "Layout/Size/48",
    "ts": "foundation.layout.size['48']"
  },
  "--layout-size-56": {
    "canonical": "Layout/Size/56",
    "ts": "foundation.layout.size['56']"
  },
  "--layout-size-64": {
    "canonical": "Layout/Size/64",
    "ts": "foundation.layout.size['64']"
  },
  "--layout-size-80": {
    "canonical": "Layout/Size/80",
    "ts": "foundation.layout.size['80']"
  },
  "--layout-size-96": {
    "canonical": "Layout/Size/96",
    "ts": "foundation.layout.size['96']"
  },
  "--layout-size-112": {
    "canonical": "Layout/Size/112",
    "ts": "foundation.layout.size['112']"
  },
  "--layout-size-128": {
    "canonical": "Layout/Size/128",
    "ts": "foundation.layout.size['128']"
  },
  "--shape-radius-1": {
    "canonical": "Shape/Radius/1",
    "ts": "foundation.shape.radius['1']"
  },
  "--shape-radius-2": {
    "canonical": "Shape/Radius/2",
    "ts": "foundation.shape.radius['2']"
  },
  "--shape-radius-4": {
    "canonical": "Shape/Radius/4",
    "ts": "foundation.shape.radius['4']"
  },
  "--shape-radius-6": {
    "canonical": "Shape/Radius/6",
    "ts": "foundation.shape.radius['6']"
  },
  "--shape-radius-8": {
    "canonical": "Shape/Radius/8",
    "ts": "foundation.shape.radius['8']"
  },
  "--shape-radius-10": {
    "canonical": "Shape/Radius/10",
    "ts": "foundation.shape.radius['10']"
  },
  "--shape-radius-12": {
    "canonical": "Shape/Radius/12",
    "ts": "foundation.shape.radius['12']"
  },
  "--shape-radius-16": {
    "canonical": "Shape/Radius/16",
    "ts": "foundation.shape.radius['16']"
  },
  "--shape-radius-20": {
    "canonical": "Shape/Radius/20",
    "ts": "foundation.shape.radius['20']"
  },
  "--shape-radius-24": {
    "canonical": "Shape/Radius/24",
    "ts": "foundation.shape.radius['24']"
  },
  "--shape-radius-32": {
    "canonical": "Shape/Radius/32",
    "ts": "foundation.shape.radius['32']"
  },
  "--shape-radius-40": {
    "canonical": "Shape/Radius/40",
    "ts": "foundation.shape.radius['40']"
  },
  "--shape-radius-9999": {
    "canonical": "Shape/Radius/9999",
    "ts": "foundation.shape.radius['9999']"
  },
  "--shape-stroke-1": {
    "canonical": "Shape/Stroke/1",
    "ts": "foundation.shape.stroke['1']"
  },
  "--shape-stroke-2": {
    "canonical": "Shape/Stroke/2",
    "ts": "foundation.shape.stroke['2']"
  },
  "--shape-stroke-3": {
    "canonical": "Shape/Stroke/3",
    "ts": "foundation.shape.stroke['3']"
  },
  "--shape-stroke-4": {
    "canonical": "Shape/Stroke/4",
    "ts": "foundation.shape.stroke['4']"
  },
  "--shape-stroke-6": {
    "canonical": "Shape/Stroke/6",
    "ts": "foundation.shape.stroke['6']"
  },
  "--shape-stroke-8": {
    "canonical": "Shape/Stroke/8",
    "ts": "foundation.shape.stroke['8']"
  },
  "--effect-opacity-0": {
    "canonical": "Effect/Opacity/0",
    "ts": "foundation.effect.opacity['0']"
  },
  "--effect-opacity-10": {
    "canonical": "Effect/Opacity/10",
    "ts": "foundation.effect.opacity['10']"
  },
  "--effect-opacity-20": {
    "canonical": "Effect/Opacity/20",
    "ts": "foundation.effect.opacity['20']"
  },
  "--effect-opacity-30": {
    "canonical": "Effect/Opacity/30",
    "ts": "foundation.effect.opacity['30']"
  },
  "--effect-opacity-40": {
    "canonical": "Effect/Opacity/40",
    "ts": "foundation.effect.opacity['40']"
  },
  "--effect-opacity-50": {
    "canonical": "Effect/Opacity/50",
    "ts": "foundation.effect.opacity['50']"
  },
  "--effect-opacity-60": {
    "canonical": "Effect/Opacity/60",
    "ts": "foundation.effect.opacity['60']"
  },
  "--effect-opacity-70": {
    "canonical": "Effect/Opacity/70",
    "ts": "foundation.effect.opacity['70']"
  },
  "--effect-opacity-80": {
    "canonical": "Effect/Opacity/80",
    "ts": "foundation.effect.opacity['80']"
  },
  "--effect-opacity-90": {
    "canonical": "Effect/Opacity/90",
    "ts": "foundation.effect.opacity['90']"
  },
  "--effect-opacity-100": {
    "canonical": "Effect/Opacity/100",
    "ts": "foundation.effect.opacity['100']"
  }
};

export type Foundation = typeof foundation;
export type FoundationCategory = keyof Foundation;

export type BlueTokenPath = (typeof foundationOrder)['color']['blue'][number];
export type RedTokenPath = (typeof foundationOrder)['color']['red'][number];
export type GreenTokenPath = (typeof foundationOrder)['color']['green'][number];
export type PurpleTokenPath = (typeof foundationOrder)['color']['purple'][number];
export type GrayTokenPath = (typeof foundationOrder)['color']['gray'][number];
export type FontFamilyTokenPath = (typeof foundationOrder)['typography']['fontFamily'][number];
export type FontSizeTokenPath = (typeof foundationOrder)['typography']['fontSize'][number];
export type FontWeightTokenPath = (typeof foundationOrder)['typography']['fontWeight'][number];
export type LineHeightTokenPath = (typeof foundationOrder)['typography']['lineHeight'][number];
export type LetterSpacingTokenPath = (typeof foundationOrder)['typography']['letterSpacing'][number];
export type SpaceTokenPath = (typeof foundationOrder)['layout']['space'][number];
export type SizeTokenPath = (typeof foundationOrder)['layout']['size'][number];
export type RadiusTokenPath = (typeof foundationOrder)['shape']['radius'][number];
export type StrokeTokenPath = (typeof foundationOrder)['shape']['stroke'][number];
export type OpacityTokenPath = (typeof foundationOrder)['effect']['opacity'][number];
