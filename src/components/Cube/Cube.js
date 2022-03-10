import react from "react";
import { useFrame } from "@react-three/fiber";

const Cube = (props) => {
  const myMesh = react.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
    myMesh.current.rotation.y = clock.getElapsedTime();
    myMesh.current.rotation.z = clock.getElapsedTime();
  });
  return (
    <mesh {...props} recieveShadow={true} castShadow={true} ref={myMesh}>
      <boxBufferGeometry args={[5, 5, 5]} />
      <meshPhysicalMaterial color="#e28743" />
    </mesh>
  );
};

export default Cube;
