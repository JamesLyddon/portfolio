import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { GiNestedHexagons } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { DiCodeBadge } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { CgFormatSlash } from "react-icons/cg";
import { GiLaserWarning } from "react-icons/gi";
import { GiBurn } from "react-icons/gi";
import { GiCube } from "react-icons/gi";
import { GiGhost } from "react-icons/gi";
import { GiHoneycomb } from "react-icons/gi";
import { GiMoebiusTriangle } from "react-icons/gi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Icon,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0.5rem",
          }}
        >
          <Icon>
            <GiMoebiusTriangle />
          </Icon>
          <Span>JRL_DEV</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/JamesLyddon">
        <AiFillGithub size="2.5rem" color={"#e28743"} />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/james-lyddon">
        <AiFillLinkedin size="2.5rem" color={"#e28743"} />
      </SocialIcons>
      <SocialIcons href="mailto:jameslyddon@gmail.com" target="_blank">
        <AiFillMail size="2.5rem" color={"#e28743"} />
      </SocialIcons>
      <SocialIcons href="tel:555-555-5555">
        <AiFillPhone size="2.5rem" color={"#e28743"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
