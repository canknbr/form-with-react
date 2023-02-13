import React from 'react';
import Sidebar from '../Sidebar';
import StepOne from '../StepOne';
import * as S from './styled';
function MultiStepForm() {
  return (
    <S.MultiStepForm>
      <Sidebar />
      <StepOne />
    </S.MultiStepForm>
  );
}

export default MultiStepForm;
