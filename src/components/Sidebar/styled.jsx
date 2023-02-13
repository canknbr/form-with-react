import styled from 'styled-components';
import SidebarBg from '../../assets/bg-sidebar-desktop.svg';
export const Sidebar = styled.div`
  width: 30%;
  flex-direction: column;
  display: flex;
  border-radius: 8px;
  gap: 24px;
  background-image: url(${SidebarBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  padding: 24px;
`;
export const Item = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  text-transform: uppercase;
`;

export const ItemNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const ItemBody = styled.div``;
export const SubTitle = styled.h5`
  font-size: 12px;
  opacity: 0.5;
  margin-bottom: 4px;
`;
export const Title = styled.h2`
  font-size: 16px;
  opacity: 0.9;
`;
