import React, { Component } from 'react'
import './contact.styles.scss';
import axios from 'axios';


export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            response: {},
        }
    }

    submitMessage = (event) => {
        event.preventDefault();
        let isValidEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(this.state.email);
        this.setState({
            submitting: true
        })
        if (isValidEmail) {
            axios.post('https://souravrax-github-io-backend.herokuapp.com/send_message', {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
                .then(response => {
                    this.setState({
                        response: response.data,
                        submitting: false
                    })
                    console.log(this.state.response);
                    console.log(`The message is sent successfully with id : ${this.state.response.data.message_id}`);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            console.log("Enter a valid email address");
        }
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
                        display : "block"
                    }}>
                        {this.state.response.successful ? `Message is sent with message id : ${this.state.response.data.message_id}` : ""}
                    </p>
                </form>

            </div>
        )
    }
}
