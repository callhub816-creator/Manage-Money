// Service to handle lead submissions to Google Sheets
// REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_XXXXXXXX_REPLACE_WITH_YOUR_URL_XXXXXXXX/exec';

export const submitLead = async (data) => {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // "no-cors" is required for Google Apps Script simple triggers
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // With no-cors, we can't read the response, but it generally succeeds if no network error
        return { success: true };
    } catch (error) {
        console.error("Error submitting lead:", error);
        return { success: false, error };
    }
};
