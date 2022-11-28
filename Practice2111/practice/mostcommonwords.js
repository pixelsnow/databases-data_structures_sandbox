/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */

const mostCommonWords = (text, numberOfResults) => {
  const wordArray = text.toLowerCase().split(/\W+/);
  const wordCounts = [];
  //console.log(wordArray);
  for (let i = 0; i < wordArray.length; i++) {
    if (!wordArray[i]) continue;
    let count = 1;
    for (let j = i + 1; j > wordArray.length; j++) {
      if (wordArray[i] === wordArray[j]) {
        count++;
        words[j] = null;
      }
    }
    wordCounts.push(wordArray[i], count);
  }
  return wordCounts.sort((a, b) => b[1] - a[1]).slice(0, numberOfResults);
  //.map((w) => w[0]);
};
// ['keys']
console.log(
  mostCommonWords("The map, maps   keys to values; Keys can be anything.", 1)
);
// ['it', 'look']
console.log(
  mostCommonWords(
    "Look at it! What is it? It does look like my code from 1 year ago",
    2
  )
);
// ['a', 'b', 'c', 's']
console.log(mostCommonWords("a; a,b, a's c A!; b,B, c.", 4));

// regex \W+ google - O(n) already
