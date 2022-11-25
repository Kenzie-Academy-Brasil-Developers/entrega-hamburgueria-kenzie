import styled from "styled-components";

export const StyledCard = styled.div`
width: 100%;
height: 120px;
padding: 5px;

display: flex;
align-items: center;
gap: 10px;
background-color: var(--color-background);
align-self: center;
justify-self: center;
gap: 23px;
    figure img {
        width: 98%;
        height: 98%;
    }
    figure {
        width: 75px;
        border-radius: 6px;
        background-color: var(--color-grey-0);
    }
    .remove-item{
        border: none;
        background-color: transparent;
        position: relative;
        bottom: 19px;
        color: var(--color-text-complement);
        width: 50px;
        margin-right: 10px;
        font-size: 1.2rem;
    }

    .card-infos {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    .card-infos h3 {
        font-size: 1.6rem;
    }
    .card-infos p {
        font-size: 1.3rem;
    }

    span {
        font-size: 1.2rem;
        background-color: var(--color-primary-50);
        border-radius: 16px;
        padding: 2px 6px;
        width: fit-content;
    }
`;
