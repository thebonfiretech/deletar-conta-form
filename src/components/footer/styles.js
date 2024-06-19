import styled from 'styled-components'

export const Container = styled.p`
background-color: ${({ theme }) => theme.colors.tertiaryBackground};
border: 2px solid ${({ theme }) => theme.colors.tertiaryText};
box-sizing: border-box;
border-radius: 15px;
letter-spacing: 1px;
font-size: 1.2rem;
line-height: 24px;
min-height: 100px;
font-weight: 400;
padding: 15px;
height: auto;
width: 100%;

& a{
 color: ${({ theme }) => theme.colors.primary};
 cursor: pointer;
}
`