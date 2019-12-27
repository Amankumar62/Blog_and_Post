import React, { Component } from 'react';
//import axios from 'axios';
import {Route ,NavLink,Switch} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
class Blog extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render () {  
        return (
            <div className="Blog">
            <header>
            <nav>
            <ul>
            <li><NavLink
            activeClassName='my-active' 
            activeStyle={{
                color: '#fa923f',
                textDecoration: 'underline'
            }}
            to ="/" 
            exact>Posts</NavLink></li>
            <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
            }} exact>New Post</NavLink></li>
            </ul>
            </nav>
            </header>
             {/* <Route path="/" exact render={() =><h1>Home</h1>}/>*/}
             <Route path="/" exact component={Posts} />
             <Switch>
             <Route path="/new-post" exact component={NewPost} />
             <Route path="/:id" exact component={FullPost}/>
             </Switch>
            </div>
        );  
    
    }
}

export default Blog; 