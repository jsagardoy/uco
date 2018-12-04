import * as React from 'react';
import { FamiliarEntity } from '../../model/familiar';
import { LocationOn } from '@material-ui/icons';
import { GalleryComponent } from '../../common';
import { Input, InputFile } from './common';
import Button from '@material-ui/core/Button';

interface Props {
        familiar: FamiliarEntity;
        addNew: boolean;
        savingNew: (fieldId: string, element: any) => void;
        handleChange: (fieldName: string, value: any, group: string) => void;
        handlefileSelectorChange: (fieldName: string, value: File, group: string, fileName: string) => void;
}

export const FamiliarFormComponent: React.StatelessComponent<Props> = (props: Props) => (
        <>
                <h3> {props.familiar.nameFamiliar}</h3>
                {props.addNew ?
                        <div>
                                <Input name='nameFamiliar'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.nameFamiliar}
                                        placeholder={props.familiar.nameFamiliar}
                                        label='Nombre'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />
                                <Input name='familiarAddress'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.familiarAddress}
                                        placeholder={props.familiar.familiarAddress}
                                        label='Dirección'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />
                                <Input name='addressLink'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.addressLink}
                                        placeholder={props.familiar.addressLink}
                                        label='URL de ubicación del domicilio'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />

                                <Input name='related'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.related}
                                        placeholder={props.familiar.related}
                                        label='Tipo de relación'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />
                                <GalleryComponent list={props.familiar.familiarPics} />
                                {
                                        props.familiar.notEditable ? 
                                                <InputFile group='familiars'
                                                        name='familiarPics'
                                                        onChange={props.handlefileSelectorChange}
                                                />
                                                :null
                                }
                                
                        </div> :
                        <div>
                                <Input name='nameFamiliar'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.nameFamiliar}
                                        placeholder={props.familiar.nameFamiliar}
                                        label='Nombre'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />
                                <Input name='familiarAddress'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.familiarAddress}
                                        placeholder={props.familiar.familiarAddress}
                                        label='Dirección'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />
                                <a target="_blank" href={props.familiar.addressLink}><LocationOn /> Ubicación del Domicilio</a>

                                <Input name='related'
                                        notEditable={props.familiar.notEditable}
                                        value={props.familiar.related}
                                        placeholder={props.familiar.related}
                                        label='Tipo de relación'
                                        group='familiar'
                                        onChange={props.handleChange}
                                />
                                <GalleryComponent list={props.familiar.familiarPics} />
                                {
                                        props.familiar.notEditable ?
                                                <InputFile group='familiars'
                                                        name='familiarPics'
                                                        onChange={props.handlefileSelectorChange}
                                                />
                                                :null
                                }
                        </div>
                }
        </>
)