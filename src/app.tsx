import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from './model/operation';
import {OperationTableComponent} from './operations'
import { MuiThemeProvider } from 'material-ui';

interface Props {

}
interface State {

}

export const App = () => (
  <MuiThemeProvider>
    <OperationTableComponent />  
  </MuiThemeProvider>
)