import React, {Component} from 'react';

class Header extends Component{
    render(){
        const {brand} = this.props;
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <a className="navbar-brand" href="/" style={{color: 'white'}}>{brand}</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;