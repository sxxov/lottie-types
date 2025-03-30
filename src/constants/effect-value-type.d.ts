export declare enum EffectValueType {
  Slider = 0,
  Angle = 1,
  Color = 2,
  Point = 3,
  Checkbox = 4,
  Ignored = 6,
  Dropdown = 7,
  Layer = 10,
}

export declare namespace EffectValueType {
  type Value = EffectValueType;

  /** @deprecated Use the {@linkcode EffectValueType} enum */
  const enum VALUE {
    SLIDER = EffectValueType.Slider,
    ANGLE = EffectValueType.Angle,
    COLOR = EffectValueType.Color,
    POINT = EffectValueType.Point,
    CHECKBOX = EffectValueType.Checkbox,
    IGNORED = EffectValueType.Ignored,
    DROPDOWN = EffectValueType.Dropdown,
    LAYER = EffectValueType.Layer,
  }
}
