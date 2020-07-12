import React from 'react';

// additional libs
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// redux
import { setPostsList, setCatsList } from './redux/posts/posts.actions'
import { setUsersList } from './redux/users/users.actions'
import { selectCurrentUser } from './redux/users/users.selectors'
import { setCurrentUser } from './redux/users/users.actions'

// firebase
import { auth, createUserDoc, firestore, convertCollectionSnapshotToMap, convertCollectionCatsSnapshotToMap, convertCollectionUsersSnapshotToMap } from './firebase/firebase.utils'

// data
// import CATEGORY_LIST from './data/category-list'
// import POSTS from './data/posts'
// import USERS from './data/users'

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
import Write from './pages/write/write.component'


class App extends React.Component {

  unSubscribeAuth = null

  componentDidMount() {

    const { setPostsList, setCatsList, setUsersList, setCurrentUser } = this.props
    // setPostsList(POSTS)
    // setCatsList(CATEGORY_LIST)
    // setUsersList(USERS)
    const collectionRefCats = firestore.collection('categories')
    collectionRefCats.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionCatsSnapshotToMap(snapshot)
      await setCatsList(collectionMap)
    })

    const collectionRefPosts = firestore.collection("posts").orderBy("writeDate", "desc")
    collectionRefPosts.onSnapshot(async snapShot => {
      const collectionMap = convertCollectionSnapshotToMap(snapShot)
      // console.log(collectionMap)
      await setPostsList(collectionMap)
    })

    const collectionRefUsers = firestore.collection('users')
    collectionRefUsers.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionUsersSnapshotToMap(snapshot)
      await setUsersList(collectionMap)
    })

    this.unSubscribeAuth = auth.onAuthStateChanged(async user => {
      // console.log(user)
      if (!user) {
        setCurrentUser(null)
      }
      else {
        const userRef = await createUserDoc(user)
        // console.log(userRef)
        userRef.onSnapshot(snapShot =>
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        )
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Header />

        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={() => currentUser ? <Redirect to='/' /> : <LoginPage />} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/authors' component={AuthorsPage} />
          <Route exact path='/category' component={CategoryListPage} />
          <Route exact path='/write' component={() => currentUser ? <Write /> : <Redirect to='/' />} />

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
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App)