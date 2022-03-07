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

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a>
          <Span>
            <FiChevronLeft color={"orangered"} />
            James Lyddon
            <CgFormatSlash color={"orangered"} />
            <FiChevronRight color={"orangered"} />
          </Span>
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
        <AiFillGithub size="2rem" color={"orangered"} />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/james-lyddon">
        <AiFillLinkedin size="2rem" color={"orangered"} />
      </SocialIcons>
      <SocialIcons href="mailto:jameslyddon@gmail.com" target="_blank">
        <AiFillMail size="2rem" color={"orangered"} />
      </SocialIcons>
      <SocialIcons href="tel:555-555-5555">
        <AiFillPhone size="2rem" color={"orangered"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
