import React, { useState } from 'react';
import Step from '../Step';
import * as S from './styled';
import FORM from '../../../form.json';
function StepThree(props) {
  const { step3 } = FORM;
  const billingType = 'monthly';
  const [selected, setSelected] = useState([]);
  const changeSelected = (check, addon) => {
    if (check) {
      setSelected([...selected, addon]);
    } else {
      setSelected(selected.filter(item => item.id !== addon.id));
    }
  };
  return (
    <Step {...props}>
      <S.StepThree>
        {step3[billingType].map(item => (
          <S.Item key={item.id} isSelected={selected.includes(item)}>
            <S.Input
              type="checkbox"
              onChange={e => changeSelected(e.target.checked, item)}
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
