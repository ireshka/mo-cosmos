import { VFC } from 'react';

import PlanetImage from '../../../assets/rocket/planet.png';
import * as S from './Illustration.styles';
import { LandingGear } from './LandingGear/LandingGear';
import { Rocket } from './Rocket/Rocket';
import { SmokeContainer } from './SmokeContainer/SmokeContainer';

export const Illustration: VFC = () => (
  <S.Container>
    <S.Image alt="Planet" src={PlanetImage} />
    <SmokeContainer />
    <LandingGear />
    <Rocket />
  </S.Container>
);
