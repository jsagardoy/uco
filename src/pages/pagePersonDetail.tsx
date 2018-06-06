import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import {operationAPI} from '../api/operationAPI';



interface State{
    person: PeopleEntity;
    editable:boolean;
}

export class DetailPersonPage extends React.Component< RouteComponentProps<any>,State> {

    constructor (props){
        super(props);

        const operationList = operationAPI.getAllOperations();
        const idOperation=this.props.match.params.idOperation;
        const idPerson = this.props.match.params.idPerson 

        const operation = operationList.find(((operation)=>+operation.id===+idOperation));
        const peopleList = operation.people;
        const person = peopleList.find((p)=>+p.id===+idPerson);


        !!this.props.history.location.state?
            this.state = {         
                person:this.props.history.location.state.person, 
                editable: this.props.history.location.state.editable
            } 
        :
             this.state= ({
                 person:person, 
                 editable:false
                })
        
    }
    
     
    render(){
        
        return (
            <PersonComponent person={this.state.person} editable={this.state.editable}/>
        );
    }
}