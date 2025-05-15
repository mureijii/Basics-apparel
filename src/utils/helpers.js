/**
 * Format price in KSH
 * @param {number} price - Price in KSH
 * @returns {string} Formatted price
 */
export const formatPrice = (price) => {
  return `KSh ${price.toLocaleString()}`;
};

/**
 * Generate a range of numbers
 * @param {number} start - Start of range
 * @param {number} end - End of range
 * @returns {Array} Array of numbers
 */
export const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

/**
 * Capitalize first letter of a string
 * @param {string} string - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Format category name for display
 * @param {string} category - Category slug
 * @returns {string} Formatted category name
 */
export const formatCategory = (category) => {
  if (!category) return '';
  return category.split('-').map(capitalize).join(' ');
};