import React, { useEffect, useState } from 'react'
import Form from '../../components/form/Form'
import TopBar from '../../components/form/TopBar'
import Question from '../../components/form/Question'
import { connect, useDispatch } from 'react-redux'
import { addResponse } from '../../data/redux/actions'
import PopQuestion from '../../components/form/PopQuestion'
import SeizureComponent from '.'

let SeizureAssessment = () => {
  let dispatch = useDispatch();
  const [aura, setAura] = useState();
  const [engage, setEngage] = useState();
  const [seizure, setSeizure] = useState();

  useEffect(() => {
    console.log('Seizure form values', aura, engage, seizure)
  })

  return (
    <SeizureComponent backroute={'/seizure-form'}>
      <Form>
        <form onSubmit={(e) => {
          e.preventDefault()
          dispatch(addResponse(aura, engage, seizure))
        }}>
          <PopQuestion question={'Before the seizure, did you have an '} popTitle={'Aura'}>
            <fieldset className='mt-3 mb-4'>
              <button type="button" className='button form-button-pill text-uppercase' value={'Yes'} onClick={(e) => { setAura(e.target.value) }}>yes</button>
              <button type="button" className='button form-button-pill text-uppercase' value={'No'} onClick={(e) => { setAura(e.target.value) }}>no</button>
            </fieldset>
          </PopQuestion>
          {/* <Question question='How did you engage socially?' />
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
          </fieldset> */}
          {/* <button className='btn btn-primary font-size-16 m-3 p-2 text-uppercase' type='submit'>Submit</button> */}
        </form>
      </Form>
    </SeizureComponent>
  )
}

SeizureAssessment = connect()(SeizureAssessment)
export default SeizureAssessment;