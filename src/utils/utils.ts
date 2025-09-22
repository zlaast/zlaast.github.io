/**
 *
 * @param date Enter Javascript date object
 * @returns Returns date of form 'MMMM, DD, YYYY'. For example "January 1, 1970".
 */
export function parseDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}