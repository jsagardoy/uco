import * as React from 'react';
import { OperationTableComponent } from '../components/operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider } from 'material-ui';
import { RouteComponentProps } from 'react-router';
import { updateElementFromArray, appendElementToArray } from '../common';
import { machines } from '../common';
import axios from 'axios';
import { getOperations, putPerson, putOperation } from '../api/operationAPIConnection';
import { Button, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { OperationComponent } from '../components/operation/operationComponent';
import { createEmptyOperation } from '../components/operation/operationComponent.business';
import AuthService from '../components/Auth/withAuth.business';
import { toast } from 'react-toastify';

import { css } from 'emotion';

interface State {
    operationList: Array<OperationEntity>
    showComponent: boolean;
}

const green = '#007A53';
const yellow = '#FFCD00';

export class OperationsTable extends React.Component<RouteComponentProps<any>, State> {

    constructor(props) {
        super(props);
        this.state = {
            operationList: [],
            showComponent: false
        }
    }

    componentWillMount() {
        const auth: AuthService = new AuthService('');
        if (auth.loggedIn())
            getOperations().then((res) => this.setState({ operationList: res }));
        else
            this.props.history.replace('/login');
    }

    componentDidMount() {
        const auth: AuthService = new AuthService('');
        if (!auth.loggedIn())
            this.props.history.replace('/login');
    }

    onClickRow = (id: number) => {
        this.props.history.push({
            pathname: `/operationDetail/${id}`,
            state: {
                ...this.state,
                operationList: this.state.operationList
            }
        })
    }

    patchStateOperation = async (operation: OperationEntity) => {
        try {
            let result = await putPerson(operation.idOperation, operation);
            toast.success('Actualizado');
        } catch (error) {
            toast.error(error.message);
        }
    }

    onToggle = (newOperation: OperationEntity): void => {
        const newOp: OperationEntity = { ...newOperation };
        newOp.state = !newOperation.state
        const updatedList = updateElementFromArray(this.state.operationList, newOp, (item) => item.idOperation === newOp.idOperation)
        this.setState({ operationList: updatedList });
        this.patchStateOperation(newOp);

    }

    addNewOperation = () => {
        this.setState(
            {
                ...this.state,
                showComponent: !this.state.showComponent
            }
        )
    }

    onSave = (operation: OperationEntity) => {

        this.setState(
            {
                ...this.state,
                operationList: appendElementToArray(this.state.operationList, operation),
                showComponent: false,
            }
        )
        putOperation(operation).then((e) => toast.success('Guardado'));
    }

    onCancel = () => {
        this.setState(
            {
                ...this.state,
                showComponent: false
            }
        )

    }
    //styles
    divStyle = css`
        width: 90%;
        margin: 0 auto;
        margin-top: 5%;
    `;
    fabStyle = css`
      position: absolute;
      margin: 5px;
      margin-left: 95%;
      background-color: ${green};
      color:${yellow};
      &:hover {
      background-color: ${yellow};
      color:${green}
    }
    `;
    // END Styles
    render() {
        return (

            <MuiThemeProvider>
                <>
                    <Fab className={this.fabStyle} aria-label="Add" onClick={(e) => this.addNewOperation()}>
                        <Add color='inherit' />
                    </Fab>
                    <div className={this.divStyle}>
                        {
                            this.state.showComponent ?
                                <OperationComponent operation={createEmptyOperation()}
                                    showComponent={this.state.showComponent}
                                    onSave={this.onSave}
                                    onCancel={this.onCancel}
                                />
                                :
                                null
                        }
                        <OperationTableComponent operationList={this.state.operationList}
                            onClickRow={this.onClickRow}
                            onToggle={this.onToggle}
                        />
                    </div>
                </>
            </MuiThemeProvider>

        );
    }
}
