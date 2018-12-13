import * as React from 'react';
import { Input } from './common';
import { LinkEntity } from '../../model';


interface Props{
    link:LinkEntity;
    editable:boolean;
    onChange: (fieldName: string, value: any, group:string) => void;
    
}

export const LinkFormComponent: React.StatelessComponent<Props> = (props:Props) => {
    return( 
        <Input  name='links'
                editable={props.editable}
                value={props.link.data}
                placeholder={props.link.data} 
                label='Conexiones'
                group='links'
                onChange={props.onChange}
        />

    );
  }