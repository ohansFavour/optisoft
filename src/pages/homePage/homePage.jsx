import React from 'react';

import coronaImg from "../../assets/corona.png"
import Cards from "../../components/cards/Cards";
import Procedures from "../../components/Procedures/Procedures";

import "./homePage.css";

const HomePage = () => {

    return (
        <div className="homepage">
            <div className="homePage__heading">
                C<img src={coronaImg} alt="corona-icon"/>VID-19 REPORT
            </div>
            <Cards/>
            <Procedures/>
        </div>
    )
}

export default HomePage
