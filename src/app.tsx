import * as React from 'react';
import {OperationEntity} from './model/operation';
import {Route, Switch, matchPath} from 'react-router-dom';
import {OperationsTable, OperationDetailedPage , HomePage, DetailPersonPage} from './pages';

interface Props {
 
}
interface State {
  operationList: Array<OperationEntity>
}
export const App = () => (
  
    <Switch>
      <Route exact ={true} path="/" component = {HomePage}/>
      <Route path="/operations" component={OperationsTable}/>
      <Route exact ={true} path="/operationDetail/:idOperation" component={OperationDetailedPage}/>
      <Route path={`/operationDetail/:idOperation/personDetail/:idPerson`} component={DetailPersonPage} /> 
    </Switch>

)
