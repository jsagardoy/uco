import * as React from 'react';
import { Input } from './common';
import Button from '@material-ui/core/Button';


interface Props{
    rutine:string;
    handleSubmit:()=>void;
    handleChange:(fieldName:string,value:any,group:string)=>void;
}

export const RutineFormComponent: React.StatelessComponent<Props> = (props:Props) => {
    return(
    <>    
        <Input  name='rutine'
                value={props.rutine}
                placeholder={props.rutine} 
                label='Rutina'
                group='rutines'
                onChange={props.handleChange}
        />
        <Button onClick={props.handleSubmit}>Submit</Button>
    </>
    );
  }