import React, { Component } from "react";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";


import {fetchData} from "../../redux/corona-data/coronaActions";
import Corona from "../../assets/corona.png";

import "./welcomePage.css";


function AnimatedSplash() {
  return (
    <div className="welcome">
      <div className="welcome__content"><img src={Corona} alt="corona-"/></div>
    </div>
  );
}



class WelcomePage extends Component {
   

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  } 

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
    this.props.fetchCoronaData();
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
  }
}

const mapDispatchToProps=dispatch=>({
  fetchCoronaData: ()=> dispatch(fetchData())
})

export default connect(null, mapDispatchToProps)(WelcomePage);
