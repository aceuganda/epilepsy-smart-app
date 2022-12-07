import React from 'react'
import ProfileComponent from '.';
import Form from '../../components/form/Form';
import TopBar from '../../components/form/TopBar';
import Footer from '../../components/layouts/Footer';
import { HiCamera } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi";
import Largebtn from '../../components/form/Buttons/Largebtn';
import { useState } from 'react';
import { postEditUser } from '../../apis';
import { useSelector } from 'react-redux';



function Profile(props) {
  const { userInfo } = useSelector((state) => state.user);
  const[email,setEmail]=useState(userInfo.data.email);
  const[name,setName]=useState(userInfo.data.username);
  const[feedBackMessage,setFeedBackMessage]=useState('');

  const handleClick= async ()=>{
    if(email != userInfo.data.email || name != userInfo.data.username){
      try {
         await postEditUser({
          email,
          username:name
         }
          ,userInfo.data.id)
        setFeedBackMessage('Successfully updated')
      } catch (error) {
        setFeedBackMessage('Failed to update user')
      }
    }

  }
  return (
    <ProfileComponent backroute={'/home'} >
      <Form>
        <div className='Profile-container'>
               <div style={{justifyContent:"center" ,alignItems:"center"}} >
                    <img   style={{width:'100px',height:'100px' , justifyContent:"center" ,alignItems:"center"  , borderRadius:'50%'}} src='https://avatars.githubusercontent.com/u/82638283?v=4' alt='image'/>
                      <HiCamera  style={{width:'25px',height:'25px',backgroundColor:'white',color:'#8a2be2',padding:'1px',top:'90px',marginLeft:'-20px',position:'absolute',borderRadius:'50%'}}/>
                    <h4  style={{marginTop:"8px" , color:"#808080"  , fontSize:"18px" , marginLeft:"-6px"}}>Namutebi M</h4>
               </div>
          </div>
          <div className='settingsPage' >
              <label >E-mail</label><br/>
              <input type="email" 
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter your email address"/>
              <br/>
              <label>Username</label><br/>
              <input type="text" 
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Enter your Username"/> 
              <button onClick={handleClick} 
              className="o-btn">SAVE</button>
              <p>{feedBackMessage}</p>
          </div>
          
          
      </Form>
      
      <Footer/>
    </ProfileComponent>
  )
}

export default Profile
