import React from 'react';
import './HackerRow.scss';
import {hackerData} from '../../../Props/Props';

const HackerRow:React.FC<hackerData> = (props: hackerData) => {
    return(
        <>
            <div className="hacker-row-container">
                <div className= "hacker-row-field">
                    {props.data.email}
                </div>
                <div className="hacker-row-field">
                    {props.data.firstName.toUpperCase()} {props.data.lastName.toUpperCase()}
                </div>
                <div className="hacker-row-field">
                    {props.data.major ? props.data.major.toUpperCase(): 'N/A'}
                </div>
                <div className="hacker-row-field">
                    {props.data.gender.toUpperCase()}
                </div>
                <div className="hacker-row-field">
                    {props.data.school ? props.data.school.toUpperCase(): 'N/A'}
                </div>
            </div>
        </>
    );
}

export default HackerRow;
