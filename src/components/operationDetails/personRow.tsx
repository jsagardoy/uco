import * as React from 'react';
import {PeopleEntity} from '../../model';

interface Props {
    person : PeopleEntity,
    onClickRow: (id:number) =>void
}
var pic:string =  '';
export const PersonRow : React.StatelessComponent <Props> = (props:Props) => (
<tr onClick={()=> props.onClickRow (props.person.idPerson)}>
    <td >
         <img src={props.person.picsLinks[0].img.data} alt="person portrait" style={{ maxWidth: '10rem', maxHeight: '10rem'}}/> 
    </td>
    <td>
        {props.person.namePerson}
    </td>
    <td>
        {props.person.aka}
    </td>
</tr>
)

