/**
 * How to stack copies in a repeater
 */
export declare enum Composite {
  Above = 1,
  Below = 2,
}
export declare namespace Composite {
  type Value = Composite;

  /** @deprecated Use the {@linkcode Composite} enum */
  const enum VALUE {
    ABOVE = Composite.Above,
    BELOW = Composite.Below,
  }
}
