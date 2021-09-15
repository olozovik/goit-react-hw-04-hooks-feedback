import styled from '@emotion/styled';

const Buttons = styled.div`
  & button {
    padding: 2px 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 150ms linear;

    &:hover,
    &:focus {
      background-color: rgba(94, 152, 247, 1);
      border-color: transparent;
      outline: none;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export { Buttons };
