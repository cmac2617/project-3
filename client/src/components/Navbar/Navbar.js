import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from '../Modals/LoginModal';
import SignupModal from '../Modals/SignupModal';
import './Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { addModalShow: false }
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="/">Fun Finder</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Button variant="link Log1" onClick={() => this.setState({ addModalShow: true })}>Log In</Button>
                                <LoginModal
                                    show={this.state.addModalShow}
                                    onHide={addModalClose} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar
