const Sun = () => {
  return (
    <mesh position={[10, 4, 0]}>
      <sphereGeometry args={[1.5, 24, 24]} />
      <meshToonMaterial color="yellow" />
    </mesh>
  );
};
export default Sun;
