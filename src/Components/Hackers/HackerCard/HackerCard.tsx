import React from 'react';
import './HackerCard.scss';
import { hackerData } from '../../../Props/Props';
import formLength from '../../../Props/formSchema.json';

const HackerCard: React.FC<hackerData> = (prop: hackerData) => {

  //Dynamically choose the font size depending on how long someone's name is 
  const dynamicHeaderFontSize = (message: string) => {
    if (message.length > 40) {
      return {
        fontSize: "18px"
      }
    }
    else if (message.length > 20) {
      return {
        fontSize: "24px"
      }
    }
    else {
      return {
        fontSize: "28px"
      }
    }
  }

  // Takes in a string as an argument
  // Returns a new string that is truncated to the length specified
  const shortenText = (message: string, maxLength: number) => {
    if (message && message.length > maxLength + 1) {
      return message.slice(0, maxLength) + '...';
    }
    return message;
  }
  return (
    <>
      <div className="HackerCard">
        <div className="name" style={dynamicHeaderFontSize(prop.data.firstName + ' ' + prop.data.lastName)}>
          {shortenText(prop.data.firstName + ' ' + prop.data.lastName, formLength['firstName'] + formLength['lastName'])}
        </div>
        <div className="lower-container">
          <div className="email">{shortenText(prop.data.email, formLength['email'])}</div>
          <div className="major">{shortenText(prop.data.major, formLength['major'])}</div>
          <div className="school">{shortenText(prop.data.school, formLength['school'])}</div>
          <div className="age"> {shortenText(String(prop.data.age), formLength['age'])}</div>
          <div className="gender">{shortenText(prop.data.gender, formLength['gender'])}</div>

        </div>
      </div>
    </>
  )
}

export default HackerCard;