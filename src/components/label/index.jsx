import React from 'react';
import {Container} from './styles';

const Label = ({name, htmlFor}) => {
  return(
    <>
      <Container htmlFor={htmlFor}>
        {name}
      </Container>
    </>
  )
}

export default Label;

