import * as React from 'react';
import { RouteComponentProps} from 'react-router';

import {RowComponent} from './operationRow';
import {OperationEntity} from '../../model/operation';
import {ShowOperation} from '../operationDetails';
import {TableHeaderComponent, TableBodyComponent} from './';


interface Props {
    type: boolean, //true for openOperations false for closed Operations
    operationList: Array<OperationEntity>,
    onClickRow:(id:number) =>void,
    onToggle:(operation:OperationEntity)=>void,
}



export const OpenTableComponent: React.StatelessComponent<Props> = (props:Props) => {
      
    return (
    <div className="row col-6">
        <div className='operations col-12'>
            <h2>{props.type?'Operaciones abiertas':'Operaciones cerradas'}</h2>
            <div className='table-responsive'>
                <table className='table table-striped table-hover'>
                    <TableHeaderComponent />
                    <TableBodyComponent operationList={props.operationList} 
                                        type={props.type} 
                                        onClickRow={props.onClickRow} 
                                        onToggle={props.onToggle}/>
                </table>
            </div>    
        </div>     
    </div>
    );
}

