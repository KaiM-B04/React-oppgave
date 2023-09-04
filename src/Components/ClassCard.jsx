import React from "react";

const ClassCard = ({ className, description, subclasses, features }) => {
  return (
    <div className="class-card">
      <h2>{className}</h2>
      <p>{description}</p>
      <ul>
        {subclasses.map((subclasses, index) => (
          <li key={index}>{subclasses}</li>
        ))}
      </ul>
      <ul>
        {features.map((features, index) => (
          <li key={index}>{features}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassCard;
