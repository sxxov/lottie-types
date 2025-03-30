/**
 * Type of a dash item in a stroked line
 */
export declare enum StrokeDashType {
  Default = "d",
  Gap = "g",
  Offset = "o",
}
export declare namespace StrokeDashType {
  type Value = StrokeDashType;

  /** @deprecated Use the {@linkcode StrokeDashType} enum */
  const enum VALUE {
    DEFAULT = StrokeDashType.Default,
    GAP = StrokeDashType.Gap,
    OFFSET = StrokeDashType.Offset,
  }
}
