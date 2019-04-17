import * as React from 'react';
import { Input } from './common';
import { RutineEntity } from '../../model';
import { css } from 'emotion';


interface Props {
    rutine: RutineEntity;
    editable:boolean;
    onChange: (fieldName: string, value: any, group:string) => void;
    
}

export const RutineFormComponent: React.StatelessComponent<Props> = (props: Props) => {
    return (
        
        <Input name='rutines'
            editable={props.editable}
            value={props.rutine.data}
            placeholder={props.rutine.data}
            label={props.rutine.data}
            group='rutines'
            onChange={props.onChange}
        />
    );
}