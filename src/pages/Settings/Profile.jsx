import React from 'react'
import ProfileComponent from '.';
import Form from '../../components/form/Form';
import TopBar from '../../components/form/TopBar';
import Footer from '../../components/layouts/Footer';
import { HiCamera } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi";
import Largebtn from '../../components/form/Buttons/Largebtn';


function Profile(props) {
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
          <div className='big-container'>
              <h5>Account settings</h5>
              <div className='Profile-card'>
                   <h6>Edit profile</h6>  
                   <HiChevronRight style={{marginLeft:'260px',marginTop:'-60px',width:'30px' ,height:'25px'}}/> 
                   
                </div>
                <div className='Profile-card'>
                   <h6>Change Password</h6>    
                   <HiChevronRight style={{marginLeft:'260px',marginTop:'-60px',width:'30px' ,height:'25px'}}/>  
                </div>
                <div className='Profile-card'>
                   <h6>Security & privacy</h6> 
                   <HiChevronRight style={{marginLeft:'260px',marginTop:'-60px',width:'30px' ,height:'25px'}}/>     
                </div>
               
          </div>
          
      </Form>
      
      <Footer/>
    </ProfileComponent>
  )
}

export default Profile
