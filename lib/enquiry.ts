export const ENQUIRY_TYPES = ["Quote", "Audit", "Consulting", "Training", "Transfer", "Other"] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

/**
 * Opens the floating dock's enquiry form from any button.
 * openEnquiry("Other", "Please send details of your SS 680 certified consultants.");
 */
export function openEnquiry(type: EnquiryType = "Quote", message = "") {
  window.dispatchEvent(new CustomEvent("icfc:open-enquiry", { detail: { type, message } }));
}
