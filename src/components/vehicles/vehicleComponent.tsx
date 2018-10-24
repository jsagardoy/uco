import * as React from 'react';
import { PeopleEntity, VehicleEntity} from '../../model';
import { fileSelectedHandler, handleChange } from '../../common/handlers';

import {VehicleFormComponent} from '../form/formVehicle';
import {dataType, readFile} from '../../common';
import Button from '@material-ui/core/Button';

interface Props {
    vehicle: VehicleEntity; 
    showVehicle: boolean;
    notEditable:boolean;
    onToggle: (string) => void;
}

interface State {
    vehicle:VehicleEntity;
}

export class VehicleComponent extends React.Component<Props,State> {

    constructor(props:Props) {
        super(props);
        this.state={vehicle:this.props.vehicle}
    }
    
    fileSelectedHandler = (fieldName:string,value:File,group:string, fileName:string) => { 
        
        fileSelectedHandler(fieldName, value, group, fileName,this.state.vehicle,(data)=>{
            let newState:State={
                ...this.state,
                vehicle:data
            }
            this.setState(newState);
        })
    }
  
    handleChange = (fieldName:string, value:any, group:string) =>{
        this.setState(handleChange(fieldName,value,group,this.state));
    }
    render(){
        return(

                    this.props.showVehicle? 
                    <li >
                        <VehicleFormComponent   vehicle={this.state.vehicle}
                                                notEditable={this.props.notEditable}
                                                handleChange={this.handleChange}
                                                handlefileSelectorChange={this.fileSelectedHandler}
                        />
                    </li>
                    :
                    <>
                    </>
        )
    }
}

