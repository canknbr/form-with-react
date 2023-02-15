import React from 'react';
import * as S from './styled';
function Step({ title, subtitle, hasBackButton, hasNextButton, children,buttonText = "Next Button" }) {
  return (
    <S.Step>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && <S.GoBackButton>Go Back</S.GoBackButton>}
        {hasNextButton && <S.GoNextButton>{buttonText}</S.GoNextButton>}{' '}
      </S.StepFooter>
    </S.Step>
  );
}

export default Step;
