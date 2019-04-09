import * as React from "react";
import styled from 'styled-components';
import { TextField } from '@material-ui/core';


const Div = styled.div`
   color:green;
   width:100%;
`
const StyledTextField = styled(TextField)`
  &&{width:95%;
  padding-right: 10px;}
`;
interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  group?: string;
  onChange: (fieldName: string, value: any, group: string) => void;
  error?: string;
  editable?: boolean;
  type?:string;
}

export const Input: React.StatelessComponent<Props> = (props: Props) => {
  let type;
  if (!props.type){
    type='text';
  }
  else{
    type=props.type;
  }
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <Div className="field">
        {
          props.editable ?
            <StyledTextField type={type}
              name={props.name}
              
              placeholder={props.placeholder}
              value={props.value}
              onChange={onChangeInput(props)}
            />
            :
            <StyledTextField type={type}
              disabled
              name={props.name}
              
              placeholder={props.placeholder}
              value={props.value}
              onChange={onChangeInput(props)}
            />
        }

      </Div>
      <div className="help-block">{props.error}</div>
    </div>
  )
};

const formatWrapperClass = (props: Props) => {
  const wrapperClass = 'form-group';

  return props.error ?
    `${wrapperClass} has-error` :
    wrapperClass;
};

const onChangeInput = (props: Props) => (e: React.ChangeEvent<HTMLInputElement>) => {
  props.onChange(e.target.name, e.target.value, props.group);
};