import * as React from 'react';
import {CompanyEntity} from '../../model/company';
import { LocationOn } from '@material-ui/icons';


interface Props {
    company: CompanyEntity;
}


export const CompanyComponent: React.StatelessComponent<Props> = (props:Props) => (
    <>
        <label className="col-10" htmlFor="name">Nombre</label>
        <input type="text" id="name" className="form-control" placeholder={props.company.name}/>
       
        <label className="col-10" htmlFor="cif">CIF</label>
        <input type="text" id="cif" className="form-control" placeholder={props.company.cif}/>
        
        <label className="col-10" htmlFor="address">Dirección</label>
        <input type="text" id="address" className="form-control" placeholder={props.company.address}/>
        
        <a target="_blank" href={props.company.map}> <LocationOn/>Ubicación </a>
   
    </>
)