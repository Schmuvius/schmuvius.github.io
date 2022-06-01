const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 32, 10]} />
    </>
  );
};
export default Lighting;
