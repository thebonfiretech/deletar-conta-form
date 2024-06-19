import styled from 'styled-components'

export const Container = styled.h1`
color: ${({theme}) => theme.colors.tertiaryText};
font-weight: 400;
font-size: 3rem;
width: 100%;

@media (max-width: 678px) {
  font-size: 1.6rem;
  
}
`