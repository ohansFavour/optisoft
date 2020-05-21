import React from "react";
import coronaImg from "../../assets/corona.png";

import "./details.css";

const Details=()=>{
    return(
        <div className="details">
          <div className="homePage__heading">
                C<img src={coronaImg} alt="corona-icon"/>VID-19 REPORT
            </div>
            <div className="details__main">
            <p>According to a WHO/UNICEF technical brief on WASH and waste management for COVID-19:</p>
            <ul>
                <li>Frequent and proper hand hygiene is one of the most important measures that can be used to prevent infection with the COVID-19 virus. WASH services should enable more frequent and regular hand hygiene by improving facilities and using proven behavior change techniques. </li>
            <li>WHO guidance on the safe management of drinking water and sanitation services applies to the COVID-19 outbreak. Measures that go above and beyond these recommendations are not needed.</li>
            <li>Many co-benefits will be realized by safely managing WASH services and applying good hygiene practices. Such efforts will prevent other infectious diseases, which cause millions of deaths each year.</li>
            <li>Frequently wash your hands with soap and water for at least 20 seconds. When soap and running water are unavailable, use an alcohol-based hand rub with at least 60% alcohol. Always wash hands that are visibly soiled.</li>
            <li>Recognize personal risk factors. According to U.S. Centers for Disease Control and Prevention (CDC), certain people, including older adults and those with underlying conditions such as heart or lung disease or diabetes, are at higher risk for developing more serious complications from COVID-19.</li>
            <li>The CDC has also developed interim guidance for businesses and employers to plan for and respond to COVID-19. The interim guidance is intended to help prevent workplace exposure to acute respiratory illnesses, including COVID-19. The guidance also addresses considerations that may help employers as community transmission of COVID-19 evolves</li>
            </ul>
            </div>
        </div>
    )
}

export default Details;