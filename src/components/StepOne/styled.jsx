import styled from 'styled-components';

export const StepOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  ${({ hasError }) =>
    hasError &&
    ` 
    ${FormInput} {
        border-color: hsl(354, 84%, 57%);
    }
    `}
`;

export const FormLabel = styled.label`
  color: inherit;
  opacity: 0.5;
`;
export const FormInput = styled.input`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  color: inherit;
  transition: all 0.2s ease-in-out;
  &::placeholder {
    color: 'gray';
  }

  &:hover {
    color: hsl(243, 100%, 62%);
  }
`;
export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: hsl(354, 84%, 57%);
  font-size: 12px;
  font-weight: 400;
`;
