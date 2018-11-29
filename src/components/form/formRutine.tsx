import * as React from 'react';
import { Input } from './common';
import { RutineEntity } from '../../model';


interface Props {
    rutine: RutineEntity;
    onChange: (fieldName: string, value: any, group:string) => void;
    
}

export const RutineFormComponent: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <Input name='rutines'
            value={props.rutine.data}
            placeholder={props.rutine.data}
            label={props.rutine.data}
            group='rutines'
            onChange={props.onChange}
        />
    );
}