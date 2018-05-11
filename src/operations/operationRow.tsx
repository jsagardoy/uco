import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from '../model';
import { Toggle } from 'material-ui';


interface Props {
    initialOperation: OperationEntity;
    onEditingOperation: (newOperation:OperationEntity) =>void;
}

interface State {
    operation: OperationEntity;
}

export class ComposeRowComponent extends React.Component<Props,State>{

    constructor (props:Props){
        super(props);
        this.state = {operation: this.props.initialOperation}
    }

onChangeToggle = (event) =>{
    const newOperation = {...this.props.initialOperation}
    this.props.onEditingOperation(newOperation);
}


    public render () {
    return (
        <tr>
            <td>{this.props.initialOperation.name}</td>
            <td>{this.props.initialOperation.type}</td>
            <td>
                <Toggle defaultToggled = {this.props.initialOperation.state}
                        onToggle = {this.onChangeToggle}
            />
            </td>
        </tr>
        );
    }
}