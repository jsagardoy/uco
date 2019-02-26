import * as React from 'react';
import AuthHelperMethods from "./withAuth.business";
import { RouteComponentProps } from 'react-router';


interface State {
    confirm:any;
    loaded:boolean;
}
export default function withAuth (AuthComponent) {
    const Auth = new AuthHelperMethods({});
    class AuthWrapped extends React.Component<RouteComponentProps, State>{
        
        /* constructor(props){
            super(props);
            this.state={
                confirm:null,
                loaded:false,
            }
        } */
        state = {
          confirm:null, 
          loaded:false
        }
        componentDidMount() {
            if (!Auth.loggedIn()) {
              this.props.history.replace("/login");
            } else {
              /* Try to get confirmation message from the Auth helper. */
              try {
                const confirm = Auth.getConfirm();
                console.log("confirmation is:", confirm);
                this.setState({
                  confirm: confirm,
                  loaded: true
                });
              } catch (err) {
                /* Oh snap! Looks like there's an error so we'll print it out and log the user out for security reasons. */
                console.log(err);
                Auth.logout();
                this.props.history.replace("/login");
              }
            }
          }
        render(){
            if (this.state.loaded == true) {
                if (this.state.confirm) {
                  console.log("confirmed!");
                  return (
                    /* component that is currently being wrapper(App.js) */
                    <AuthComponent
                      history={this.props.history}
                      confirm={this.state.confirm}
                    />
                  );
                } else {
                  console.log("not confirmed!");
                  return null;
                }
              } else {
                return null;
              }
            }
          };
        }
 