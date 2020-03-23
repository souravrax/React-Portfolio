import React, { Component } from 'react'
import './homepage.styles.scss';
import Liquid from '../../components/liquid/liquid.component';
import img from '../../assets/images/img.jpg';
import Particles from 'react-particles-js';
import params from '../../assets/particlesconfig';

export default class HomePage extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="home-page">
                <Particles className="particles" width="100%" height="100%" params={params} />
                <Liquid d="200px" filled="filled">
                    <img src={img} alt="person" />
                </Liquid>
                <div className="details">
                    <h1>Hi, I'm Sourav Rakshit <span role="img" aria-labelledby="wave">👋</span></h1>
                    <div className="tag"><p>Full Stack Web Developer</p></div>
                    <p className="description">Love to make and break things</p>
                </div>
                <div className="resume">
                    <Liquid d="51px" border="border">
                        <a href="https://facebook.com/sourav.rakshit.1234" alt="Click to download"><i className="fa fa-arrow-down"></i></a>
                    </Liquid>
                </div>
            </div >

        )
    }


}