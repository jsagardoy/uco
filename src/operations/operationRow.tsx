import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from '../model';
import { Toggle } from 'material-ui';


interface Props {
    initialOperation: OperationEntity;
    onToggleUpdated:(newOperation:OperationEntity) =>void;
}

interface State {
    operation: OperationEntity;
}

export class ComposeRowComponent extends React.Component<Props,State>{

    constructor (props:Props){
        super(props);
        this.state = {operation: this.props.initialOperation}
    }

onChange = (newOperation:OperationEntity) =>{
    this.setState({operation: newOperation})
}
onToogleSubmit = (e) => {
    this.props.onToggleUpdated(this.state.operation);
}

    public render () {
    return (
        <tr>
            <td>{this.props.initialOperation.name}</td>
            <td>{this.props.initialOperation.type}</td>
            <td>
            <Toggle onToggle = {this.onChange}
                    toggled={this.state.operation.state}
            />
            </td>
        </tr>
        );
    }
}