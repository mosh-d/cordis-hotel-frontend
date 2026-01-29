/**
 * Utility function to parse dates from API error messages
 * Handles various date formats including:
 * - "January 30, 2026"
 * - "2026-01-30"
 * - "30/01/2026"
 */
export const extractDateFromErrorMessage = (errorMessage) => {
  if (!errorMessage || typeof errorMessage !== "string") {
    return null;
  }

  // Pattern 1: Month name format (e.g., "January 30, 2026")
  const monthPattern =
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/i;
  const monthMatch = errorMessage.match(monthPattern);

  if (monthMatch) {
    const [, month, day, year] = monthMatch;
    const monthNames = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    };
    const monthIndex = monthNames[month.toLowerCase()];
    const date = new Date(year, monthIndex, day);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Pattern 2: ISO format (e.g., "2026-01-30")
  const isoPattern = /(\d{4})-(\d{2})-(\d{2})/;
  const isoMatch = errorMessage.match(isoPattern);

  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    const date = new Date(year, parseInt(month) - 1, day);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Pattern 3: DD/MM/YYYY or MM/DD/YYYY format
  const slashPattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  const slashMatch = errorMessage.match(slashPattern);

  if (slashMatch) {
    const [, part1, part2, year] = slashMatch;
    // Try both interpretations (DD/MM and MM/DD)
    const date = new Date(year, parseInt(part1) - 1, part2);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }

  return null;
};

/**
 * Creates a user-friendly error message based on API error
 * @param {string} errorMessage - The raw API error message
 * @returns {object} - { message: string, earliestDate: string|null }
 */
export const parseApiError = (errorMessage) => {
  const earliestDate = extractDateFromErrorMessage(errorMessage);

  if (earliestDate) {
    return {
      message: `Unable to load room data. ${errorMessage}`,
      earliestDate: earliestDate,
      fullMessage: `Unable to load room data. ${errorMessage} Please select ${earliestDate} or a later date.`,
      hasDateConstraint: true,
    };
  }

  return {
    message: "Unable to load room data. Please try again later.",
    earliestDate: null,
    fullMessage: "Unable to load room data. Please try again later.",
    hasDateConstraint: false,
  };
};
