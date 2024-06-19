import styled from 'styled-components'

export const Container = styled.div`
flex-direction: column;
display: flex;
gap: 10px;
`

export const Box = styled.input`
color: ${({theme }) => theme.colors.secondaryText};
background-color: #262626; 
box-sizing: border-box;
border-radius: 5px;
padding: 0 8px;
outline: none;
border: none;
height: 50px;
width: 100%;

`
