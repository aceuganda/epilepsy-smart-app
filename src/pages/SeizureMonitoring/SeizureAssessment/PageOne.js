import React, { useEffect, useState } from 'react';
import SeizureComponent from '..';
import Form from '../../../components/form/Form';
import Question from '../../../components/form/Question';
import Pagination from '../../../components/pagination';

const PageOne = () => {
    const [severity, setSeverity] = useState('');
    const [duration, setDuration] = useState('');
    const [time, setTime] = useState('');
    const [awareness, setAwareness] = useState('');

    useEffect(()=>{
    },[awareness])

    return (
        <SeizureComponent backroute={'/seizure-form/'}>
            <Form>
                <form>
                    <Question question={'How severe was it'}>
                        <fieldset className='mt-3 mb-4'>
                            <button type="button" className='button form-button-pill text-uppercase' value={'mild'} onClick={(e) => { setSeverity(e.target.value) }}>mild</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={'moderate'} onClick={(e) => { setSeverity(e.target.value) }}>moderate</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={'severe'} onClick={(e) => { setSeverity(e.target.value) }}>severe</button>
                        </fieldset>
                    </Question>
                    <Question question={'How long did it last'}>
                        <fieldset className='mt-3 mb-4'>
                            <button type="button" className='button form-button-pill text-uppercase' value={''} onClick={(e) => { setDuration(e.target.value) }}>minutes</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={''} onClick={(e) => { setDuration(e.target.value) }}>seconds</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={null} onClick={(e) => { setDuration(e.target.value) }}>unknown</button>
                        </fieldset>
                    </Question>
                    <Question question={'What time of day did it occur'}>
                        <fieldset className='mt-3 mb-4'>
                            <button type="button" className='button form-button-pill text-uppercase' value={'morning'} onClick={(e) => { setTime(e.target.value) }}>morning</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={'afternoon'} onClick={(e) => { setTime(e.target.value) }}>afternoon</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={'evening'} onClick={(e) => { setTime(e.target.value) }}>evening</button>
                        </fieldset>
                    </Question>
                    <Question question={'Did you lose awareness'}>
                        <fieldset className='mt-3 mb-4' style={{ justifyContent: 'space-evenly' }}>
                            <button type="button" className='button form-button-pill text-uppercase' value={'yes'} onClick={(e) => { setAwareness(e.target.value) }}>yes</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={'no'} onClick={(e) => { setAwareness(e.target.value) }}>no</button>
                        </fieldset>
                    </Question>
                </form>
                {
                    awareness !== '' ?
                        <Pagination page_number={1} total_number={3} page_link={'/seizure-form/assessment/2'} button={true} />
                        :
                        <Pagination page_number={1} total_number={3} page_link={''} button={false} />

                }
            </Form>
        </SeizureComponent>
    )
}

export default PageOne;