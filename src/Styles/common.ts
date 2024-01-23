import { styled } from 'styled-components'
import theme from './Theme'

export const DetailPageStyle = styled.div`
  padding: 2rem;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  & > p {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.divider};
    & > span:nth-child(2) {
      text-align: end;
    }
    &:hover {
      color: ${theme.secondary};
    }
  }

  @media (max-width: 1180px) {
    & > p {
      flex-direction: column;
      & > span:nth-child(2) {
        text-align: start;
      }
    }
  }
`
