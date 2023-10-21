import * as S from './Container.style';

const Container = ({ children }) => {
  return (
    <S.StyledContainer>
      {children}
    </S.StyledContainer>
  )
}

export default Container;
