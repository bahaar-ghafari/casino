import { API_BASE_URL } from "config";
import { loginRes } from "./@types";

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
      throw new Error("Failed to login");
    }

    const data = await response;
    console.log("%cauthServices.ts line:28 data", "color: #007acc;", data);
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
    const res = response as unknown  as loginRes;

    const data = await res.status ;
    if(data === 'success') return true
    return false;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
