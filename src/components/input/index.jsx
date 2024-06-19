import React from "react";
import { Container, Box } from "./styles";
import Label from '../label'
import { ValidationError } from '@formspree/react';
const Input = ({ id, name, label, type, placeholder, handleChange, state }) => {
  return (
    <Container>
      <Label htmlFor={id} name={label}/>
    <Box
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="off"
      required
    />
      <ValidationError 
          prefix={label} 
          field={name}
          errors={state.errors}
      />
    </Container>
  );
};

export default Input;
