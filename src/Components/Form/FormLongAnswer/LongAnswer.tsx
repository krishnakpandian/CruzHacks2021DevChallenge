import React from 'react';
import './LongAnswer.scss';
interface props {
    register: any,
    watcher: any
}

// Renders Longer prompts 
const LongAnswer: React.FC<props> = ({ register, watcher }: props) => {
    return (
        <>
            <div className="long-response-container">
                <div className="field">
                    <label htmlFor="whyCruzHacks">Why Do You Want To Attend CruzHacks? *</label>
                    <div>
                        <textarea id="whyCruzHacks" maxLength={500} name="whyCruzHacks" ref={register({ required: true })} />
                        <div className="the-count">
                            <span className="maximum">{watcher.whyCruzHacks ? watcher.whyCruzHacks.length : 0}/ 500</span>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="anythingElse">Anything Else We Need To Know?</label>
                    <div >
                        <textarea id="anythingElse" maxLength={500} name="anythingElse" ref={register} />
                        <div className="the-count">
                            <span className="maximum">{watcher.anythingElse ? watcher.anythingElse.length : 0}/ 500</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default LongAnswer;