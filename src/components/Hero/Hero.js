import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        and welcome to <br />
        my portfolio. <br />
        <br />
        I'm Jim and I make <br />
        Internet things.
      </SectionTitle>
      <SectionText></SectionText>
      {/* <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
