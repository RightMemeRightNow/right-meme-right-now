import { useEffect, useState } from 'react';
import * as S from './MemeStep.style';
import Button from '@/components/Button';
import { ToastContainer } from 'react-toastify';
import useToast from '@/hooks/useToast';
import Image from 'next/image';

const MemeStep = ({ step, answers, question, options, increaseStep, prevStep, getAnswers }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const isOptionsTwo = options.length === 2;
  const userAnswer = answers.length > 0 ? answers[step - 1] : null;

  const handleAnswer = answer => {
    setSelectedButton(answer);
  };

  const handleNext = () => {
    if (selectedButton === null) {
      useToast('답변을 골라주세요', 'warning');
    } else {
      increaseStep();
      setSelectedButton(null);
      if (userAnswer !== selectedButton) {
        getAnswers(answers.substring(0, step - 1) + selectedButton + answers.substring(step));
      }
    }
  };

  useEffect(() => {
    if (userAnswer) {
      setSelectedButton(Number(userAnswer));
    }
  }, [options]);

  return (
    <>
      <S.QuestionTitle>{question}</S.QuestionTitle>
      <S.Wrapper $isOptionsTwo={isOptionsTwo} $optionsLength={options.length}>
        {options.map((option, index) => (
          <Button
            onClick={() => handleAnswer(index)}
            marginBottom={isOptionsTwo ? '2rem' : '0.5rem'}
            key={index}
            theme={selectedButton === index ? 'primary' : ''}
          >
            <Image
              src={`https://${process.env.NEXT_PUBLIC_CDN}/images/options/${step + '' + index}.jpeg`}
              width={step === 5 ? 110 : 130}
              height={step === 5 ? 80 : 100}
              alt={option}
            />
            <br />
            {option}
          </Button>
        ))}
        <S.StyledLayout $optionsLength={options.length}>
          <Button onClick={() => prevStep()} marginRight="1rem">
            이전
          </Button>
          <Button onClick={() => handleNext()}>다음</Button>
        </S.StyledLayout>
      </S.Wrapper>
      <ToastContainer />
    </>
  );
};

export default MemeStep;
