import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OperationEntity} from './model/operation';
import {OperationTableComponent} from './components/operations'
import { MuiThemeProvider } from 'material-ui';
import {Route, Switch, HashRouter} from 'react-router-dom';
import {OperationsTable, OperationDetailedPage , HomePage, DetailPersonPage} from './pages';

interface Props {
 
}
interface State {
  operationList: Array<OperationEntity>
}
export const App = () => (
  <HashRouter>
    <Switch>
      <Route exact ={true} path="/" component = {HomePage}/>
      <Route path="/operations" component={OperationsTable}/>
      <Route path="/operationDetail/:idOperation" component={OperationDetailedPage} />
      <Route path="/personDetail/:idPerson" component={DetailPersonPage} /> 
    </Switch>
  </HashRouter>
)
