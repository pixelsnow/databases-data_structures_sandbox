//Given a string with three types of brackets: (), {}, and [].
// Validate they are correctly closed and opened.

function isParenthesesValid(string) {
    if (!string.length)
        return true;
    if (string.length === 1)
        return false;
    if 
}


console.log(isParenthesesValid('(){}[]')); // true
isParenthesesValid('('); // false (closing parentheses is missing)
isParenthesesValid('([{}])'); // true
isParenthesesValid('[{]}'); // false (brackets are not closed in the right order)
console.log(isParenthesesValid('([{)}]')); // false (closing is out of order)
