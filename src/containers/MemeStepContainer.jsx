import Header from '@/componets/Header';
import Layout from '@/componets/Layout';
import { Step, Questions } from '@/constants';
import { useState } from 'react';
import Main from '@/componets/Main';
import MemeStep from '@/componets/MemeStep';

const MemeContainer = () => {
  const [step, setStep] = useState(Step.START);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const increaseStep = () => {
    setStep(prev => prev + 1);
    setQuestion(Questions.filter(question => question.step === step + 1)[0]);
  };

  const getAnswers = answer => {
    setAnswers([...answers, answer]);
  };

  return (
    <>
      {step === Step.START && <Main increaseStep={increaseStep} />}
      {step === Step.JOB && (
        <Layout headerSide={<Header />}>
          <MemeStep
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
          />
        </Layout>
      )}
      {step === Step.BEHAVIOR && (
        <Layout headerSide={<Header />}>
          <MemeStep
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
          />
        </Layout>
      )}
      {step === Step.BUSYNESS && (
        <Layout headerSide={<Header />}>
          <MemeStep
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
          />
        </Layout>
      )}
      {step === Step.EMOTION && (
        <Layout headerSide={<Header />}>
          <MemeStep
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
          />
        </Layout>
      )}
      {step === Step.ASSET && (
        <Layout headerSide={<Header />}>
          <MemeStep
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
          />
        </Layout>
      )}
      {step === Step.FINISH && <Layout>FINISH</Layout>}
    </>
  );
};

export default MemeContainer;
