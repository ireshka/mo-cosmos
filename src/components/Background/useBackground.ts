import { useTheme } from 'styled-components';

import { CirclePosition, DotData } from './Background.types';

const circleSizeInPercentageWidthPerspective = 30.35;
const circleSizeInPercentageHeightPerspective = 45;

const circlePositions: CirclePosition[] = [
  {
    left: `${-circleSizeInPercentageWidthPerspective / 2}%`,
    top: `41.92%`,
    bottom: 'auto',
    right: 'auto',
    height: 'auto',
    width: `${circleSizeInPercentageWidthPerspective}%`,
    id: `01`,
  },
  {
    left: `33.6%`,
    right: 'auto',
    height: `${circleSizeInPercentageHeightPerspective}%`,
    width: 'auto',
    top: `${-circleSizeInPercentageHeightPerspective / 2}%`,
    bottom: 'auto',
    id: `02`,
  },
  {
    left: `auto`,
    right: `${-circleSizeInPercentageWidthPerspective / 2}%`,
    height: `auto`,
    width: `${circleSizeInPercentageWidthPerspective}%`,
    top: `14%`,
    bottom: 'auto',
    id: `02`,
  },
];

export const useBackground = (): { circlePositions: CirclePosition[]; dotData: DotData[] } => {
  const theme = useTheme();

  const dotData: DotData[] = [
    {
      color: theme.colors.dots.dotLeft,
      top: '18.75%',
      bottom: 'auto',
      left: '5.625%',
      right: 'auto',
      id: '01',
    },
    {
      color: theme.colors.dots.dotTop,
      top: '10.93%',
      bottom: 'auto',
      left: '60.76%',
      right: 'auto',
      id: '02',
    },
    {
      color: theme.colors.dots.dotBottom,
      top: '84.89%',
      bottom: 'auto',
      left: '45.83%',
      right: 'auto',
      id: '03',
    },
    {
      color: theme.colors.dots.dotLeft,
      top: '71.87%',
      bottom: 'auto',
      left: '87.43%',
      right: 'auto',
      id: '03',
    },
  ];

  return {
    circlePositions,
    dotData,
  };
};
