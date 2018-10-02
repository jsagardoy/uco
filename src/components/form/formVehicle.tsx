import * as React from 'react';
import { PeopleEntity} from '../../model';
import {ExpandMore, ExpandLess } from '@material-ui/icons';
import { VehicleComponent } from '../vehicles';
import {dataType} from '../../common'

interface Props {
    person: PeopleEntity;
    onToggle: (string) => void;
    showVehicle: boolean;
}

export const VehicleFormComponent: React.StatelessComponent<Props> = (props:Props) =>{
    return(
        <div className='vehicle-component'>
            <button type="button" className="buttonVehicle" onClick={(event) => props.onToggle(dataType.VEHICLE)}>
                {props.showVehicle ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
                <span>Vehículos</span>
            </button>
            props.showVehicle ? 
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
        </div>
    )
}

