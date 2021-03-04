import React from 'react';
import './Submitted.scss';
import {hacker} from '../../../Props/Props';

const Submitted:React.FC<hacker> = (response: hacker) => {
    return(
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


export default Submitted;