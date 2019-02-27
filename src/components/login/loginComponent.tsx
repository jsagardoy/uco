import * as React from 'react';
import { handleChange } from '../../common';
import { LoginEntity } from '../../model';
import { createEmptyLogin } from '../../pages';
import { FormLoginComponent } from '../form';
import { getLogin, createUser } from '../../api/loginAPIConnection';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    onSubmit : (login:State) =>void;
}

interface State {
    loginEntity:LoginEntity;
    token:string;
    onNewUser:string;
}

export class LoginContainer extends React.Component<Props, State>{
    constructor(props:Props){
        
         super(props);
         this.state={
             loginEntity:createEmptyLogin(),
             token:'',
             onNewUser:'',
        };
   
    }
    
    handleChange = (fieldName: string, value: any, group: string) => {
        this.setState(handleChange(fieldName, value, group, this.state));
    }
   
    /* onHandleSubmit = () => {
        let login:LoginEntity=this.state.loginEntity;
        getLogin(login).then((response) => {
             this.setState(
            {
            ...this.state,
            token: response.token
            }) 
            this.props.onSubmit(this.state);
        }  
        ).catch((error)=>{
         console.log (error);   
        })
        
    } */
    onHandleSubmit = async () =>{
        try{let login:LoginEntity=this.state.loginEntity;
            let response =  await getLogin(login);
            if(response!==null){
                this.setState({
                    ...this.state,
                    token: response.token
                })
                this.props.onSubmit(this.state);
            }else{
               toast.error('Usuario y Password incorrectos');
            }
                
            }catch(error){console.log(error);}
        
    }

    handleRegister=(tabValue:string)=>{
       
        this.setState({
            ...this.state,
            onNewUser:tabValue,
        })
    }

    onRegister = () => {
        let login: LoginEntity = this.state.loginEntity;

        createUser(login).then(() => {
            this.setState({
                ...this.state,
                onNewUser: 'login',
            });
            this.onHandleSubmit();//after creating, then automatically login
        }
        )
    }
    
    render(){
        return(

            <FormLoginComponent handleChange={this.handleChange}
                                loginEntity={this.state.loginEntity}
                                onNewUser={this.state.onNewUser}
                                handleRegister={this.handleRegister}
                                onRegister={this.onRegister}
                                onSubmit={this.onHandleSubmit}
            />
        );
    }
}