import * as React from 'react';
import {RouteComponentProps} from 'react-router';

import {PeopleEntity} from '../model/people';
import { PersonComponent } from '../components/person';

import axios from 'axios';
import { OperationEntity } from '../model';
import { stringToBase64} from '../common'
import {readFile} from '../common/readFile';

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
    fileSelectedHandler = (fieldName:string,value:File,group:string, fileName:string) => {
        let newArray:Array<any>=[];
        newArray = [...this.state[group][fieldName]];
        //get fileExtension
        const fileExtension = 'image/'+fileName.substring(fileName.lastIndexOf('.')+1);
        
        //getBase64(value);
        //let reader = new FileReader();
    
        readFile(value,(data)=>{
        console.log(data);
        let newElement = {img:{data:data,contentType:fileExtension}}
            newArray.push(newElement);

            let newState:State = {
                ...this.state,
                [group]:{
                    ...this.state[group],
                    [fieldName]:newArray,
                }
            };
            this.setState(newState); 
        } );           
    }
    handleChange = (fieldName:string, value:any, group:string) =>{
        const newState:State = {
            ...this.state,
            [group]:{
                ...this.state[group],
                [fieldName]:value
            }
        };
        this.setState(newState);
    }

    render(){
        
        return (

            <PersonComponent onToggle={this.onToggle} 
                             onSave={this.onSave} 
                             onCancel={this.onCancel} 
                             onEdit={this.onEdit} 
                             person={this.state.person} 
                             notEditable={this.state.notEditable} 
                             showVehicle={this.state.showVehicle} 
                             showCompany={this.state.showCompany} 
                             showFamiliar={this.state.showFamiliar}
                             handleChange={this.handleChange}
                             fileSelectedHandler={this.fileSelectedHandler}
            />
        );
    }
}