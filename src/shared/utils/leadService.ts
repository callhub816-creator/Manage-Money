/**
 * Lead Service Utility
 * Handles lead submission to Google Sheets via Google Apps Script Web App.
 */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxu4gszG-M_DFXLfw6DS6kQHzg9gtGCpP2f2Yn77h6HRaHylbJDmMyev_2-dafNmwuX/exec';

export interface LeadData {
    name: string;
    mobile: string;
    loanType: string;
    incomeRange: string;
    city: string;
    sourcePage: string;
}

/**
 * Submits lead data to Google Sheets.
 */
export const submitLead = async (data: LeadData): Promise<boolean> => {
    try {
        // Strict Validation check before sending
        if (!data.name || data.name.trim().length < 2) return false;
        if (!/^\d{10}$/.test(data.mobile)) return false;

        // Using no-cors as required for many GAS deployments, but sending JSON
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return true;
    } catch (error) {
        console.error('Lead submission failed:', error);
        return false;
    }
};
