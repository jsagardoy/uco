import * as React from 'react';
import { CompanyComponent } from '../company';
import { CompanyEntity, PeopleEntity } from '../../model';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {dataType} from '../../common';

interface Props {
    person: PeopleEntity;
    showCompany: boolean;
    onToggle: (string) => void;
}

export const CompanyFormComponent:React.StatelessComponent<Props> = (props:Props) =>{
return(
    <div className="companies-component">
        <Button onClick={(event)=>props.onToggle(dataType.COMPANY)}>
            <span>Empresas</span>
            {
                props.showCompany? 
                <ExpandLess/>:
                <ExpandMore/>
            }
        </Button>
        {
        props.showCompany?
            <div id="companies" className='form-group'>
                {
                    props.person.companies.map((company:CompanyEntity)=>
                    <CompanyComponent key={company.idCompany} company={company}/>
                )
                }
            </div>
        :
            <>
            </>
        }
    </div>
)
}