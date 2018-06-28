import * as React from 'react';
import { PeopleEntity } from '../../model';
import { PersonRow } from '.';


interface Props {
    people: Array <PeopleEntity>,
    onClickRow: (idPerson:number) =>void
    
}

export const TableBodyComponent: React.StatelessComponent<Props> = (props:Props) =>(

<tbody>
{
    props.people.map((person : PeopleEntity)=> (
        <PersonRow key={person.idPerson} 
                   person = {person}
                   onClickRow={props.onClickRow}   
        />
    ))
}
</tbody>
)