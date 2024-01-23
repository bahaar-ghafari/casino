import styled from 'styled-components'
import theme from 'Styles/Theme'
import { ButtonProps } from './@type'

export const StyledButton = styled.button<ButtonProps>`
  box-sizing: boder-box;
  padding: 10px 20px;
  background-color: ${theme.light};
  color: ${theme.dark};
  border: unset;
  box-shadow: ${props => (props.$isactive ? theme.boxShadow : 'unset')};
  border-radius: ${theme.borderRadius};
  cursor: 'pointer';
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: ${theme.secondary};
  }
`
