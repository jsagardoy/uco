import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import {appendElementToArray } from '../model';

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
    
    addingNew = (fieldId:keyof State) :void =>{
        let newState:State = {
            ...this.state,
            [fieldId]:!this.state[fieldId]
        }
        
        this.setState(newState);
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
                             notEditable={this.state.notEditable} 
                             showVehicle={this.state.showVehicle} 
                             showCompany={this.state.showCompany} 
                             showFamiliar={this.state.showFamiliar}
                             handleChange={this.handleChange}
                             fileSelectedHandler={this.fileSelectedHandler} 
                             savingNew={this.savingNew}
                             addingNew={this.addingNew}
                             
               
            />
        );
    }
}