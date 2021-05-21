import { v4 as uuid } from 'uuid';

import CapsuleImage from '../assets/images/capsule.jpg';
import CrewImage from '../assets/images/crew.jpg';
import RocketImage from '../assets/images/rocket.jpg';
import StarlinkImage from '../assets/images/starlink.jpg';
import { Card } from './cards.types';

export const cardsData: Card[] = [
  {
    id: uuid(),
    image: CapsuleImage,
    route: 'capsules',
    title: 'capsules',
  },
  {
    id: uuid(),
    image: CrewImage,
    route: 'crew',
    title: 'crew',
  },
  {
    id: uuid(),
    image: RocketImage,
    route: 'rockets',
    title: 'rockets',
  },
  {
    id: uuid(),
    image: StarlinkImage,
    route: 'starlink',
    title: 'starlink',
  },
];
