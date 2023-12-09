import axios from "axios";

export async function postData(url = "", data = {}): Promise<any> {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error); // handle errors here
    throw new Error("Failed to post data.");
  }
}
