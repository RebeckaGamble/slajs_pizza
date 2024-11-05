const apiKey: string | undefined = import.meta.env.VITE_API_KEY;

export async function fetchMenu() {
  if (apiKey) {
    try {
      const response: Response = await fetch(
        "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-zocom": apiKey,
          },
        }
      );
      const result = await response.json();
      console.log("menu res: ", result)
      return result.items; // Return the fetched result
    } catch (error) {
      console.error("Fetch menu failed:", error); // Log or handle error
      return { error: "Fetch failed" }; // Optional fallback response
    }
  }
  return { error: "API key is missing" }; // Handles undefined apiKey case
}
