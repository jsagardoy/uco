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
            this.props.history.replace('/');
        }
    }
    cleanFields = () => {
        this.setState({
            ...this.state,
            loginEntity: createEmptyLogin(),
            token: null
        })
    }

    onSubmit = (token: string) => {
        if (token) {
            this.setState({
                ...this.state,
                token:token,
                failedAuth: false,
            })
            this.state.auth.login(this.state.loginEntity.username,this.state.loginEntity.password).then((res)=>{
                          this.props.history.replace('/');
            })
            .catch((err)=>{
                alert(err);
            })
  
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
