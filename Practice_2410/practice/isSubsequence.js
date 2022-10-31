//Write a function called isSubSequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
//In the other words, the function should check whether
//the characters in the first string appear somewhere in the second string, without their order changing.


// Time complexity - O(n + m)
// Space complexity - O(1)


isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting'); //true
isSubsequence('abc', 'abracadabra') //true
