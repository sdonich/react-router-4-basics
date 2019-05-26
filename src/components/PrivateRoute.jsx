import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, data, ...rest }) => {
  return (
    user ?
      <Route {...rest} render={
        props => <Component data={data} {...props} />
      } />
      :
      <Redirect to='/login' />
  );
}

export default PrivateRoute;