import { useState } from 'react';
import * as S from './MemeStep.style';
import Button from '@/componets/Button';

const MemeStep = ({ question, options, increaseStep, prevStep, getAnswers }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const isOptionsOverTwo = options.length > 2;
  const isLastQuestion = options.length === 9;

  const handleAnswer = answer => {
    setSelectedButton(answer);
  };

  const handleNext = () => {
    if (selectedButton === null) {
      alert('답변을 골라주세요');
    } else {
      getAnswers(selectedButton);
      increaseStep();
      setSelectedButton(null);
    }
  };

  return (
    <>
      <S.QuestionTitle>{question}</S.QuestionTitle>
      <S.Wrapper $isOptionsOverTwo={isOptionsOverTwo} $isLastQuestion={isLastQuestion}>
        {options.map((option, index) => (
          <Button
            onClick={() => handleAnswer(option)}
            marginBottom={isOptionsOverTwo ? '1rem' : '2rem'}
            gridColumn={options.length === 9 && index === 8 ? `span 2` : `span 1`}
            key={index}
            theme={selectedButton === option ? 'primary' : ''}
          >
            {option}
          </Button>
        ))}
        <S.StyledLayout $isLastQuestion={isLastQuestion}>
          <Button onClick={prevStep} marginRight="1rem">
            이전
          </Button>
          <Button onClick={() => handleNext()}>다음</Button>
        </S.StyledLayout>
      </S.Wrapper>
    </>
  );
};

export default MemeStep;
