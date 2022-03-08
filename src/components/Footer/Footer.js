import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  Div3,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Slogan>Get in touch</Slogan>
      <Div3>
        <SocialContainer>
          <SocialIcons href="https://github.com/JamesLyddon">
            <AiFillGithub size="4rem" color={"#e28743"} />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/james-lyddon">
            <AiFillLinkedin size="4rem" color={"#e28743"} />
          </SocialIcons>
          <SocialIcons href="mailto:jameslyddon@gmail.com" target="_blank">
            <AiFillMail size="4rem" color={"#e28743"} />
          </SocialIcons>
          <SocialIcons href="tel:555-555-5555">
            <AiFillPhone size="4rem" color={"#e28743"} />
          </SocialIcons>
        </SocialContainer>
      </Div3>
    </FooterWrapper>
  );
};

export default Footer;
