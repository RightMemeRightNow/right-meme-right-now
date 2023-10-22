import Layout from "@/componets/Layout";
import Image from "next/image";
import Logo from "@/componets/Logo";
import * as S from './Main.style';
import Button from "@/componets/Button";

const Main = ({ increaseStep }) => {
  return (
    <Layout>
      <S.FlexWrapper>
        <S.Wrapper>
          <Image src={'/images/question.png'} width={300} height={44} alt={'지금 내게 필요한 짤은?'} />
          <Logo width={400} height={150} />
          <S.AdmirationImage src={'/images/admiration.png'} width={400} height={200} alt={'지금 내게 필요한 짤은?'} />
        </S.Wrapper>
        <Button onClick={increaseStep}>
          짤 찾기
        </Button>
      </S.FlexWrapper>
    </Layout>
  );
}

export default Main;
