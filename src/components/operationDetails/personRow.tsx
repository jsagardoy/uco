import * as React from 'react';
import {PeopleEntity} from '../../model';
import { TableRow, TableCell } from '@material-ui/core';
import { css } from 'emotion';

interface Props {
    person : PeopleEntity,
    onClickRow: (id:number) =>void
}

const imgStyle = css`
    border-radius: 50%;
    max-Width: 5em;
    max-Height: 5em;
`;

var pic:string =  '';
export const PersonRow : React.StatelessComponent <Props> = (props:Props) => (
<TableRow onClick={()=> props.onClickRow (props.person.idPerson)}>
    <TableCell align='left'>
         <img className={imgStyle} src={props.person.picsLinks[0].img.data} alt="person portrait" /> 
    </TableCell>
    <TableCell align='left'>
        {props.person.namePerson}
    </TableCell>
    <TableCell align='left'>
        {props.person.aka}
    </TableCell>
</TableRow>
)

