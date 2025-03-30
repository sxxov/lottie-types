/**
 * Style at a sharp corner of a stoked line
 */
export declare enum LineJoin {
  Miter = 1,
  Round = 2,
  Bevel = 3,
}
export declare namespace LineJoin {
  type Value = LineJoin;

  /** @deprecated Use the {@linkcode LineJoin} enum */
  const enum VALUE {
    MITER = LineJoin.Miter,
    ROUND = LineJoin.Round,
    BEVEL = LineJoin.Bevel,
  }
}
