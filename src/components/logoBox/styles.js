import styled from 'styled-components'

export const Container = styled.div`
background-color: ${({theme}) => theme.colors.secondaryBackground};
border: 2px solid ${({theme}) => theme.colors.tertiaryText};
justify-content: center;
align-items: center;
border-radius: 15px;
display: flex;
height: 250px;
width: 75vw;

@media (max-width: 678px) {
width: 90vw;
height: 150px;

  & > img {
    height: 100%;
  }
}
`