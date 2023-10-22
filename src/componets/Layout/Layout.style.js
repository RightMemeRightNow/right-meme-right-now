import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const StyledLayout = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  padding: 5rem 3.5rem;
  @media (max-width: 560px) {
    padding: 0;
  }
  display: flex;
  flex-flow: column nowrap;
  background: url("/images/phone-border.png") no-repeat center center / 600px 100%;
  @media (max-width: 560px) {
    background: none;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

`;

export const Main = styled.main`
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
