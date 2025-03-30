/**
 * Rule used to handle multiple shapes rendered with the same fill object
 */
export declare enum FillRule {
  NonZero = 1,
  EvenOdd = 2,
}

export declare namespace FillRule {
  type Value = FillRule;

  /** @deprecated Use the {@linkcode FillRule} enum */
  const enum VALUE {
    NON_ZERO = FillRule.NonZero,
    EVEN_ODD = FillRule.EvenOdd,
  }
}
