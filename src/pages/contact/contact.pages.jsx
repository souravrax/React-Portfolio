import React, { Component } from 'react'
import './contact.styles.scss';


export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    submitMessage() {

    }

    checkFilledOrNot() {
        return this.state.name && this.state.email && this.state.message;
    }

    setQueryParams(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="contact-page">
                <h1 className="title">Contact Me</h1>
                <form action="" className="form-input" >
                    <label htmlFor="name">Name</label>
                    <input className="input" type="text" name="name" id="1" onChange={(e) => this.setQueryParams(e)} />
                    <label htmlFor="email">Email</label>
                    <input className="input" type="email" name="email" onChange={(e) => this.setQueryParams(e)} id="2" />
                    <label htmlFor="message">Enter your message here</label>
                    <textarea className="input" type="text" name="message" id="3" onChange={(e) => this.setQueryParams(e)} />
                    <button className="submit"
                        title={this.checkFilledOrNot() ? "Click this button to submit" : "Fill out this form to submit"}
                        type="submit" disabled={this.checkFilledOrNot() ? false : true}
                        onClick={this.submitMessage}
                    >
                        Submit
                    </button>
                    <p className="success" style={{
                        display: "none"
                    }}>Your message is sent successfully</p>
                </form>

            </div>
        )
    }
}
