import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {timeData,hours} from '../../../config/utils'


const TimeSelector = ({ onChangeMinutesCallBack, onChangeHoursCallBack, onChangeZoneCallBack , fontSize
}) => {
    const [scrollTop, setScrollTop] = useState(0);
    TimeSelector.propTypes = {
        onChangeMinutesCallBack: PropTypes.func,
        onChangeHoursCallBack: PropTypes.func,
        onChangeZoneCallBack: PropTypes.func,
        fontSize:PropTypes.number,
    };
    const onScrolling = (event) =>{
        //keeps re-render all items scrolling
        setScrollTop(scrollTop+event.target.scrollTop)
    }
    
    const  minutesOverlap=(el1, el2,item)=>{
         if(!el1 || !el2) return
         const container = el1.getBoundingClientRect();
         const element = el2.getBoundingClientRect();
         if(!(
            (container.top) > (element.bottom-5) ||
            (container.bottom)< (element.top+5)
          )){
             // prevent re-rendering two components simulteniously
             setTimeout(()=>onChangeMinutesCallBack(item), 1000); 
         }
        return !(
          (container.top) > (element.bottom-5 )||
          (container.bottom)< (element.top+5)
        );
      }
    const  hoursOverlap=(el1, el2,item)=>{
        if(!el1 || !el2) return
        const container = el1.getBoundingClientRect();
        const element = el2.getBoundingClientRect();
        if(!(
          (container.top) > (element.bottom-5) ||
          (container.bottom)< (element.top+5)
        )){
          // prevent re-rendering two components simulteniously
          setTimeout(()=>onChangeHoursCallBack(item),1000)
        }
        return !(
          (container.top) > (element.bottom-5)||
          (container.bottom)< (element.top+5)
        );
    }
    const timeZoneOverlap =(el1, el2,item)=>{
      if(!el1 || !el2) return
      const container = el1.getBoundingClientRect();
      const element = el2.getBoundingClientRect();
      if(!(
        (container.top) > (element.bottom-5) ||
        (container.bottom)< (element.top+5)
      )){
        // prevent re-rendering two components simulteniously
        setTimeout(()=>onChangeZoneCallBack(item),1000)
      }
      return !(
        (container.top) > (element.bottom-5)||
        (container.bottom)< (element.top+5)
      );
    }

    return( 
     <div className='box'>
        <div className="Container">
           <div className='timeUnit'>
            <div  className='scrollDiv' 
             onScroll={onScrolling}
             style={{
               fontSize:{fontSize}
             }} 
            >
            <div style={{
              padding:'10px'
             }} >
            
            </div>
             {hours.map((item,index)=> 
             <div
             key={index} 
             id={`hours-${index}`}
             className={hoursOverlap(document.getElementById('container'),
             document.getElementById(`hours-${index}`),item)? "activeTime" :"inactiveTime"}
             >
             {item.value}
            </div>)
            } 
            <div style={{
              padding:'10px'
             }} >
            </div>
            </div>
            </div>
              <span className={scrollTop === 0 ?'startSeparator': 'Separator' }>
                :
              </span>
            <div className='timeUnit'>
            <div  className='scrollDiv'
             onScroll={onScrolling}
             style={{
               fontSize:{fontSize},
             }} 
            >
            <div style={{
              padding:'10px'
             }} >
            
            </div>
            {timeData.map((item,index)=> 
             <div
             key={index} 
             id={`mins-${index}`}
             className={minutesOverlap(document.getElementById('container'),
             document.getElementById(`mins-${index}`),item)? "activeTime" :"inactiveTime"}
             >
             {item.value}
            </div>)
            }  
            <div style={{
              padding:'10px'
             }} >
            </div>
            </div>
            </div>
            <div className='timeUnit'>
            <div  className='scrollDiv'
             onScroll={onScrolling}
             style={{
               fontSize:{fontSize},
             }} 
            >
            <div style={{
              padding:'17px'
             }} >
            
            </div>
            {[{ id: 'AM', value: 'AM' },
             { id: 'PM', value: 'PM' }].map((item,index)=> 
             <div
             key={index} 
             id={`ampm-${index}`}
             className={timeZoneOverlap(document.getElementById('container'),
             document.getElementById(`ampm-${index}`),item)? "activeTimeZone" :"inactiveTimeZone"}
             >
             {item.value}
            </div>)
            }  
            <div style={{
              padding:'7px'
             }} >
            </div>
            </div>
            </div>
            <div id="container" className="stayStill"></div>
        </div>
    </div>);
};

export default TimeSelector;
