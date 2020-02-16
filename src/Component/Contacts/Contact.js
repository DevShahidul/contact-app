import React, {Component} from 'react';
import { Consumer } from '../../Context';


class Contact extends Component{
    state = {
        showinfo: false
    }

    showContactInfo = () => {
        this.setState({
            showinfo: !this.state.showinfo
        })
    }

    onDeleteContact = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }

    render() {
        const {id, name, email, phone} = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="row mt-3">
                            <div className="card card-body">
                                <h2 className="card-title danger-color">{name} <span style={{cursor: 'pointer'}} onClick={this.showContactInfo}><i className="fas fa-sort-down"></i></span> <span style={{float: 'right', color: 'red', cursor: 'pointer'}} onClick={this.onDeleteContact.bind(this, id, dispatch)}><i className="fas fa-times"></i></span></h2>
                                {
                                    this.state.showinfo ? <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul> : null
                                }
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contact;