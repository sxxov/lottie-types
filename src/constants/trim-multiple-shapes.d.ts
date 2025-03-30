/**
 * How to handle multiple shapes in trim path
 */
export declare enum TrimMultipleShapes {
  Individually = 1,
  Simultaneously = 2,
}
export declare namespace TrimMultipleShapes {
  type Value = TrimMultipleShapes;

  /** @deprecated Use the {@linkcode TrimMultipleShapes} enum */
  const enum VALUES {
    INDIVIDUALLY = TrimMultipleShapes.Individually,
    SIMULTANEOUSLY = TrimMultipleShapes.Simultaneously,
  }
}
