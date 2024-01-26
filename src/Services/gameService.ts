import { API_BASE_URL } from "config";
import { IGame } from "Page/Games/@types";
export const getGames = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/games`, { method: "GET" });
    const data: IGame[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
