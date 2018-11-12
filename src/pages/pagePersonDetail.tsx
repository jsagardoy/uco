import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import { OperationEntity, FamiliarEntity, appendElementToArray, CompanyEntity } from '../model';

import {readFile} from '../common/readFile';
import { fileSelectedHandler, handleChange } from '../common/handlers';

interface State{
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    addNewFamiliar:boolean;
    addNewCompany:boolean;
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
                addNewFamiliar:false,
                addNewCompany:false,
            } 
        :
             this.state= ({
                 person:person, 
                 notEditable:true,
                 showVehicle:false,
                 showCompany:false,
                 showFamiliar:false,
                 addNewFamiliar:false,
                 addNewCompany:false,
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
    savingNewFamiliar = (familiar:FamiliarEntity):void=>{
        const newArray =  appendElementToArray(this.state.person.familiars,familiar);

        const newState:State =  {
                            ...this.state,
                            person:{
                                ...this.state.person,
                                familiars:newArray,
                            },
                            showFamiliar:true,
                            addNewFamiliar:false,
                            notEditable:false 
                        }
        this.setState(newState);
        console.log('New familiar added');
    
    } 
    
    savingNewCompany = (company:CompanyEntity):void=>{
        const newArray =  appendElementToArray(this.state.person.companies,company);

        const newState:State =  {
                            ...this.state,
                            person:{
                                ...this.state.person,
                                companies:newArray,
                            },
                            showCompany:true,
                            addNewCompany:false,
                            notEditable:false 
                        }
        this.setState(newState);
        console.log('New company added');
    
    } 
    addingNewFamiliar = ():void =>{
        const newState:State = {
                                ...this.state,
                                addNewFamiliar:!this.state.addNewFamiliar,
                                }
        this.setState(newState);
    }

    addingNewCompany = ():void=>{
        const newState:State = {
            ...this.state,
            addNewCompany:!this.state.addNewCompany,
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
                             notEditable={this.state.notEditable} 
                             showVehicle={this.state.showVehicle} 
                             showCompany={this.state.showCompany} 
                             showFamiliar={this.state.showFamiliar}
                             handleChange={this.handleChange}
                             fileSelectedHandler={this.fileSelectedHandler} 
                             savingNewFamiliar={this.savingNewFamiliar}
                             savingNewCompany={this.savingNewCompany}
                             addingNewFamiliar={this.addingNewFamiliar}
                             addingNewCompany={this.addingNewCompany}
                             
            />
        );
    }
}