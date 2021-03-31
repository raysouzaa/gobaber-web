import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
<<<<<<< Updated upstream
      color: #ff9000;
      border-color: #ff9000;
=======
      color: #a682f9;
      border-color: #a682f9;
>>>>>>> Stashed changes
    `}

  ${props =>
    props.isFilled &&
    css`
<<<<<<< Updated upstream
      color: #ff9000;
=======
      color: #a682f9;
>>>>>>> Stashed changes
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
