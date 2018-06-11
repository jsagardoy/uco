import * as React from 'react';
import {VehicleEntity} from '../../model/vehicle';
import { GalleryComponent } from '../helperComponent';


interface Props{
    vehicle:  VehicleEntity;
}

export const 
VehicleComponent: React.StatelessComponent<Props> = (props:Props) => {
     return(
         
         <div className="card">
            <div className="card-header" >
                <h3>{`${props.vehicle.brand} - ${props.vehicle.model}`}</h3>
                <h4>{`${props.vehicle.plate}`}</h4>
                <img src={props.vehicle.pic[0]} height="200px" width="200px" />
            </div>
            <div className="card-body">
                <label className="col-10" htmlFor="brand">Marca</label>
                <input type="text" id="brand" className="form-control" placeholder={props.vehicle.brand}/>
                
                <label className="col-10" htmlFor="model">Modelo</label>
                <input type="text" id="model" className="form-control" placeholder={props.vehicle.model}/>
                
                <label className="col-10" htmlFor="type">Tipo de Vehículo</label>
                <input type="text" id="type" className="form-control" placeholder={props.vehicle.type}/>

                <label className="col-10" htmlFor="plate">Matrícula</label>
                <input type="text" id="plate" className="form-control" placeholder={props.vehicle.plate}/>

                <label className="col-10" htmlFor="frame">Bastidor</label>
                <input type="text" id="frame" className="form-control" placeholder={props.vehicle.frame}/>
                <div className="container">
                    <GalleryComponent imagesList={props.vehicle.pic}/>
                </div>
            </div>
         </div>
     
     );
}