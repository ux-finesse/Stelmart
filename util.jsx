// src/utils.js

/**
 * Constructs the full image URL from the given image path.
 * @param {string} imagePath - The image path from the endpoint.
 * @returns {string} - The full image URL.
 */
export const getFullImageUrl = (imagePath) => {
  const baseUrl = "https://api.timbu.cloud/images/";
  return `${baseUrl}${imagePath}`;
};
