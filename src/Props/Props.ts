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

export interface hackerData {
    id: string,
    data: hacker
}

export interface hackerResults {
    results: hackerData[],
    statusCode: number,
    message: string,
    count?: number
}

export interface newHacker {
    id?: string,
    statusCode: number,
    message: string
}

export interface hackerForm {
    shortAnswer: shortAnswer;
    longAnswer: longAnswer;
};

export interface shortAnswer {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    genderChoice: string;
    gender: string;
    isUCSC: string;
    school: string;
    major: string;
}

export interface longAnswer {
    whyCruzHacks: string;
    anythingElse: string;
}