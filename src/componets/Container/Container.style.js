import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  padding: 6rem;
  background: url("/images/phone-border.png") no-repeat center center / 600px 100%;
  @media (max-width: 560px) {
    background: none;
  }
`;
