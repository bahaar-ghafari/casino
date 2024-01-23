import styled from 'styled-components'
import theme from 'Styles/Theme'
import { ButtonProps } from './@type'

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${theme.primary};
  color: ${theme.secondary};
  border: unset;
  font-size: 16px;
  font-weight:bold;
  cursor: pointer;
`
