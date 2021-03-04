import { hacker } from "../../Props/Props";

function isAlphaNumeric(data:string) {
    const alphaNumeric = '^[a-zA-Z0-9 .\'?!,-]*$';
    return data.match(alphaNumeric);
}

// Checks for Number
function isNumeric(data:any) {
    return isNaN(data);
}

// Returns error message is hacker object is invalid
async function validateHackerData(hackerObj:hacker) {
    if (!hackerObj.firstName || !isAlphaNumeric(hackerObj.firstName) || hackerObj.firstName.length > 50) {
        return "Invalid First Name Inputted";
    }
    if (!hackerObj.lastName || !isAlphaNumeric(hackerObj.lastName) || hackerObj.lastName.length > 50) {
        return "Invalid Last Name Inputted";
    }
    if (isNumeric(hackerObj.age) || hackerObj.age > 100 || hackerObj.age < 13) {
        return "Invalid Age Inputted";
    }
    if (!hackerObj.school || !isAlphaNumeric(hackerObj.school) || hackerObj.school.length > 100) {
        return "Invalid School Inputted";
    }
    if (!hackerObj.gender || !isAlphaNumeric(hackerObj.gender) || hackerObj.gender.length > 50) {
        return "Invalid Gender Inputted";
    }
    if (!hackerObj.major || !isAlphaNumeric(hackerObj.major) || hackerObj.major.length > 50) {
        return "Invalid Major Inputted";
    }
    if (!hackerObj.whyCruzHacks || !isAlphaNumeric(hackerObj.whyCruzHacks) || hackerObj.whyCruzHacks.length > 500) {
        return "Invalid Why CruzHacks Response";
    }
    if (!isAlphaNumeric(hackerObj.anythingElse) || (hackerObj.anythingElse && hackerObj.anythingElse.length > 500)) {
        return "Invalid Any Else CruzHacks Response";
    }
    return null;
}
export default validateHackerData;