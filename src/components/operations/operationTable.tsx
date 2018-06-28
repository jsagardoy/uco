import * as React from 'react';
import {OpenTableComponent} from './';
import {OperationEntity} from '../../model/operation';



interface Props{
    operationList:Array <OperationEntity>,
    onClickRow: (id:number) =>void,
    onToggle:(newOperation:OperationEntity)=>void
}


export const OperationTableComponent:React.StatelessComponent<Props>=(props:Props)=> {
        return(
            <div className='row'>
                <OpenTableComponent type={true} 
                                    operationList={props.operationList}
                                    onClickRow={props.onClickRow}
                                    onToggle={props.onToggle}
                />
                <OpenTableComponent type={false} 
                                    operationList={props.operationList} 
                                    onClickRow={props.onClickRow} 
                                    onToggle={props.onToggle}
                />                
            </div>
        );
    
    
}
