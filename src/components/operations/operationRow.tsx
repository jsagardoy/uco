import * as React from 'react';

import { Toggle } from 'material-ui';

import {OperationEntity} from '../../model';

interface Props{
    operation: OperationEntity;
    onToogle: (newOperation:OperationEntity) => void;
    onClickRow: (id:number) =>void;
}


export const RowComponent: React.StatelessComponent<Props> = (props) => {

    return (
        <tr>
            <td onClick={()=> props.onClickRow(props.operation.idOperation)}>{props.operation.nameOperation}</td>
            <td onClick={()=> props.onClickRow(props.operation.idOperation)}>{props.operation.operationType}</td>
            <td>
                <Toggle onToggle={()=>props.onToogle(props.operation)}
                defaultToggled={props.operation.state}
                />
            </td>
        </tr>
    );
}




