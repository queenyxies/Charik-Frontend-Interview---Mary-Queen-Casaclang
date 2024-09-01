import React from 'react';

const ArticleCard = ({ imageSrc, title, date, badgeText, readTime }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <figure className="overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="transition-transform duration-300 hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{badgeText}</div>
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
