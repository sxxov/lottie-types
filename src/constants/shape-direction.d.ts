/**
 * Drawing direction of the shape curve, useful for trim path
 */
export declare enum ShapeDirection {
  /**
   * Default Clockwise
   */
  Normal = 0,

  /**
   * Usually clockwise
   */
  Clockwise = 1,

  /**
   * Usually counter clockwise
   */
  ClockwiseReversed = 3,
}
export declare namespace ShapeDirection {
  type Value = ShapeDirection;

  /** @deprecated Use the {@linkcode ShapeDirection} enum */
  const enum VALUE {
    NORMAL = ShapeDirection.Normal,
    CLOCKWISE = ShapeDirection.Clockwise,
    CLOCKWISE_REVERSED = ShapeDirection.ClockwiseReversed,
  }
}
