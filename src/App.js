import React from 'react';

// additional libs
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// redux
import { setPostsList, setCatsList } from './redux/posts/posts.actions'
import { setUsersList } from './redux/users/users.actions'

// data
import CATEGORY_LIST from './data/category-list'
import POSTS from './data/posts'
import USERS from './data/users'

// components
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
import CategoryListPage from './pages/categoryList/categoryListPage.component'
import NotFound from './pages/404/404.component'


class App extends React.Component {

  componentDidMount() {
    const { setPostsList, setCatsList, setUsersList } = this.props
    setPostsList(POSTS)
    setCatsList(CATEGORY_LIST)
    setUsersList(USERS)
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/authors' component={AuthorsPage} />
          <Route exact path='/category' component={CategoryListPage} />

          <Route path='/category/:catId' component={CategoryPage} />
          <Route path='/post/:postId' component={PostPage} />
          <Route path='/authors/:personId' component={PersonalPosts} />

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    setPostsList: posts => dispatch(setPostsList(posts)),
    setCatsList: cats => dispatch(setCatsList(cats)),
    setUsersList: users => dispatch(setUsersList(users)),
  }
)

export default connect(null, mapDispatchToProps)(App)