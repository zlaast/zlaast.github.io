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

/**
 * @param {String} tag Enter a single tag, such as 'h1' or 'pre'. Do not include the brackets.
 * @param {String} body Enter the body of your webpage (HTML)
 * @return Returns an array of with the content of the tags
 */
export function getTagContent(tag: string, body: string) {
  let tags: Object[] = [];
  let lastIndexOpening = 0;
  let lastIndexClosing = 0;
  const tagLength = tag.length;
  const tagOpening = `<${tag.toLowerCase()}>`;
  const tagClosing = `</${tag.toLowerCase()}>`;

  while (true) {
    lastIndexOpening = body.indexOf(tagOpening, lastIndexOpening);
    lastIndexClosing = body.indexOf(tagClosing, lastIndexClosing);

    if (lastIndexOpening == -1) {
      break;
    } else {
      let content = body.substring(
        lastIndexOpening + tagLength + 2,
        lastIndexClosing,
      );
      tags.push(content);

      lastIndexOpening += tagLength + 2;
      lastIndexClosing += tagLength + 3;
    }
  }

  return tags;
}
