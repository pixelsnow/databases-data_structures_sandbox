/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */

const mostCommonWords = (test, numberOfResults) => {
  const wordArray = split(" ");
  console.log(wordArray);
};
// ['keys']
mostCommonWords("The map, maps keys to values; Keys can be anything.", 1);
// ['it', 'look']
mostCommonWords(
  "Look at it! What is it? It does look like my code from 1 year ago",
  2
);
// ['a', 'b', 'c', 's']
mostCommonWords("a; a,b, a's c A!; b,B, c.", 4);
