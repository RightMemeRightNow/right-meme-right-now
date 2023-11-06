import Image from "next/image";
import Button from "../Button";
import * as S from './Error.style';
import { useRouter } from "next/router";

const Error = ({ message }) => {
  const router = useRouter();
  const goBackHome = () => {
    router.push(`/`);
  }
  return (
    <S.Wrapper>
      <S.H1>{message}</S.H1>
      <S.Content>{`서비스 이용에 불편을 드려 죄송합니다.\n잠시 후 다시 이용해 주세요.`}</S.Content>
      <Image src='/images/zzal/36.png' width={500} height={500} alt='Error 발생' />
      <Button onClick={goBackHome} width={'20rem'} theme='drawing'>홈으로 이동하기</Button>
    </S.Wrapper>
  )
}

export default Error;
