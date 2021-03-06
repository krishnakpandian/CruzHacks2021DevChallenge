import { hackerResults, hackerData, newHacker } from '../Props/Props';
import { hacker } from '../Props/Props';
const proxyurl = ""


// Makes a request to the backend to retrieve all the hacker information
// Returns a promise to a HackerResults Object
export async function getHackers(): Promise<hackerResults> {
    var response: hackerResults = {
        results: [],
        statusCode: 400,
        message: "Failed to Fetch"
    };
    await fetch(proxyurl + process.env.REACT_APP_BACKEND + '/api/getHackers', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    }).then(res => res.json()).then(data => {
        console.log(data);
        response.results = data['results'].map((obj: hackerData) => ({ ...obj }));
        response.statusCode = data['statusCode'];
        response.message = data['message'];
        response.count = data['count'] ? data['count'] : 0
    }).catch(error => {
        console.error("Error getting requests: ", error);
        return response;
    });
    return response;
}

// Takes in a hackerObj and makes a request to the backend to create a new Hacker
// Returns a promise as the response
export async function createHacker(hackerObj: hacker): Promise<newHacker> {
    var response: newHacker = {
        id: '',
        statusCode: 400,
        message: "Failed to Fetch"
    };
    await fetch(proxyurl + process.env.REACT_APP_BACKEND + '/api/createHacker', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(hackerObj)
    }).then(res => res.json()).then(data => {
        console.log(data);
        response.id = data['id'];
        response.statusCode = data['statusCode'];
        response.message = data['message'];
    }).catch(error => {
        console.error("Error getting requests: ", error);
        return response;
    });
    return response;
}