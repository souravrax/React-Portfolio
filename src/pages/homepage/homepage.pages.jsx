import React, { Component } from 'react'
import './homepage.styles.scss';
import Liquid from '../../components/liquid/liquid.component';
import img from '../../assets/images/img.png';
import Particles from 'react-particles-js';
import params from '../../assets/particlesconfig';
import ReactRotatingText from 'react-rotating-text';
export default class HomePage extends Component {

    constructor() {
        super();
        this.state = {

        }
        this.items = [
            'Pursuing B.Tech in Computer Science',
            'Love to make and break things',
            'Full stack web developer',
            'Competitive programmer(C++)',
            'Dreams in tech'

        ];
    }



    render() {
        return (
            <div className="home-page">
                <h1 className="title">Sourav</h1>
                <Particles className="particles" width="100%" height="100%" params={params} />
                <Liquid d="200px" filled="filled">
                    <img src={img} alt="person" />
                </Liquid>
                <div className="details">
                    <h1>Hi,<br></br>I'm Sourav Rakshit</h1>
                    <ReactRotatingText className="description" items={this.items} />
                </div>
                <div className="resume">
                    <Liquid d="51px" border="border">
                        <a title="Download resume" href="https://souravrax-github-io-backend.herokuapp.com/resume" rel="noopener noreferrer" target='_blank' alt="Click to download"><i className="fa fa-arrow-down"></i></a>
                    </Liquid>
                </div>
            </div >

        )
    }


}