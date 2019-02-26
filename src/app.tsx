import * as React from 'react';
import {OperationEntity} from './model/operation';
import {Route, Switch} from 'react-router-dom';
import {OperationsTable, OperationDetailedPage , HomePage, DetailPersonPage, LoginPageComponent, } from './pages';
import AuthService from './api/AuthService';


interface Props {
 
}
interface State {
  operationList: Array<OperationEntity>
}
export const App = () => (
    <Switch>
      <Route exact = {true} path="/" component = {LoginPageComponent}/>
      <Route path={"/login"} component = {LoginPageComponent} /> 
      <Route path = "/operations" component={OperationsTable}/>
      <Route exact ={true} path="/operationDetail/:idOperation" component={OperationDetailedPage}/>
      <Route path={`/operationDetail/:idOperation/personDetail/:idPerson`} component={DetailPersonPage} /> 
      <Route path={`/operationDetail/:idOperation/personDetail/newPerson`} component={DetailPersonPage} /> 
      <Route path={`/operationDetail/:idOperation/personDetail/newPerson`} component={DetailPersonPage} /> 
    </Switch>
    )
  

