/*import * as React from "react";
import { RouteComponentProps } from 'react-router';
import AuthService from "../../api/AuthService";
import { render } from "react-dom";

interface Props {
  confirm: boolean;
}
interface State {
  confirm: string;
  loaded: boolean;
}
 A higher order component is frequently written as a function that returns a class. 
export const withAuth = <P extends object>(AuthComponent: React.ComponentType<P>) => {
  const Auth = new AuthService({});

  return class AuthWrapped extends React.Component<Props & P & RouteComponentProps> {
    state = {
      confirm: null,
      loaded: false
    };

     In the componentDid<ount, we would want to do a couple of important tasks in order to verify the current users authentication status
    prior to granting them enterance into the app. 
    componentDidMount() {
      if (!Auth.loggedIn()) {

        this.props.history.replace("/login");
      } else {
         Try to get confirmation message from the Auth helper. 
        try {
          const confirm = Auth.getProfile();
          console.log("confirmation is:", confirm);
          this.setState({
            confirm: confirm,
            loaded: true
          });
        } catch (err) {
           Oh snap! Looks like there's an error so we'll print it out and log the user out for security reasons. 
          console.log(err);
          Auth.logout();
          this.props.history.replace("/login");
        }
      }
    }
    render(){
      const response = 
      return (response)
    }
  };
}

 

  if (this.state.loaded == true) {
        if (this.state.confirm) {
          console.log("confirmed!");
          return(); //          component that is currently being wrapper(App.js)
            <AuthComponent history={this.props.history}
              history=this.props.history
              confirm={this.state.confirm}
            />


        } else {
          console.log("not confirmed!");
          return null;
        }
      } else {
        return null;
      }
      */