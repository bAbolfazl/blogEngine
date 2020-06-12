import React from 'react';

import { Switch, Route } from 'react-router-dom'


import './App.css';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

import HomePage from './pages/home/homePage.component'
import LoginPage from './pages/login/loginPage.component'
import PostPage from './pages/post/postPage.component'
import CategoryPage from './pages/category/categoryPage.component'
import AboutPage from './pages/about/aboutPage.component'
import AuthorsPage from './pages/authors/authorsPage.component'
import PersonalPosts from './pages/personalPosts/personalPostsPage.component'
import CategoryList from './pages/categoryList/categoryList.component'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/authors' component={AuthorsPage} />
          <Route exact path='/category' component={CategoryList} />

          <Route path='/category/:catId' component={CategoryPage} />
          <Route path='/post/:postId' component={PostPage} />
          <Route path='/personalPosts/:personId' component={PersonalPosts} />

        </Switch>

        <Footer />
      </div>
    )
  }
}


