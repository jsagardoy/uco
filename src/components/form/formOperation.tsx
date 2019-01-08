import * as React from 'react';
import { Input } from './common';
import { OperationEntity } from '../../model';

interface Props {
    operation: OperationEntity;
    editable: boolean;
    handleChange: (fieldName: string, value: any, group: string) => void;
}
export const FormOperationComponent: React.StatelessComponent<Props> = (props: Props) => (
    <div>
        <Input name='nameOperation'
            editable={props.editable}
            value={props.operation.nameOperation}
            placeholder={props.operation.nameOperation}
            label='Nombre de la operación'
            group='operation'
            onChange={props.handleChange}
        />
        <Input name='operationType'
            editable={props.editable}
            value={props.operation.operationType}
            placeholder={props.operation.operationType}
            label='Tipo de operación'
            group='operation'
            onChange={props.handleChange}
        />
    </div> 
)


