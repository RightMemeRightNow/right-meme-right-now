import * as S from './Finish.style';
import Image from 'next/image';
import Button from '@/componets/Button';
import { useEffect, useState } from 'react';

const Finish = ({ selectedTags, setStep }) => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    getFinalImage().then(res => setImageUrl(res.image));
  }, []);

  const onClickNotGood = () => {
    // eslint-disable-next-line no-undef
    alert('준비중');
  };

  const onClickRetry = () => {
    setStep(0);
  };

  const onClickFindSimilar = () => {
    //todo
  };

  const onClickCopyUrl = () => {
    //todo
  };

  return (
    <S.FlexWrapper>
      <S.Wrapper>
        <Image
          src={'/images/question.png'}
          width={300}
          height={44}
          alt={'지금 내게 필요한 짤은?'}
        />

        <Image src={imageUrl} width={400} height={300} alt={'결과이미지'} />

        <S.TagWrapper>
          {selectedTags.map(() => {
            //todo
          })}
          <S.Tag>태그1</S.Tag>
          <S.Tag>태그2</S.Tag>
          <S.Tag>태그3</S.Tag>
        </S.TagWrapper>
      </S.Wrapper>
      <S.Wrapper>
        <S.RowWrapper>
          <Button theme="secondary" width="40%">
            <Image src={'/images/download_icon.png'} width={25} height={25} />
          </Button>
          <Button theme="secondary" width="60%" onClick={onClickFindSimilar}>
            비슷한 짤 찾기
          </Button>
        </S.RowWrapper>
        <S.RowWrapper>
          <Button onClick={onClickCopyUrl}>공유하기</Button>
          <Button theme="secondary" onClick={onClickRetry}>
            다시 해보기
          </Button>
        </S.RowWrapper>
        <S.RowWrapper>
          <button onClick={onClickNotGood}>별로예요 - 직접 올리기</button>
        </S.RowWrapper>
      </S.Wrapper>
    </S.FlexWrapper>
  );
};

function getFinalImage() {
  return fetch('api/getFinalImage', { method: 'GET' }).then(res => res.json());
}

export default Finish;
