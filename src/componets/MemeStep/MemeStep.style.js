import styled from 'styled-components';

export const QuestionTitle = styled.div`
 font-size: 1.5rem;
`
export const Wrapper = styled.div`
 width: 100%;
 padding: ${({ $isOptionsTwo }) => $isOptionsTwo ? '2rem 0' : '1rem 0'} 0;
 
 ${({ $optionsLength }) => $optionsLength === 4 && `
 margin: 2rem;
 padding: 0rem;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 1rem;
`}

${({ $optionsLength }) => $optionsLength === 9 && `
 padding: 0rem;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 0.5rem;

 @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
 }
`}
`;

export const StyledLayout = styled.div`
 display: flex;
 margin-top: 1rem;

 ${({ $optionsLength }) => $optionsLength === 4 && `
 grid-column: span 2;
 `}

 ${({ $optionsLength }) => $optionsLength === 9 && `
 grid-column: span 3;

 @media (max-width: 560px) {
    grid-column: span 2;
 }
 `}
`