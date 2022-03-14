import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Cube1 from "../components/Cube1/Cube1";
import Cube2 from "../components/Cube2/Cube2";
import Cube3 from "../components/Cube3/Cube3";
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
        <Canvas
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color="white" intensity={0.7} />
          <spotLight position={[5, 5, 5]} angle={1.5} intensity={1} />
          <Cube1 position={[0, 3, 0]} />
          <Cube2 position={[0, 3, 0]} />
          <Cube3 position={[0, 3, 0]} />
        </Canvas>
        <Hero />
        <Technologies />
      </Section>
      <Projects />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
