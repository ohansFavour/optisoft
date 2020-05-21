import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";

import Details from "../../components/details/details";
import HomePage from "./homePage";

const HomeContainer= (props)=>{
    return(
     <React.Fragment>
         <Switch>
             <Route exact path={`${props.match.url}`} component={HomePage}/>
             <Route  path={`${props.match.url}/details`} component={Details}/>
         </Switch>
         </React.Fragment>
    )
}
export default withRouter(HomeContainer);