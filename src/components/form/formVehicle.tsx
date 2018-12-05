import * as React from 'react';
import {VehicleEntity} from '../../model/vehicle';
import { GalleryComponent } from '../../common';
import {Input,InputFile} from '../form//common';


interface Props{
    vehicle:  VehicleEntity;
    addNew:boolean;
    handleChange:(fieldName:string,value:any,group:string)=>void;
    handlefileSelectorChange:(fieldName:string,value:File,group:string,fileName:string)=>void;
    savingNew: (fieldId: string,element:any)=>void;
}

export const VehicleFormComponent: React.StatelessComponent<Props> = (props:Props) => {
     return(
        props.addNew?
         <>    
        <h3>{`${props.vehicle.brand} - ${props.vehicle.model}`}</h3>
        <h4>{`${props.vehicle.plate}`}</h4>
        
        <Input  name='brand'
                value={props.vehicle.brand}
                placeholder={props.vehicle.brand} 
                label='Marca'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />

        <Input  name='model'
                value={props.vehicle.model}
                placeholder={props.vehicle.model} 
                label='Modelo'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />
        <Input  name='vehicleType'
                value={props.vehicle.vehicleType}
                placeholder={props.vehicle.vehicleType} 
                label='Tipo de vehículo'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />
        
        <Input  name='plate'
                value={props.vehicle.plate}
                placeholder={props.vehicle.plate} 
                label='Matrícula'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />

        <Input  name='frame'
                value={props.vehicle.frame}
                placeholder={props.vehicle.frame} 
                label='Bastidor'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />

        <GalleryComponent list={props.vehicle.pic}/>
        {
                props.vehicle.editable?
               
                <InputFile group='vehicle'
                        name='pic'
                        onChange={props.handlefileSelectorChange}     
                />:  
                null
        }
     </>
     :
     <>    
        <h3>{`${props.vehicle.brand} - ${props.vehicle.model}`}</h3>
        <h4>{`${props.vehicle.plate}`}</h4>
        
        <Input  name='brand'
                value={props.vehicle.brand}
                placeholder={props.vehicle.brand} 
                label='Marca'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />

        <Input  name='model'
                value={props.vehicle.model}
                placeholder={props.vehicle.model} 
                label='Modelo'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />
        <Input  name='vehicleType'
                value={props.vehicle.vehicleType}
                placeholder={props.vehicle.vehicleType} 
                label='Tipo de vehículo'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />
        
        <Input  name='plate'
                value={props.vehicle.plate}
                placeholder={props.vehicle.plate} 
                label='Matrícula'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />

        <Input  name='frame'
                value={props.vehicle.frame}
                placeholder={props.vehicle.frame} 
                label='Bastidor'
                group='vehicle'
                onChange={props.handleChange}
                editable={props.vehicle.editable}
        />

        <GalleryComponent list={props.vehicle.pic}/>
        {
                props.vehicle.editable?
            
                <InputFile group='vehicle'
                        name='pic'
                        onChange={props.handlefileSelectorChange}     
                /> 
                :
                null 
        }
            
     </>
     );
}