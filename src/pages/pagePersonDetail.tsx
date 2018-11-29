import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import {appendElementToArray, removeElementFromArray } from '../model';

import { fileSelectedHandler, handleChange } from '../common/handlers';
import {initializeState,getPerson, storePerson} from '../api/person';
import {State} from './pagePersonDetail.business';

export class DetailPersonPage extends React.Component< RouteComponentProps<any>,State> {

    constructor (props){
        super(props);

        const person:PeopleEntity = getPerson(this.props.history.location.state);
        
        storePerson(person);
       
        this.state = initializeState(
                                    this.props.history.location.state,
                                    person   
                                )
    }

    
    onToggle =(fieldId : keyof State) =>{
            this.setState({
                ...this.state,
                [fieldId]:!this.state[fieldId]
            })
    }
     
    onEdit=(fieldId:keyof State)=>{
        
        let newState:State={
            ...this.state,
            [fieldId]:!this.state[fieldId]
        }

        this.setState(newState);
    }
    
    onSave = (newPerson:PeopleEntity) => {
        //guardar datos
        console.log('datos guardados');
    }
    onCancel = (oldPerson:PeopleEntity) =>{
        //cancelar cambios
        
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
        }
        const field:string =  fieldId;
        switch (field){
            case 'companies':
                newState.notEditableCompany=false;
                newState.addNewCompany=false;
                newState.showCompany=true;
            break;
            case 'familiars':
                newState.notEditableFamiliar=false;
                newState.addNewFamiliar=false;
                newState.showFamiliar=true;
            break;
            case 'vehicles':
                newState.notEditableVehicle=false;
                newState.addNewVehicle=false;
                newState.showVehicle=true;
            break;
        }
        this.setState(newState);
        console.log(`New ${field} added`);
        
    }
    
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
    }

    render(){
        
        return (
            <PersonComponent onToggle={this.onToggle} 
                             onSave={this.onSave} 
                             onCancel={this.onCancel} 
                             onEdit={this.onEdit} 
                             person={this.state.person} 
                             addNewFamiliar={this.state.addNewFamiliar}
                             addNewCompany={this.state.addNewCompany}
                             addNewVehicle={this.state.addNewVehicle}
                             notEditablePerson={this.state.notEditablePerson} 
                             notEditableVehicle={this.state.notEditableVehicle} 
                             notEditableFamiliar={this.state.notEditableFamiliar} 
                             notEditableRutine={this.state.notEditableRutine} 
                             notEditableLinks={this.state.notEditableLinks} 
                             notEditableCompany={this.state.notEditableCompany} 
                             showVehicle={this.state.showVehicle} 
                             showCompany={this.state.showCompany} 
                             showFamiliar={this.state.showFamiliar}
                             handleChange={this.handleChange}
                             fileSelectedHandler={this.fileSelectedHandler} 
                             savingNew={this.savingNew}
                             addingNew={this.addingNew}
                             removeFromList={this.removeFromList}
                             
               
            />
        );
    }
}