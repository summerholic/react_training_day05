
import React, { Fragment }  from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import UserList from './containers/UserListContainers';
import ItemList from './containers/ItemListContainer';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/front/user"/>
      <Route path="/front" component={({match}) =>
        <Fragment>
            <Route exact path={`${match.path}/user`} component={UserList}/>
            <Route exact path={`${match.path}/item`} component={ItemList}/>
        </Fragment>
      }/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
