import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import {operationAPI} from '../api/operationAPI';



interface State{
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
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
                notEditable: this.props.history.location.state.notEditable,
                showVehicle:false,
            } 
        :
             this.state= ({
                 person:person, 
                 notEditable:true,
                 showVehicle:false,
                })
        
    }
    
    onToggle = (element:string) => {
        switch (element)
        {
            case "vehicle":
                const newState:State= {...this.state};
                newState.showVehicle  = !newState.showVehicle;
                this.setState(newState);
            break;
        }
    }
     
    render(){
        
        return (
            <PersonComponent onToggle={this.onToggle} person={this.state.person} notEditable={this.state.notEditable} showVehicle={this.state.showVehicle}/>
        );
    }
}