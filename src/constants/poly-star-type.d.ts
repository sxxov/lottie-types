/**
 * Star type, `1` for Star, `2` for Polygon
 */
export declare enum PolyStarType {
  Star = 1,
  Polygon = 2,
}
export declare namespace PolyStarType {
  type Value = PolyStarType;

  /** @deprecated Use the {@linkcode PolyStarType} enum */
  const enum VALUE {
    STAR = PolyStarType.Star,
    POLYGON = PolyStarType.Polygon,
  }
}
