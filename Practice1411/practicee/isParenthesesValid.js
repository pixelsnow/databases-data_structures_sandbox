//Given a string with three types of brackets: (), {}, and [].
// Validate they are correctly closed and opened.

function isParenthesesValid(string) {

}


console.log(isParenthesesValid('(){}[]')); // true
isParenthesesValid('('); // false (closing parentheses is missing)
isParenthesesValid('([{}])'); // true
isParenthesesValid('[{]}'); // false (brackets are not closed in the right order)
console.log(isParenthesesValid('([{)}]')); // false (closing is out of order)
