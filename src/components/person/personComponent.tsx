import * as React from 'react';
import {PeopleEntity} from '../../model';
import {Edit,Save,Cancel,ExpandMore, ExpandLess} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import {
        PersonFormComponent,
        } from '../form';

import {VehicleComponent} from '../vehicles';
import {CompanyComponent} from '../company';
import {RutinesComponent} from '../rutines';
import {LinksComponent} from '../links';

import "../../content/site.css";
import { dataType } from '../../common';
import { FamiliarComponent } from '../familiar';

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
                        <Cancel />
                    </Button>  
                </>
                }
                <PersonFormComponent    person={props.person}
                                        notEditable={props.notEditable}
                                        handleChange={props.handleChange} 
                                        handlefileSelectorChange={props.fileSelectedHandler}
                />
               
 
                {
                <Button className="buttonVehicle" onClick={(event) => props.onToggle(dataType.VEHICLE)}>
                <span>Vehículos</span>
                    {props.showVehicle ?
                        <ExpandLess /> :
                        <ExpandMore />
                    }
                </Button> 
                }
                <ul>
                {
                
                props.person.vehicles.map((vehicle)=>(
                    <VehicleComponent key={vehicle.idVehicle}
                                      vehicle={vehicle} 
                                      showVehicle={props.showVehicle}
                                      notEditable={props.notEditable}
                                      onToggle={props.onToggle}
                    />
                ))
        
                }
                </ul>

                <Button onClick={(event)=>props.onToggle(dataType.COMPANY)}>
                    <span>Empresas</span>
                    {
                        props.showCompany? 
                        <ExpandLess/>:
                        <ExpandMore/>
                    }
                </Button>
                <ul>
                {
                props.person.companies.map((company)=>(
                    <CompanyComponent   key={company.idCompany}
                                        company={company}
                                        showCompany={props.showCompany}
                                        onToggle={props.onToggle}
                />
                ))
                }
                </ul>
    
                <RutinesComponent rutines={props.person.rutines}
                />

                <LinksComponent links={props.person.links}
                />
                <Button onClick={(event) => props.onToggle(dataType.FAMILIAR)}>
                    <span>Familiares</span>
                    {props.showFamiliar ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
                </Button>
                {props.person.familiars.map((familiar)=>(
                    <FamiliarComponent  key={familiar.idFamiliar}
                                        notEditable={props.notEditable}
                                        familiar={familiar}
                                        showFamiliar={props.showFamiliar}
                                        onToggle={props.onToggle}
                />))}
                
            </fieldset>
        </form>

    );
}
