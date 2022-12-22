import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const CheckBox = ({ label,id,checked,onChange,value,...props }) => {
  CheckBox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked : PropTypes.string,
    value:PropTypes.string
  };
  const defaultChecked =checked ? checked : false;
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div >
      <label  style={{display:"flex"   }} className="checkbox-wrapper">
        <input 
         id={id}
         value={value}
         type="checkbox" 
         checked = {checked}
        //  checked={isChecked}
         onChange={onChange}
        //  onChange={() => setIsChecked((prev) => !prev)}
         {...props}
        //  className={isChecked ? "checked" : ""}
         />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default CheckBox;