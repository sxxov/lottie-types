/**
 * Style at the end of a stoked line
 */
export declare enum LineCap {
  Butt = 1,
  Round = 2,
  Square = 3,
}
export declare namespace LineCap {
  type Value = LineCap;

  /** @deprecated Use the {@linkcode LineCap} enum */
  const enum VALUE {
    BUTT = LineCap.Butt,
    ROUND = LineCap.Round,
    SQUARE = LineCap.Square,
  }
}
