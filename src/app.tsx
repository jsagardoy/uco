import * as React from 'react';
import {OperationEntity} from './model/operation';
import {Route, Switch, withRouter} from 'react-router';
import {OperationsTable, OperationDetailedPage , DetailPersonPage, LoginPageComponent, } from './pages';
import NavBarComponent  from './components/navbar/navbar';
import { ToastContainer } from 'react-toastify';

const background = require('./common/images/fondo_guardia_civil.jpg');

interface Props {
 
}
interface State {
  operationList: Array<OperationEntity>
}


 export const App = (props) => {

  return (
    <>
   
    <ToastContainer
                    position='bottom-right'
                    autoClose={5000}
                    hideProgressBar={true}
                    closeOnClick
                    pauseOnHover
               />
  
    <NavBarComponent/>

    <Switch>
      <Route exact = {true} path="/" component = {LoginPageComponent}/>
      <Route path={"/login"} component = {LoginPageComponent} /> 
      <Route path = "/operations" component={OperationsTable}/>
      <Route exact ={true} path="/operationDetail/:idOperation" component={OperationDetailedPage}/>
      <Route path={`/operationDetail/:idOperation/personDetail/:idPerson`} component={DetailPersonPage} /> 
      <Route path={`/operationDetail/:idOperation/personDetail/newPerson`} component={DetailPersonPage} /> 
      <Route path={`/operationDetail/:idOperation/personDetail/newPerson`} component={DetailPersonPage} /> 
    </Switch>
    </>
    
   
  )
};

