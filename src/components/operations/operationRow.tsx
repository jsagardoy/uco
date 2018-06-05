import * as React from 'react';

import { Toggle } from 'material-ui';
import {ChevronRight} from 'material-ui-icons';

import {OperationEntity} from '../../model';

interface Props{
    operation: OperationEntity;
    onToogle: (newOperation:OperationEntity) => void;
    onClickRow: (id:number) =>void;
}


export const RowComponent: React.StatelessComponent<Props> = (props) => {

    return (
        <tr>
            <td onClick={()=> props.onClickRow(props.operation.id)}>{props.operation.name}</td>
            <td onClick={()=> props.onClickRow(props.operation.id)}>{props.operation.type}</td>
            <td><Toggle onToggle={()=>props.onToogle(props.operation)}
                defaultToggled={props.operation.state}
                />
            </td>
        </tr>
    );
}




