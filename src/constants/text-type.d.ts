export declare enum TextType {
  // Text type
  /** @deprecated Use {@linkcode TextType.Based.Characters} */
  Characters = TextType.Based.Characters,
  /** @deprecated Use {@linkcode TextType.Based.CharacterExcludingSpaces} */
  CharacterExcludingSpaces = TextType.Based.CharacterExcludingSpaces,
  /** @deprecated Use {@linkcode TextType.Based.Words} */
  Words = TextType.Based.Words,
  /** @deprecated Use {@linkcode TextType.Based.Lines} */
  Lines = TextType.Based.Lines,

  // Text caps
  /** @deprecated Use {@linkcode TextType.Caps.Regular} */
  Regular = TextType.Caps.Regular,
  /** @deprecated Use {@linkcode TextType.Caps.AllCaps} */
  AllCaps = TextType.Caps.AllCaps,
  /** @deprecated Use {@linkcode TextType.Caps.SmallCaps} */
  SmallCaps = TextType.Caps.SmallCaps,

  // Grouping
  /** @deprecated Use {@linkcode TextType.Grouping.Word} */
  Word = TextType.Grouping.Word,
  /** @deprecated Use {@linkcode TextType.Grouping.Line} */
  Line = TextType.Grouping.Line,
  /** @deprecated Use {@linkcode TextType.Grouping.All} */
  All = TextType.Grouping.All,

  // Justify
  /** @deprecated Use {@linkcode TextType.Justify.Left} */
  Left = TextType.Justify.Left,
  /** @deprecated Use {@linkcode TextType.Justify.Right} */
  Right = TextType.Justify.Right,
  /** @deprecated Use {@linkcode TextType.Justify.Center} */
  Center = TextType.Justify.Center,
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineLeft} */
  WithLastLineLeft = TextType.Justify.WithLastLineLeft,
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineRight} */
  WithLastLineRight = TextType.Justify.WithLastLineRight,
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineCenter} */
  WithLastLineCenter = TextType.Justify.WithLastLineCenter,
  /** @deprecated Use {@linkcode TextType.Justify.WithLastLineFull} */
  WithLastLineFull = TextType.Justify.WithLastLineFull,

  // Shape
  /** @deprecated Use {@linkcode TextType.Shape.Square} */
  Square = TextType.Shape.Square,
  /** @deprecated Use {@linkcode TextType.Shape.RampUp} */
  RampUp = TextType.Shape.RampUp,
  /** @deprecated Use {@linkcode TextType.Shape.RampDown} */
  RampDown = TextType.Shape.RampDown,
  /** @deprecated Use {@linkcode TextType.Shape.Triangle} */
  Triangle = TextType.Shape.Triangle,
  /** @deprecated Use {@linkcode TextType.Shape.Round} */
  Round = TextType.Shape.Round,
  /** @deprecated Use {@linkcode TextType.Shape.Smooth} */
  Smooth = TextType.Shape.Smooth,

  // Font path origin
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.Local} */
  Local = TextType.FontPathOrigin.Local,
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.CssUrl} */
  CssUrl = TextType.FontPathOrigin.CssUrl,
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.ScriptUrl} */
  ScriptUrl = TextType.FontPathOrigin.ScriptUrl,
  /** @deprecated Use {@linkcode TextType.FontPathOrigin.FontUrl} */
  FontUrl = TextType.FontPathOrigin.FontUrl,

  // Vertical justify
  /** @deprecated Use {@linkcode TextType.VerticalJustify.Top} */
  VerticalJustifyTop = TextType.VerticalJustify.Top,
  /** @deprecated Use {@linkcode TextType.VerticalJustify.Center} */
  VerticalJustifyCenter = TextType.VerticalJustify.Center,
  /** @deprecated Use {@linkcode TextType.VerticalJustify.Bottom} */
  VerticalJustifyBottom = TextType.VerticalJustify.Bottom,

  // Range selector mode
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Add} */
  Add = TextType.RangeSelectorMode.Add,
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Subtract} */
  Subtract = TextType.RangeSelectorMode.Subtract,
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Intersect} */
  Intersect = TextType.RangeSelectorMode.Intersect,
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Min} */
  Min = TextType.RangeSelectorMode.Min,
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Max} */
  Max = TextType.RangeSelectorMode.Max,
  /** @deprecated Use {@linkcode TextType.RangeSelectorMode.Difference} */
  Difference = TextType.RangeSelectorMode.Difference,
}
export declare namespace TextType {
  enum Based {
    Characters = 1,
    CharacterExcludingSpaces = 2,
    Words = 3,
    Lines = 4,
  }
  /** @deprecated Use the {@linkcode TextType.Based} enum */
  const enum BASED {
    CHARACTERS = Based.Characters,
    CHARACTER_EXCLUDING_SPACES = Based.CharacterExcludingSpaces,
    WORDS = Based.Words,
    LINES = Based.Lines,
  }

  /**
   * @default 0
   */
  enum Caps {
    Regular = 0,
    AllCaps = 1,
    SmallCaps = 2,
  }
  /** @deprecated Use the {@linkcode TextType.Caps} enum */
  const enum TEXT_CAPS {
    REGULAR = Caps.Regular,
    ALL_CAPS = Caps.AllCaps,
    SMALL_CAPS = Caps.SmallCaps,
  }

  enum Grouping {
    Characters = 1,
    Word = 2,
    Line = 3,
    All = 4,
  }
  /** @deprecated Use the {@linkcode TextType.Grouping} enum */
  const enum GROUPING {
    CHARACTERS = Grouping.Characters,
    WORD = Grouping.Word,
    LINE = Grouping.Line,
    ALL = Grouping.All,
  }

  /**
   * Text alignment / justification
   *
   * @default 0
   */
  enum Justify {
    Left = 0,
    Right = 1,
    Center = 2,
    WithLastLineLeft = 3,
    WithLastLineRight = 4,
    WithLastLineCenter = 5,
    WithLastLineFull = 6,
  }
  /** @deprecated Use the {@linkcode TextType.Justify} enum */
  const enum JUSTIFY {
    LEFT = Justify.Left,
    RIGHT = Justify.Right,
    CENTER = Justify.Center,
    WITH_LAST_LINE_LEFT = Justify.WithLastLineLeft,
    WITH_LAST_LINE_RIGHT = Justify.WithLastLineRight,
    WITH_LAST_LINE_CENTER = Justify.WithLastLineCenter,
    WITH_LAST_LINE_FULL = Justify.WithLastLineFull,
  }

  enum Shape {
    Square = 1,
    RampUp = 2,
    RampDown = 3,
    Triangle = 4,
    Round = 5,
    Smooth = 6,
  }
  /** @deprecated Use the {@linkcode TextType.Shape} enum */
  const enum SHAPE {
    SQUARE = Shape.Square,
    RAMP_UP = Shape.RampUp,
    RAMP_DOWN = Shape.RampDown,
    TRIANGLE = Shape.Triangle,
    ROUND = Shape.Round,
    SMOOTH = Shape.Smooth,
  }

  enum FontPathOrigin {
    Local = 0,
    CssUrl = 1,
    ScriptUrl = 2,
    FontUrl = 3,
  }
  /** @deprecated Use the {@linkcode TextType.FontPathOrigin} enum */
  enum FONT_PATH_ORIGIN {
    LOCAL = FontPathOrigin.Local,
    CSS_URL = FontPathOrigin.CssUrl,
    SCRIPT_URL = FontPathOrigin.ScriptUrl,
    FONT_URL = FontPathOrigin.FontUrl,
  }

  enum VerticalJustify {
    Top = 0,
    Center = 1,
    Bottom = 2,
  }
  /** @deprecated Use the {@linkcode TextType.VerticalJustify} enum */
  const enum VERTICAL_JUSTIFY {
    TOP = VerticalJustify.Top,
    CENTER = VerticalJustify.Center,
    BOTTOM = VerticalJustify.Bottom,
  }

  enum RangeSelectorMode {
    Add = 0,
    Subtract = 1,
    Intersect = 2,
    Min = 3,
    Max = 4,
    Difference = 5,
  }
  /** @deprecated Use the {@linkcode TextType.RangeSelectorMode} enum */
  const enum RANGE_SELECTOR_MODE {
    ADD = RangeSelectorMode.Add,
    SUBTRACT = RangeSelectorMode.Subtract,
    INTERSECT = RangeSelectorMode.Intersect,
    MIN = RangeSelectorMode.Min,
    MAX = RangeSelectorMode.Max,
    DIFFERENCE = RangeSelectorMode.Difference,
  }
}
