import React, { useEffect, useState } from 'react';
import './Hackers.scss';
import { hackerResults, hackerData } from '../../Props/Props';
import { getHackers } from '../../Request/Request';
import HackerCard from './HackerCard/HackerCard';
import HackerRow from './HackerRow/HackerRow';

const Hackers: React.FC = () => {
    const initial: hackerResults = {
        statusCode: 400,
        message: "Not Yet Fetched",
        results: [],
        count: 0
    }
    const [results, setResults] = useState<hackerResults>(initial);
    useEffect(() => {
        getHackers().then(res => { setResults(res); console.log(res) });
    }, [])
    return (
        <>
            <div className="hacker-container">
                <div className="hacker-analytics-title"> Hacker Statistics </div>

                <div className="hacker-stats"> 
                    Total Hackers: {results.count}
                    <div>{results && results.statusCode === 200 ? 'Current Applicants': "No Data Available"}</div>
                </div>
                
                <div className="hacker-table">
                    {results && results.results.map((hacker: hackerData, i: number) => {
                        return (
                            // <HackerRow {...hacker} key={i} />
                            <HackerCard {...hacker} key={i}/>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Hackers;
