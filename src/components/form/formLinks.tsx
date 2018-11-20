import * as React from 'react';
import { Input } from './common';
import Button from '@material-ui/core/Button';


interface Props{
    link:string;
    handleSubmit:()=>void;
    handleChange:(fieldName:string,value:any,group:string)=>void;
}

export const LinkFormComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
    <>    
        <Input  name='link'
                value={props.link}
                placeholder={props.link} 
                label='Relación'
                group='links'
                onChange={props.handleChange}
        />
        <Button onClick={props.handleSubmit}>Submit</Button>
    </>
    );
  }