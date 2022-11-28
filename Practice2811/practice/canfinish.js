/**
 * Check if you can finish all courses with their prerequisites.
 * @param {number} n - The number of courses
 * @param {[number, number][]} prerequisites - Array of courses pairs.
 *  E.g. [[200, 101]], to take course 202 you need course 101 first.
 * @returns {boolean} - True = can finish all courses, False otherwise
 */
function canFinish(n, prerequisites) {
  // write your code here...
}



canFinish(2, [[1, 0]]); // true
// 2 courses: 0 and 1. One prerequisite: 0 -> 1
// To take course 1 you need to take course 0.
// Course 0 has no prerequisite, so you can take 0 and then 1.
canFinish(2, [[1, 0], [0, 1]]); // false
// 2 courses: 0 and 1. Two prerequisites: 0 -> 1 and 1 -> 0. // To take course 1, you need to take course 0.
// To Course 0, you need course 1, so you can't any take them!
canFinish(3, [[2, 0], [1, 0], [2, 1]]); // true
// 3 courses: 0, 1, 2. Three prerequisites: 0 -> 2 and 0 -> 1 -> 2
// To take course 2 you need course 0, course 0 has no prerequisite. // So you can take course 0 first, then course 1, and finally course 2.
canFinish(4, [[1, 0], [2, 1], [3, 2], [1, 3]]); // false
// 4 courses: 0, 1, 2, 3. Prerequisites: 0 -> 1 -> 2 -> 3 and 3 -> 1. // You can take course 0 first since it has no prerequisite.
// For taking course 1, you need course 3. However, for taking course 3 // you need 2 and 1. You can't finish then!
