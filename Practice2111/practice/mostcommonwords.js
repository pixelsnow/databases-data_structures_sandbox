/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */

mostCommonWords("The map, maps keys to values; Keys can be anything.", 1); // ['keys']
mostCommonWords("Look at it! What is it? It does look like my code from 1 year ago",2); // ['it', 'look']
mostCommonWords("a; a,b, a's c A!; b,B, c.", 4); // ['a', 'b', 'c', 's']
