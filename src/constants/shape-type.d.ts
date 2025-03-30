export declare enum ShapeType {
  Rectangle = "rc",
  Ellipse = "el",
  PolygonStar = "sr",
  Path = "sh",
  Fill = "fl",
  Stroke = "st",
  GradientFill = "gf",
  GradientStroke = "gs",
  Group = "gr",
  Transform = "tr",
  RoundedCorners = "rd",
  PuckerBloat = "pb",
  Merge = "mm",
  Twist = "tw",
  OffsetPath = "op",
  ZigZag = "zz",
  Modifier = "", // null
  Repeater = "rp",
  Trim = "tm",
}
export declare namespace ShapeType {
  type Value = ShapeType;

  /** @deprecated Use the {@linkcode ShapeType} enum */
  const enum VALUE {
    RECTANGLE = ShapeType.Rectangle,
    ELLIPSE = ShapeType.Ellipse,
    POLYGON_STAR = ShapeType.PolygonStar,
    PATH = ShapeType.Path,
    FILL = ShapeType.Fill,
    STROKE = ShapeType.Stroke,
    GRADIENT_FILL = ShapeType.GradientFill,
    GRADIENT_STROKE = ShapeType.GradientStroke,
    GROUP = ShapeType.Group,
    TRANSFORM = ShapeType.Transform,
    ROUNDED_CORNERS = ShapeType.RoundedCorners,
    PUCKER_BLOAT = ShapeType.PuckerBloat,
    MERGE = ShapeType.Merge,
    TWIST = ShapeType.Twist,
    OFFSET_PATH = ShapeType.OffsetPath,
    ZIG_ZAG = ShapeType.ZigZag,
    MODIFIER = ShapeType.Modifier,
    REPEATER = ShapeType.Repeater,
    TRIM = ShapeType.Trim,
  }
}
