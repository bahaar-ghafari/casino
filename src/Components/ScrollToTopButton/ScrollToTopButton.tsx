import React, { useState, useEffect } from 'react'
import { StyledScrollToTopButton } from './StyledScrollToTopButton'
import theme from 'Styles/Theme'
import ChevronIcon from 'Shared/icons/ChevronIcon'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledScrollToTopButton onClick={scrollToTop} $isVisible={isVisible} color={theme.light}>
      <ChevronIcon direction='top' />
    </StyledScrollToTopButton>
  )
}

export default ScrollToTop
