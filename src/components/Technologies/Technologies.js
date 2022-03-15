import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiBootstrap,
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejsSmall,
  DiSass,
  DiVisualstudio,
  DiUnitySmall,
  DiPhotoshop,
  DiIllustrator,
  DiWordpress,
} from "react-icons/di";
import { SiTailwindcss, SiGraphql, SiJira } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My background is mostly front-end though lately I've been branching out
      into making CRUD apps with MERN and Next.js. When I can find the time I
      also like to dabble in game and mobile dev and with Unity, depolying my
      first android app to the Google Play Store in 2020.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiHtml5 size="3rem" color={"#e28743"} />
            <DiCss3Full size="3rem" color={"#e28743"} />
            <DiJsBadge size="3rem" color={"#e28743"} />
            <DiReact size="3rem" color={"#e28743"} />
            <DiBootstrap size="3rem" color={"#e28743"} />
            <DiSass size="3rem" color={"#e28743"} />
            <SiTailwindcss size="3rem" color={"#e28743"} />
          </ListParagraph>

          <ListParagraph>
            HTML | CSS | JavaScript | ES6 | React | Bootstrap | Sass | Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <DiNodejsSmall size="3rem" color={"#e28743"} />
            <DiMongodb size="3rem" color={"#e28743"} />
            <SiGraphql size="3rem" color={"#e28743"} />
          </ListParagraph>
          <ListParagraph>NodeJS | MongoDB | GraphQL</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            <DiUnitySmall size="3rem" color={"#e28743"} />
            <DiPhotoshop size="3rem" color={"#e28743"} />
            <DiIllustrator size="3rem" color={"#e28743"} />
            <DiWordpress size="3rem" color={"#e28743"} />
            <SiJira size="3rem" color={"#e28743"} />
          </ListParagraph>
          <ListParagraph>Unity | Photoshop | Illustrator | Jira </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
