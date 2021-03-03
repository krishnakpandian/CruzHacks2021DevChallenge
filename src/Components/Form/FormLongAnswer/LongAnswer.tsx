import React from 'react';

interface props {
    register: any,
}

const LongAnswer:React.FC<props> = ({register}: props) => {
    return(
        <>
            <div className ="long-response-container">
                <div className="field">
                    <label htmlFor="whyCruzHacks">Why CruzHacks</label>
                    <textarea id="whyCruzHacks" name="whyCruzHacks" ref={register({required: true})}/>
                </div>
                <div className="field">
                    <label htmlFor="anythingElse">Anything Else</label>
                    <textarea id="anythingElse" name="anythingElse" ref={register({maxLength: 500})}/>
                </div>
            </div>
        </>
    );
}


export default LongAnswer;