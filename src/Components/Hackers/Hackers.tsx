import React, { useEffect, useState } from 'react';
import './Hackers.scss';
import { hackerResults, hackerData } from '../../Props/Props';
import { getHackers } from '../../Request/Request';
import HackerRow from './HackerRow/HackerRow';

const Hackers: React.FC = () => {
    const initial: hackerResults = {
        statusCode: 400,
        message: "Not Yet Fetched",
        results: []
    }
    const [results, setResults] = useState<hackerResults>(initial);
    useEffect(() => {
        getHackers().then(res => { setResults(res); console.log(results) });
    }, [])
    return (
        <>
            <div className="hacker-container">
                <div className="hacker-analytics-title"> Hacker Statistics {results && results.statusCode === 200 ? <HackerLegend/> : "No Data Available"}</div>
                <div className="hacker-table">
                    {results && results.results.map((hacker: hackerData, i: any) => {
                        return (
                            <>
                                <HackerRow {...hacker} key={i} />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Hackers;



const HackerLegend: React.FC = () => {
    return (
        <>
            <div className="hacker-legend-container">
                <div className="hacker-legend-header">
                    Email
                </div>
                <div className="hacker-legend-header">
                    Name
                </div>
                <div className="hacker-legend-header">
                    Major
                </div>
                <div className="hacker-legend-header">
                    Gender
                </div>
                <div className="hacker-legend-header">
                    School
                </div>
            </div>
        </>
    )
}