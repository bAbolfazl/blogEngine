import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {Link} from 'react-router-dom'

import { selectPostsCatList } from '../../redux/posts/posts.selectors'

import './categoryListPage.styles.css'
import CatItem from '../../components/catItem/catItem.components'

class CategoryListPage extends Component {
    render() {
        const { catList } = this.props
        console.log(catList)
        return (
            <div className='category-list-page'>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        {
                            catList ?
                                catList.map(({ id, ...others }) => (
                                    <Link  key={id} to={`/category/${id}`}>
                                        <CatItem {...others} />
                                    </Link>
                                )
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector(
    {
        catList: selectPostsCatList,
    }
)

export default connect(mapStateToProps)(CategoryListPage)