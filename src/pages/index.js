import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Cube from "../components/Cube/Cube";
import Floor from "../components/Floor/Floor";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { Canvas } from "@react-three/fiber";
import { RGBA_ASTC_10x10_Format } from "three";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <Canvas
          shadows={true}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color="white" intensity={1} />
          <Cube />
          <Floor position={[0, -5, 0]} />
        </Canvas>
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
