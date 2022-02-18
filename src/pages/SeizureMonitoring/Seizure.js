import React, { useEffect } from 'react'
import Form from '../../components/form/Form'
import TopBar from '../../components/form/TopBar'

const Seizure = () => {
    useEffect(()=>{
        console.log('Seizure form')
    })
  return (
    <div>
          <TopBar title='Seizure Tracking' route="/home"/>
          <Form>
              <div style={{height:'420px'}}></div>
          </Form>
    </div>
  )
}

export default Seizure