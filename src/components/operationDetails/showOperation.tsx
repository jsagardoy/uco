import * as React from 'react';
import {OperationEntity,PeopleEntity} from '../../model';
import {PersonRow} from './personRow';
import {TableHeaderOperationDetailComponent, TableBodyComponent} from '.';


interface Props {
    operation: OperationEntity,
    onClickRow: (id:number) =>void
}

export const ShowOperation:React.StatelessComponent<Props> = (props:Props)=>(

    <div className="operation">
        <h1 className="operationTitle">Operación {props.operation.name}</h1>
        <h2> ({props.operation.type})</h2>
        <table className= "table table-striped col-8">
        <TableHeaderOperationDetailComponent />
        <TableBodyComponent people={props.operation.people} 
                            onClickRow={props.onClickRow}
        />
        </table>
    </div>
)

