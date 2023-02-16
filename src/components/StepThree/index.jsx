import React, { useState } from 'react';
import Step from '../Step';
import * as S from './styled';
import FORM from '../../../form.json';
function StepThree({ onStepSubmit, formData, ...props }) {
  const { step3 } = FORM;
  const { billingType } = formData.step2;
  const [selected, setSelected] = useState(formData.step3.selected ?? []);
  const changeSelected = (check, addon) => {
    if (check) {
      setSelected([...selected, addon]);
    } else {
      setSelected(selected.filter(item => item.id !== addon.id));
    }
  };
  const onSubmit = () => {
    onStepSubmit('step3', 'step4', { selected });
  };
  return (
    <Step handleSubmit={onSubmit} {...props}>
      <S.StepThree>
        {step3[billingType].map(item => (
          <S.Item key={item.id} isSelected={selected.includes(item)}>
            <S.Input
              type="checkbox"
              onChange={e => changeSelected(e.target.checked, item)}
              defaultChecked={selected.includes(item)}
            />
            <S.InputBody>
              <S.Title>{item.title}</S.Title>
              <S.SubTitle>{item.description}</S.SubTitle>
            </S.InputBody>
            <S.Price>${item.price}</S.Price>
          </S.Item>
        ))}
      </S.StepThree>
    </Step>
  );
}

export default StepThree;
