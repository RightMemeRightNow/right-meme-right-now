import * as S from './Loading.style';

const Loading = () => {
  return (
    <S.Wrapper>
      <S.StyledImage src='/images/loading.gif' width={384} height={448} alt={'로딩중 입니다.'} />
    </S.Wrapper>
  )
}

export default Loading;
