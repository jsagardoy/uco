import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from '../model';
import {Route, HashRouter, Switch, withRouter, BrowserRouter as Router} from 'react-router-dom';
import { Toggle } from 'material-ui';
import {ChevronRight} from 'material-ui-icons'
import {OperationDetailed} from '../pages';

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

onChangeButton = (event) =>{
    
    <Route path={`/operationDetail/${this.state.operation.id}`} 
            component={OperationDetailed}/>

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
            <td>  
                    const Button = withRouter (({ this.refs.history })
                    <button type="button" onClick={this.refs.history.path (`/operationDetail/${this.state.operation.id}`)}>
                        <ChevronRight />
                    </button>
                    ) 

            </td>
        </tr>
        );
    }
}