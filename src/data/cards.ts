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
    title: 'capsules',
    headers: ['type', 'status'],
  },
  {
    id: uuid(),
    image: CrewImage,
    title: 'crew',
    headers: ['name', 'agency'],
  },
  {
    id: uuid(),
    image: RocketImage,
    title: 'rockets',
    headers: ['name', 'active'],
  },
  {
    id: uuid(),
    image: StarlinkImage,
    title: 'starlink',
    headers: ['OBJECT_NAME', 'DECAYED'],
  },
];
