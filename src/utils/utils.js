export function validateURL(url) {
  if (url) {
    const parsed = new URL(url);
    return ["https:", "http:"].includes(parsed.protocol);
  }
  return url;
}

export const getPages = (totalResults, resultsPerPage) => {
  if (totalResults <= resultsPerPage) {
    return 1;
  }
  return Math.ceil(totalResults / resultsPerPage);
};
