import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLayout = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem 4rem;
  @media (max-width: 560px) {
    padding: 0;
  }
  background: url("https://${process.env.NEXT_PUBLIC_CDN}/images/phone-border.webp") no-repeat center center / 600px 100%;
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
  padding: 1rem;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: align-items;
  align-items: center;
`;
