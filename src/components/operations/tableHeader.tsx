import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { createStyles, withStyles, Theme, WithStyles } from '@material-ui/core';
import { colors } from '../../common';

interface Props extends WithStyles <typeof styles> {}

const styles = (theme: Theme) =>
createStyles({
  root: {
    backgroundColor: colors.GREEN,
    color: colors.YELLOW,
  },
});

const TableHeaderComponentInner: React.StatelessComponent<Props> = (props:Props) => {
  const {classes} = props;
  return (
    <TableRow  color="secondary">
      <TableCell className={classes.root} align="left">Nombre</TableCell>
      <TableCell className={classes.root} align="left">Operacion</TableCell>
      <TableCell className={classes.root} align="left">Estado</TableCell>
    </TableRow>
  );
};

export const TableHeaderComponent = withStyles(styles)(TableHeaderComponentInner);
