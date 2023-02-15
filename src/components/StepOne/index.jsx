import React from 'react';
import Step from '../Step';
import * as S from './styled';
import form from '../../../form.json';
function StepOne(props) {
  const hasError = false;
  return (
    <Step {...props}>
      <S.StepOne>
        {form.step1.map(item => {
          return (
            <S.FormItem key={item.id} hasError={hasError}>
              <S.FormLabel htmlFor={item.id}>{item.label}</S.FormLabel>
              <S.FormInput
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
