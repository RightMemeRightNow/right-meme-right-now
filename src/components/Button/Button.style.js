import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: ${props => props.$width};
  height: ${props => props.$height};
  padding: ${props => props.$padding};
  margin-bottom: ${props => props.$marginBottom};
  margin-right: ${props => props.$marginRight};
  font-weight: 400;
  font-size: 1.25rem;
  @media (max-width: 560px) {
    font-size: 1rem;
  }
  ${({ $theme }) => css`
    background: ${$theme === 'primary' ? '#212121' : $theme === 'secondary' ? '#E2E2E2' :
      `url("https://${process.env.NEXT_PUBLIC_CDN}/images/button-border.png") no-repeat center center / 100% 100%`
    };
    color: ${$theme === 'primary' ? '#fff' : '#212121'};
    font-weight: ${$theme === 'primary' ? 500 : 400};
    border-radius: ${$theme === 'primary' ? '1.75rem' : $theme === 'secondary' ? '1.5rem' : 'none'};
  `}
`;
