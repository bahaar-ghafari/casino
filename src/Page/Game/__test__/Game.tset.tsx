import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import Game from "../Game";

describe("GameComponent", () => {
  test("renders GameComponent with Back button and iframe", () => {
    // Mock useGamesStore to return selectedGame
    jest.mock("stores/gamesStore", () => ({
      __esModule: true,
      useGamesStore: jest.fn().mockReturnValue({
        selectedGame: "someGame",
        setSelectedGame: jest.fn(),
      }),
    }));

    // Render GameComponent with SWRConfig and BrowserRouter
    render(
      <SWRConfig
        value={{ refreshInterval: 10 * 60 * 1000, revalidateOnFocus: false }}
      >
        <BrowserRouter>
          <MemoryRouter initialEntries={["/game/someGame"]}>
            <Route path="/game/:gameName" element={<Game />} />
          </MemoryRouter>
        </BrowserRouter>
      </SWRConfig>
    );

    // Check if Back button is rendered
    const backButton = screen.getByText("Back");
    expect(backButton).toBeInTheDocument();

    // Check if iframe is rendered
    const iframeElement = screen.getByTestId("GameFrame");
    expect(iframeElement).toBeInTheDocument();

    // Example: Check if some specific content is present in iframe
    expect(screen.getByText("Some specific content")).toBeInTheDocument();

    // Example: Simulate a click on the Back button
    fireEvent.click(backButton);

    // Example: Check if navigation happened
    expect(window.location.pathname).toBe("/");
  });
});
