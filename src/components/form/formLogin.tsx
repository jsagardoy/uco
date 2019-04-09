import * as React from 'react';
import { LoginEntity } from '../../model';
import { Input } from './common';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const green = '#007A53';
const yellow = '#FFCD00';
const Container = styled.div`
    font-family: 'Noto Sans', sans-serif;
    font-size: 1em;
    display: flex; 
    align-items:center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: auto;
    color:#007A53;
    box-sizing: border-box;
`;
const Form = styled.form`  
    width: 100%;
    padding-left: 10px;
    border: 1px solid #007A53;
`;
const Div = styled.div`
    padding-top:1%;
    width: 30%;
`;
const StyledButton = styled(Button)`
    &&{
        background-color:${green};
        color: ${yellow};
        align-content:flex-start;
        width: 40%;
        margin-left:10px;
        :hover{
            background-color:#FFCD00;
            color: #007A53;
        }
}
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
    <Container>
        <Div>
            <StyledButton onClick={(e) => props.handleRegister('login')}>Login</StyledButton> 
            <StyledButton onClick={(e) => props.handleRegister('register')}>Register</StyledButton>
        </Div>
        <Div>
        {props.onNewUser==='register' ?
            <Form className='newUserForm'>
            
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
                <StyledButton onClick={(e) => props.onRegister()}>Registrate</StyledButton>
            </Form> 
            :
            <Form className='LoginForm'>
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
                
                    <StyledButton onClick={(e) => props.onSubmit()}>Entrar</StyledButton>
                
            </Form>
        } 
        </Div>
    </Container>
)