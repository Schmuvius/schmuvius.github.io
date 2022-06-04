import OBJECT_SIZE from 'routes/Home/components/Playground/components/Objects/constants/Size';

const MIN_SIZE = OBJECT_SIZE * 0.5;
const MAX_SIZE = OBJECT_SIZE * 1.5;

const useObjectSize = () => Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;
export default useObjectSize;
