import * as S from './Layout.style';

const Layout = ({ headerSide, children }) => {
  return (
    <S.Wrapper>
      <S.StyledLayout>
        <S.Header>{headerSide}</S.Header>
        <S.Main>{children}</S.Main>
      </S.StyledLayout>
    </S.Wrapper>
  );
};

export default Layout;
