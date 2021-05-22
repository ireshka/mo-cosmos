import { VFC } from 'react';

import PlanetImage from '../../../assets/rocket/planet.png';
import * as S from './Illustration.styles';
import { LandingGear } from './LandingGear/LandingGear';
import { Rocket } from './Rocket/Rocket';
import { SmokeWrapper } from './SmokeWrapper/SmokeWrapper';

export const Illustration: VFC = () => (
  <S.Wrapper>
    <S.Image alt="Planet" src={PlanetImage} />
    <SmokeWrapper />
    <LandingGear />
    <Rocket />
  </S.Wrapper>
);
