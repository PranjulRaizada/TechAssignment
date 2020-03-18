import React from 'react';
import {Route, Switch} from 'react-router';
import forms from './PostForm';
import NotFound from './NotFound';
import PostListingPage from './PostListingPage';
import PostDetailPage from './PostDetailPage';
import PostForm from './PostForm';

let routes = () =>{
    // eslint-disable-next-line no-unused-expressions
    return(
    <Switch>
        <Route exact={true} path = "/" component={PostListingPage}/>
        <Route exact={true} path = "/detailPage/:num" component={PostDetailPage}/>
        <Route exact={true} path = "/editPage/:num" component={PostForm}/>
        <Route path={"*"}  component={NotFound} />
    </Switch>
    )
}
export default routes;