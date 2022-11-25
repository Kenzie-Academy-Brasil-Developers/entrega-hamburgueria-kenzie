import styled from "styled-components";

export const CartOrganizer = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 20px;
  padding: 0 20px 20px 0;
  margin-bottom: 40px;
  background-color: var(--color-grey-0);


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
