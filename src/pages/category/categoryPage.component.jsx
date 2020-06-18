import React, { Component } from 'react'

import { connect } from 'react-redux'

import { selectPostsWithSameCat } from '../../redux/posts/posts.selectors'
import { selectCat } from '../../redux/posts/posts.selectors'

import PostPrev from '../../components/postPrev/postPrev.component'

// import './'

class CategoryPage extends Component {

    render() {
        const { posts, cat } = this.props
        return (
            <div className='category-page container'>
                <h2>
                    {cat}
                </h2>
                {
                    posts.map(({ id, ...others }) => {
                        return <PostPrev key={id} {...others} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    posts: selectPostsWithSameCat(props.match.params.catId)(state),
    cat: selectCat(props.match.params.catId)(state),
})

export default connect(mapStateToProps)(CategoryPage)