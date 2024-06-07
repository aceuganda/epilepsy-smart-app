import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CheckBox = ({ label, id, onClick, checked, ...props }) => {
  CheckBox.propTypes = {
    id: PropTypes.any,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    checked: PropTypes.bool
  };

  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const { t } = useTranslation();

  return (
    <div>
      <label style={{ display: 'flex' }} className="checkbox-wrapper">
        <input
          type="checkbox"
          className={isChecked ? 'checked' : ''}
          id={id}
          checked={isChecked ? true : false}
          onClick={onClick}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
        <span>{t(label)}</span>
      </label>
    </div>
  );
};
export default CheckBox;