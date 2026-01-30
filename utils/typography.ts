/**
 * Typography utilities for Tier-1 publication standards
 */

/**
 * Converts straight quotes to smart (curly) quotes
 * Transforms dumb quotes into typographically correct smart quotes
 * 
 * @param text - The text to format
 * @returns Text with smart quotes
 */
export const formatSmartQuotes = (text: string): string => {
  let result = text;
  
  // Opening double quotes (after space, dash, or start of line)
  result = result.replace(/(^|[\s\-—([])"/, '$1\u201C');
  result = result.replace(/(\s)"(\w)/, '$1\u201C$2');
  
  // Closing double quotes
  result = result.replace(/"/g, '\u201D');
  
  // Opening single quotes
  result = result.replace(/(^|[\s\-—([])'/, '$1\u2018');
  result = result.replace(/(\s)'(\w)/, '$1\u2018$2');
  
  // Closing single quotes & apostrophes
  result = result.replace(/'/g, '\u2019');
  
  // Em dashes
  result = result.replace(/---/g, '\u2014');
  result = result.replace(/--/g, '\u2014');
  
  // En dashes (for ranges)
  result = result.replace(/(\d+)-(\d+)/g, '$1\u2013$2');
  
  // Ellipsis
  result = result.replace(/\.\.\./g, '\u2026');
  
  return result;
};

/**
 * Calculates estimated reading time
 * 
 * @param text - The text content
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time string (e.g., "5 min read")
 */
export const calculateReadTime = (text: string, wordsPerMinute: number = 200): string => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};
