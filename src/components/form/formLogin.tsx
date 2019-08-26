import * as React from 'react';
import { LoginEntity } from '../../model';
import { Input } from './common';
import { ButtonComponent } from '../Common';
import { css } from 'emotion';
import { colors } from '../../common/constants';


const containerStyle = css`
  font-family: 'Noto Sans', sans-serif;
  font-size: 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: auto;
  color: ${colors.GREEN};
`;
const formStyles = css`
  width: 100%;
  padding-left: 10px;
  border: 2px solid ${colors.GREEN};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px 30px 0px 30px;
`;
const divStyles = css`
  padding-top: 1%;
  width: 30%;
`;

const bottomDiv = css`
  margin-top: 1em;
`;

const formWrapperStyle = css`
    width: 35%;
`;

interface Props {
  loginEntity: LoginEntity;
  onNewUser: string;
  handleChange: (fieldName: string, value: any, group: string) => void;
  handleRegister(tab: string);
  onSubmit();
  onRegister();
}

export const FormLoginComponent: React.StatelessComponent<Props> = (props: Props) => (
  <div className={containerStyle}>
    <div className={divStyles}>
      <ButtonComponent onClick={e => props.handleRegister('login')}>Login</ButtonComponent>
      <ButtonComponent onClick={e => props.handleRegister('register')}>Register</ButtonComponent>
    </div>
    <div className ={formWrapperStyle}>
      {props.onNewUser === 'register' ? (
        <form className={formStyles}>
          <Input
            name="username"
            editable={true}
            value={props.loginEntity.username}
            placeholder={props.loginEntity.username}
            label="Usuario"
            group="loginEntity"
            onChange={props.handleChange}
          />
          <Input
            name="password"
            editable={true}
            value={props.loginEntity.password}
            placeholder={props.loginEntity.password}
            label="Password"
            group="loginEntity"
            onChange={props.handleChange}
            type="password"
          />
          <Input
            name="email"
            editable={true}
            value={props.loginEntity.email}
            placeholder={props.loginEntity.email}
            label="email"
            group="loginEntity"
            onChange={props.handleChange}
            type="email"
          />
          <div className={bottomDiv}>
            <ButtonComponent onClick={e => props.onRegister()}>Registrate</ButtonComponent>
          </div>
        </form>
      ) : (
        <form className={formStyles}>
          <Input
            name="username"
            editable={true}
            value={props.loginEntity.username}
            placeholder={props.loginEntity.username}
            label="Usuario"
            group="loginEntity"
            onChange={props.handleChange}
          />
          <Input
            name="password"
            editable={true}
            value={props.loginEntity.password}
            placeholder={props.loginEntity.password}
            label="Password"
            group="loginEntity"
            onChange={props.handleChange}
            type="password"
          />
          <div className={bottomDiv}>
            <ButtonComponent onClick={e => props.onSubmit()}>Entrar</ButtonComponent>
          </div>
        </form>
      )}
    </div>
  </div>
);
