import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 48px;
  padding: 0 10px 0 10px;
  position: relative;

  @media (min-width: 800px) {
    width: 400px;
  }

  input {
    height: 48px;
    width: 100%;

    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
    color: var(--color-grey-20);
    background-color: var(--color-background);

    padding: 8px 12px;
    &::placeholder {
      color: var(--color-grey-20);
    }
  }

  button {
    width: 100px;
    height: 33px;
    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
    font-weight: 500;
    font-size: 1.4rem;

    border: none;
    border-radius: 8px;

    position: absolute;
    right: 19px;
    top: 7.3px;
  }
`;
