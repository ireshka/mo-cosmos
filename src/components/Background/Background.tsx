import { VFC } from 'react';

import CircleImage from '../../assets/decoration/circle.svg';
import * as S from './Background.styles';
import { useBackground } from './useBackground';

export const Background: VFC = () => {
  const { circlePositions, dotData } = useBackground();
  return (
    <S.Wrapper>
      {circlePositions.map((circlePosition) => (
        <S.Circle
          src={CircleImage}
          alt=""
          position={circlePosition}
          key={`circle-${circlePosition.id}`}
        />
      ))}
      {dotData.map((dot) => (
        <S.Dot data={dot} key={`dot-${dot.id}`} />
      ))}
    </S.Wrapper>
  );
};
