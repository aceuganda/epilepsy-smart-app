import React, { useEffect } from 'react'
import Footer from '../../components/layouts/Footer';

const HomePage = () => {
    const check = () => {
        console.log('youve reached the home page');
    }
    useEffect(() => {
        check();
    })

    return (
        <div className='smart home-page'>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className='home-header'>
                        <div className='top-section container-fluid'>
                            <div className='row justify-content-between'>
                                <span><p>Welcome!</p></span>
                                <span><i className='fa fa-bell font-size-20 mt-5 mr-3'></i></span>
                            </div>
                        </div>
                        <div className='banner container-fluid'>
                            <div className='row justify-content-between'>
                                <span className='col container-fluid left'>
                                    <i className='fa fa-user font-size-50' style={{borderRadius:"70%", border:'1px solid #aaa', padding:'8px'}}></i>
                                    <p>Sophie Mukasa</p>
                                </span>
                                <span className='col container-fluid right'>
                                    <h3>Discover Activities <hr/></h3>
                                    <p>Give yourself a chance.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='home-cards'>
                            <div className='col justify-content-between'>
                                <div className='row mb-5'>
                                    <div className='card col-5 mr-5'> card 1</div>
                                    <div className='card col-5'> card 2</div>
                                </div>
                                <div className='row mt-5'>
                                    <div className='card col-5 mr-5'> card 3</div>
                                    <div className='card col-5'> card 4</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;