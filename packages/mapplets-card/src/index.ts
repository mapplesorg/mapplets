import { MappletsComponentSet } from '@mapples/mapplets-types';

import Card from './components/Card';
import CardActionArea from './components/CardActionArea';
import CardHeader from './components/CardHeader';
import CardContent from './components/CardHeader';

import { CardComponentType } from './types';

const CardComponent: MappletsComponentSet<CardComponentType> = {
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
};

export * from './types';
export { Card, CardActionArea, CardHeader, CardContent };

export default CardComponent;
