import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 200ms ease;
  background-color: ${props => props.DarkMode ? '#f1f1f1' : '#212121'};
`;

export const Button = styled.button`
  background-color: ${props => props.DarkMode ? '#212121' : '#f1f1f1'};
  color: ${props => props.DarkMode ? '#f1f1f1' : '#212121'};
  padding: 10px 20px;
  transition: all 200ms ease;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
