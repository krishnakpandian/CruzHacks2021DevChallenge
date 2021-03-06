import React from 'react';
import './LongAnswer.scss';
import formLength from '../../../Props/formSchema.json';

interface props {
    register: any,
    watcher: any,
    errors: any
}

// Renders Longer prompts 
const LongAnswer: React.FC<props> = ({ register, watcher, errors }: props) => {
    return (
        <>
            <div className="long-response-container">
                <div className="field">
                    <label htmlFor="whyCruzHacks">Why Do You Want To Attend CruzHacks? *</label>
                    <span className= "error">{errors.whyCruzHacks && <>{errors.whyCruzHacks.message}</>}</span>
                    <div>
                        <textarea id="whyCruzHacks" maxLength={formLength['whyCruzHacks']} name="whyCruzHacks" ref={register({ required: 'Input your Response' })} />
                        <div className="the-count">
                            <span className="maximum">{watcher.whyCruzHacks ? watcher.whyCruzHacks.length : 0} / {formLength['whyCruzHacks']}</span>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="anythingElse">Anything Else We Need To Know?</label>
                    <div >
                        <textarea id="anythingElse" maxLength={formLength['anythingElse']} name="anythingElse" ref={register} />
                        <div className="the-count">
                            <span className="maximum">{watcher.anythingElse ? watcher.anythingElse.length : 0} / {formLength['anythingElse']}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default LongAnswer;