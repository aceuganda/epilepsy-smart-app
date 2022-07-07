import React, { useEffect } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Footer from '../../components/layouts/Footer';
import Card from './Card';
import SeizureImg from '../../assets/img/HomePage/seizure.png'
import MedicineImg from '../../assets/img/HomePage/medication.png'
import ActivitiesImg from '../../assets/img/HomePage/activities.png'
import TrackImg from '../../assets/img/HomePage/tracking.png'

const HomePage = () => {
    const check = () => {
        console.log('Youve reached the home page');
    }
    useEffect(() => {
        check();
    })

    return (
        <div className='home-page'>
            <header className='row justify-content-between'>
                <h4>Holla!</h4>
                <div><NotificationsNoneIcon/></div>
            </header>
            <div className='banner'>
                <span>
                    <img/>
                    <span className='name'>Sophie Mukasa</span>
                </span>
                <div>
                    <h3>Discover Activities <hr/></h3>
                    <span>Give yourself a chance</span>
                </div>
            </div>
            <div className='cards'>
                <Card title='seizure tracking' img={SeizureImg} link='/seizure-form'/>
                <Card title='medication' img={MedicineImg}/>
                <Card title='resilience tracking' img={TrackImg} />
                <Card title='resilience activities' img={ActivitiesImg}/>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;