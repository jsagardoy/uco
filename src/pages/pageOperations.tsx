import * as React from 'react';
import { OperationTableComponent } from '../components/operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router';
import { updateElementFromArray, appendElementToArray, colors } from '../common';

import { getOperations, putPerson, putOperation } from '../api/operationAPIConnection';
import { Button, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { OperationComponent } from '../components/operation/operationComponent';
import { createEmptyOperation } from '../components/operation/operationComponent.business';
import AuthService from '../components/Auth/withAuth.business';
import { toast } from 'react-toastify';

import { css } from 'emotion';
import { Theme } from '@material-ui/core';
import { customTheme } from '../../theme';

interface State {
  operationList: Array<OperationEntity>;
  showComponent: boolean;
}

export class OperationsTable extends React.Component<RouteComponentProps<any>, State> {
  constructor(props) {
    super(props);
    this.state = {
      operationList: [],
      showComponent: false,
    };
  }

  public componentWillMount() {
    const auth: AuthService = new AuthService('');
    if (auth.loggedIn()) {
      getOperations().then(res => this.setState({ operationList: res }));
    } else {
      this.props.history.replace('/login');
    }
  }

  public componentDidMount() {
    const auth: AuthService = new AuthService('');
    if (!auth.loggedIn()) {
      this.props.history.replace('/login');
    }
  }

  public onClickRow = (id: number) => {
    this.props.history.push({
      pathname: `/operationDetail/${id}`,
      state: {
        ...this.state,
        operationList: this.state.operationList,
      },
    });
  };

  public patchStateOperation = async (operation: OperationEntity) => {
    try {
      const result = await putPerson(operation.idOperation, operation);
      toast.success('Actualizado');
    } catch (error) {
      toast.error(error.message);
    }
  };

  public onToggle = (newOperation: OperationEntity): void => {
    const newOp: OperationEntity = { ...newOperation };
    newOp.state = !newOperation.state;
    const updatedList = updateElementFromArray(
      this.state.operationList,
      newOp,
      item => item.idOperation === newOp.idOperation
    );
    this.setState({ operationList: updatedList });
    this.patchStateOperation(newOp);
  };

  public addNewOperation = () => {
    this.setState({
      ...this.state,
      showComponent: !this.state.showComponent,
    });
  };

  public onSave = (operation: OperationEntity) => {
    this.setState({
      ...this.state,
      operationList: appendElementToArray(this.state.operationList, operation),
      showComponent: false,
    });
    putOperation(operation).then(e => toast.success('Guardado'));
  };

  public onCancel = () => {
    this.setState({
      ...this.state,
      showComponent: false,
    });
  };

  public theme: Theme;

  // styles
  public divStyle = css`
    width: 90%;
    margin: 0 auto;
    margin-top: 0px;
  `;

  public formStyle = css`
    width: 80%;
    margin: 10%;
    color: ${colors.GREEN};
  `;
  // END Styles
  public fabStyle = css`
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
  `;

  public addIcon = css`
    color: ${colors.YELLOW};
    &:hover {
      background-color: ${colors.GREEN};
    }
  `;

  public render() {
    return (
      <MuiThemeProvider theme={customTheme}>
        <div id="wrapper">
          <div id="addIcon Div" className={this.fabStyle}>
            <Fab id="favButton Add" color="primary" aria-label="Add" onClick={e => this.addNewOperation()}>
              <Add className={this.addIcon} />
            </Fab>
          </div>
          <div id="form div" hidden={!this.state.showComponent}>
            <form className={this.formStyle}>
              {this.state.showComponent ? (
                <OperationComponent
                  operation={createEmptyOperation()}
                  showComponent={this.state.showComponent}
                  onSave={this.onSave}
                  onCancel={this.onCancel}
                />
              ) : null}
            </form>
          </div>
          <div id="operationTable" className={this.divStyle}>
            <OperationTableComponent
              operationList={this.state.operationList}
              onClickRow={this.onClickRow}
              onToggle={this.onToggle}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
