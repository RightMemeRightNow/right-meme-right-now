import * as S from './Finish.style';
import Image from 'next/image';
import Button from '@/componets/Button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Meta, Questions } from '@/constants';
import { ToastContainer } from 'react-toastify';
import useToast from '@/hooks/useToast';

const Finish = ({ answers, setAnswers, setStep, fetchedResult, fetchZzal }) => {
  const [imageUrl, setImageUrl] = useState();
  const router = useRouter();

  useEffect(() => {
    fetchZzal();

    setImageUrl(`/images/zzal/${fetchedResult?.imageNames[0]}.png`);
  }, [fetchedResult]);

  const shareClickHandler = () => {
    if (typeof window === 'undefined') return;
    const currentUrl = Meta.url + router.asPath;
    window.navigator.clipboard
      .writeText(currentUrl)
      .then(() => useToast('클립 보드에 주소가 복사되었습니다', 'success'));
  };

  const onClickNotGood = () => {
    useToast('준비중입니다.');
  };

  const onClickRetry = () => {
    setStep(0);
    setAnswers('');
  };

  const onClickFindSimilar = async () => {
    const randomIndex = Math.floor(Math.random() * fetchedResult.imageNames.length);
    setImageUrl(`/images/zzal/${fetchedResult.imageNames[randomIndex]}.png`);
  };

  return (
    fetchedResult && (
      <S.FlexWrapper>
        <S.Wrapper>
          <Image
            src={'/images/question.png'}
            width={300}
            height={44}
            alt={'지금 내게 필요한 짤은?'}
          />
          <S.Container>
            <Image
              src={imageUrl || `/images/zzal/${fetchedResult?.imageNames[0]}.png`}
              priority
              fill
              placeholder="blur"
              blurDataURL="/images/loading.gif"
              alt={'결과이미지'}
            />
          </S.Container>
          <S.TagWrapper>
            {answers?.split('').map((answer, i) => (
              <S.Tag key={i}>{`#${Questions[i]?.tag[Number(answer)]}`}</S.Tag>
            ))}
          </S.TagWrapper>
        </S.Wrapper>
        <S.Wrapper>
          <S.RowWrapper>
            <a href={imageUrl} download style={{ width: '40%' }}>
              <Button padding="0" height="40px" theme="secondary" width="100%">
                <Image
                  src={'/images/download_icon.png'}
                  width={30}
                  height={30}
                  alt={'다운로드 버튼'}
                />
              </Button>
            </a>
            <Button
              padding="0"
              height="40px"
              theme="secondary"
              width="60%"
              onClick={onClickFindSimilar}
            >
              비슷한 짤 찾기
            </Button>
          </S.RowWrapper>
          <S.RowWrapper>
            <Button padding="0" height="40px" onClick={shareClickHandler}>
              공유하기
            </Button>
            <Button padding="0" height="40px" theme="secondary" onClick={onClickRetry}>
              다시 해보기
            </Button>
          </S.RowWrapper>
          <S.RowWrapper>
            <button onClick={onClickNotGood}>별로예요 - 직접 올리기</button>
          </S.RowWrapper>
        </S.Wrapper>
        <ToastContainer />
      </S.FlexWrapper>
    )
  );
};

export default Finish;
