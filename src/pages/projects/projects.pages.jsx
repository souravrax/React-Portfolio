import React from 'react';
import './projects.styles.scss';
import Projects from '../../assets/projects';
import Liquid from '../../components/liquid/liquid.component';

export default class ProjectsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            hover: false
        }
    }
    render() {
        return (
            <div className="projects-page">
                <h1 className="title">Projects</h1>
                {
                    Projects.map(elem => (
                        <Liquid d="250px" border="border" margin="20px">
                            <div className="project" >
                                <h1>{elem.name}</h1>
                            <p>{elem.description}</p>
                                <a className="link" target="_blank" rel="noopener noreferrer" href={`${elem.project_link}`}>Know More</a>
                            </div>
                        </Liquid>
                    ))
                }
            </div>
        )
    }
}
