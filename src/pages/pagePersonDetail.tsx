import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent} from '../components/person';

import {appendElementToArray, removeElementFromArray } from '../model';

import { fileSelectedHandler, handleChange } from '../common/handlers';
import {initializeState,getPerson, storePerson} from '../api/person';
import {State} from './pagePersonDetail.business';
import { Button } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import {Link} from 'react-router-dom';

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
                newState.editableCompany=false;
                newState.addNewCompany=false;
                newState.showCompany=true;
            break;
            case 'familiars':
                newState.editableFamiliar=false;
                newState.addNewFamiliar=false;
                newState.showFamiliar=true;
            break;
            case 'vehicles':
                newState.editableVehicle=false;
                newState.addNewVehicle=false;
                newState.showVehicle=true;
            break;
        }
        this.setState(newState);
        console.log(`New ${field} added`);
        
    }
   
    addingNew = (fieldId:keyof State, group:string, newElement:any) :void =>{

        let newState: State = {
            ...this.state,
            [fieldId]: true,
        }
        let newArray = appendElementToArray(newState.person[group], newElement);

        newState.person[group] = newArray;
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
    goBack =() =>{

    }

    render(){
        
        return (
            <>
            <PersonComponent onToggle={this.onToggle} 
                             onEdit={this.onEdit} 
                             person={this.state.person} 
                             addNewFamiliar={this.state.addNewFamiliar}
                             addNewCompany={this.state.addNewCompany}
                             addNewVehicle={this.state.addNewVehicle}
                             editablePerson={this.state.editablePerson} 
                             editableVehicle={this.state.editableVehicle} 
                             editableFamiliar={this.state.editableFamiliar} 
                             editableRutine={this.state.editableRutine} 
                             editableLinks={this.state.editableLinks} 
                             editableCompany={this.state.editableCompany} 
                             showVehicle={this.state.showVehicle} 
                             showCompany={this.state.showCompany} 
                             showFamiliar={this.state.showFamiliar}
                             handleChange={this.handleChange}
                             fileSelectedHandler={this.fileSelectedHandler} 
                             savingNew={this.savingNew}
                             addingNew={this.addingNew}
                             removeFromList={this.removeFromList}
                            
            />
                <Link to={`/operationDetail/3`}><ArrowLeft/></Link> 
            
            </>
        );
    }
}