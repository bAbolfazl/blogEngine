import React from 'react';

import { Switch, Route } from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import HomePage from './pages/home/homePage.component'
import LoginPage from './pages/login/loginPage.component'
import PostPage from './pages/post/postPage.component'
import CategoriesPage from './pages/categories/categoriesPage.component'
import AboutPage from './pages/about/aboutPage.component'



export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>

          <Route path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/about' component={AboutPage} />

        </Switch>

        <Footer />
      </div>
    )
  }
}


