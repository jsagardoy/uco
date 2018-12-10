import * as React from 'react';
import { PeopleEntity, FamiliarEntity, CompanyEntity } from '../../model';
import { Edit, Save, Cancel, ExpandMore, ExpandLess } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import { PersonFormComponent } from '../form';

import { VehicleComponent } from '../vehicles';
import { CompanyComponent } from '../company';
import { RutinesComponent } from '../rutines';
import { LinksComponent } from '../links';

import "../../content/site.css";
import { dataType } from '../../common';
import { FamiliarComponent } from '../familiar';

import { createNewCompany, createNewFamiliar, createNewVehicle } from '.';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';

interface Props {
    person: PeopleEntity;
    editablePerson: boolean;
    editableVehicle: boolean;
    editableCompany: boolean;
    editableRutine: boolean;
    editableLinks: boolean;
    editableFamiliar: boolean;
    showVehicle: boolean;
    showCompany: boolean;
    showFamiliar: boolean;
    addNewFamiliar: boolean;
    addNewCompany: boolean;
    addNewVehicle: boolean;
    onToggle: (string) => void;
    onEdit: (fieldId: string) => void;
    handleChange: (fieldName: string, value: any, group: string) => void;
    fileSelectedHandler: (fieldName: string, value: any, group: string, fileName: string) => void;
    savingNew: (fieldId: string, element: any) => void;
    addingNew: (fieldId: string, group: string, value:any) => void;
    removeFromList: (fieldId: string, index: number) => void;
}



export const PersonComponent: React.StatelessComponent<Props> = (props: Props) => {
    var oldPerson: PeopleEntity = { ...props.person };
    const newFamiliar = createNewFamiliar();
    const newCompany = createNewCompany();
    const newVehicle = createNewVehicle();
    return (

        <Card>


            <Card className="person.card">
                <CardActionArea>
                    <CardContent>
                        <PersonFormComponent person={props.person}
                            editable={props.editablePerson}
                            handleChange={props.handleChange}
                            handlefileSelectorChange={props.fileSelectedHandler}
                        />
                    </CardContent>
                </CardActionArea>
            </Card>


            <Button className="buttonVehicle" onClick={(event) => props.onToggle(dataType.VEHICLE)}>
                <span>Vehículos</span>
                {props.showVehicle ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
            </Button>

            {
                    props.person.vehicles.map((vehicle, index) => (
                        <VehicleComponent key={vehicle.idVehicle}
                            vehicle={vehicle}
                            index={index}
                            showVehicle={props.showVehicle}
                            onToggle={props.onToggle}
                            addNew={props.addNewVehicle}
                            removeFromList={props.removeFromList}
                        />
                    )) 

            }

            {
                props.showVehicle ?
                    <Button onClick={(e) => props.addingNew("addNewVehicle", 'vehicles',newVehicle)}>Añadir nuevo vehiculo</Button>
                    :
                    <></>
            }

            <Button onClick={(event) => props.onToggle(dataType.COMPANY)}>
                <span>Empresas</span>
                {
                    props.showCompany ?
                        <ExpandLess /> :
                        <ExpandMore />
                }
            </Button>
            {
                props.addNewCompany ?
                    <CompanyComponent addNewCompany={props.addNewCompany}
                        company={newCompany}
                        showCompany={props.showCompany}
                        savingNew={props.savingNew}
                        onToggle={props.onToggle}
                        removeFromList={props.removeFromList}
                    />
                    :
                    props.person.companies.map((company, index) => (
                        <CompanyComponent addNewCompany={props.addNewCompany}
                            key={company.idCompany}
                            index={index}
                            company={company}
                            showCompany={props.showCompany}
                            savingNew={props.savingNew}
                            onToggle={props.onToggle}
                            removeFromList={props.removeFromList}
                        />
                    )
                    )
            }
            {
                props.showCompany ?
                    <Button onClick={(e) => props.addingNew("addNewCompany", 'companies',newCompany)}>Añadir nueva Empresa</Button>
                    :
                    <></>
            }


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
            {

                props.person.familiars.map((familiar, index) => (
                    <FamiliarComponent key={familiar.idFamiliar}
                        familiar={familiar}
                        showFamiliar={props.showFamiliar}
                        onToggle={props.onToggle}
                        addNew={props.addNewFamiliar}
                        removeFromList={props.removeFromList}
                        index={index}
                    />
                ))
            }

            <CardActions>
                {
                props.showFamiliar?
                <Button onClick={(e) => props.addingNew('addNewFamiliar','familiars',newFamiliar)}>Añadir nuevo Familiar</Button>
                :
                null
                }
            </CardActions>
            
        </Card>

    );
}
