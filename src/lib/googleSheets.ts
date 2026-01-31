/**
 * Submits form data to a Google Sheet via a Google Apps Script Web App.
 *
 * @param sheetName - The name of the sheet (tab) to write to.
 * @param data - The form data object.
 * @returns Promise<void>
 */
export const submitToGoogleSheet = async (
  sheetName: string,
  data: Record<string, any>,
) => {
  // You will need to add VITE_GOOGLE_SCRIPT_URL to your .env file
  // Example: VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/deployment_id/exec
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!GOOGLE_SCRIPT_URL) {
    console.error(
      "VITE_GOOGLE_SCRIPT_URL is not defined in your environment variables.",
    );
    // Fallback for development/demo if needed, or throw error
    alert("Google Sheet Script URL is missing. Please check console.");
    return;
  }

  try {
    // We use a specific structure that the Google Apps Script will expect
    const payload = {
      sheetName,
      ...data,
      submittedAt: new Date().toISOString(),
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log(`Successfully submitted to sheet: ${sheetName}`);
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    throw error;
  }
};

/**
 * Fetches data from a Google Sheet via a Google Apps Script Web App.
 * Requires the script to handle doGet requests.
 *
 * @param sheetName - The name of the sheet (tab) to read from.
 * @returns Promise<any[]>
 */
export const fetchFromGoogleSheet = async (sheetName: string) => {
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!GOOGLE_SCRIPT_URL) {
    console.error(
      "VITE_GOOGLE_SCRIPT_URL is not defined in your environment variables.",
    );
    return [];
  }

  try {
    const url = `${GOOGLE_SCRIPT_URL}?sheetName=${encodeURIComponent(sheetName)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await response.json();

    if (json.result === "success") {
      return json.data;
    } else {
      console.error(
        "Error from Google Sheet Script:",
        json.error || json.message,
      );
      return [];
    }
  } catch (error) {
    console.error("Error fetching from Google Sheet:", error);
    return [];
  }
};
