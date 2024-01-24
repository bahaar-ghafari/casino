import styled from 'styled-components'
import theme from 'Styles/Theme'
import { ButtonProps } from './@type'

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 16px;
  background-color: ${theme.dark};
  color: ${theme.light};
  border: unset;
  font-size: 16px;
  font-weight:bold;
  cursor: pointer;
  display: flex;
  align-items: center;
`
