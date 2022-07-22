import React, { useEffect, useState } from 'react'
import Form from '../../../components/form/Form'
import { connect, useDispatch } from 'react-redux'
import { addResponse } from '../../../data/redux/actions'
import SeizureComponent from '..'

let SeizureAssessment = () => {
    let dispatch = useDispatch();
    const [aura, setAura] = useState();

    useEffect(() => {
        console.log('Seizure assessment values:', aura)
    })

    return (
        <SeizureComponent backroute={'/seizure-form'}>
            {/* <Form>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addResponse(aura))
                }}>
                    <PopQuestion question={'Before the seizure, did you have an '} popTitle={'Aura'} popDescription={' An aura is unusual feeling, experience, or sensation that signals an upcoming seizure'}>
                        <fieldset className='mt-3 mb-4'>
                            <button type="button" className='button form-button-pill text-uppercase' value={'Yes'} onClick={(e) => { setAura(e.target.value) }}>yes</button>
                            <button type="button" className='button form-button-pill text-uppercase' value={'No'} onClick={(e) => { setAura(e.target.value) }}>no</button>
                        </fieldset>
                    </PopQuestion>
                    <Question question='How did you engage socially?' />
                    <fieldset className='mt-3 mb-4'>
                        <button type="button" className='button form-button-pill' value={'School'} onClick={(e) => { setEngage(e.target.value) }}>School</button>
                        <button type="button" className='button form-button-pill' value={'Work'} onClick={(e) => { setEngage(e.target.value) }}>Work</button>
                        <button type="button" className='button form-button-pill' value={'Church'} onClick={(e) => { setEngage(e.target.value) }}>Church</button>
                        <button type="button" className='button form-button-pill' value={'Sport'} onClick={(e) => { setEngage(e.target.value) }}>Sport</button>
                        <button type="button" className='button form-button-pill' value={'None'} onClick={(e) => { setEngage(e.target.value) }}>None</button>
                    </fieldset>
                    <Question question='Did you get a seizure?' />
                    <fieldset className='mt-3 mb-4'>
                        <button type="button" className='button form-button-pill' value={'Yes'} onClick={(e) => { setSeizure(e.target.value) }}>Yes</button>
                        <button type="button" className='button form-button-pill' value={'No'} onClick={(e) => { setSeizure(e.target.value) }}>No</button>
                    </fieldset>
                    <button className='btn btn-primary font-size-16 m-3 p-2 text-uppercase' type='submit'>Submit</button>
                </form>
            </Form> */}
        </SeizureComponent>
    )
}

SeizureAssessment = connect()(SeizureAssessment)
export default SeizureAssessment;