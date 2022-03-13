import react from "react";
import { useFrame } from "@react-three/fiber";

const Cube2 = (props) => {
  const myMesh = react.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = 0.7 * clock.getElapsedTime();
    myMesh.current.rotation.y = 0.7 * clock.getElapsedTime();
    myMesh.current.rotation.z = 0.7 * clock.getElapsedTime();
  });
  return (
    <mesh {...props} ref={myMesh}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshPhysicalMaterial color="rgba(226,135,67, 1)" />
    </mesh>
  );
};

export default Cube2;
