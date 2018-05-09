import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from '../model';
import { Toggle } from 'material-ui';


interface Props {
    
    operation:OperationEntity
}

interface State {
    operation: OperationEntity;
}

export class ComposeRowComponent extends React.Component<Props,State>{

    constructor (props:Props){
        super(props);
        this.state = {operation: this.props.operation}
    }

onToggleSubmit = (e) =>{
    this.setState({operation:e.target.value})
}


    public render () {
    return (
        <tr>
            <td>{this.state.operation.name}</td>
            <td>{this.state.operation.type}</td>
            <td>
            <Toggle onToggle = {this.onToggleSubmit}
                    toggled={this.state.operation.state}
                />
            </td>
        </tr>
        );
    }
}