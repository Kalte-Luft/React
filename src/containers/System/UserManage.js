import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    async componentDidMount () {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            })
        }
    }
    //life cycle
    // Run component
    // 1. constructor -> init state
    // 2. did mount -> set state
    // 3. render


    render() {
        console.log('check state: ', this.state);
        let arrUsers = this.state.arrUsers;
        return (
            <div className='users-container'>
                <div className='title text-center'>Manage users with Nghia</div>
                <div className='users-table mt-3 mx-2'>
                <table id="customers">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {arrUsers && arrUsers.map((item, index) => {
                            console.log('check map: ', item, index);
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i class="fa fa-pencil-alt"></i></button>
                                        <button className='btn-delete'><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
                    

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
