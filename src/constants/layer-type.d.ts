export declare enum LayerType {
  Precomposition = 0,
  SolidColor = 1,
  Image = 2,
  Null = 3,
  Shape = 4,
  Text = 5,
  Audio = 6,
  VideoPlaceholder = 7,
  ImageSequence = 8,
  Video = 9,
  ImagePlaceholder = 10,
  Guide = 11,
  Adjustment = 12,
  Camera = 13,
  Light = 14,
  Data = 15,
}

export declare namespace LayerType {
  type Value = LayerType;

  /** @deprecated Use the {@linkcode LayerType} enum */
  const enum VALUE {
    PRECOMPOSITION = LayerType.Precomposition,
    SOLID_COLOR = LayerType.SolidColor,
    IMAGE = LayerType.Image,
    NULL = LayerType.Null,
    SHAPE = LayerType.Shape,
    TEXT = LayerType.Text,
    AUDIO = LayerType.Audio,
    VIDEO_PLACEHOLDER = LayerType.VideoPlaceholder,
    IMAGE_SEQUENCE = LayerType.ImageSequence,
    VIDEO = LayerType.Video,
    IMAGE_PLACEHOLDER = LayerType.ImagePlaceholder,
    GUIDE = LayerType.Guide,
    ADJUSTMENT = LayerType.Adjustment,
    CAMERA = LayerType.Camera,
    LIGHT = LayerType.Light,
    DATA = LayerType.Data,
  }
}
