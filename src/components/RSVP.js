import React from 'react';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import { ENDPOINT, IN_PERSON, VIRTUALLY, UNABLE, INVITE_CODES } from './../config.json';

class RSVP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          attending: VIRTUALLY,
          name: "",
          email: "",
          phoneNumber: "",
          inviteCode: "",
          message: "",
          showSuccessAlert: false,
          showErrorAlert: false,
          validationErrors: {}
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setShowSuccessAlert = this.setShowSuccessAlert.bind(this);
        this.setShowErrorAlert = this.setShowErrorAlert.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.isValidInviteCode = this.isValidInviteCode.bind(this);
    }

    handleInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        this.setState({
            [fieldName]: fieldValue,
            showSuccessAlert: false,
            showErrorAlert: false,
            validationErrors: {}
        });
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name){
            formIsValid = false;
            errors["name"] = "Name cannot be empty";
        }

        switch (this.state.attending) {
            case IN_PERSON:
                if (!this.state.phoneNumber) {
                    formIsValid = false;
                    errors["phoneNumber"] = "Phone number cannot be empty";
                }
                if (!this.isValidInviteCode(this.state.inviteCode)) {
                    formIsValid = false;
                    errors["inviteCode"] = "Invite code is not valid";
                }
                break;
            case VIRTUALLY:
                if (!this.state.email) {
                    formIsValid = false;
                    errors["email"] = "Email cannot be empty";
                }
                break;
            default:
                break;
        }
        
        this.setState({
            validationErrors: errors
        });

        return formIsValid;
    }

    isValidInviteCode(inviteCode) {
        return INVITE_CODES.includes(inviteCode.toLowerCase().trim());
    }

    async handleSubmit(event) {
        event.preventDefault()

        if (this.handleValidation()) {
            try {
                const url = ENDPOINT + this.state.attending;
                let data;
    
                const currentdate = new Date(); 
                const datetime = currentdate.getDate() + "/"
                            + (currentdate.getMonth()+1)  + "/" 
                            + currentdate.getFullYear() + ", "  
                            + ("0" + currentdate.getHours()).slice(-2) + ":"
                            + ("0" + currentdate.getMinutes()).slice(-2) + ":"
                            + ("0" + currentdate.getSeconds()).slice(-2);

                const inviteCode = this.state.inviteCode.toLowerCase().trim();
    
                switch (this.state.attending) {
                    case IN_PERSON:
                        data = [[datetime, this.state.name, this.state.phoneNumber, inviteCode, this.state.message]];
                        break;
                    case VIRTUALLY:
                        data = [[datetime, this.state.name, this.state.email, this.state.message]];
                        break;
                    default:
                        data = [[datetime, this.state.name, this.state.message]];
                        break;
                }
                const response = await fetch(url,
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
                const json = await response.json();
                console.log("Success:", JSON.stringify(json));
                this.setShowSuccessAlert(true);
            } catch (error) {
                console.error("Error:", error);
                this.setShowErrorAlert(true);
            }
        }
    }

    setShowSuccessAlert(value) {
        this.setState({
            showSuccessAlert: value
        });
    }

    setShowErrorAlert(value) {
        this.setState({
            showErrorAlert: value
        });
    }

    render() {
      return (
        <section id="rsvp">
            <div className="text-center story-title">
                <h1 className="big">Rsvp</h1>
            </div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                <Form.Group>
                    <div key="inline-radio" className="mb-3 radio-buttons">
                        <label>
                        <Form.Check inline 
                                    type="radio" 
                                    name="attending"
                                    value={VIRTUALLY}
                                    checked={this.state.attending === VIRTUALLY}
                                    onChange={this.handleInputChange} />
                        I'll attend virtually
                        </label>
                        <label>
                        <Form.Check inline 
                                    type="radio" 
                                    name="attending"
                                    value={IN_PERSON}
                                    checked={this.state.attending === IN_PERSON}
                                    onChange={this.handleInputChange} />
                        I'll attend physically
                        </label>
                        <label>
                        <Form.Check inline 
                                    type="radio" 
                                    name="attending"
                                    value={UNABLE}
                                    checked={this.state.attending === UNABLE}
                                    onChange={this.handleInputChange} />
                        I'm unable to attend
                        </label>
                    </div>
                </Form.Group>
                </Form.Row>
                {this.state.attending === IN_PERSON &&
                <div className="note"><small>If you are attending with family members, please RSVP separately for each guest for Covid-19 contact tracing.</small></div>}
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Control placeholder="Name" 
                                      name="name"
                                      value={this.state.name}
                                      onChange={this.handleInputChange} />
                        <span style={{color: "red"}}>{this.state.validationErrors["name"]}</span>
                    </Form.Group>
                    {(this.state.attending === VIRTUALLY) &&
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" 
                                      placeholder="Email"
                                      name="email"
                                      value={this.state.email}
                                      onChange={this.handleInputChange} />
                        <span style={{color: "red"}}>{this.state.validationErrors["email"]}</span>
                    </Form.Group>}
                </Form.Row>

                {this.state.attending === IN_PERSON &&
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                        <Form.Control placeholder="Phone Number"
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleInputChange} />
                        <span style={{color: "red"}}>{this.state.validationErrors["phoneNumber"]}</span>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridInviteCode">
                        <Form.Control placeholder="Invite Code"
                                      name="inviteCode"
                                      value={this.state.inviteCode}
                                      onChange={this.handleInputChange} />
                        <span style={{color: "red"}}>{this.state.validationErrors["inviteCode"]}</span>
                    </Form.Group>
                </Form.Row>}
            
                <Form.Group controlId="formGridMessage">
                    <Form.Control as="textarea" 
                                  placeholder="Message for Couple"
                                  name="message"
                                  value={this.state.message}
                                  onChange={this.handleInputChange} />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Alert show={this.state.showSuccessAlert} variant="success">
                    <Alert.Heading>Thanks for RSVPing, {this.state.name}</Alert.Heading>
                    <p>
                    Your response has been sent successfully.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setShowSuccessAlert(false)} variant="outline-success">
                        X
                    </Button>
                    </div>
                </Alert>

                <Alert show={this.state.showErrorAlert} variant="danger">
                    Oops, something went wrong. Please try again.
                    <hr />
                    <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setShowErrorAlert(false)} variant="outline-danger">
                        X
                    </Button>
                    </div>
                </Alert>
            </Form>
        </section>
      );
    }
}

export default RSVP;