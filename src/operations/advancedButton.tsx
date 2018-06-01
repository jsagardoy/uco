import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {ChevronRight} from 'material-ui-icons';
import { OperationEntity } from '../model';

interface Props {
    id:number;
}



export const AdvanceButton = (props:Props) => withRouter(({history}) =>{
   
    return (
        <button type="button" onClick={()=>{history.push(`/operationDetails/${this.props.operation.id}`)}}>
            <ChevronRight />
        </button>
    )
})