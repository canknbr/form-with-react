import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import StepFour from '../StepFour';
import * as S from './styled';

const Steps = {
  stepOne: {
    component: StepOne,
    title: 'Personal Info',
    subtitle: 'Please provide your name, email and phone number.',
    hasNextButton: true,
  },
  stepTwo: {
    component: StepTwo,
    title: 'Select your plan',
    subtitle: 'Please select your plan.',
    hasBackButton: true,
    hasNextButton: true,
  },
  stepThree: {
    component: StepThree,
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
    hasBackButton: true,
    hasNextButton: true,
  },
  stepFour: {
    component: StepFour,
    title: 'Finishing up',
    subtitle: 'Please review your order and confirm.',
    hasBackButton: true,
    hasNextButton: true,
    buttonText: 'Confirm Order',
  },
};

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState('stepFour');
  const ActiveStep = Steps[activeStep].component;
  return (
    <S.MultiStepForm>
      <Sidebar />
      <ActiveStep {...Steps[activeStep]} />
    </S.MultiStepForm>
  );
}

export default MultiStepForm;
