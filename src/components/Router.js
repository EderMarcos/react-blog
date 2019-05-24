import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import PostsRouter from './Posts/PostsRouter';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header title="Mi primer Blog" />
        <div className="container my-4">
          <Navbar btnLeft="Todos los posts" linkToLeft="/" btnRight="Nuevo post" linkToRight="/posts/create" />
        </div>

        <Switch>
          <Route path="/posts" component={ PostsRouter } />
          <Redirect from="/" to="/posts" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
