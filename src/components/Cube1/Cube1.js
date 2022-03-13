import react from "react";
import { useFrame } from "@react-three/fiber";

const Cube1 = (props) => {
  const myMesh = react.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = 0.5 * clock.getElapsedTime();
    myMesh.current.rotation.y = 0.5 * clock.getElapsedTime();
    myMesh.current.rotation.z = 0.5 * clock.getElapsedTime();
  });
  return (
    <mesh {...props} ref={myMesh}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshPhysicalMaterial color="rgba(226,135,67, 1)" />
    </mesh>
  );
};

export default Cube1;
