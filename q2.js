// Function to check if a string matches a regex pattern
function regexMatch(pattern, str) {
    // Create a RegExp object from the pattern
    let regex = new RegExp(pattern);
    
    // Test if the string matches the pattern
    return regex.test(str);
}

// Test cases
console.log(regexMatch('hello', 'hello world'));  // true
console.log(regexMatch('world$', 'hello world')); // true
console.log(regexMatch('^hello', 'hello world')); // true
console.log(regexMatch('\\d+', '123abc'));        // true
console.log(regexMatch('[a-z]', '123abc'));       // true
console.log(regexMatch('[^a-z]', '123abc'));      // true
console.log(regexMatch('^\\d+$', '123abc'));      // false
console.log(regexMatch('goodbye', 'hello world'));// false
