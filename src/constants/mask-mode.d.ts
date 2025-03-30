/**
 * How masks interact with each other. See https://helpx.adobe.com/after-effects/using/alpha-channels-masks-mattes.html
 */
export declare enum MaskMode {
  No = "n",
  Add = "a",
  Subtract = "s",
  Intersect = "i",
  Lighten = "l",
  Darken = "d",
  Difference = "f",
}
export declare namespace MaskMode {
  type Value = MaskMode;

  /** @deprecated Use the {@linkcode MaskMode} enum */
  const enum VALUE {
    NO = MaskMode.No,
    ADD = MaskMode.Add,
    SUBTRACT = MaskMode.Subtract,
    INTERSECT = MaskMode.Intersect,
    LIGHTEN = MaskMode.Lighten,
    DARKEN = MaskMode.Darken,
    DIFFERENCE = MaskMode.Difference,
  }
}
