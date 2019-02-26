import * as React from 'react';
import AuthService from '../../api/AuthService';
import { withRouter } from 'react-router';


class NavBarComponent extends React.Component<any>{
    auth:AuthService = new AuthService ('');
    render(){
    return (
        <nav>
            <a href='#/operations'>operaciones</a>
            <a href='#/login'>Login</a>
            <a onClick = {(e)=> {this.auth.logout();this.props.history.replace('/login');}}>LogOut</a>
        </nav>
    )}
} 

export default withRouter(NavBarComponent);
//const NavBarHoC = withRouter(NavBarComponent);

