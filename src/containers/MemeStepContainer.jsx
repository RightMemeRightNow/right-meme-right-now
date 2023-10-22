import Header from '@/componets/Header';
import Layout from '@/componets/Layout';
import { Step, Questions } from '@/constants';
import { useState } from 'react';
import Main from '@/componets/Main';
import MemeStep from '@/componets/MemeStep';
import Portal from '@/componets/Portal';
import Loading from '@/componets/Loading';
import Finish from '@/componets/Finish';

const MemeContainer = () => {
  const [step, setStep] = useState(Step.START);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState('');
  const [isModalOpen] = useState(false);

  const increaseStep = () => {
    setStep(prev => prev + 1);
    setQuestion(Questions.find(question => question.step === step + 1));
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setQuestion(Questions.find(question => question.step === step - 1));
    setAnswers(answers.substring(0, answers.length - 1));
  };

  const getAnswers = answer => {
    setAnswers(prev => prev + answer);
  };

  return (
    <>
      {step === Step.START && <Main increaseStep={increaseStep} />}
      {step !== Step.START && step !== Step.FINISH && (
        <Layout headerSide={<Header step={step} />}>
          <MemeStep
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
            prevStep={prevStep}
          />
        </Layout>
      )}
      {step === Step.FINISH && (<Layout headerSide={<Header />}><Finish answers={answers} setAnswers={setAnswers} setStep={setStep} /></Layout>)}
      <Portal isOpen={isModalOpen}>
        <Loading />
      </Portal>
    </>
  );
};

export default MemeContainer;
