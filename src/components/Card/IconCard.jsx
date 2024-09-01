import PropTypes from 'prop-types';
import React from 'react';

const IconCard = ({ image, title, text, backgroundColor = 'bg-base-100' }) => {
  return (
    <div
      className={`card card-side shadow-xl ${backgroundColor} transition-transform duration-300 hover:scale-105`}
    >
      <figure className="transition-transform duration-300 hover:scale-105">
        <img
          src={image}
          alt={title}
          className="transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-950">{title}</h2>
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
