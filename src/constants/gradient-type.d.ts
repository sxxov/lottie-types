/**
 * Type of a gradient
 *
 * @default 1
 */
export declare enum GradientType {
  Linear = 1,
  Radial = 2,
}

export declare namespace GradientType {
  type Value = GradientType;

  /** @deprecated Use the {@linkcode GradientType} enum */
  const enum VALUE {
    LINEAR = GradientType.Linear,
    RADIAL = GradientType.Radial,
  }
}
