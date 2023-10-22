import { useState } from 'react';
import * as S from './MemeStep.style';
import Button from '@/componets/Button';

const MemeStep = ({ question, options, increaseStep, prevStep, getAnswers }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const isOptionsOverTwo = options.length > 2;
  const isLastQuestion = options.length === 9;

  const handleAnswer = answer => {
    getAnswers(answer);
    setSelectedButton(answer);
  };

  const handleNext = answer => {
    if (answer === null) {
      alert('답변을 골라주세요');
    } else {
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
            style={{
              marginBottom: isOptionsOverTwo ? '1rem' : '2rem',
              gridColumn: options.length === 9 && index === 8 ? `span 2` : `span 1`,
            }}
            key={index}
            theme={selectedButton === option ? 'primary' : ''}
          >
            {option}
          </Button>
        ))}
        <S.StyledLayout $isLastQuestion={isLastQuestion}>
          <Button onClick={prevStep} style={{ marginRight: '1rem' }}>
            이전
          </Button>
          <Button onClick={() => handleNext(selectedButton)}>다음</Button>
        </S.StyledLayout>
      </S.Wrapper>
    </>
  );
};

export default MemeStep;
