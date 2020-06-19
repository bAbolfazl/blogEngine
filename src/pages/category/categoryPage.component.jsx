import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectCat, selectPostsWithSameCat } from '../../redux/posts/posts.selectors'
// import { } from '../../redux/posts/posts.selectors'

import PostPrev from '../../components/postPrev/postPrev.component'

import './categoryPage.styles.css'

class CategoryPage extends Component {

    render() {
        const { posts, cat } = this.props
        console.log(cat)
        if (!cat) {
            return (
                <div className='text-center container'>
                    no such a category
                </div>
            )
        }
        else
            return (
                <div className='category-page container'>
                    <h2>
                        {cat.name}
                    </h2>
                    {
                        posts.map(({ id, ...others }) => (
                            <Link to={`/post/${id}`}>
                                <PostPrev key={id} {...others} />
                            </Link>
                        ))
                    }
                </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
    cat: selectCat(props.match.params.catId)(state),
    posts: selectPostsWithSameCat(props.match.params.catId)(state),
})

export default connect(mapStateToProps)(CategoryPage)