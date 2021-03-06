import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeContainer from '../src/App/Containers/Home/index.home'
import PostContainer from '../src/App/Containers/Posts/Index.post'
import TodosContainer from '../src/App/Containers/Todos/index.todos'
import UsersContainer from '../src/App/Containers/Users/index.users'
import ProfileContainer from '../src/App/Containers/Profile/index.profile'
import LoginContainer from './App/Containers/Authentication/Login/index.login'
import SignUpContainer from './App/Containers/Authentication/SignUp/index.signup'
import AuthLayout from './App/components/Layout/index.layout'


import { isLogin } from "./Helper/LocalStorage"

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Layout>
      <Route {...rest} render={props => (
        isLogin() ?
          <Component {...props} />
          : <Redirect to="/login" />
      )} />
    </Layout>
  );
};


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginContainer} />
      <Route path="/login" restricted={true} exact component={LoginContainer} />
      <Route path="/signup" exact component={SignUpContainer} />
      <PrivateRoute path="/home" exact component={HomeContainer} layout={AuthLayout} />
      <PrivateRoute path="/posts" exact component={PostContainer} layout={AuthLayout} />
      <PrivateRoute path="/todos" exact component={TodosContainer} layout={AuthLayout} />
      <PrivateRoute path="/users" exact component={UsersContainer} layout={AuthLayout} />
      <PrivateRoute path="/profile" exact component={ProfileContainer} layout={AuthLayout} />
    </Switch>
  )
}

export default Routes
