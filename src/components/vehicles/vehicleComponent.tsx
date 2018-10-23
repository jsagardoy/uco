import * as React from 'react';
import { PeopleEntity, VehicleEntity} from '../../model';

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
        return(

                    this.props.showVehicle? 
                    <li className="list-group-item">
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

