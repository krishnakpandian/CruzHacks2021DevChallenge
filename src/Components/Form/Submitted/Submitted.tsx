import React from 'react';
import './Submitted.scss';
import { hacker } from '../../../Props/Props';

// The submissions are listed here
const Submitted: React.FC<hacker> = (response: hacker) => {
    return (
        <>
            <div className="form-results">
                <div className="form-results-responses">Here are your Responses</div>
                <div className="form-field"> Name: </div>
                <div className="form-field-response">{response.firstName} {response.lastName}</div>
                <div className="form-field"> Age: </div>
                <div className="form-field-response">{response.age}</div>
                <div className="form-field"> Email: </div>
                <div className="form-field-response">{response.email}</div>
                <div className="form-field"> Gender: </div>
                <div className="form-field-response">{response.gender}</div>
                <div className="form-field"> Major: </div>
                <div className="form-field-response">{response.major}</div>
                <div className="form-field"> School: </div>
                <div className="form-field-response">{response.school}</div>
                <div className="form-field"> Why CruzHacks: </div>
                <div className="form-field-response">{response.whyCruzHacks}</div>
                <div className="form-field"> Anything Else: </div>
                <div className="form-field-response">{response.anythingElse}</div>
            </div>
        </>
    );
}


// Unused function but this exists as a more efficient way to iterate through every method
// Scrapped since it would be some field names look awkward and I didn't want to add another argument to this method
// This could be refactored to include the name of the field Name so it could be used
interface props {
    response: hacker,
    field: string
}

const SubmittedField = ({ response, field }: props) => {
    function isObjKey<T>(key: any, obj: T): key is keyof T {
        return key in obj;
    }
    return (
        <>
            <div className="form-field"> {field} </div>
            <div className="form-field-response">{isObjKey(field, response) && response[field]}</div>
        </>
    )
}

export default Submitted;