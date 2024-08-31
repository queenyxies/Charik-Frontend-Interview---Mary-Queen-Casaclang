import PropTypes from 'prop-types';
import React from 'react';

const IconCard = ({ image, title, text, backgroundColor = 'bg-base-100' }) => {
  return (
    <div className={`card card-side shadow-xl ${backgroundColor}`}>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

IconCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export default IconCard;
