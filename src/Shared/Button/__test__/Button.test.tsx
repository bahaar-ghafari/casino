import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("should call onClick when the button is clicked", () => {
    // Mock onClick function
    const onClickMock = jest.fn();

    // Render the Button component
    render(<Button onClick={onClickMock}>Click me</Button>);

    // Get the button element by test id
    const button = screen.getByTestId("button");

    // Simulate a button click
    fireEvent.click(button);

    // Assert that the onClick function is called
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should render children inside the button", () => {
    // Render the Button component with children
    render(<Button>Custom Content</Button>);

    // Get the button element by test id
    const button = screen.getByTestId("button");

    // Assert that the button contains the specified text
    expect(button).toHaveTextContent("Custom Content");
  });

  // Add more test cases as needed
});
