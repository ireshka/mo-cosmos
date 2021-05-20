export type CardsID = 'capsules' | 'crew' | 'rockets' | 'starlink';

export type Card = {
  title: CardsID;
  image: string;
  route: CardsID;
  id: string;
};
