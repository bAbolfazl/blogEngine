import React from 'react'

// import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'

import { selectPost } from '../../redux/posts/posts.selectors'
import { selectUser } from '../../redux/users/users.selectors'

const PostPage = ({ post }) => {

    // console.log('x', post)
    // const authorID = post.id
    // const {post} = this.props
    return (

        <div className='post-page container'>
            <h2 className='text-center font-weight-bold'>
                {post.title}
            </h2>
            {/* <p>
                author: {post.author}
            </p> */}
            <div className='my-4'><img src={post.img} width='100%' alt="" /></div>

            <p style={{ fontSize: '1.2em', lineHeight: '2em' }}>
                {post.text}
            </p>
        </div>
    )
}

const mapStateToProps = (state, props) => ({
    post: selectPost(props.match.params.postId)(state),
    // author: await selectUser(props.post.author)(state),
})

export default connect(mapStateToProps)(PostPage)