/**
 * How a layer should mask another layer
 */
export declare enum MatteMode {
  Normal = 0,
  Alpha = 1,
  InvertedAlpha = 2,
  Luma = 3,
  InvertedLuma = 4,
}
export declare namespace MatteMode {
  type Value = MatteMode;

  /** @deprecated Use the {@linkcode MatteMode} enum */
  const enum VALUE {
    NORMAL = MatteMode.Normal,
    ALPHA = MatteMode.Alpha,
    INVERTED_ALPHA = MatteMode.InvertedAlpha,
    LUMA = MatteMode.Luma,
    INVERTED_LUMA = MatteMode.InvertedLuma,
  }
}
