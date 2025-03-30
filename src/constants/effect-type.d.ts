export declare enum EffectType {
  Custom = 5,
  PaintOverTransparent = 7,
  Tint = 20,
  Fill = 21,
  Stroke = 22,
  Tritone = 23,
  ProLevels = 24,
  DropShadow = 25,
  RadialWipe = 26,
  DisplacementMap = 27,
  Matte3 = 28,
  GaussianBlur = 29,
  MeshWarp = 31,
  Wavy = 32,
  Spherize = 33,
  Puppet = 34,
}
export declare namespace EffectType {
  type Value = EffectType;

  /** @deprecated Use the {@linkcode EffectType} enum */
  const enum VALUE {
    CUSTOM = EffectType.Custom,
    PAINT_OVER_TRANSPARENT = EffectType.PaintOverTransparent,
    TINT = EffectType.Tint,
    FILL = EffectType.Fill,
    STROKE = EffectType.Stroke,
    TRITONE = EffectType.Tritone,
    PRO_LEVELS = EffectType.ProLevels,
    DROP_SHADOW = EffectType.DropShadow,
    RADIAL_WIPE = EffectType.RadialWipe,
    DISPLACEMENT_MAP = EffectType.DisplacementMap,
    MATTE3 = EffectType.Matte3,
    GAUSSIAN_BLUR = EffectType.GaussianBlur,
    MESH_WARP = EffectType.MeshWarp,
    WAVY = EffectType.Wavy,
    SPHERIZE = EffectType.Spherize,
    PUPPET = EffectType.Puppet,
  }
}
