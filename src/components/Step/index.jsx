import React from 'react';
import * as S from './styled';
function Step({
  onBack,
  title,
  subtitle,
  hasBackButton,
  hasNextButton,
  children,
  buttonText = 'Next Button',
  handleSubmit,
}) {
  return (
    <S.Step onSubmit={handleSubmit}>
      <S.StepHeader>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.StepHeader>
      <S.Body>{children}</S.Body>
      <S.StepFooter>
        {hasBackButton && (
          <S.GoBackButton onClick={onBack}>Go Back</S.GoBackButton>
        )}
        {hasNextButton && (
          <S.GoNextButton type="submit">{buttonText}</S.GoNextButton>
        )}{' '}
      </S.StepFooter>
    </S.Step>
  );
}

export default Step;
