import React from 'react';
import Step from '../Step';
import * as S from './styled';
function StepFour({ formData, ...props }) {
  const { billingType, plan } = formData.step2;
  const { selected } = formData.step3;
  return (
    <Step {...props}>
      <S.StepFour>
        <S.MainRow>
          <S.Title>
            {plan.title} ({billingType})
          </S.Title>
          <S.Price>{plan.price}</S.Price>
        </S.MainRow>
        {selected.length > 0 &&
          selected.map(item => (
            <S.SubRow key={item.id}>
              <S.Title>{item.title}</S.Title>
              <S.Price>${item.price}</S.Price>
            </S.SubRow>
          ))}
        <S.TotalRow>
          <S.Title>Total (per {billingType})</S.Title>
          <S.TotalAmount>
            +$
            {selected.reduce((acc, item) => {
              return acc + item.priceAmount;
            }, plan.priceAmount)}{' '}
            / {billingType === 'monthly' ? 'mo' : 'yr'}
          </S.TotalAmount>
        </S.TotalRow>
      </S.StepFour>
    </Step>
  );
}

export default StepFour;
