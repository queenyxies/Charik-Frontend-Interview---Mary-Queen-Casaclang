import React from 'react';

const ArticleCard = ({ imageSrc, title, date, badgeText, readTime }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-primary">{badgeText}</div>
        </h2>
        <p>{date}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{readTime}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
