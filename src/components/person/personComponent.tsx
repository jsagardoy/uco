import * as React from 'react';
import {PeopleEntity} from '../../model';
import {Edit,Save,Cancel} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

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
    onEdit:()=>void;
    handleChange: (fieldName:string, value:any, group:string) => void;
    fileSelectedHandler:(fieldName:string, value:any, group:string,fileName:string) => void;
    onSave:(person) =>void;
    onCancel:(person)=>void;
}

export const PersonComponent: React.StatelessComponent<Props> = (props:Props) => {
    var oldPerson:PeopleEntity = {...props.person};
    return(
        
        <form className="formPerson" encType="multipart/form-data">
            <fieldset disabled={props.notEditable}>
                {
                    props.notEditable?
                <Button onClick={props.onEdit}>
                    <Edit />
                </Button>
                :
                <>
                    <Button onClick={()=>props.onSave(oldPerson)}>
                        <Save />
                    </Button>
                    <Button onClick={()=>props.onCancel(oldPerson)}>
                        {console.log(oldPerson.namePerson)}
                        <Cancel />
                    </Button>  
                </>
                }
                <PersonFormComponent person={props.person}
                                     notEditable={props.notEditable}
                                     handleChange={props.handleChange} 
                                     handlefileSelectorChange={props.fileSelectedHandler}
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
