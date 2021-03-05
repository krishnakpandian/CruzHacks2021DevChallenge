import React, {useState, useEffect} from 'react';
import ShortAnswer from './FormShortAnswer/ShortAnswer';
import LongAnswer from './FormLongAnswer/LongAnswer';
import Submitted from './Submitted/Submitted';
import './Form.scss'
import {useForm} from 'react-hook-form';
import {hacker} from '../../Props/Props';
import {createHacker} from '../../Request/Request';
import validateHackerData from './validation';

interface hackerForm extends hacker {
    genderChoice: string,
    isUCSC: string
}

const initialHacker: hacker = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    school: '',
    major: '',
    gender: '',
    whyCruzHacks: '',
    anythingElse: ''
}

const Form:React.FC = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);
    const [hackerResponse, setHackerResponse] = useState<hacker>(initialHacker);
    const [error, setError] = useState<string>('');
    const { register, watch, handleSubmit } = useForm<hackerForm>();
    const watchGender = watch("genderChoice");
    const watchUniversity = watch("isUCSC");
    const watcher = watch();
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [error])

    // Cretates a HackerObj
    const createHackerObj = (data: hackerForm) => {
        var hackerObj: hacker = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            age: data.age,
            school: data.isUCSC === 'true' ? 'UC Santa Cruz': data.school,
            major: data.major,
            gender: data.genderChoice === 'other' ? data.gender: data.genderChoice,
            whyCruzHacks: data.whyCruzHacks,
            anythingElse: data.anythingElse
        }
        return hackerObj;
    }

    // Handles Submission and Validation
    const onSubmit = async (data: any) => {
        setloading(true);
        console.log("data", data);
        const hackerObj = createHackerObj(data);
        setHackerResponse(hackerObj);
        const res = await validateHackerData(hackerObj);
        console.log(res);
        if (res === null) {
            createHacker(hackerObj).then((res) => {
                if (res.statusCode === 201) {
                    setSubmitted(true);
                    setError('');
                }
                else {
                    setError(res.message);
                }
            }); 
        }     
        else {
            setError(res);
        }
        setloading(false);  
    };

    return(
        <>
            <div className="form-container">
                <div className="form-title">{!submitted ? "Apply to CruzHacks!" : "Congratulations on Applying to CruzHacks!"}</div>
                {!submitted && <>
                <div className="error">{error}</div>    
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ShortAnswer {...{register, watchGender, watchUniversity, watcher}}/>
                    <LongAnswer {...{register, watcher}} />
                <button className="submit" disabled={loading} type="submit">Submit</button>
                </form>
                </>
                }

                {submitted && <Submitted {...hackerResponse}/> }
            </div>
        </>
    );
}

export default Form;