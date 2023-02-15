import React, { useState, useEffect } from 'react';
import Step from '../Step';
import * as S from './styled';
import FORM from '../../../form.json';

import {
  Icons,
  DEFAULT_PLAN,
  MONTHLY,
  YEARLY,
  DEFAULT_BILLING_TYPE,
} from './constant';
const { step2 } = FORM;

function StepTwo(props) {
  const [plan, setPlan] = useState(DEFAULT_PLAN);
  const [billingType, setBillingType] = useState(DEFAULT_BILLING_TYPE);

  const changePlan = id => {
    setPlan(id);
  };
  const changeBillingType = type => {
    setBillingType(type);
  };
  return (
    <Step {...props}>
      <S.StepTwo>
        <S.RadioGroup>
          {step2[billingType].map(item => {
            return (
              <S.RadioLabel key={item.id} isSelected={item.id === plan}>
                <S.RadioInput
                  type="radio"
                  name="plan-type"
                  value="basic"
                  onChange={() => changePlan(item.id)}
                />
                <S.Icon src={Icons[item.id]} />
                <S.Title>{item.title}</S.Title>
                <S.SubTitle>{item.price}</S.SubTitle>
                {billingType === MONTHLY && (
                  <S.Description>{item.description}</S.Description>
                )}
              </S.RadioLabel>
            );
          })}
        </S.RadioGroup>
        <S.BillingWrapper>
          <S.BillingButton
            type="button"
            isSelected={billingType === MONTHLY}
            onClick={() => changeBillingType(MONTHLY)}
          >
            Monthly
          </S.BillingButton>
          <S.BillingButton
            type="button"
            isSelected={billingType === YEARLY}
            onClick={() => changeBillingType(YEARLY)}
          >
            Yearly
          </S.BillingButton>
        </S.BillingWrapper>
      </S.StepTwo>
    </Step>
  );
}

export default StepTwo;
