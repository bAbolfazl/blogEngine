import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectPostsList, selectPostsCatList } from '../../redux/posts/posts.selectors'

import './homePage.styles.css'
import PostPrev from '../../components/postPrev/postPrev.component'
import CatItem from '../../components/catItem/catItem.components'


class HomePage extends Component {
   

    render() {

        const { postsList, catsList } = this.props
        // debugger
        return (
            <div className='home-page'>
                <div className='container d-flex flex-wrap'>
                    <div className="home-page__category-list col-lg-3">
                        {
                            catsList ?
                                catsList.map(({ id, ...others }) => (
                                    <Link to={`/category/${id}`} key={id} >
                                        <CatItem {...others} />
                                    </Link>
                                ))
                                :
                                null
                        }
                    </div>
                    <div className="home-page__post-list col-lg-9">
                        {
                            postsList ?

                                postsList.map(({ id, ...others }) => {
                                    return <Link to={`/post/${id}`} key={id}>
                                        <PostPrev {...others} />
                                    </Link>
                                })
                                :
                                null

                        }
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = createStructuredSelector({
    postsList: selectPostsList,
    catsList: selectPostsCatList
})

export default connect(mapStateToProps)(HomePage)