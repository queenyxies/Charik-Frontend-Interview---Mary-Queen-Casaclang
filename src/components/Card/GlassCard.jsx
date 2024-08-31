import React from "react";

const GlassCard = ({ text, imageSrc, name, title }) => {
  return (
    <div className="p-6 rounded shadow-md glass">
      <p className="text-lg">{text}</p>
      <div className="flex items-center mt-4 space-x-4">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src={imageSrc} alt={name} />
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm dark:text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
