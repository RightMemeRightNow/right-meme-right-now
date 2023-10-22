import styled from 'styled-components';

export const ProgressBar = styled.div`
    width: 100%;
    height: 1rem;
    background-color: #e2e2e2;
    border-radius: 10px;
    overflow: hidden;
`;

export const Progress = styled.div`
    width: ${(props) => props.width}%; 
    height: 1rem;
    background-color: black;
`;