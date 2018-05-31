import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from './model/operation';
import {OperationTableComponent} from './operations'
import { MuiThemeProvider } from 'material-ui';
import {BrowserRouter as Router, Route, Link, Switch, HashRouter} from 'react-router-dom';
import {OperationsTable, OperationDetailed, HomePage} from './pages';

interface Props {
 
}
interface State {
  operationList: Array<OperationEntity>
}
export const App = () => (
  <Router>
    <Switch>
      <Route exact ={true} path="/" component = {HomePage}/>
      <Route path="/operations" component={OperationsTable}/>
      <Route path="/operationDetail/:id" component={OperationDetailed} />
    </Switch>
  </Router>
)
