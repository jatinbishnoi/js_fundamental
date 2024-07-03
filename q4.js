// Function to check for a match and extract groups
function extractGroups(pattern, str) {
    let regex = new RegExp(pattern);
    let match = str.match(regex);
    
    if (match) {
        return match.groups;
    } else {
        return null;
    }
}

// Test cases
const testString1 = "The event is on 2023-07-03.";
const datePattern1 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

console.log('Test Case 1:', extractGroups(datePattern1, testString1));
// Output: { year: '2023', month: '07', day: '03' }

const testString2 = "The deadline is 31/12/2024.";
const datePattern2 = /(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/;

console.log('Test Case 2:', extractGroups(datePattern2, testString2));
// Output: { day: '31', month: '12', year: '2024' }

const testString3 = "The start date is 03-07-2025.";
const datePattern3 = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;

console.log('Test Case 3:', extractGroups(datePattern3, testString3));
// Output: { day: '03', month: '07', year: '2025' }
