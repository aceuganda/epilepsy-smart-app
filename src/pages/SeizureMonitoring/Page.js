import React from 'react'
import SeizureComponent from '.'
import Form from '../../components/form/Form'
import Footer from '../../components/layouts/Footer'
import {ReactComponent as SeizureImg} from '../../assets/svg/Seizure/seizure.svg'
import Largebtn from '../../components/form/Buttons/Largebtn'

const StartPage = () => {
  return (
    <div className='form start-page'>
        <SeizureComponent backroute={'/home'}>
            <Form>
                <SeizureImg className='image'/>
                <Largebtn title='Take Assessment' link='/seizure-form/assessment/1'/>
                <Largebtn title='Track Seizure' link=''/>
            </Form>
        </SeizureComponent>
        <Footer/>
    </div>
  )
}

export default StartPage