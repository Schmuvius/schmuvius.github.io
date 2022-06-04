import { useThree } from '@react-three/fiber';
import Box from './components/Box';
import Cylinder from './components/Cylinder';
import Sphere from './components/Sphere';

const ONE_OBJECT_PER = 20000;
const objects = [Box, Sphere, Cylinder];

export const Objects = () => {
  const {
    gl: { domElement: canvasElement },
  } = useThree();
  const objectsCount =
    (canvasElement.width * canvasElement.height * 1) / ONE_OBJECT_PER;
  const items: JSX.Element[] = [];

  console.log(Math.floor(objectsCount));

  while (items.length < objectsCount) {
    const randomIndex = Math.floor(Math.random() * objects.length);
    const Component = objects[randomIndex];

    items.push(<Component key={items.length} />);
  }

  return <>{items}</>;
};
