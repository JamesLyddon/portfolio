import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi!
        <br />
        I'm Jim <br />a web developer
      </SectionTitle>
      <SectionText>
        I'm primarily focused on the front-end but have been braching out into
        full-stack development with React and GraphQL. My current focus is on
        developing dynamic web apps with NEXT.js
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
