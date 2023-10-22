import Header from '@/componets/Header';
import Layout from '@/componets/Layout';
import { Step, Questions } from '@/constants';
import { useState } from 'react';
import Main from '@/componets/Main';
import MemeStep from '@/componets/MemeStep';
import Portal from "@/componets/Portal";
import Loading from "@/componets/Loading";
import Finish from "@/componets/Finish";

const MemeContainer = () => {
const [step, setStep] = useState(Step.START);
const [question, setQuestion] = useState();
const [answers, setAnswers] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);

const increaseStep = () => {
  setStep(prev => prev + 1);
  setQuestion(Questions.filter(question => question.step === step + 1)[0]);
};

const prevStep = () => {
  setStep(prev => prev - 1);
  setQuestion(Questions.filter(question => question.step === step - 1)[0]);

const newAnswers = [...answers];
  newAnswers.pop();
  setAnswers(newAnswers);
};

const getAnswers = answer => {
  setAnswers([...answers, answer]);
};

const openModal = () => {
  setIsModalOpen(true);
}
const closeModal = () => {
  setIsModalOpen(false);
}
console.info('openModal: ', openModal);
console.info('closeModal: ', closeModal);

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
    {step === Step.FINISH && (<Layout headerSide={<Header />}><Finish selectedTags={answers} setStep={setStep} /></Layout>)}
    <Portal isOpen={isModalOpen}><Loading /></Portal>
  </>
);
};

export default MemeContainer;