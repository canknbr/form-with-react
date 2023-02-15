import styled from 'styled-components';

export const StepTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;

export const RadioLabel = styled.label`
  border: 1px solid #e5e5e5;
  padding: 12px;
  flex: 1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #000;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    border-color: #000;
    background-color:hsl(231, 100%, 99%);


    `}
`;
export const RadioInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h6``;

export const Description = styled.p`
  font-size: 14px;
`;

export const BillingWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  background-color: #e5e5e5;
  padding: 12px;
  border-radius: 24px;
`;

export const BillingButton = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 700;
  color: gray;

  ${({ isSelected }) => isSelected && `color: #000;`}
`;
