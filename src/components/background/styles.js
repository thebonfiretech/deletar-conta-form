import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.background};
height: auto;
width: 100vw;
display: flex;
align-items: center;
flex-direction: column;
gap: 25px;
padding: 5% 0;
`