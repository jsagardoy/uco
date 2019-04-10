import * as React from 'react';
import { PeopleEntity } from '../../model';
import { PersonRow } from '.';
import { TableBody } from '@material-ui/core';


interface Props {
    people: Array <PeopleEntity>,
    onClickRow: (idPerson:number) =>void
    
}

export const TableBodyComponent: React.StatelessComponent<Props> = (props:Props) =>(

<TableBody>
{
    props.people?
    props.people.map((person : PeopleEntity)=> (
        <PersonRow key={person.idPerson} 
                   person = {person}
                   onClickRow={props.onClickRow}   
        />
    ))
    :
    null
}
</TableBody>
)