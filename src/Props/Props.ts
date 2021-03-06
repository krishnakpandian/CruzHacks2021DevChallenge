// This is the props that the hackers use
export interface hacker {
    firstName: string,
    lastName: string,
    age: number,
    school: string,
    gender: string,
    major: string,
    email: string,
    whyCruzHacks: string,
    anythingElse: string
}

// This data is the json response with id
export interface hackerData {
    id: string,
    data: hacker
}

// This is the results from a /getHackers
export interface hackerResults {
    results: hackerData[],
    statusCode: number,
    message: string,
    count?: number
}

// This is the response from creating a new Hacker /createHacker
export interface newHacker {
    id?: string,
    statusCode: number,
    message: string
}
