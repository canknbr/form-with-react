import React from 'react';
import * as S from './styled';
import { Item } from './constant';
function Sidebar({ activeStep }) {
  return (
    <S.Sidebar>
      {Item.map(item => (
        <S.Item key={item.id} isActive={activeStep === item.id}>
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.SubTitle>{item.subTitle}</S.SubTitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.Sidebar>
  );
}

export default Sidebar;
