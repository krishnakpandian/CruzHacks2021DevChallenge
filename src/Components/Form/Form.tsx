import React, {useState} from 'react';
import { useForm, NestedValue } from 'react-hook-form';
import ShortAnswer from './FormShortAnswer/ShortAnswer';
import LongAnswer from './FormLongAnswer/LongAnswer';


const Form:React.FC = () => {
    const [page, setPage] = useState<Number>(1);
    const handleSubmit = (data: any) => console.log(data);
    return(
        <>
            <div className="form-container">
                Form Container Renders

                    {() => {
                        switch (page) {
                            case 1:
                                return <ShortAnswer/>;
                            case 2:
                                return <LongAnswer/>;
                            default:
                                return null;
                        }}
                    }
                    <input type="submit" />

            </div>
        </>
    );
}

export default Form;