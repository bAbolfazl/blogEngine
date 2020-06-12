import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './homePage.styles.css'
import PostPrev from '../../components/postPrev/postPrev.component'
import CatItem from '../../components/catItem/catItem.components'

import CATEGORY_LIST from '../../data/category-list'
import POSTS from '../../data/posts'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='container d-flex flex-wrap'>
                    <div className="home-page__category-list col-lg-3">
                        {
                            CATEGORY_LIST.map(({ id, ...others }) => (
                                <Link to={`/category/${id}`} key={id} >
                                    <CatItem {...others} />
                                </Link>
                            ))
                        }
                    </div>
                    <div className="home-page__post-list col-lg-9">
                        {
                            POSTS.map(({ id, ...others }) => {
                                let prev = ''
                                return <Link to={`/post/${id}`} key={id}>
                                    <PostPrev  {...others} />
                                </Link>
                            })

                        }
                    </div>
                </div>
            </div >
        )
    }
}
