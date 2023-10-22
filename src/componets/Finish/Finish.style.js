import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 90%;

`;

export const TagWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Tag = styled.span`
  background: #E2E2E2;
  color: #212121;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  @media (max-width: 560px) {
    font-size: 0.6rem;
  }
`;