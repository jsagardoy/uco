import * as React from 'react';

import { Toggle } from 'material-ui';

import { OperationEntity } from '../../model';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface Props {
    operation: OperationEntity;
    onToogle: (newOperation: OperationEntity) => void;
    onClickRow: (id: number) => void;
}


export const RowComponent: React.StatelessComponent<Props> = (props) => {

    return (
        <TableRow hover>
            <TableCell align="left" onClick={() => props.onClickRow(props.operation.idOperation)}>{props.operation.nameOperation}</TableCell>
            <TableCell align="left" onClick={() => props.onClickRow(props.operation.idOperation)}>{props.operation.operationType}</TableCell>
            <TableCell align="left">
                <Toggle onToggle={() => props.onToogle(props.operation)}
                defaultToggled={props.operation.state}
                />
            </TableCell>
        </TableRow>
    );
};

