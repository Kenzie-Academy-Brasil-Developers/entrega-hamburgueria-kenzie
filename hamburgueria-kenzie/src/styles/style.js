import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column;
    
    @media (min-width: 800px) {
      flex-direction: row;
      justify-content: center;
      
    }
    @media (max-width: 799px){
        align-items: center;
    }
  }
`;
