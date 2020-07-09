import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectPostsCatList } from '../../redux/posts/posts.selectors'
import { selectCurrentUser } from '../../redux/users/users.selectors'

import { createPostDoc, imagesRef, storage } from '../../firebase/firebase.utils'

import './write.styles.css'

class Write extends Component {
    state = {
        title: '',
        img: null,
        // imgUrl: '',
        cat: this.props.cats[0].id,
        text: ''
    }

    render() {
        const { cats } = this.props
        return (
            <div className='write-page d-flex flex-column justify-content-center container'>
                <h1 className='pb-2 mb-5 border-bottom text-center'>Write Your Post</h1>
                <div className='d-flex align-items-center'>
                    <label htmlFor="title" className='font-weight-bold'>Title: </label>
                    <input type="text" name="title" id="title" className='form-control ml-2' autoComplete='off' onInput={this.handle_state} />
                </div>
                <div className='d-flex align-items-center mt-3'>
                    <label style={{ flexBasis: '15%' }} htmlFor="img" className='font-weight-bold'>Image Url: </label>
                    <input type="file" accept="image/*" name="img" id="img" className='form-control ml-2' autoComplete='off' onInput={this.handle_state} />
                </div>
                <div>
                    <label htmlFor="cat" className="font-weight-bold mr-3 mt-4">Category: </label>
                    <select name="cat" id="cat" onChange={this.handle_state}>
                        {
                            cats.map(({ id, name }) => <option key={id} value={`${id}`}>{name}</option>)
                        }
                    </select>
                </div>
                <div className='mt-4'>
                    <label htmlFor="text" className='font-weight-bold'>Body: </label>
                    <textarea name="text" id="text" cols="30" rows="10" className='form-control' onInput={this.handle_state}></textarea>
                </div>
                <div className='text-center mt-3'>
                    {/* <Redirect to='/'> */}
                    <button className='btn btn-secondary m-auto' onClick={this.handle_submit}>
                        Publish
                    </button>
                    {/* </Redirect> */}
                </div>
            </div>
        )
    }

    handle_state = async (e) => {
        // const x = e.target.id;
        if (e.target.name === 'img') {
            const img = e.target.files[0];
            await this.setState({ img })
            const uploadTask = imagesRef.child(` ${this.props.user.id}_${this.state.img.name}`).put(this.state.img)
            // .then(this.setState({ img: imagesRef.child(` ${this.props.user.id}_${this.state.img.name}`) }))
            // console.log(hi)
            // alert('image uploaded')
            // const imgUrl = imagesRef
            let ref = document.querySelector('#overlay')
            uploadTask.on('state_changed',
                (snapshot) => {
                    ref.innerText = 'UPLOADING...'
                    ref.style.display = 'flex'
                },
                error => {
                    alert('Error while uploading')
                    console.log(error)
                },
                async () => {
                    // alert('upload finished')
                    const hi = await imagesRef.child(` ${this.props.user.id}_${this.state.img.name}`).getDownloadURL()
                    this.setState({ img: hi })

                    ref.style.display = 'none'
                })
        }
        else await this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
        // console.log(this.props.user)
    }
    handle_submit = async () => {
        if (this.state.text && this.state.img && this.state.title && this.state.cat) {

            await createPostDoc(this.props.user.id, this.state)
            // alert('finished')
            // return <Redirect to='/' />
            // console.log(this.props)
            this.props.history.push("/");
        } else {
            alert('Please Fill All the Fields')
        }
    }
}




const mapStateToProps = createStructuredSelector({
    cats: selectPostsCatList,
    user: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(Write))