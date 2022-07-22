import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SeizureComponent from '..'
import Form from '../../../components/form/Form'
import Question from '../../../components/form/Question'

const PageThree = () => {
    const [feel, setFeel] = useState('')
    return (
        <SeizureComponent backroute={'/seizure-form/assessment/2'}>
            <Form>
                <form>
                    <Question question={'How did you feel after the seizure'} >
                        <fieldset className='mt-3 mb-4'>
                            <button type="button" className='button form-button-lg text-uppercase' value={'sleepy'} onClick={(e) => { setFeel(e.target.value) }}>Sleepy</button>
                            <button type="button" className='button form-button-lg text-uppercase' value={'confused'} onClick={(e) => { setFeel(e.target.value) }}>Confused</button>
                            <button type="button" className='button form-button-lg text-uppercase' value={'body weakness'} onClick={(e) => { setFeel(e.target.value) }}>Body Weakness</button>
                            <button type="button" className='button form-button-lg text-uppercase' value={'restless'} onClick={(e) => { setFeel(e.target.value) }}>Restless</button>
                            <button type="button" className='button form-button-lg text-uppercase' value={'headache'} onClick={(e) => { setFeel(e.target.value) }}>Headache</button>
                        </fieldset>
                    </Question>
                </form>
                {
                    feel !== '' ?
                        <Link to=''><button className='finish-btn'>Finish</button></Link>
                        :
                        <span></span>
                }
            </Form>
        </SeizureComponent>
    )
}

export default PageThree