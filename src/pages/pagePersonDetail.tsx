import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import axios from 'axios';
import { OperationEntity } from '../model';



interface State{
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
}

export class DetailPersonPage extends React.Component< RouteComponentProps<any>,State> {

    constructor (props){
        super(props);
        const opList = "operationList";

        let person;
        this.props.history.location.state?
        person = this.props.history.location.state.person    
        :     
        person=JSON.parse(localStorage.getItem(opList));
        
        localStorage.setItem(opList,JSON.stringify(person));
              

        !!this.props.history.location.state?
            this.state = {         
                person:this.props.history.location.state.person, 
                notEditable: this.props.history.location.state.notEditable,
                showVehicle:false,
                showCompany:false,
                showFamiliar:false,
            } 
        :
             this.state= ({
                 person:person, 
                 notEditable:true,
                 showVehicle:false,
                 showCompany:false,
                 showFamiliar:false,
                })
        
    }

    
    parseOperation = (data):Array<OperationEntity> =>{
        const opList:Array<OperationEntity> = [];
        
        data.forEach(item => {
                opList.push(item);
        })
          return (opList);
    } 

    onToggle = (element:string) => {
        let newState:State = null;
        switch (element)
        {
            case "vehicle":
                newState= {...this.state};
                newState.showVehicle = !newState.showVehicle;
                this.setState(newState);
            break;
            case "company":
                newState= {...this.state};
                newState.showCompany = !newState.showCompany;
                this.setState(newState);
            break;
            case "familiar":
                newState= {...this.state};
                newState.showFamiliar = !newState.showFamiliar;
                this.setState(newState);
            break;
        }
    }
     
    render(){
        
        return (
            <PersonComponent onToggle={this.onToggle} person={this.state.person} notEditable={this.state.notEditable} showVehicle={this.state.showVehicle} showCompany={this.state.showCompany} showFamiliar={this.state.showFamiliar}/>
        );
    }
}