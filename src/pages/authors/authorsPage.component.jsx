import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { selectUsersList } from '../../redux/users/users.selectors'

import AuthorItem from '../../components/authorItem/authorItem.components'

class AuthorsPage extends Component {
    render() {
        const { usersList } = this.props
        return (
            <div className='author-page container d-flex flex-wrap align-items-center justify-content-around'>
                {console.log('usersList', usersList)}
                {
                    usersList ?
                        usersList.map(({ id, ...others }) => (
                            <Link style={{ flexBasis: '15%' }} key={id} to={`/authors/${id}`} className='mx-3 mb-3'>
                                <AuthorItem {...others} />
                            </Link>
                        ))
                        :
                        null
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector(
    {
        usersList: selectUsersList
    }
)

export default connect(mapStateToProps)(AuthorsPage)