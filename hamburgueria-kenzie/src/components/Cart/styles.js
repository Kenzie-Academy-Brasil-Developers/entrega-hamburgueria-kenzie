import styled from "styled-components";

export const CartOrganizer = styled.div`
  width: 88vw;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 20px;

  margin-bottom: 40px;
  background-color: var(--color-grey-0);
  @media (min-width: 800px) {
    margin-top: 40px;
    height: fit-content;
    max-height: 600px;
    padding-bottom: 20px;
    border-radius: 6px;
  }

  .cart-header {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 20px;
    background-color: var(--color-primary);
    border-radius: 6px 6px 0 0;

    color: var(--color-text-in-primary);
    font-size: 1.4rem;
    
  }

  .cart-items {
    min-width: 100%;
    min-height: 50px;
    max-height: 250px;
    overflow-y: scroll;
    @media (min-width: 800px) {
      min-height: 90px;
      max-height: 350px;
    }
  }

  .cart-infos {
    border-top: 1px solid var(--color-grey-20);
    justify-content: space-between;
    padding: 12px 0 12px 0;
    display: flex;
    min-width: 100%;
  }
  .remove-all-items {
    height: 40px;
    width: 95%;
    align-self: center;
    border: none;
    background-color: var(--color-grey-20);
    border-radius: 6px;
    font-weight: 600;
    font-size: 1.4rem;
  }
`;
