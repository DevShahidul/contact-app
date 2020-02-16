import React, {Component} from 'react';

class AddContactRef extends Component{

    constructor (props){
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }


    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }

        console.log(contact)
    }

    static defaultProps = {
        name: 'Shahidul',
        email: 'shahin@gmail.com',
        phone: '0000-9999088'
    }

    render(){
        const { name, email, phone } = this.props;
        return(
            <div className="row">
                <div className="card mb-3 w-100">
                    <div className="card-header">Add Contact Ref</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="from-group mb-3">
                                <label htmlFor="name">Name:</label>
                                <input className="form-control from-control-lg" type="text" name="name" placeholder="Enter Name..." defaultValue={name} ref={this.nameInput} />
                            </div>
                            <div className="from-group mb-3">
                                <label htmlFor="email">Email:</label>
                                <input className="form-control from-control-lg" type="email" name="email" placeholder="Enter Email..." defaultValue={email} ref={this.emailInput} />
                            </div>
                            <div className="from-group mb-3">
                                <label htmlFor="phone">Name:</label>
                                <input className="form-control from-control-lg" type="text" name="phone" placeholder="Enter Phone..." defaultValue={phone} ref={this.phoneInput} />
                            </div>
                            <input type="submit" className="btn btn-light btn-block" value="Add Contact"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContactRef;