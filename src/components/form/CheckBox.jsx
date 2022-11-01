import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const CheckBox = ({ label,id,checked,onChange,...props }) => {
  CheckBox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked : PropTypes.string
  };
  const defaultChecked =checked ? checked : false;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div >
      <label  style={{display:"flex"   }} className="checkbox-wrapper">
        <input 
         id={id}
         type="checkbox" 
         checked={isChecked}
         onChange={() => setIsChecked((prev) => !prev)}
         {...props}
         className={isChecked ? "checked" : ""}
         />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default CheckBox;