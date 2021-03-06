import { hacker } from "../../Props/Props";
import formLength from '../../Props/formSchema.json';


function isAlphaNumeric(data: string) {
    const alphaNumeric = '^[a-zA-Z0-9 .\'?!,-]*$';
    return data.match(alphaNumeric);
}

// Checks for Number
function isNumeric(data: any) {
    return isNaN(data);
}


// Returns error message is hacker object is invalid
async function validateHackerData(hackerObj: hacker) {
    if (!hackerObj.firstName || !isAlphaNumeric(hackerObj.firstName) || hackerObj.firstName.length > formLength['firstName']) {
        return "First Name must be less than 25 Alphanumeric chararcters";
    }
    if (!hackerObj.lastName || !isAlphaNumeric(hackerObj.lastName) || hackerObj.lastName.length > formLength['lastName']) {
        return "Last Name must be less than 25 Alphanumeric characters";
    }
    if (isNumeric(hackerObj.age) || hackerObj.age > 100 || hackerObj.age < 13) {
        return "Invalid Age Inputted";
    }
    if (hackerObj.email === '' || hackerObj.email.length > formLength['email']) {
        return "Email must be valid and less than 50 characters";
    }
    if (!hackerObj.school || !isAlphaNumeric(hackerObj.school) || hackerObj.school.length > formLength['school']) {
        return "School must be less than 50 Alphanumeric characters";
    }
    if (!hackerObj.gender || !isAlphaNumeric(hackerObj.gender) || hackerObj.gender.length > formLength['gender']) {
        return "Gender must be less than 25 Alphanumeric characters";
    }
    if (!hackerObj.major || !isAlphaNumeric(hackerObj.major) || hackerObj.major.length > formLength['major']) {
        return "Major must be less than 50 Alphanumeric characters";
    }
    if (!hackerObj.whyCruzHacks || !isAlphaNumeric(hackerObj.whyCruzHacks) || hackerObj.whyCruzHacks.length > formLength['whyCruzHacks']) {
        return "Responses Should be less than 500 Alphanumeric Characters";
    }
    if (!isAlphaNumeric(hackerObj.anythingElse) || (hackerObj.anythingElse && hackerObj.anythingElse.length > formLength['anythingElse'])) {
        return "Invalid Any Else CruzHacks Response";
    }
    return null;
}
export default validateHackerData;