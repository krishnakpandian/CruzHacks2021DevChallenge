import React from 'react';

const HackerLegend: React.FC = () => {
    const headers = ["Email", "Name", "Major", "Gender", "School"]
    return (
        <>
            <div className="hacker-legend-container">
                {headers.map((header,i) => {
                    return(
                            <div className="hacker-legend-header" key = {i}>
                                {header}
                            </div>
                    )
                })}
            </div>
        </>
    )
}
export default HackerLegend;