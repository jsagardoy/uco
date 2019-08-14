import * as React from 'react';
import styled from 'styled-components';
import { TextField, FormLabel } from '@material-ui/core';
import { colors } from '../../../common';
import { css } from 'emotion';
// styles
const divStyle = css`
  color: ${colors.GREEN};
  width: 100%;
`;

const TextFieldStyled = css`
  width:100%;
  padding-top: 2%;
`;

// end Styles
interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  group?: string;
  onChange: (fieldName: string, value: any, group: string) => void;
  error?: string;
  editable?: boolean;
  type?: string;
}

export const Input: React.StatelessComponent<Props> = (props: Props) => {
  let type;
  if (!props.type) {
    type = 'text';
  } else {
    type = props.type;
  }
  return (
    <div className={formatWrapperClass(props)}>
      <div className={divStyle}>
        <label htmlFor={props.name}>{props.label}</label>
          {
            props.editable ?
              <TextField
                className={TextFieldStyled}
                type={type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onChangeInput(props)}
              />
              :
              <TextField
                className={TextFieldStyled}
                type={type}
                disabled
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={onChangeInput(props)}
              />
          }
        <div className="help-block">{props.error}</div>
      </div>
    </div>
  );
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
