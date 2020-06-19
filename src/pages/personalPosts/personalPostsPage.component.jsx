import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectPostsWithPerson } from '../../redux/posts/posts.selectors'
import { selectUserWithId } from '../../redux/users/users.selectors'

import PostPrev from '../../components/postPrev/postPrev.component'

class PersonalPostsPage extends Component {
    render() {
        const { postsList, user } = this.props
        console.log(postsList)
        return (
            <div className='container'>
                <h2 className='text-center font-weight-bold mb-5'>
                    {
                        user ?
                            user.name
                            :
                            null
                    }
                </h2>
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
        )
    }
}

const mapStateToProps = (state, props,) => {
    return {
        postsList: selectPostsWithPerson(props.match.params.personId)(state),
        user: selectUserWithId(props.match.params.personId)(state)
    }
}


export default connect(mapStateToProps)(PersonalPostsPage)