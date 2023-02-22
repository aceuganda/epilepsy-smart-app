import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ img, name, alt, style }) => {
  //img is for when a user has an image link attached to their redux
  Avatar.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.any
  };
  const nameStringToHslColor = (name) => {
    let hash = 0;
    let i = 0;
    for (i; i < name?.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = hash % 360;
    return `hsl(${h}, 30%, 80%)`;
  };
  return (
    <>
      {img ? (
        <img src={img} />
      ) : (
        <h1 style={style ? style : { backgroundColor: nameStringToHslColor(name), color: '#000' }}>
          {name.charAt(0).toUpperCase()}
        </h1>
      )}
    </>
  );
};

export default Avatar;
