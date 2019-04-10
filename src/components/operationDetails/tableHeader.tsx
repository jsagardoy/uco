import * as React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { css } from 'emotion';
import { colors } from '../../common';

//Styles
const cellStyles = css`
    background-color: ${colors.GREEN};
    color: ${colors.YELLOW};
`;


//endStyles
export const TableHeaderOperationDetailComponent: React.StatelessComponent = () => {
    return (
        <TableHead>
          <TableRow>
                <TableCell className={cellStyles} align='left'>Foto</TableCell>
                <TableCell className={cellStyles} align='left'>Nombre</TableCell>
                <TableCell className={cellStyles} align='left'>Alias</TableCell>
           </TableRow> 
        </TableHead>
    );
}


