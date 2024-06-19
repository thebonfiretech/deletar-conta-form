import styled from "styled-components";

export const Container = styled.form`
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border: 2px solid ${({ theme }) => theme.colors.tertiaryText};
    color: ${({ theme }) => theme.colors.text};
    box-sizing: border-box;
    flex-direction: column;
    border-radius: 15px;
    min-height: 100vh;
    padding: 5% 7.5%;
    display: flex;
    width: 75vw;
    gap: 50px;

    @media (max-width: 678px) {
        width: 90vw;
    }

    & > section {
        flex-direction: column;
        display: flex;
        gap: 15px;
    }
`;

export const Send = styled.div`
justify-content: center;
display: flex;
width: 100%;

`