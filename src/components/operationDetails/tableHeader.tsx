import * as React from 'react';
import { TableHead, TableRow, TableCell, withStyles, createStyles } from '@material-ui/core';
import { css } from 'emotion';
import { colors } from '../../common';

//Styles

const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      backgroundColor: colors.GREEN,
      color: colors.YELLOW,
    },
  })
)(TableCell);

// endStyles

export const TableHeaderOperationDetailComponent: React.StatelessComponent = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">Foto</StyledTableCell>
        <StyledTableCell align="left">Nombre</StyledTableCell>
        <StyledTableCell align="left">Alias</StyledTableCell>
        <StyledTableCell align="left">Vehiculos</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
