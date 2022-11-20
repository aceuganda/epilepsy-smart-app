import React, {useState,useRef} from 'react';
import PropTypes from 'prop-types';
import {timeData} from '../../config/utils'


const TimePicker = ({ onChangeMinutesCallBack, onChangeSecondsCallBack ,
    fontSize
}) => {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollTopSeconds, setscrollTopSeconds] = useState(0)
    
    
    TimePicker.propTypes = {
        onChangeMinutesCallBack: PropTypes.func,
        onChangeSecondsCallBack: PropTypes.func,
        fontSize:PropTypes.number,
    };
    const onScrollMins = (event) =>{
        //keeps re-render items on minutes list scrolling
        setScrollTop(scrollTop+event.target.scrollTop)
    }
    const onScrollSeconds = (event) =>{
        //keeps re-render items on seconds list scrolling
        setscrollTopSeconds(scrollTopSeconds+event.target.scrollTop)
    }
    const  minutesOverlap=(el1, el2,item)=>{
         if(!el1 || !el2) return
         const container = el1.getBoundingClientRect();
         const element = el2.getBoundingClientRect();
         if(!(
            (container.top+13) > element.bottom ||
            (container.bottom-13)< element.top 
          )){
             // prevent re-rendering two components simulteniously
             setTimeout(()=>onChangeMinutesCallBack(item), 1000); 
         }
        return !(
          (container.top+13) > element.bottom ||
          (container.bottom-13)< element.top 
        );
      }
    const  secondsOverlap=(el1, el2,item)=>{
        if(!el1 || !el2) return
        const container = el1.getBoundingClientRect();
        const element = el2.getBoundingClientRect();
        if(!(
           (container.top+13) > element.bottom ||
           (container.bottom-13)< element.top 
         )){
          // prevent re-rendering two components simulteniously
          setTimeout(()=>onChangeSecondsCallBack(item),1000)
        }
       return !(
         (container.top+13) > element.bottom ||
         (container.bottom-13)< element.top 
       );
    }

    return( 
     <div className='box'>
        <div className="Container">
            <ul 
             onScroll={onScrollMins}
             style={{
               fontSize:{fontSize}
             }} 
            >
            <div style={{
              padding:'6px'
             }} >
            
            </div>
             {timeData.map((item,index)=> 
             <div
             key={index} 
             id={`mins-${index}`}
             onClick={()=>{console.log(index)}}
             style={{
                fontFamily:'400',
                color: minutesOverlap(document.getElementById('container'),
                    document.getElementById(`mins-${index}`),item)
                    ? "#000" : "#ccc"
             }}
             >
             {item.value}
            </div>)
            } 
            <div style={{
              padding:'6px'
             }} >
            </div>
            </ul>
            <div className="label">min</div>
            <ul 
             onScroll={onScrollSeconds}
             style={{
               fontSize:{fontSize},
             }} 
            >
            <div style={{
              padding:'6px'
             }} >
            
            </div>
             {timeData.map((item,index)=> 
            <div
             key={index} 
             id={`sec-${index}`}
             style={{
                fontFamily:'400',
                color: secondsOverlap(document.getElementById('container'),
                    document.getElementById(`sec-${index}`),item)
                    ? "#000" : "#ccc"
             }}
             >
             {item.value}
            </div>)
            } 
            <div style={{
              padding:'6px'
             }} >
            </div>
            </ul>
            <div className="label">sec</div>
            <div id="container" className="stayStill"></div>
        </div>
    </div>);
};

export default TimePicker;
