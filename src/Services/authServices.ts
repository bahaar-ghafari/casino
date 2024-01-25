import { API_BASE_URL } from "config";

export const logIn = async (username: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) {
      //TODO
      console.error("Failed to login");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

export const logOut = async (username: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
