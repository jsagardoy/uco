import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {PeopleEntity} from '../model/people';

interface State{
    person: PeopleEntity
}

export class DetailPersonPage extends React.Component<RouteComponentProps<any>,State> {
    constructor (props){
        super(props);
        console.log("hola");
        this.state = null;
    }
    
    

    render(){
        return (
            <>
            <h1>Persona</h1>
            </>
        );
    }
}