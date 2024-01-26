import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/authStore';
import Profile from '../Components/Profile';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('stores/authStore', () => ({
  ...jest.requireActual('stores/authStore'),
  useAuthStore: jest.fn(),
}));

describe('Profile Component', () => {
  it('should render user information and trigger logout on button click', async () => {
    // Mock the user data
    const mockUser = {
      name: 'John Doe',
      avatar: 'john-doe-avatar.jpg',
      event: 'Logged in',
      username: 'john.doe',
    };

    // Mock the useAuthStore hook
    (useAuthStore as jest.MockedFunction<typeof useAuthStore>).mockReturnValue({
      user: mockUser,
      logout: jest.fn().mockResolvedValue({ status: 'success' }), // Mock the logout function
    });

    // Mock the useNavigate hook
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Profile />);

    // Assert that the user information is rendered
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.event)).toBeInTheDocument();
    expect(screen.getByAltText(mockUser.name)).toBeInTheDocument();

    // Trigger the logout button click
    fireEvent.click(screen.getByText('Log Out'));

    // Wait for the logout function to be called and navigate to the login page
    await waitFor(() => {
      expect(useAuthStore().logout).toHaveBeenCalledWith(mockUser.username);
    });
  });
});
