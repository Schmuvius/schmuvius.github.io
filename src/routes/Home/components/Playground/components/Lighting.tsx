const Lighting = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight intensity={1} position={[0, 10, 0]} />
    </>
  );
};
export default Lighting;
