export type CirclePosition = {
  top: string;
  bottom: string;
  left: string;
  right: string;
  width: string;
  height: string;
  id: string;
};

export type DotData = Omit<CirclePosition, 'width' | 'height'> & { color: string };
