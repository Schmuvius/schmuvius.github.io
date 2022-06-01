import { FC } from 'react';
import Box from './components/Box';
import Sphere from './components/Sphere';

const objects = [Box, Sphere];

interface ObjectsProps {
  count: number;
}
export const Objects: FC<ObjectsProps> = ({ count }) => {
  const items: JSX.Element[] = [];

  while (items.length !== count) {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const Component = objects[randomIndex];

    items.push(<Component key={items.length} />);
  }

  return <>{items}</>;
};
