import * as React from 'react';
import AuthService from '../Auth/withAuth.business';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { css } from 'emotion';
import { colors } from '../../common';
const logo = require('../../common/images/escudo_guardia_civil.gif');

const wrapper = css`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: nowrap;
  flex-shrink: 1;
  width: 100%;
  height: 2em;
  justify-content: space-between;
  align-items: center;
`;
const alignRight = css`
  display: flex;
  float: right;
  max-height: 2em;
`;
const alignLeft = css`
  display: flex;
  flex: left;
  align-items: center;
  max-height: 2em;
`;
const imgStyle = css`
  display: flex;
  max-height: 2em;
  align-content: center;
`;
const navStyle = css`
  background-color: ${colors.GREEN};
  color: ${colors.YELLOW};
  display: flex;
  flex-wrap: nowrap;
  flex-grow:1;
  width: 100%;
`;
const aImageStyle = css`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-decoration: none;
`;
const aStyle = css`
  display: flex;
  text-decoration: none;
  align-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  height: 100%;
  color: ${colors.YELLOW};
  background-color: ${colors.GREEN};
  height: 100%;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  &:hover {
    color: ${colors.GREEN};
    background-color: ${colors.YELLOW};
  }
`;

interface State {
  showNav: boolean;
}

class NavBarComponent extends React.Component<any, State> {
  public state = { showNav: false };

  public toogleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  public auth: AuthService = new AuthService('');
  public render() {
    return (
      <>
        <nav className={navStyle}>
          <div className={wrapper}>
            <div className={alignLeft}>
              <a className={aImageStyle} href="/">
                <img className={imgStyle} src={logo} />
              </a>
              <a className={aStyle} href="#/operations">
                Operaciones
              </a>
            </div>
            <div className={alignRight}>
              <a className={aStyle} href="#/login">
                Entrar
              </a>
              <a
                className={aStyle}
                onClick={e => {
                  this.auth.logout();
                  this.props.history.replace('/login');
                  toast.info('Adios. Usuario desconectado');
                }}
              >
                Salir
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(NavBarComponent);
