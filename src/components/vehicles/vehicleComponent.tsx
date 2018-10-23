import * as React from 'react';
import { PeopleEntity, VehicleEntity} from '../../model';
import {ExpandMore, ExpandLess } from '@material-ui/icons';
import {VehicleFormComponent} from '../form/formVehicle';
import {dataType} from '../../common';
import Button from '@material-ui/core/Button';

interface Props {
    vehicle: VehicleEntity; 
    showVehicle: boolean;
    notEditable:boolean;
    onToggle: (string) => void;
    handleChange:(fieldName:string,value:any,group:string)=>void;
    handlefileSelectorChange:(fieldName:string,value:File,group:string,fileName:string)=>void;
}

export const VehicleComponent: React.StatelessComponent<Props> = (props:Props) =>{
    return(
        <div className='container vehicle-component'>
            <Button className="buttonVehicle" onClick={(event) => props.onToggle(dataType.VEHICLE)}>
            <span>Vehículos</span>
                {props.showVehicle ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
            </Button>
            {
                props.showVehicle? 
                <li className="list-group-item">
                    <VehicleFormComponent   vehicle={props.vehicle}
                                            notEditable={props.notEditable}
                                            handleChange={props.handleChange}
                                            handlefileSelectorChange={props.handlefileSelectorChange}
                    />
                </li>
                :
                <>
                </>
            }
        </div>
    )
}

