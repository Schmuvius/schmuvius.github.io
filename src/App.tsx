import { useState } from 'react';
import { styled } from 'stitches.config';

const Button = styled('button', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '4rem',
  padding: '2rem',
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((state) => state + 1)}>{count}</Button>
  );
}

export default App;
