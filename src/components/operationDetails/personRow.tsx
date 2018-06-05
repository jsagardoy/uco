import * as React from 'react';
import {PeopleEntity} from '../../model';

interface Props {
    person : PeopleEntity,
    onClickRow: (id:number) =>void
}

export const PersonRow : React.StatelessComponent <Props> = (props:Props) => (
<tr onClick={()=> props.onClickRow (props.person.id)}>
    <td >
        <img src={props.person.picsLinks[0]} alt="person portrait" style={{ maxWidth: '10rem', maxHeight: '10rem'}}/>
    </td>
    <td>
        {props.person.name}
    </td>
    <td>
        {props.person.aka}
    </td>
</tr>
)

