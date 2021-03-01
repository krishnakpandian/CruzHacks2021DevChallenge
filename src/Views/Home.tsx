import * as React from "react";
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Form from '../Components/Form/Form';

const Home:React.FC = () => {
    return(
        <>
            <div className="home-view">
                Home Page
                <Navbar/>
                <Form/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;