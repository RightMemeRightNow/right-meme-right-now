import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const H1 = styled.h1`
`;

export const Content = styled.span`
  padding-top: 1rem;
  color: #929292;
  white-space: pre-wrap;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const StyledLink = styled(Button)`
`;
