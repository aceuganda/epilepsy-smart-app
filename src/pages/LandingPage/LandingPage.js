import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div style={{ marginTop: '300px' }} className="container">
            <div className='justify-content-between' style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                <span className='text-uppercase font-size-50 font-weight-600'>SMART APP</span>
                <span><Link to='/home' className='text-danger font-size-25 text-underline'>Home</Link></span>
            </div>
        </div>
    )
}

export default LandingPage;