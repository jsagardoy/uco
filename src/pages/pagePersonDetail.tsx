import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';
import { OperationEntity,updateElementFromArray } from '../model';

<<<<<<< HEAD
import {appendElementToArray, removeElementFromArray } from '../model';

import { fileSelectedHandler, handleChange } from '../common/handlers';
import {initializeState,getPerson, storePerson} from '../api/person';
import {State} from './pagePersonDetail.business';
=======
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
>>>>>>> no message

export class DetailPersonPage extends React.Component< RouteComponentProps<any>,State> {

    constructor (props){
        super(props);
<<<<<<< HEAD

        const person:PeopleEntity = getPerson(this.props.history.location.state);
=======
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
>>>>>>> no message
        
        storePerson(person);
       
        this.state = initializeState(
                                    this.props.history.location.state,
                                    person   
                                )
    }

<<<<<<< HEAD
    
    onToggle =(fieldId : keyof State) =>{
            this.setState({
                ...this.state,
                [fieldId]:!this.state[fieldId]
            })
    }
     
    onEdit=()=>{
        this.setState({notEditable:!this.state.notEditable})
    }
    onSave = (newPerson:PeopleEntity) => {
        //guardar datos
        console.log('datos guardados');
    }
    onCancel = (oldPerson:PeopleEntity) =>{
        //cancelar cambios
        this.onEdit();
    }
    fileSelectedHandler = (fieldName:string,value:File,group:string, fileName:string):any => {
     
        fileSelectedHandler(fieldName, value, group, fileName,this.state.person,(data)=>{
            let newState:State={
                ...this.state,
                person:data
            }
            this.setState(newState);
        })
        
    }
    handleChange = (fieldName:string, value:any, group:string) =>{
        this.setState(handleChange(fieldName,value,group,this.state));
    }

    savingNew = (fieldId:keyof State,element:any) =>{

        const newArray:Array<any> =  appendElementToArray(this.state.person[fieldId], element);

        let newState:State = {
                                ...this.state,
                                person:{
                                    ...this.state.person,
                                    [fieldId]:newArray
                                }
                                ,notEditable:false,
        }
        const field:string =  fieldId;
        switch (field){
            case 'companies':
                newState.addNewCompany=false;
                newState.showCompany=true;
=======
    onToggle = (element:string) => {
        let newState:State = null;
        switch (element)
        {
            case "vehicle":
                newState= {...this.state};
                newState.showVehicle = !newState.showVehicle;
                this.setState(newState);
>>>>>>> no message
            break;
            case 'familiars':
                newState.addNewFamiliar=false;
                newState.showFamiliar=true;
            break;
            case 'vehicles':
                newState.addNewVehicle=false;
                newState.showVehicle=true;
            break;
        }
        this.setState(newState);
        console.log(`New ${field} added`);
        
    }
    
<<<<<<< HEAD
    addingNew = (fieldId:keyof State) :void =>{
        let newState:State = {
            ...this.state,
            [fieldId]:!this.state[fieldId]
        }
        
        this.setState(newState);
    }
    removeFromList = (fieldId:keyof State, index:number): void =>{
        let newArray = removeElementFromArray(this.state.person[fieldId],(item)=>item===this.state.person[fieldId][index]);
        let newState:State = {
                ...this.state,
                person:{
                    ...this.state.person,
                    [fieldId]:newArray
                },
        }
        this.setState(newState);
        console.log('Elemento Eliminado');
=======
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
>>>>>>> no message
    }

    render(){
        
        return (
<<<<<<< HEAD
            <PersonComponent onToggle={this.onToggle} 
                             onSave={this.onSave} 
                             onCancel={this.onCancel} 
                             onEdit={this.onEdit} 
                             person={this.state.person} 
                             addNewFamiliar={this.state.addNewFamiliar}
                             addNewCompany={this.state.addNewCompany}
                             addNewVehicle={this.state.addNewVehicle}
                             notEditable={this.state.notEditable} 
                             showVehicle={this.state.showVehicle} 
                             showCompany={this.state.showCompany} 
                             showFamiliar={this.state.showFamiliar}
                             handleChange={this.handleChange}
                             fileSelectedHandler={this.fileSelectedHandler} 
                             savingNew={this.savingNew}
                             addingNew={this.addingNew}
                             removeFromList={this.removeFromList}
                             
               
            />
=======
        <>
            <Button onClick={this.onClickEditButton}>
                <Edit/>Editar
            </Button>
            <Button onClick={this.onClickSaveButton}>
                <Save/>Guardar
            </Button>
                <PersonComponent onToggle={this.onToggle} person={this.state.person} notEditable={this.state.notEditable} showVehicle={this.state.showVehicle} showCompany={this.state.showCompany} showFamiliar={this.state.showFamiliar} handleChange={this.handleChange}/>
        </>
>>>>>>> no message
        );
    }
}