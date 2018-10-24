import * as React from 'react';
import {CompanyEntity} from '../../model/company';
import { LocationOn } from '@material-ui/icons';
import { Input } from './common';



interface Props {
    company: CompanyEntity;
    handleChange:(fieldName:string,value:any,group:string)=>void;
}

export const CompanyFormComponent: React.StatelessComponent<Props> = (props:Props) => (
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

)