import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';
import { OperationEntity,updateElementFromArray } from '../model';

import axios from 'axios';
import { Edit, Save } from '@material-ui/icons';
import Button from '@material-ui/core/Button';




interface State{
    operation:OperationEntity;
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
}

export class DetailPersonPage extends React.Component< RouteComponentProps<any>,State> {

    constructor (props){
        super(props);
        const personList = "personList";
        const operationStore = "operation";

        let person, operation;
        this.props.history.location.state?
        person = this.props.history.location.state.person
        :     
        (
            person=JSON.parse(localStorage.getItem(personList))
        )
        
        this.props.history.location.state?
        
        operation = this.props.history.location.state.operation
        :     
        (
            operation=JSON.parse(localStorage.getItem(operationStore))
        )
         
        
        localStorage.setItem(personList,JSON.stringify(person));
        localStorage.setItem(operationStore,JSON.stringify(operation));
        

        !!this.props.history.location.state?
            this.state = {
                operation:this.props.history.location.state.operation,         
                person:this.props.history.location.state.person, 
                notEditable: this.props.history.location.state.notEditable,
                showVehicle:false,
                showCompany:false,
                showFamiliar:false,
            } 
        :
             this.state= ({
                 operation:operation,
                 person:person, 
                 notEditable:true,
                 showVehicle:false,
                 showCompany:false,
                 showFamiliar:false,
                })
        
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
    
    onClickEditButton = ()=>{
        const newState:State ={...this.state};
        newState.notEditable=!this.state.notEditable;
        this.setState(newState);
    }

    parsePerson = (e, person:PeopleEntity) : PeopleEntity =>{
        
        console.log(e.target.id);
        switch(e.target.id){
            case "namePerson": {person.namePerson=e.target.value; return person;};
            case "aka": {person.aka=e.target.value; return person;};
            case "address": {person.address=e.target.value; return person;}
            case "addressLink": {person.addressLink=e.target.value; return person;}
        }
         
    }

    handleChange = (e) => {
        //hay que ver como hacer esto para que lo haga para todos los elementos
        let newState = {...this.state};
        let person:PeopleEntity = {...newState.person}
        person=this.parsePerson(e, person);
        /* console.log(e.target.id);
        person.namePerson=e.target.value; */

        newState.person=person;
        this.setState(newState);
    }
    onClickSaveButton = () =>{
    //aquí debería para esa operación hacer un patch con los valores solo de person
        let person: PeopleEntity = {...this.state.person};
        let operation: OperationEntity = {...this.state.operation};

        operation.people=updateElementFromArray(operation.people,person,(item)=>item.idPerson===person.idPerson);
        console.log(operation.people.map((item)=>item.namePerson));
        //ahora aquí hay q actualizar la BD
    }

    render(){
        
        return (
        <>
            <Button onClick={this.onClickEditButton}>
                <Edit/>Editar
            </Button>
            <Button onClick={this.onClickSaveButton}>
                <Save/>Guardar
            </Button>
                <PersonComponent onToggle={this.onToggle} person={this.state.person} notEditable={this.state.notEditable} showVehicle={this.state.showVehicle} showCompany={this.state.showCompany} showFamiliar={this.state.showFamiliar} handleChange={this.handleChange}/>
        </>
        );
    }
}