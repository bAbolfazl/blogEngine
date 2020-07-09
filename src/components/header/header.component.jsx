import React from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleMobileMenu } from '../../redux/header/header.actions'
import { selectHeaderShow } from '../../redux/header/header.selectors'
import { selectCurrentUser } from '../../redux/users/users.selectors'

import { auth } from '../../firebase/firebase.utils'

import "./header.styles.css"

const Header = ({ toggleMobileMenu, showMobileMenu, currentUser }) => {
    return (
        <header className='header shadow sticky-top'>
            <div className="container d-flex justify-content-between align-items-center">
                <div style={{ height: '100px' }}>
                    <Link to='/'>
                        <img src={require('../../assets/img/xx.png')} height="100%" alt="" />
                    </Link>
                </div>
                <div>
                    <ul className="d-lg-flex d-none">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/category'>Categories</Link></li>
                        <li><Link to='/authors'>Authors</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li>
                            {
                                currentUser ?
                                    <div className='text-center'>
                                        <div className='text-info'>
                                            <Link to='/write'>
                                                Write Post
                                            </Link>
                                        </div>
                                        <div style={{ cursor: 'pointer' }} onClick={() => auth.signOut()}>
                                            Sign Out <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>{currentUser.displayName}</span> ?
                                        </div>
                                    </div>
                                    :
                                    <Link to='/login'>Login / Register</Link>
                            }
                        </li>
                    </ul>
                    <button
                        className='d-lg-none btn'
                        onClick={toggleMobileMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <div className={showMobileMenu ? 'show mobile-menu' : 'hide mobile-menu'}>
                        <ul className="d-flex flex-column align-items-center justify-content-around h-100">
                            <li className='ml-0'><Link to='/'>Home</Link></li>
                            <li className='ml-0'><Link to='/category'>Categories</Link></li>
                            <li className='ml-0'><Link to='/authors'>Authors</Link></li>
                            <li className='ml-0'><Link to='/about'>About Us</Link></li>
                            <li className='ml-0'><Link to='/login'>Login / Register</Link></li>
                            <div onClick={toggleMobileMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    );
};

const mapStateToProps = createStructuredSelector({
    showMobileMenu: selectHeaderShow,
    currentUser: selectCurrentUser
})

const dispatchStateToProps = dispatch => {
    return {
        toggleMobileMenu: () => dispatch(toggleMobileMenu())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Header);