import React from 'react';

interface props {
    register: any,
    watchGender: any,
    watchUniversity: any
}

const ShortAnswer:React.FC<props> = ({register, watchGender, watchUniversity}: props) => {
    return(
        <>
            <div className="short-response-container">
               <div className="field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" ref={register({required: true})}/>
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" ref={register({required: true})}/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" ref={register({required: true})}/>
                </div>
                <div className="field">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" ref={register({required: true})}/>
                </div>
                <div className="field-radio">
                    <label htmlFor="genderChoice">Gender</label>
                    <div className="radio">
                        <input type="radio" name="genderChoice" value={'male'} ref={register} /> Male
                        <input type="radio" name="genderChoice" value={'female'} ref={register} /> Female
                        <input type="radio" name="genderChoice" value={'trans'} ref={register} /> Trans
                        <input type="radio" name="genderChoice" value={'non-binary'} ref={register} /> Non-Binary
                        <input type="radio" name="genderChoice" value={'other'} ref={register} /> Other
                    </div>
                    {watchGender === 'other' && ( <> <input type="text" name="gender" ref={register({ required: true })} /> </>)}
                </div>


                <div className="field-radio">
                    <label htmlFor="isUCSC">UCSC Student</label>
                    <input type="radio" name="isUCSC" value={'UC Santa Cruz'} ref={register} /> True
                    <input type="radio" name="isUCSC" value={'false'} ref={register} /> False
                    {watchUniversity === 'false' && (
                    <>
                        <input type="text" name="university" onChange= {() => {console.log(watchUniversity)}}ref={register({ required: true })} />
                    </>
                    )}
                </div>


                <div className="field">
                    <label htmlFor="major">Field of Study</label>
                    <input type="text" id="major" name="major" ref={register({required: true})}/>
                </div>
            </div>
        </>
    );
}

export default ShortAnswer;