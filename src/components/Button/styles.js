import styled from 'styled-components';

export const NButton = styled.button`
  border: 0;
  background: ${props => props.background};
  color: ${props => props.color};
  padding: 10px 20px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  border-radius: 5px;
`;
