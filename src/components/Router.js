import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import PostIndex from './Posts/PostIndex';
import PostDetail from './Posts/PostDetail/PostDetail';
import PostCreate from './Posts/PostCreate/PostCreate';
import PostEdit from './Posts/PostEdit/PostEdit';

class Router extends Component {
  render() {

    const data = {
      columns: [
        'title'
      ],
      data: [],
      reading: true,
      updating: true,
      deleting: true,
    };

    return (
      <BrowserRouter>
        <Header title="Mi primer Blog" />
        <div className="container my-4">
          <Navbar btnLeft="Todos los posts" linkToLeft="/" btnRight="Nuevo post" linkToRight="/posts/create" />
        </div>

        <Switch>
          <Route exact path="/" render={ () => <PostIndex posts={ data } /> } />
          <Route exact path="/posts/:id/details" render={ () => <PostDetail /> } />
          <Route exact path="/posts/create" component={ PostCreate } />
          <Route exact path="/posts/:id/edit" render={ () => <PostEdit /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
