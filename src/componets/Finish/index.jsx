import * as S from './Finish.style';
import Image from "next/image";
import Button from "@/componets/Button";

const Finish = ({ selectedTags, setStep }) => {
  const onClickNotGood = () => {
    // eslint-disable-next-line no-undef
    alert('준비중');
  }
  
  const onClickRetry = () => {
    setStep(0)
  }

  const onClickFindSimilar = () => {
    //todo
  }

  const onClickCopyUrl = () => {
    //todo
  }

  return (
    <S.FlexWrapper>
      <S.Wrapper>
        <Image src={'/images/question.png'} width={300} height={44} alt={'지금 내게 필요한 짤은?'} />
        <Image src={'/images/admiration.png'} layout='responsive' width={400} height={300} alt={'결과이미지'} />
        <S.TagWrapper>
          {selectedTags.map(() => {
            //todo
            
          })}
          <S.Tag>태그1</S.Tag>
          <S.Tag>태그2</S.Tag>
          <S.Tag>태그3</S.Tag>
          <S.Tag>태그4</S.Tag>
          <S.Tag>태그5</S.Tag>
          <S.Tag>태그6</S.Tag>
        </S.TagWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.RowWrapper>
          <Button padding='0' height='40px' theme='secondary' width='40%' ><Image src={'/images/download_icon.png'} width={30} height={30}/></Button>
          <Button padding='0' height='40px' theme='secondary' width='60%' onClick={onClickFindSimilar}>비슷한 짤 찾기</Button>
        </S.RowWrapper>
        <S.RowWrapper>
          <Button padding='0' height='40px' onClick={onClickCopyUrl}>공유하기</Button>
          <Button padding='0' height='40px' theme='secondary' onClick={onClickRetry}>다시 해보기</Button>
        </S.RowWrapper>
        <S.RowWrapper>
          <button onClick={onClickNotGood}>별로예요 - 직접 올리기</button>
        </S.RowWrapper>
      </S.Wrapper>
    </S.FlexWrapper>
  );
}

export default Finish;
