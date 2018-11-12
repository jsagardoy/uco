import * as React from 'react';
import { FamiliarEntity } from '../../model/familiar';
import { LocationOn } from '@material-ui/icons';
import {GalleryComponent} from '../../common';
import { Input, InputFile } from './common';
import Button from '@material-ui/core/Button';

interface Props{
    familiar:FamiliarEntity;
    notEditable:boolean;
    addNew:boolean;
    savingNew:(familiar:FamiliarEntity)=>void;
    handleChange:(fieldName:string,value:any,group:string)=>void;
    handlefileSelectorChange:(fieldName:string,value:File,group:string,fileName:string)=>void;
}

export const FamiliarFormComponent: React.StatelessComponent<Props> = (props:Props) =>( 
        
        props.addNew?
        <div>
         <h3> {props.familiar.nameFamiliar}</h3>
         <Input  name='nameFamiliar'
                 value={props.familiar.nameFamiliar}
                 placeholder={props.familiar.nameFamiliar} 
                 label='Nombre'
                 group='familiar'
                 onChange={props.handleChange}
         />
         <Input  name='familiarAddress'
                 value={props.familiar.familiarAddress}
                 placeholder={props.familiar.familiarAddress} 
                 label='Dirección'
                 group='familiar'
                 onChange={props.handleChange}
         />
         <Input name='addressLink'
                value={props.familiar.addressLink}
                placeholder={props.familiar.addressLink} 
                label='URL de ubicación del domicilio'
                group='familiar'
                onChange={props.handleChange}
        />
 
         <Input  name='related'
                 value={props.familiar.related}
                 placeholder={props.familiar.related} 
                 label='Tipo de relación'
                 group='familiar'
                 onChange={props.handleChange}
         />
         <GalleryComponent list={props.familiar.familiarPics}/> 
         {
         props.notEditable?
         null:
         <InputFile group='familiars'
                 name='familiarPics'
                 onChange={props.handlefileSelectorChange}     
         />   
         } 
         <Button onClick={(e)=>props.savingNew(props.familiar)}>Guardar nuevo</Button>
         </div>:
        <div>
                <Input  name='nameFamiliar'
                        value={props.familiar.nameFamiliar}
                        placeholder={props.familiar.nameFamiliar} 
                        label='Nombre'
                        group='familiar'
                        onChange={props.handleChange}
                />
                <Input  name='familiarAddress'
                        value={props.familiar.familiarAddress}
                        placeholder={props.familiar.familiarAddress} 
                        label='Dirección'
                        group='familiar'
                        onChange={props.handleChange}
                />
                <a target="_blank" href={props.familiar.addressLink}><LocationOn/> Ubicación del Domicilio</a> 

                <Input  name='related'
                        value={props.familiar.related}
                        placeholder={props.familiar.related} 
                        label='Tipo de relación'
                        group='familiar'
                        onChange={props.handleChange}
                />
                <GalleryComponent list={props.familiar.familiarPics}/> 
                {
                props.notEditable?
                null:
                <InputFile group='familiars'
                        name='familiarPics'
                        onChange={props.handlefileSelectorChange}     
                />   
                }
        </div>
)