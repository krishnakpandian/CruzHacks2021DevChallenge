import React from 'react';
import './ShortAnswer.scss';

interface props {
    register: any,
    watchGender: any,
    watchUniversity: any
}

const ShortAnswer:React.FC<props> = ({register, watchGender, watchUniversity,}: props) => {
    return(
        <>
            <div className="short-response-container">
                <div className="row">
                    <div className="field">
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" maxLength={50} id="firstName" name="firstName" ref={register({required: true})}/>
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" maxLength={50} id="lastName" name="lastName" ref={register({required: true})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="email">Email *</label>
                        <input type="email" maxLength={50} id="email" name="email" ref={register({required: true})}/>
                    </div>
                    <div className="field-radio">
                    <label htmlFor="genderChoice">Gender *</label>
                    <div className="radio">
                        <div className="radio-aligned">
                            <input type="radio" name="genderChoice" value={'male'} ref={register({required: true})} /> Male
                            <input type="radio" name="genderChoice" value={'female'} ref={register({required: true})} /> Female
                            <input type="radio" name="genderChoice" value={'trans'} ref={register({required: true})} /> Trans
                            <input type="radio" name="genderChoice" value={'non-binary'} ref={register({required: true})} /> Non-Binary
                            <input type="radio" name="genderChoice" value={'other'} ref={register({required: true})} /> Other
                        </div>
                        {watchGender === 'other' && ( <> <div> <input type="text" maxLength={50} name="gender" ref={register({ required: true })} /> </div></>)}
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
                            <input type="text" maxLength={100} id="school" name="school" ref={register({ required: true})} />
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