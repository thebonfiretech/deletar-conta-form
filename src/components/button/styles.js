import styled from 'styled-components'

export const ContainerButton = styled.button`
    background: ${({theme}) => theme.colors.gradient};
    color: ${({theme}) => theme.colors.text};
    text-transform: uppercase;
    box-sizing: border-box;
    transition: ease .2s;
    letter-spacing: 1px;
    border-radius: 5px;
    font-weight: 800;
    cursor: pointer;
    width: 500px;
    border: none;
    height: 45px;

  &:hover{
    opacity: 81%;
  }

  @media (max-width: 678px)
{
  width: 250px;
}
  
`