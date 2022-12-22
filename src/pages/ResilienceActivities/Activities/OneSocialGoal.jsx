import { Padding } from '@mui/icons-material';
import { height } from '@mui/system';
import React from 'react';
import ResilienceActivitiesPageComponent from '..';
import Form from '../../../components/form/Form';

const OneSocialGoal = () => {
  return (
    <div>
      <ResilienceActivitiesPageComponent
        title={'One Social Goal'}
        backroute={'/resilience-activities'}>
        <Form>
          <div>
            <div>
              <span style={{marginLeft:'10px'}}>One Social Goal </span>

            </div>
            <div >
              <span style={{color:"gray" , left:0 , marginLeft:'15px' , fontSize:'13px',inset:'0px' ,top:'40px', borderBottom: '3px solid orange' ,marginBottom:'-100px',}}>Overall</span>
            </div>
            <hr style={{width:325 , marginTop:'0px'}}/>
            <div>
              <p style={{fontSize:'11px',marginLeft:'6px'}}>
              Making friends or getting to know other people is an important part of well-being. Sometimes it is hard to make these connections because we are shy, we don’t know others or we fear to be ignored, mistreated or laughed at. Try to build your social community in small steps one at a time. Pick one social goal and try to engage in a social activity in the next few days.


              </p>
              <h6 style={{fontSize:'13px',marginLeft:'25px' ,marginTop:'3px'}}>Tips:</h6>
              <li style={{fontSize:'11px',marginLeft:'20px',marginRight:'10px'}}>  Spend time with a special family member, a friend, a schoolmate, or someone from the church/mosque or prayer group. Sometimes you can meet people from Epilepsy support groups, like through the Epilepsy Support Association of Uganda or Purple Bench.
            </li>
              
        
            
            
           

            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default OneSocialGoal;
