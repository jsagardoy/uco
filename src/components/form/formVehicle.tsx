import * as React from 'react';
import {VehicleEntity} from '../../model/vehicle';
import { GalleryComponent } from '../../common';
import {Input,InputFile} from '../form//common';

interface Props{
    vehicle:  VehicleEntity;
    notEditable:boolean;
    handleChange:(fieldName:string,value:any,group:string)=>void;
    handlefileSelectorChange:(fieldName:string,value:File,group:string,fileName:string)=>void;
}

export const VehicleFormComponent: React.StatelessComponent<Props> = (props:Props) => {
     return(
         
         <div className="card">
            <div className="card-header" >
                <h3>{`${props.vehicle.brand} - ${props.vehicle.model}`}</h3>
                <h4>{`${props.vehicle.plate}`}</h4>
            </div>
            <div className="card-body">
                <Input  name='brand'
                        value={props.vehicle.brand}
                        placeholder={props.vehicle.brand} 
                        label='Marca'
                        group='vehicle'
                        onChange={props.handleChange}
                />
 
                <Input  name='model'
                        value={props.vehicle.model}
                        placeholder={props.vehicle.model} 
                        label='Modelo'
                        group='vehicle'
                        onChange={props.handleChange}
                />
                <Input  name='type'
                        value={props.vehicle.vehicleType}
                        placeholder={props.vehicle.vehicleType} 
                        label='Tipo de vehículo'
                        group='vehicle'
                        onChange={props.handleChange}
                />
                
                <Input  name='plate'
                        value={props.vehicle.plate}
                        placeholder={props.vehicle.plate} 
                        label='Matrícula'
                        group='vehicle'
                        onChange={props.handleChange}
                />

                <Input  name='frame'
                        value={props.vehicle.frame}
                        placeholder={props.vehicle.frame} 
                        label='Bastidor'
                        group='vehicle'
                        onChange={props.handleChange}
                />

                <GalleryComponent list={props.vehicle.pic}/>
                {
                    props.notEditable?
                    null:
                    <InputFile group='vehicle'
                            name='pics'
                            onChange={props.handlefileSelectorChange}     
                    />   
                }
            </div>
         </div>
     
     );
}