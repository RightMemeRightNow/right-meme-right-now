import Header from "@/componets/Header";
import Layout from "@/componets/Layout";
import { Step } from "@/constants";
import { useState } from "react";
import Main from "@/componets/Main";

const MemeContainer = () => {
  const [step, setStep] = useState(Step.START);
  const increaseStep = () => {
    setStep(prev => prev + 1);
  }
  return (
    <>
      {step === Step.START && <Main increaseStep={increaseStep} />}
      {step === Step.JOB && (<Layout headerSide={<Header />}>JOB</Layout>)}
      {step === Step.BEHAVIOR && (<Layout headerSide={<Header />}>BEHAVIOR</Layout>)}
      {step === Step.BUSYNESS && (<Layout headerSide={<Header />}>BUSYNESS</Layout>)}
      {step === Step.EMOTION && (<Layout headerSide={<Header />}>EMOTION</Layout>)}
      {step === Step.ASSET && (<Layout headerSide={<Header />}>ASSET</Layout>)}
      {step === Step.FINISH && (<Layout>FINISH</Layout>)}
    </>
  );
}

export default MemeContainer;