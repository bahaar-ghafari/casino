import Button from 'Shared/Button/Button'
import styled from 'styled-components'

export const StyledScrollToTopButton = styled(Button)<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 100%;
  cursor: pointer;
  opacity: ${props => (props.$isVisible ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  z-index: 4;
  padding: 1rem;
`
