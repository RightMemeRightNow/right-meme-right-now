import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  width: 24rem;
  height: 28rem;
  background: #FFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
