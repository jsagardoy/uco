import * as React from 'react';
import { LoginEntity } from '../model';
import { createEmptyLogin } from './loginPage.business';
import { RouteComponentProps } from 'react-router';
import { LoginContainer } from '../components/login/loginComponent';
import AuthService from '../api/AuthService';


interface State {
    loginEntity: LoginEntity;
    token: string;
    failedAuth: boolean;
    auth: AuthService;
}

export class LoginPageComponent extends React.Component<RouteComponentProps<any>, State>{
    constructor(props) {
        super(props);
        this.state = {
            loginEntity: createEmptyLogin(),
            token: null,
            failedAuth: false,
            auth: new AuthService({})
        }
    }
    componentWillMount(){
        //if already logged in
        if(this.state.auth.loggedIn()){
            this.props.history.replace('/operations');
        }
        else{
            this.props.history.replace('/login');
        }
    }
    
    cleanFields = () => {
        this.setState({
            ...this.state,
            loginEntity: createEmptyLogin(),
            token: null
        })
    }

    onSubmit = (login: any) => {
        const newLogingEntity:LoginEntity = {
            username:login.loginEntity.username,
            password:login.loginEntity.password,
            email:login.loginEntity.email,
        }
        if (login.token) {
            this.setState({
                loginEntity: newLogingEntity,
                token:login.token,
                failedAuth: false,
            })
            if (this.state.auth.login(this.state.token))
                          this.props.history.replace('/operations');
            else
                alert('Unnable to set Token ');
  
        }
        else {
            this.setState({
                ...this.state,
                failedAuth: true
            })
            this.cleanFields();
        }
    }

    render() {
        return (
            <>
                <LoginContainer onSubmit={this.onSubmit} />
                {
                    this.state.failedAuth ?
                        <h5>Usuario y password incorrectos, por favor introduzcalos usuario y password correctos.</h5> 
                    :
                    <></>
                }
            </>
        );
    }
}
