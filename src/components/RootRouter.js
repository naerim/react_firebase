import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Memo from '../pages/memo';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import AppLayout from './AppLayout';

const HomeRoutes = () => (
  <Switch>
    <Route exact path="/memo" component={Memo} />
    <Redirect from="*" to="/memo" />
  </Switch>
);

const LoginRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Redirect from="*" to="/login" />
  </Switch>
);

const RootRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <AppLayout>
            <HomeRoutes />
          </AppLayout>
        ) : (
          <LoginRoutes />
        )}
      </Switch>
    </Router>
  );
};

export default RootRouter;
