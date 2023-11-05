import Header from '@/componets/Header';
import Layout from '@/componets/Layout';
import { Step, Questions, Meta } from '@/constants';
import { useEffect, useState, useCallback } from 'react';
import Main from '@/componets/Main';
import MemeStep from '@/componets/MemeStep';
import Portal from '@/componets/Portal';
import Loading from '@/componets/Loading';
import Finish from '@/componets/Finish';
import { HttpClient } from '@/httpClient';
import { useZzalFetch } from '@/hooks/useZzalFetch';
import { ZzalService } from '@/services/ZzalService';
import { useSearchParams } from 'next/navigation';
const httpClient = new HttpClient(Meta.url);
// const httpClient = new HttpClient(`http://localhost:3000`);
const zzalService = new ZzalService(httpClient);
const MemeContainer = () => {
  const [step, setStep] = useState(Step.START);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchParams = useSearchParams();

  const tags = searchParams.get('tags');
  const imageId = searchParams.get('imageId')
  
  const checkParams = () => tags && imageId && setStep(7);

  useEffect(() => {
    checkParams();
  }, [tags, imageId])

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { result, getImageList, error } = useZzalFetch(
    () => zzalService.getFinalImage(answers),
    answers,
    openModal,
    closeModal,
  );

  const increaseStep = () => {
    setStep(prev => prev + 1);
    setQuestion(Questions.find(question => question.step === step + 1));
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setQuestion(Questions.find(question => question.step === step - 1));
  };

  const getAnswers = answer => {
    setAnswers(answer);
  };

  const fetchZzal = () => {
    getImageList();
  };

  if (error) {
    throw new Error('Error');
  }

  return (
    <>
      {step === Step.START && <Main increaseStep={increaseStep} />}
      {step !== Step.START && step !== Step.FINISH && (
        <Layout headerSide={<Header step={step} />}>
          <MemeStep
            step={step}
            answers={answers}
            question={question.question}
            options={question.options}
            increaseStep={increaseStep}
            getAnswers={getAnswers}
            prevStep={prevStep}
          />
        </Layout>
      )}
      {step === Step.FINISH && (
        <Layout headerSide={<Header />}>
          <Finish
            answers={answers}
            setAnswers={setAnswers}
            setStep={setStep}
            fetchZzal={fetchZzal}
            fetchedResult={result}
            imageId={imageId}
            tags={tags}
          />
        </Layout>
      )}
      <Portal isOpen={isModalOpen}>
        <Loading />
      </Portal>
    </>
  );
};

export default MemeContainer;
