import React from 'react';
import './ShortAnswer.scss';
import formLength from '../../../Props/formSchema.json';

interface props {
    register: any,
    watchGender: any,
    watchUniversity: any,
    watcher: any,
    errors: any
}
// Renders all the Short Responses and sets the form data
const ShortAnswer: React.FC<props> = ({ register, watchGender, watchUniversity, watcher, errors }: props) => {
    console.log(errors.age)
    return (
        <>
            <div className="short-response-container">
                <div className="row">
                    <div className="field">
                        <label htmlFor="firstName">First Name *</label>
                        <span className="error">{errors.firstName && <>{errors.firstName.message}</>}</span>
                        <input type="text" maxLength={formLength['firstName']} id="firstName" name="firstName" ref={register({ required: 'Input a Valid First Name' })} />
                        <div className="the-count">
                            <span className="maximum">{watcher.firstName ? watcher.firstName.length : 0} / {formLength['firstName']}</span>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="lastName">Last Name *</label>
                        <span className="error">{errors.lastName && <>{errors.lastName.message}</>}</span>
                        <input type="text" maxLength={formLength['lastName']} id="lastName" name="lastName" ref={register({ required: 'Input a valid Last Name' })} />
                        <div className="the-count">
                            <span className="maximum">{watcher.lastName ? watcher.lastName.length : 0} / {formLength['lastName']}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="email">Email *</label>
                        <span className="error">{errors.email && <>{errors.email.message}</>}</span>
                        <input type="email" maxLength={formLength['email']} id="email" name="email" ref={register({ required: 'Input a Valid Email' })} />
                        <div className="the-count">
                            <span className="maximum">{watcher.email ? watcher.email.length : 0} / {formLength['email']}</span>
                        </div>
                    </div>
                    <div className="field-radio">
                        <label htmlFor="genderChoice">Gender *</label>
                        <span className="error">{errors.gender && <>{errors.gender.message}</>}</span>
                        <div className="radio">
                            <div className="radio-aligned">
                                <input type="radio" name="genderChoice" value={'Male'} ref={register({ required: true })} /> Male
                            <input type="radio" name="genderChoice" value={'Female'} ref={register({ required: true })} /> Female
                            <input type="radio" name="genderChoice" value={'Trans'} ref={register({ required: true })} /> Trans
                            <input type="radio" name="genderChoice" value={'Non-Binary'} ref={register({ required: true })} /> Non-Binary
                            <input type="radio" name="genderChoice" value={'Other'} ref={register({ required: true })} /> Other
                        </div>
                            {watchGender === 'Other' && (<> <div> <input type="text" maxLength={formLength['gender']} name="gender" ref={register({ required: 'Input your Gender' })} />
                                <div className="the-count">
                                    <span className="maximum">{watcher.gender ? watcher.gender.length : 0} / {formLength['gender']}</span>
                                </div>
                            </div></>)}
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="field">
                        <label htmlFor="age">Age *</label>
                        <span className="error">{errors.age && (errors.age.type === 'min') && <>{errors.age.message}</>}</span>
                        <input type="number" id="age" name="age" ref={register({ required: true, min: { value: 13, message: 'Must be greater than 13' }, max: { value: 100, message: 'Must be less than 100' } })} />
                    </div>
                    <div className="field">
                        <label htmlFor="major">Field of Study * </label>
                        <span className="error">{errors.major && <>{errors.major.message}</>}</span>
                        <input type="text" maxLength={formLength['major']} id="major" name="major" ref={register({ required: 'Input a Valid Major' })} />
                        <div className="the-count">
                            <span className="maximum">{watcher.major ? watcher.major.length : 0} / {formLength['major']}</span>
                        </div>
                    </div>
                    <div className="field-radio">
                        <label htmlFor="isUCSC">UCSC Student *</label>
                        <span className="error">{errors.school && <>{errors.school.message}</>}</span>
                        <div className="radio">
                            <div className="radio-aligned">
                                <input type="radio" name="isUCSC" value={'true'} ref={register({ required: true })} /> True
                                <input type="radio" name="isUCSC" value={'false'} ref={register({ required: true })} /> False
                            </div>
                            {watchUniversity === 'false' && (
                                <>
                                    <div>
                                        <input type="text" maxLength={formLength['school']} id="school" name="school" ref={register({ required: 'Input your School' })} />
                                        <div className="the-count">
                                            <span className="maximum">{watcher.school ? watcher.school.length : 0} / {formLength['school']}</span>
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