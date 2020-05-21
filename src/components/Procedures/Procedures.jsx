import React from "react";
import {Link} from "react-router-dom";

import Button from "@material-ui/core/Button";
import Sanitize from "../../assets/sanitize.jpg";
import WashHands from "../../assets/wash.jpg";
import FaceMasks from "../../assets/facemask.jpg";

import "./Procedures.css";

const Procedures = () => {
  return (
    <div className="procedures">
      <h1>Safety Tips</h1>
      <div className="procedures__item">
        <div className="procedure__item--description">
          <h3>Wash Your hands</h3>
          <p>
            To eliminate all traces of the virus on your hands, a quick scrub
            and a rinse won’t cut it. Below is a step-by-step process for
            effective handwashing.You should wash your hands for at least 20-30
            seconds. An easy way to time it is by singing the full happy
            birthday song, twice.
          </p>
          <div className="procedure__button">
            <Link to="/home/details"><Button variant="contained" color="primary">
              {" "}
              Read more
            </Button></Link>
          </div>
        </div>
        <img src={WashHands} alt="wash-hands" className="procedure__image" />
      </div>




      <div className="procedures__item">
      <img src={FaceMasks} alt="wash-hands" className="procedure__image" />
        <div className="procedure__item--description">
          <h3>Use of face masks</h3>
          <p>
          Before putting on a mask, clean hands with alcohol-based hand rub or soap and water.Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.Avoid touching the mask while using it; if you do, clean your hands with alcohol-based hand rub or soap and water.
          </p>
          <div className="procedure__button">
          <Link to="/home/details"><Button variant="contained" color="primary">
              {" "}
              Read more
            </Button></Link>
          </div>
        </div>
        
      </div>



      <div className="procedures__item">
        <div className="procedure__item--description">
          <h3>Sanitize Regularly</h3>
          <p>
          Frequent and proper hand hygiene is one of the most important measures that can be used to prevent infection with the COVID-19 virus. WASH services should enable more frequent and regular hand hygiene by improving facilities and using proven behavior change techniques.
          </p>
          <div className="procedure__button">
          <Link to="/home/details"><Button variant="contained" color="primary">
              {" "}
              Read more
            </Button></Link>
          </div>
        </div>
        <img src={Sanitize} alt="wash-hands" className="procedure__image" />
      </div>
    </div>
  );
};

export default Procedures;
