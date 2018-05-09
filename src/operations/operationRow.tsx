import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from '../model';
import { Toggle } from 'material-ui';


interface Props {
    operation:OperationEntity;
    onToggleUpdate:OperationEntity=>void
}




//hay que hacer el handle button {props.operation.state} para el estado
export const OperationRowComponent = (props:Props) => (
    
    <tr>
        <td>{props.operation.name}</td>
        <td>{props.operation.type}</td>
        <td>
           <Toggle onToggle = {props.onToggleUpdate(props.operation)}
                   toggled={props.operation.state}
            />
        </td>
    </tr>
)