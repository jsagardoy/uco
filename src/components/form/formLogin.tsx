import * as React from 'react';
import { LoginEntity } from '../../model';
import { Input } from './common';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    display: block;
    position: relative;
`;

interface Props {
    loginEntity: LoginEntity;
    onNewUser: string;
    handleChange: (fieldName: string, value: any, group: string) => void;
    handleRegister(tab:string);
    onSubmit();
    onRegister();
}

export const FormLoginComponent: React.StatelessComponent<Props> = (props: Props) => (
    <Wrapper>

        <div className="tab">          
                    <Button onClick={(e) => props.handleRegister('login')}>Login</Button> 
                    <Button onClick={(e) => props.handleRegister('register')}>Register</Button>
        </div>
        {props.onNewUser==='register' ?
            <form className='newUserForm'>
                <Input name='username'
                    editable={true}
                    value={props.loginEntity.username}
                    placeholder={props.loginEntity.username}
                    label='Usuario'
                    group='loginEntity'
                    onChange={props.handleChange}
                />
                <Input name='password'
                    editable={true}
                    value={props.loginEntity.password}
                    placeholder={props.loginEntity.password}
                    label='Password'
                    group='loginEntity'
                    onChange={props.handleChange}
                    type="password"
                />
                <Input name='email'
                    editable={true}
                    value={props.loginEntity.email}
                    placeholder={props.loginEntity.email}
                    label='email'
                    group='loginEntity'
                    onChange={props.handleChange}
                    type="email"
                />
                <Button onClick={(e) => props.onRegister()}>Registrate</Button>
            </form> 
            :
            <form className='LoginForm'>
                <Input name='username'
                    editable={true}
                    value={props.loginEntity.username}
                    placeholder={props.loginEntity.username}
                    label='Usuario'
                    group='loginEntity'
                    onChange={props.handleChange}
                />
                <Input name='password'
                    editable={true}
                    value={props.loginEntity.password}
                    placeholder={props.loginEntity.password}
                    label='Password'
                    group='loginEntity'
                    onChange={props.handleChange}
                    type="password"
                />
                <Button onClick={(e) => props.onSubmit()}>Entrar</Button>
            </form>
        }
    </Wrapper>
)