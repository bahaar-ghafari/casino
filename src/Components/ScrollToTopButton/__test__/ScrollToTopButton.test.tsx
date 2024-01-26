import { render, fireEvent } from '@testing-library/react'
import ScrollToTopButton from '../ScrollToTopButton'

// Mock the window.scrollTo method
window.scrollTo = jest.fn()

describe('ScrollToTopButton', () => {
  it('renders the ScrollToTop button', () => {
    const { getByTestId } = render(<ScrollToTopButton />)
    const scrollToTopButton = getByTestId('button')
    expect(scrollToTopButton).toBeInTheDocument()
  })

  it('shows the ScrollToTop button when the user scrolls down', () => {
    const { getByTestId } = render(<ScrollToTopButton />)
    // Scroll down to trigger the handleScroll function
    window.scrollY = 200
    fireEvent.scroll(window)

    const scrollToTopButton = getByTestId('button')
    expect(scrollToTopButton).toBeVisible()
  })

  it('scrolls to the top when the button is clicked', () => {
    const { getByTestId } = render(<ScrollToTopButton />)
    // Scroll down first to show the button
    window.scrollY = 200
    fireEvent.scroll(window)

    const scrollToTopButton = getByTestId('button')
    fireEvent.click(scrollToTopButton)

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
