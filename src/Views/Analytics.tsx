import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hackers from '../Components/Hackers/Hackers';


const Analytics:React.FC = () => {
    return (
        <>
            <div className="analytics-view">
                <Navbar/>
                <Hackers/>
                <Footer/>
            </div>
        </>
    );
}

export default Analytics;