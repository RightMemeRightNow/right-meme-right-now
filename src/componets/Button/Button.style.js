import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: ${props => props.$width};
  padding: ${props => props.$padding};
  font-weight: 400;
  font-size: 1.25rem;
  ${({ $theme }) => css`
    background: ${$theme === 'primary' ? '#212121' : $theme === 'secondary' ? '#E2E2E2' :
      'url("/images/button-border.png") no-repeat center center / 100% 100%'
    };
    color: ${$theme === 'primary' ? '#fff' : '#212121'};
    font-weight: ${$theme === 'primary' ? 500 : 400};
    border-radius: ${$theme === 'primary' ? '1.75rem' : $theme === 'secondary' ? '1.5rem' : 'none'};
    
  `}
`;
