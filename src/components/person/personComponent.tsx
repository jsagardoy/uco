import * as React from 'react';
import {PeopleEntity} from '../../model';
/* import {ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {FamiliarComponent} from '../familiar'; */

import {
        PersonFormComponent,
        VehicleFormComponent,
        CompanyFormComponent,
        RutinesFormComponent,
        LinksFormComponent,
        FamiliarFormComponent
        } from '../form';

import "../../content/site.css";

interface Props {
    person: PeopleEntity;
    notEditable:boolean;
    showVehicle:boolean;
    showCompany:boolean;
    showFamiliar:boolean;
    onToggle:(string)=>void;
    
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
        
        <form className="formPerson">
            <fieldset disabled={props.notEditable}>
                <PersonFormComponent person={props.person} 
                />
                
                <VehicleFormComponent person={props.person} 
                                      showVehicle={props.showVehicle}
                                      onToggle={props.onToggle}
                />
                
                <CompanyFormComponent person={props.person}
                                      showCompany={props.showCompany}
                                      onToggle={props.onToggle}
                />

                <RutinesFormComponent person={props.person} 
                />

                <LinksFormComponent person={props.person}
                />
                
                <FamiliarFormComponent person={props.person}
                                       showFamiliar={props.showFamiliar}
                                       onToggle={props.onToggle}
                />
                
            </fieldset>
        </form>

    );
}
