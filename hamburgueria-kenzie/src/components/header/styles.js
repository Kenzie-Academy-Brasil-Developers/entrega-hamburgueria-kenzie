import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  gap: 10px;
  padding-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 43%;
    padding: 0 20px 0 20px;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  span {
    font-size: 1.9rem;
    color: var(--color-secondary);
  }
`;
