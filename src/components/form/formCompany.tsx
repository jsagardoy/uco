import * as React from 'react';
import {CompanyEntity} from '../../model/company';
import { LocationOn } from '@material-ui/icons';
import { Input } from './common';
import Button from '@material-ui/core/Button';



interface Props {
    company: CompanyEntity;
    addNewCompany:boolean;
    handleChange:(fieldName:string,value:any,group:string)=>void;
    savingNewCompany:(company:CompanyEntity)=>void;
}

export const CompanyFormComponent: React.StatelessComponent<Props> = (props:Props) => (

    <>
    {props.addNewCompany?
    <div className="card-body">
        <Input  name='nameCompany'
                value={props.company.nameCompany}
                placeholder={props.company.nameCompany} 
                label='Nombre'
                group='company'
                onChange={props.handleChange}
        />
        <Input  name='cif'
                value={props.company.cif}
                placeholder={props.company.cif} 
                label='CIF'
                group='company'
                onChange={props.handleChange}
        />
        <Input  name='address'
                value={props.company.address}
                placeholder={props.company.address} 
                label='Dirección'
                group='company'
                onChange={props.handleChange}
        />
        <Input  name='map'
                value={props.company.map}
                placeholder={props.company.map} 
                label='URL Ubicación de la empresa'
                group='company'
                onChange={props.handleChange}
        />
         <Button onClick={(e)=>props.savingNewCompany(props.company)}>Guardar nuevo</Button>
    </div>
    :
    <div className="card-body">
        <Input  name='nameCompany'
                value={props.company.nameCompany}
                placeholder={props.company.nameCompany} 
                label='Nombre'
                group='company'
                onChange={props.handleChange}
        />
        <Input  name='cif'
                value={props.company.cif}
                placeholder={props.company.cif} 
                label='CIF'
                group='company'
                onChange={props.handleChange}
        />
        <Input  name='address'
                value={props.company.address}
                placeholder={props.company.address} 
                label='address'
                group='company'
                onChange={props.handleChange}
        />
        <a target="_blank" href={props.company.map}> <LocationOn/>Ubicación </a>
    </div>
    }
</>
)