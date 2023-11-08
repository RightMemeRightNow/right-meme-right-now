import Layout from '@/components/Layout';
import Logo from '@/components/Logo';
import * as S from './Main.style';
import Button from '@/components/Button';

const Main = ({ increaseStep }) => {
  return (
    <Layout>
      <S.FlexWrapper>
        <S.Wrapper>
          <img
            src={`https://${process.env.NEXT_PUBLIC_CDN}/images/question.webp`}
            width={300}
            height={44}
            alt={'지금 내게 필요한 짤은?'}
          />
          <Logo width={400} height={150} />
          <S.AdmirationImage
            src={`https://${process.env.NEXT_PUBLIC_CDN}/images/admiration.webp`}
            width={400}
            height={200}
            alt={'지금 내게 필요한 짤은?'}
          />
        </S.Wrapper>
        <Button onClick={increaseStep}>짤 찾기</Button>
      </S.FlexWrapper>
    </Layout>
  );
};

export default Main;
