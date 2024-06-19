import styled from 'styled-components'


export const Container = styled.label`
font-family: "Poppins", sans-serif;
    color: ${({ theme}) => theme.colors.text};
    letter-spacing: 2px;
    font-weight: 400;
    width: 100%;

  &:first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 678px) {
    font-size: 13px;
  }
`