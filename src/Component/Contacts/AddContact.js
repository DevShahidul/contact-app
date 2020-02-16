import React, {Component} from 'react';
import { Consumer } from '../../Context';
import InputGroupType from '../Layout/InputGroupType';
import uuid from 'uuid';

class AddContact extends Component{

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        //Check for Errors
        if(name === ''){
            this.setState({
                errors: { name: 'Name is required' }
            });
            return
        }
        if(email === ''){
            this.setState({
                errors: { email: 'Email is required' }
            });
            return
        }
        if(phone === ''){
            this.setState({
                errors: { phone: 'Phone is required' }
            });
            return
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({ 
            type: 'ADD_CONTACT', 
            payload: newContact 
        });

        // Clear field
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
    }

    render(){
        const { name, email, phone, errors } = this.state;
        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="row">
                            <div className="card mb-3 w-100">
                                <div className="card-header">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                         <InputGroupType label='Name' name='name' placeholder='Enter Name...' value={name} onChange={this.onChange} error={errors.name}/>
                                         <InputGroupType label='Email' name='email' placeholder='Enter Email...' value={email} onChange={this.onChange} error={errors.email}/>
                                         <InputGroupType 
                                         label='Phone' 
                                         name='phone' 
                                         placeholder='Enter Phone...' 
                                         value={phone} 
                                         onChange={this.onChange} 
                                         error={errors.phone}/>
                                        <input type="submit" className="btn btn-light btn-block" value="Add Contact"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;