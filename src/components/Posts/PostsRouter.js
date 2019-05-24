import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostsIndex from './PostsIndex/PostsIndex';
import PostsDetails from './PostsDetails/PostsDetails';
import PostsCreate from './PostsCreate/PostsCreate';
import PostsEdit from './PostsEdit/PostsEdit';

const PostsRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/posts' component={ PostsIndex } />
        <Route exact path="/posts/create" component={ PostsCreate } />
        <Route path="/posts/:id/details" render={ (props) => <PostsDetails id={ props.match.params.id.toString() } /> } />
        <Route path="/posts/:id/edit" component={ PostsEdit } />
      </Switch>
    </div>
  );
};

export default PostsRouter;
