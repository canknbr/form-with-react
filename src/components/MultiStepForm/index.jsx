import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import StepFour from '../StepFour';
import * as S from './styled';

const Steps = {
  step1: {
    component: StepOne,
    title: 'Personal Info',
    subtitle: 'Please provide your name, email and phone number.',
    hasNextButton: true,
  },
  step2: {
    component: StepTwo,
    title: 'Select your plan',
    subtitle: 'Please select your plan.',
    hasBackButton: true,
    hasNextButton: true,
  },
  step3: {
    component: StepThree,
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
    hasBackButton: true,
    hasNextButton: true,
  },
  step4: {
    component: StepFour,
    title: 'Finishing up',
    subtitle: 'Please review your order and confirm.',
    hasBackButton: true,
    hasNextButton: true,
    buttonText: 'Confirm Order',
  },
};

function MultiStepForm() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });
  const [activeStep, setActiveStep] = useState('step1');
  const ActiveStep = Steps[activeStep].component;
  const handleStepSubmit = (stepId, nextStep, stepData) => {
    setFormData({
      ...formData,
      [stepId]: stepData,
    });
    setActiveStep(nextStep);
  };
  console.log(formData);
  const handleBack = () => {
    const curStep = Number(activeStep.slice(-1)) - 1;
    setActiveStep(`step${curStep}`);
  };
  console.log(formData);
  return (
    <S.MultiStepForm>
      <Sidebar activeStep={activeStep} />
      <ActiveStep
        {...Steps[activeStep]}
        formData={formData}
        onStepSubmit={handleStepSubmit}
        onBack={handleBack}
      />
    </S.MultiStepForm>
  );
}

export default MultiStepForm;
