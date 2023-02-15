import styled from 'styled-components';

export const Step = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  flex: 1;
`;

export const StepHeader = styled.div``;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  opacity: 0.5;
`;

export const Body = styled.div`
  flex: 1;
`;

export const StepFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GoBackButton = styled.button`
  color: hsl(231, 11%, 63%);

  &:hover {
    color: inherit;
  }
`;
export const GoNextButton = styled.button`
  margin-left: auto;
  background-color: hsl(213, 96%, 18%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
`;
