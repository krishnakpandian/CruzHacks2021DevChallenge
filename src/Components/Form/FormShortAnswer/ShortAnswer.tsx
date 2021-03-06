import React from 'react';
import './ShortAnswer.scss';

interface props {
    register: any,
    watchGender: any,
    watchUniversity: any,
    watcher: any
}
// Renders all the Short Responses and sets the form data
const ShortAnswer:React.FC<props> = ({register, watchGender, watchUniversity, watcher}: props) => {
    console.log(watcher);
    return(
        <>
            <div className="short-response-container">
                <div className="row">
                    <div className="field">
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" maxLength={25} id="firstName" name="firstName" ref={register({required: true})}/>
                        <div className="the-count">
                            <span className="maximum">{watcher.firstName ? watcher.firstName.length: 0}/ 25</span>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" maxLength={25} id="lastName" name="lastName" ref={register({required: true})}/>
                        <div className="the-count">
                            <span className="maximum">{watcher.lastName ? watcher.lastName.length: 0}/ 25</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="email">Email *</label>
                        <input type="email" maxLength={50} id="email" name="email" ref={register({required: true})}/>
                        <div className="the-count">
                            <span className="maximum">{watcher.email ? watcher.email.length: 0}/ 50</span>
                        </div>
                    </div>
                    <div className="field-radio">
                    <label htmlFor="genderChoice">Gender *</label>
                    <div className="radio">
                        <div className="radio-aligned">
                            <input type="radio" name="genderChoice" value={'Male'} ref={register({required: true})} /> Male
                            <input type="radio" name="genderChoice" value={'Female'} ref={register({required: true})} /> Female
                            <input type="radio" name="genderChoice" value={'Trans'} ref={register({required: true})} /> Trans
                            <input type="radio" name="genderChoice" value={'Non-Binary'} ref={register({required: true})} /> Non-Binary
                            <input type="radio" name="genderChoice" value={'Other'} ref={register({required: true})} /> Other
                        </div>
                        {watchGender === 'Other' && ( <> <div> <input type="text" maxLength={25} name="gender" ref={register({ required: true })} /> 
                        <div className="the-count">
                            <span className="maximum">{watcher.gender ? watcher.gender.length: 0}/ 25</span>
                        </div>
                        </div></>)}
                    </div>
                    
                    </div>
                </div>

                <div className="row">
                    <div className="field">
                        <label htmlFor="age">Age *</label>
                        <input type="number" id="age" name="age" ref={register({ required: true, min: 13, max: 100 })}/>
                    </div>
                    <div className="field">
                        <label htmlFor="major">Field of Study * </label>
                        <input type="text" maxLength={50} id="major" name="major" ref={register({required: true})}/>
                        <div className="the-count">
                            <span className="maximum">{watcher.major ? watcher.major.length: 0}/ 50</span>
                        </div>
                    </div>
                    <div className="field-radio">
                        <label htmlFor="isUCSC">UCSC Student *</label>
                        <div className="radio">
                            <div className="radio-aligned">
                                <input type="radio" name="isUCSC" value={'true'} ref={register({required: true})} /> True
                                <input type="radio" name="isUCSC" value={'false'} ref={register({required: true})} /> False
                            </div>
                            {watchUniversity === 'false' && (
                        <>
                        <div>
                            <input type="text" maxLength={50} id="school" name="school" ref={register({ required: true})} />
                            <div className="the-count">
                                <span className="maximum">{watcher.school ? watcher.school.length: 0}/ 50</span>
                            </div>
                        </div>
                        </>
                        )}
                        </div>
  
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShortAnswer;