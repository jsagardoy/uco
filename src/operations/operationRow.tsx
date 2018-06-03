import * as React from 'react';

import { Toggle } from 'material-ui';
import {ChevronRight} from 'material-ui-icons';

//import {OperationDetailed} from '../pages';
import {OperationEntity} from '../model';

interface Props{
    operation: OperationEntity;
    onToogle: (newOperation:OperationEntity) => void;
    onClickRow: (id:number) =>void;
}


export const RowComponent: React.StatelessComponent<Props> = (props) => {

    return (
        <tr>
            <td onClick={()=> props.onClickRow(props.operation.id)}>{props.operation.name}</td>
            <td>{props.operation.type}</td>
            <td><Toggle onToggle={()=>props.onToogle(props.operation)}
                defaultToggled={props.operation.state}
                />
            </td>
        </tr>
    );
}




/* 
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

handleClickAdvance= (id:number, event) =>{
    window.location.assign(`/#/operationDetail/${id}`);
}


public render () {
    
    return (
        <tr >
         
            <td onClick={(e)=>this.handleClickAdvance(this.props.initialOperation.id,e)}>{this.props.initialOperation.name}</td>
            <td onClick={(e)=>this.handleClickAdvance(this.props.initialOperation.id,e)}>{this.props.initialOperation.type}</td> 
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
} */