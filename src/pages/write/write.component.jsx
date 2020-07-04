import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectPostsCatList } from '../../redux/posts/posts.selectors'

import { createPostDoc } from '../../firebase/firebase.utils'

import './write.styles.css'

class Write extends Component {
  
    render() {
        const { cats } = this.props
        return (
            <div className='write-page d-flex flex-column justify-content-center container'>
                <h1 className='pb-2 mb-5 border-bottom text-center'>Write Your Post</h1>
                <div className='d-flex align-items-center'>
                    <label htmlFor="title" className='font-weight-bold'>Title: </label>
                    <input type="text" name="title" id="title" className='form-control ml-2' autoComplete='off' />
                </div>
                <div className='d-flex align-items-center mt-3'>
                    <label style={{ flexBasis: '15%' }} htmlFor="img" className='font-weight-bold'>Image Url: </label>
                    <input type="text" name="img" id="img" className='form-control ml-2' autoComplete='off' />
                </div>
                <div>
                    <label htmlFor="cat" className="font-weight-bold mr-3 mt-4">Category: </label>
                    <select name="cat" id="cat">
                        {
                            cats.map(({ id, name }) => <option key={id} value={`${id}`}>{name}</option>)
                        }
                    </select>
                </div>
                <div className='mt-4'>
                    <label htmlFor="text" className='font-weight-bold'>Body: </label>
                    <textarea name="text" id="text" cols="30" rows="10" className='form-control'></textarea>
                </div>
                <div className='text-center mt-3'>
                    <button className='btn btn-secondary m-auto' onClick={handle_submit}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

const handle_submit = () => {
    alert('hi')
}

const mapStateToProps = createStructuredSelector({
    cats: selectPostsCatList
})

export default connect(mapStateToProps)(Write)