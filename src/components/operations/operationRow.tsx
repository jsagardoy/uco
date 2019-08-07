import * as React from 'react';

import { OperationEntity } from '../../model';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';

interface Props {
  operation: OperationEntity;
  onToogle: (newOperation: OperationEntity) => void;
  onClickRow: (id: number) => void;
}

export const RowComponent: React.StatelessComponent<Props> = props => {
  return (
    <TableRow hover>
      <TableCell align="left" onClick={() => props.onClickRow(props.operation.idOperation)}>
        {props.operation.nameOperation}
      </TableCell>
      <TableCell align="left" onClick={() => props.onClickRow(props.operation.idOperation)}>
        {props.operation.operationType}
      </TableCell>
      <TableCell align="left">
        <Switch onChange={(e, checked) => props.onToogle(props.operation)}
        value={props.operation.state}
        checked={props.operation.state}
      />
      </TableCell>
    </TableRow>
  );
};
