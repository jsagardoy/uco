import * as React from 'react';
import { PeopleEntity} from '../../model';
import {ExpandMore, ExpandLess } from '@material-ui/icons';
import { VehicleComponent } from '../vehicles';
import {dataType} from '../../common';
import Button from '@material-ui/core/Button';

interface Props {
    person: PeopleEntity;
    onToggle: (string) => void;
    showVehicle: boolean;
}

export const VehicleFormComponent: React.StatelessComponent<Props> = (props:Props) =>{
    return(
        <div className='container vehicle-component'>
            <Button className="buttonVehicle" onClick={(event) => props.onToggle(dataType.VEHICLE)}>
            <span>Vehículos</span>
                {props.showVehicle ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
            </Button>
            {props.showVehicle? 
                <div id="vehicles" className='vehicleList'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        {
                            props.person.vehicles.map((vehicle)=>
                                <VehicleComponent key={vehicle.idVehicle} vehicle={vehicle}/>
                            )
                        }
                        </li>
                    </ul>
                </div>
                :
                <>
                </>
            }
        </div>
    )
}

