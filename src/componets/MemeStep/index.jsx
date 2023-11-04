import { useEffect, useState } from 'react';
import * as S from './MemeStep.style';
import Button from '@/componets/Button';
import { ToastContainer } from 'react-toastify';
import useToast from '@/hooks/useToast';

const MemeStep = ({ step, answers, question, options, increaseStep, prevStep, getAnswers }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const isOptionsOverTwo = options.length > 2;
  const isLastQuestion = options.length === 9;
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
      <S.Wrapper $isOptionsOverTwo={isOptionsOverTwo} $isLastQuestion={isLastQuestion}>
        {options.map((option, index) => (
          <Button
            onClick={() => handleAnswer(index)}
            marginBottom={isOptionsOverTwo ? '1rem' : '2rem'}
            gridColumn={options.length === 9 && index === 8 ? `span 2` : `span 1`}
            key={index}
            theme={selectedButton === index ? 'primary' : ''}
          >
            {option}
          </Button>
        ))}
        <S.StyledLayout $isLastQuestion={isLastQuestion}>
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
