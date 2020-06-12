import React from 'react';

import { Link } from 'react-router-dom'

import './footer.styles.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__login text-white d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    <div className='mb-3 mb-lg-0' style={{
                        fontSize: '3em',
                        flexBasis: '35%',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>
                        Are you ready to get started?
                    </div>
                    <div>
                        <Link to='/login'>
                            <button className='btn btn-info login-btn font-weight-bold px-4 py-2'>Login / Register</button>
                        </Link>
                    </div>
                </div>
                <div className="footer__bottom mx-lg-5"
                    style={{ fontSize: '.8em' }}
                >
                    <div className="footer__bottom__menu d-flex flex-column flex-lg-row align-items-center align-items-lg-end justify-content-between pb-4">
                        <div style={{ height: '60px' }}>
                            <Link to='/'>
                                <img src={require('../../assets/img/xx.png')} width='100%' height="100%" alt="" />
                            </Link>
                        </div>
                        <ul class="d-lg-flex d-none">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/category'>Categories</Link></li>
                            <li><Link to='/authors'>Authors</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/login'>Login / Register</Link></li>
                        </ul>

                        {/* mobile footer menu */}
                        <ul class="d-lg-none d-flex justify-content-between w-100 mt-4">
                            <div>
                                <li className='mb-2'><Link to='/'>Home</Link></li>
                                <li className='mb-2'><Link to='/category'>Categories</Link></li>
                                <li className='mb-2'><Link to='/authors'>Authors</Link></li>
                            </div>
                            <div>
                                <li className='mb-2'><Link to='/about'>About Us</Link></li>
                                <li className='mb-2'><Link to='/login'>Login / Register</Link></li>
                            </div>
                        </ul>
                    </div>
                    <div className="footer__bottom__copyright d-flex flex-column flex-lg-row justify-content-between align-items-center py-4"
                        style={{ fontSize: '.8em' }}
                    >
                        <div>
                            All right reserved for this site under the same brand name & are copyrighted
                        </div>
                        <div>
                            2020 - 2021
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;