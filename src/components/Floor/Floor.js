import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[8, 1, 8]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
