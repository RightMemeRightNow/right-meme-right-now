import styled from 'styled-components';

export const QuestionTitle = styled.div`
 font-size: 1.5rem;
 padding-bottom: 2rem;
`
export const Wrapper = styled.div`
 width: 100%;
 padding: ${({ $isOptionsOverTwo }) => $isOptionsOverTwo ? '3rem' : '10rem'} 0;

 ${({ $isLastQuestion }) => $isLastQuestion && `
 padding: 0rem;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 0.5rem;
`}
`;

export const StyledLayout = styled.div`
 display: flex;
 margin-top: 4rem;

 ${({ $isLastQuestion }) => $isLastQuestion && `
 grid-column: span 2;
 margin-top: 0rem;
 `}
`