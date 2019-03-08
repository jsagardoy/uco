import * as React from 'react';
import AuthService from '../Auth/withAuth.business';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
const logo = require('../../common/images/escudo_guardia_civil.gif') ;

//background-color:#007A53;



const Nav =  styled.nav`
height: 5%;
width: 100%;
grid-auto-rows: auto;
list-style: none;
text-align: left;
font-family: 'Noto Sans', sans-serif;
font-size: 1em;
background-color:#007A53;


`;


const Li = styled.li`
    display: inline;
    vertical-align:middle;
    /* @media (max-width:390px){
        display: block;
        text-align: center;
    } */
`;


const Ul = styled.ul`
    margin: 0;
    padding: 0;
    
`;

const A = styled.a`
    text-decoration: none;
    display: inline-block;
    padding: 1em;
    color: #FFCD00;
    :hover{
        background-color:#FFCD00; 
        color:#007A53; 
    }
    @media (max-width:390px){
        display:none;
    }

`;

const A2 = styled.a`
    padding: 0 0 1em 0;
    background-color:#007A53;
    @media (max-width:390px){
        display:none;
    }
`;
const A3 = styled.a`
    text-decoration: none;
    padding: 0 0 1em 0;
    background-color:#007A53;
    color: #FFCD00;
    display: block;
    text-align:center;
    
    @media (min-width:390px){
        display:none;
        
    }
`;

 const Img = styled.img`
    display:block;
    float: left;
    max-height: 40px;
    height:auto;
    background-color:#007A53;
    border-color:#007A53;
    border-style:solid;
    border-width: 10px;
 `;

 const StyledButton =  styled.button `
    display: block;
    align-content:left;
 `;

interface State {
    showNav:boolean;
}

class NavBarComponent extends React.Component<any,State>{
    state={showNav:false};

    toogleNav  = ()=>{
        this.setState({showNav:!this.state.showNav});
    }

    auth: AuthService = new AuthService('');
    render() {
        return (
            <>
                <Nav>
                    <Ul>
                        <Li>
                         
                            <StyledButton>
                            <A3>
                                <Button color='inherit' onClick={(e) => this.toogleNav()}><MenuIcon />
                                </Button>
                            </A3></StyledButton>
                        </Li>
                            {
                                this.state.showNav?
                                <>
                                    <Li><A3 href='#/operations'>Operaciones</A3></Li>
                                    <Li><A3 href='#/login'>Login</A3></Li>
                                    <Li><A3 onClick={(e) => {
                                        this.auth.logout();
                                        this.props.history.replace('/login');
                                        toast.info('Adios. Usuario desconectado');
                                    }
                                    }>Logout</A3></Li>
                                </>
                                :
                                null
                            }
                            <>
                                <Li><A2 href="/"><Img src={logo} /></A2></Li>
                                <Li><A href='#/operations'>Operaciones</A></Li>
                                <Li><A href='#/login'>Login</A></Li>
                                <Li><A onClick={(e) => {
                                    this.auth.logout();
                                    this.props.history.replace('/login');
                                    toast.info('Adios. Usuario desconectado');
                                }
                                }>Logout</A></Li>
                            </>
                        
                    </Ul>
                </Nav>
            </>
        )
    }
}

export default withRouter(NavBarComponent);

