const API_BASE_URL = "http://localhost:3001";

export const getGames = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/games`, { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();
    console.log('%cgameService.ts line:12 data', 'color: #007acc;', data,response);
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

