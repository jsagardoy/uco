import * as React from "react";

import { TextField } from '@material-ui/core';

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  group: string;
  onChange: (fieldName: string, value: any, group: string) => void;
  error?: string;
  editable?: boolean;
}

export const Input: React.StatelessComponent<Props> = (props: Props) => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        {
          props.editable ?
            <TextField type="text"
              name={props.name}
              className="form-control"
              placeholder={props.placeholder}
              value={props.value}
              onChange={onChangeInput(props)}
            />
            :
            <TextField type="text"
              disabled
              name={props.name}
              className="form-control"
              placeholder={props.placeholder}
              value={props.value}
              onChange={onChangeInput(props)}
            />
        }

      </div>
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