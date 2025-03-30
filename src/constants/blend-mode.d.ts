/**
 * Layer and shape blend mode
 */
export declare enum BlendMode {
  Normal = 0,
  Multiply = 1,
  Screen = 2,
  Overlay = 3,
  Darken = 4,
  Lighten = 5,
  ColorDodge = 6,
  ColorBurn = 7,
  HardLight = 8,
  SoftLight = 9,
  Difference = 10,
  Exclusion = 11,
  Hue = 12,
  Saturation = 13,
  Color = 14,
  Luminosity = 15,
  Add = 16,
  HardMix = 17,
}
export declare namespace BlendMode {
  type Value = BlendMode;

  /** @deprecated Use the {@linkcode BlendMode} enum */
  const enum VALUE {
    NORMAL = BlendMode.Normal,
    MULTIPLY = BlendMode.Multiply,
    SCREEN = BlendMode.Screen,
    OVERLAY = BlendMode.Overlay,
    DARKEN = BlendMode.Darken,
    LIGHTEN = BlendMode.Lighten,
    COLOR_DODGE = BlendMode.ColorDodge,
    COLOR_BURN = BlendMode.ColorBurn,
    HARD_LIGHT = BlendMode.HardLight,
    SOFT_LIGHT = BlendMode.SoftLight,
    DIFFERENCE = BlendMode.Difference,
    EXCLUSION = BlendMode.Exclusion,
    HUE = BlendMode.Hue,
    SATURATION = BlendMode.Saturation,
    COLOR = BlendMode.Color,
    LUMINOSITY = BlendMode.Luminosity,
    ADD = BlendMode.Add,
    HARD_MIX = BlendMode.HardMix,
  }
}
