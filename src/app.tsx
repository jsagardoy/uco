import * as React from 'react';
import {OperationEntity} from './model/operation';
import {Route, Switch, matchPath} from 'react-router-dom';
import {OperationsTable, OperationDetailedPage , HomePage, DetailPersonPage, LoginPageComponent, } from './pages';
import {withAuth} from './components/Auth/withAuth';
import AuthService from './api/AuthService';

interface Props {
 
}
interface State {
  operationList: Array<OperationEntity>
}
const App = () => (
  
    <Switch>
      <Route exact = {true} path="/" component = {OperationsTable}/>
      <Route exact = {true} path={`/login`} component = {LoginPageComponent} /> 
      <Route path = "/operations" component={OperationsTable}/>
      <Route exact ={true} path="/operationDetail/:idOperation" component={OperationDetailedPage}/>
      <Route path={`/operationDetail/:idOperation/personDetail/:idPerson`} component={DetailPersonPage} /> 
      <Route path={`/operationDetail/:idOperation/personDetail/newPerson`} component={DetailPersonPage} /> 
      <Route path={`/operationDetail/:idOperation/personDetail/newPerson`} component={DetailPersonPage} /> 
      
    </Switch>

)
export default withAuth(App);