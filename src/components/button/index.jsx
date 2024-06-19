import React from 'react';
import {ContainerButton} from './styles';

const Button = ({onAction, name, disabled, type}) => {
  return(
    <>
      <ContainerButton type={type} disabled={disabled} onClick={onAction}>
        {name}
      </ContainerButton>
    </>
  )
}

export default Button;