import * as React from 'react';
import { PeopleEntity } from '../../model';
import { PersonRow } from '.';


interface Props {
    people: Array <PeopleEntity>,
    onClickRow: (id:number) =>void
    
}

export const TableBodyComponent: React.StatelessComponent<Props> = (props:Props) =>(

<tbody>
{
    props.people.map((person : PeopleEntity)=> (
        <PersonRow key={person.id} 
                   person = {person}
                   onClickRow={props.onClickRow}   
        />
    ))
}
</tbody>
)