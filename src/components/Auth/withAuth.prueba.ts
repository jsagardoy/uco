import * as React from 'react';
import AuthService from "../../api/AuthService";

interface Props {

}
interface State {
    confirm:string;
    loaded:boolean;
}
const withAuth = <P extends object> (Component:React.ComponentType<P>)=>
    class withAuth extends React.Component<P & Props, State>{
        constructor(props){
            super(props);
            this.state={
                confirm:null,
                loaded:false,
            }
        }
        render(){
            return Component
        }
    }
