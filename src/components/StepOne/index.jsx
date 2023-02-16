import React from 'react';
import Step from '../Step';
import * as S from './styled';
import form from '../../../form.json';
function StepOne({ onStepSubmit, formData, ...props }) {
  const hasError = false;
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onStepSubmit('step1', 'step2', formProps);
  };
  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.StepOne>
        {form.step1.map(item => {
          return (
            <S.FormItem key={item.id} hasError={hasError}>
              <S.FormLabel htmlFor={item.id}>{item.label}</S.FormLabel>
              <S.FormInput
                defaultValue={formData.step1[item.id]}
                name={item.id}
                type={item.type}
                id={item.id}
                placeholder={item.placeholder}
              />
              {hasError && (
                <S.ErrorMessage>This field is required</S.ErrorMessage>
              )}
            </S.FormItem>
          );
        })}
      </S.StepOne>
    </Step>
  );
}

export default StepOne;
