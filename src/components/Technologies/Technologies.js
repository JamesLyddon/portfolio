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
} from "react-icons/di";
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
      I've worked with a range of technologies in the web development world.
      From Back-end to Design etc.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiReact size="3rem" color={"orangered"} />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br /> Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
