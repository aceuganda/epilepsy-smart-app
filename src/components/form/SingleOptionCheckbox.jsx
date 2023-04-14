import React from 'react';
import PropTypes from 'prop-types';

const SingleOptionCheckbox = ({ label, id, checked, onChange, value, ...props }) => {
  SingleOptionCheckbox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    value: PropTypes.string
  };
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label style={{ display: 'flex' }} className="checkbox-wrapper">
        <input
          id={id}
          value={value}
          className={checked ? 'checked' : ''}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default SingleOptionCheckbox;
