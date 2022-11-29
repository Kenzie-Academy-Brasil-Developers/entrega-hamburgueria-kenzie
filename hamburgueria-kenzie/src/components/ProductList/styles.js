import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: scroll;
  gap: 20px;
  padding: 20px 0 20px 20px;
  min-height: 345px;
  max-width: 98vw;
  
  @media (min-width: 800px) {
    margin-top: 20px;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: fit-content;
  }
`;
