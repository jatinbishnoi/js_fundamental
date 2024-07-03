// Function to find matches for specific character classes in a string
function findCharacterClasses(pattern, str) {
    let regex = new RegExp(pattern, 'g'); // 'g' flag for global search
    return str.match(regex) || []; // Returns matches or an empty array if no matches are found
}

// Test cases
const testString = "Hello World! 12345 @#$%^&*()";

const digitsPattern = '\\d';
const uppercasePattern = '[A-Z]';
const lowercasePattern = '[a-z]';
const specialCharsPattern = '[^a-zA-Z0-9\\s]'; // Characters that are not letters, digits, or whitespace

console.log('Digits:', findCharacterClasses(digitsPattern, testString)); // ['1', '2', '3', '4', '5']
console.log('Uppercase Letters:', findCharacterClasses(uppercasePattern, testString)); // ['H', 'W']
console.log('Lowercase Letters:', findCharacterClasses(lowercasePattern, testString)); // ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
console.log('Special Characters:', findCharacterClasses(specialCharsPattern, testString)); // ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
