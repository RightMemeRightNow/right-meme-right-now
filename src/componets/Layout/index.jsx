import * as S from './Layout.style';
import Container from "../Container";

const Layout = ({ children }) => {
  return (
    <S.StyledLayout>
      <Container>
        {children}
      </Container>
    </S.StyledLayout>
  )
}

export default Layout;
