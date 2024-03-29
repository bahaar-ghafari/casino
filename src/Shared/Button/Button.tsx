import React from 'react'
import { StyledButton } from './Button.style'
import { ButtonProps } from './@type'

const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest} data-testid='button'>
      {children}
    </StyledButton>
  )
}

export default Button
