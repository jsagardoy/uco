import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const TableHeaderComponent: React.StatelessComponent = () =>{


    return(
        <TableRow>
            <TableCell align='left'>Nombre</TableCell>
            <TableCell align='left'>Operacion</TableCell>
            <TableCell align='left'>Estado</TableCell>
        </TableRow>
    );}
