import styled from 'styled-components';

export const StepThree = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Item = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: #000;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
  background-color: #74c0fc;
    `})}
`;

export const Input = styled.input``;

export const InputBody = styled.div`
  flex: 1;
  padding: 0 1rem;
`;
export const Title = styled.h4`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
export const SubTitle = styled.p`
  opacity: 0.4;
`;
export const Price = styled.p``;
