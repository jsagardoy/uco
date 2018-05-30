import * as React from 'react';
import {OperationTableComponent} from '../operations';
import { OperationEntity } from '../model';
import { MuiThemeProvider } from 'material-ui';



interface State {
    operationList: Array<OperationEntity>
}

export const OperationsTable = () =>(
    <MuiThemeProvider>
        <OperationTableComponent operationList={[]}/>
    </MuiThemeProvider>
);
