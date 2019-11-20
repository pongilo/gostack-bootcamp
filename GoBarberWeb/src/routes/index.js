import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Routes path="/" exact component={SignIn} />
      <Routes path="/register" component={SignUp} />

      <Routes path="/dashboard" component={Dashboard} />
      <Routes path="/profile" component={Profile} />
    </Switch>
  );
}
