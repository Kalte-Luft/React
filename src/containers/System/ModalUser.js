import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            phone: "",
        };
    }
    componentDidMount() { }
    toggle = () => {
        this.props.toggleFromParent();
    };
    handleOnChangeInput = (event, id) => {
        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ["email", "password", "phone"];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter: " + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.createNewUser(this.state);
        }
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={"modal-user-container"}
                size = "lg"
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" 
                            onChange={(event) => this.handleOnChangeInput(event, "email")}
                            value={this.state.email}
                            className="form-control" />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password" 
                            onChange={(event) => this.handleOnChangeInput(event, "password")}
                            value={this.state.password}
                            className="form-control" />
                        </div>
                        <div className="input-container">
                            <label>Phone</label>
                            <input type="phone" 
                            onChange={(event) => this.handleOnChangeInput(event, "phone")}
                            value={this.state.phone}
                            className="form-control" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className=" px-3" onClick={() => this.handleAddNewUser()}>
                        Add New
                    </Button>{" "}
                    <Button color="secondary" className=" px-3" onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);