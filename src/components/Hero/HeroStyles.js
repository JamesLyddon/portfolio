import styled from "styled-components";

export const LeftSection = styled.div`
  margin: 5rem 2rem;
  width: 80%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
