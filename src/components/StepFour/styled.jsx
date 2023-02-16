import styled, { css } from 'styled-components';
const commonRowFlex = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StepFour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Title = styled.h4`
  font-size: 16px;
`;
export const MainRow = styled.div`
  ${commonRowFlex}
  border-bottom: 1px solid #e5e5e5;
  padding: 24px;
  background-color: #a5d8ff;

  ${Title} {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const SubRow = styled.div`
  ${commonRowFlex}

  padding: 12px 24px;
`;
export const TotalRow = styled.div`
  ${commonRowFlex}
  border-top: 1px solid #e5e5e5;
  padding: 24px;
`;

export const Price = styled.h6`
  font-size: 16px;
  font-weight: 600;
`;

export const TotalAmount = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;
