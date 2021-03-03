import React, {useState} from 'react';
import ShortAnswer from './FormShortAnswer/ShortAnswer';
import LongAnswer from './FormLongAnswer/LongAnswer';
import Submitted from './Submitted/Submitted';
import './Form.scss'
import {useForm} from 'react-hook-form';
import {shortAnswer, longAnswer, hacker} from '../../Props/Props';
import {createHacker} from '../../Request/Request';

interface hackerForm extends hacker {
    genderChoice: string,
    isUCSC: string
}

const initialHackerState: hackerForm = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    genderChoice: '',
    gender: '',
    isUCSC: '',
    school: '',
    major: '',
    whyCruzHacks: '',
    anythingElse: ''
}



const Form:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const { register, watch,errors, handleSubmit } = useForm<hackerForm>();
    const watchGender = watch("genderChoice");
    const watchUniversity = watch("isUCSC");
    const data = watch();
    const createHackerObj = (data: hackerForm) => {
        var hackerObj: hacker = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            age: data.age,
            school: data.isUCSC === 'UC Santa Cruz' ? 'UC Santa Cruz': data.school,
            major: data.major,
            gender: data.genderChoice === 'other' ? data.gender: data.genderChoice,
            whyCruzHacks: data.whyCruzHacks,
            anythingElse: data.anythingElse
        }
        return hackerObj;
    }
    const onSubmit = (data: any) => {
        console.log("data", data);
        const hacker = createHackerObj(data);
        createHacker(hacker).then(res => console.log(res));        
    };

    return(
        <>
            <div className="form-container">
                <div className="form-title">Apply to CruzHacks!</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                {!submitted && 
                <>
                    <ShortAnswer {...{register, watchGender, watchUniversity}}/>
                    <LongAnswer {...{register}} />
                </>
                }
                {submitted && <Submitted/> }
                <button className="submit" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Form;