import React from 'react';
import './LongAnswer.scss';
interface props {
    register: any,
}

const LongAnswer:React.FC<props> = ({register}: props) => {
    return(
        <>
            <div className ="long-response-container">
                <div className="field">
                    <label htmlFor="whyCruzHacks">Why CruzHacks *</label>
                    <textarea id="whyCruzHacks" maxLength={500} name="whyCruzHacks" ref={register({required: true})}/>
                </div>
                <div className="field">
                    <label htmlFor="anythingElse">Anything Else</label>
                    <textarea id="anythingElse" maxLength={500} name="anythingElse" ref={register}/>
                </div>
            </div>
        </>
    );
}


export default LongAnswer;