import React, { useEffect, useState } from 'react'
import Form from '../../components/form/Form'
import TopBar from '../../components/form/TopBar'
import Question from './components/Question'
import { connect, useDispatch } from 'react-redux'
import { addResponse } from '../../data/redux/actions'

let Seizure = () => {
  let dispatch = useDispatch();
  const [feel, setFeel] = useState();
  const [engage, setEngage] = useState();
  const [seizure, setSeizure] = useState();

  useEffect(() => {
    console.log('Seizure form values', feel, engage, seizure)
  })

  return (
    <div>
      <TopBar title='Seizure Tracking' route="/home" />
      <Form>
        <form style={{ paddingTop: '20px' }} onSubmit={(e) => {
          e.preventDefault()
          dispatch(addResponse(feel, engage, seizure))
        }}>
          <Question question='How do you feel today?' />
          <fieldset className='mt-3 mb-4'>
            <button type="button" className='button form-button-pill' value={'Great'} onClick={(e) => { setFeel(e.target.value)}}>Great</button>
            <button type="button" className='button form-button-pill' value={'Good'} onClick={(e) => { setFeel(e.target.value) }}>Good</button>
            <button type="button" className='button form-button-pill' value={'Okay'} onClick={(e) => { setFeel(e.target.value) }}>Okay</button>
            <button type="button" className='button form-button-pill' value={'Bad'} onClick={(e) => { setFeel(e.target.value) }}>Bad</button>
            <button type="button" className='button form-button-pill' value={'Really Bad'} onClick={(e) => { setFeel(e.target.value) }}>Really Bad</button>
          </fieldset>
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
          <button className='btn btn-primary font-size-16 m-3 p-2 text-uppercase'>Submit</button>
        </form>
      </Form>
    </div>
  )
}

Seizure = connect()(Seizure)
export default Seizure