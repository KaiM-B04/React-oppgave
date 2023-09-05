const ClassCard = ({ className, description, subclasses, features }) => {
  return (
    <div className="class-card">
      <h2>{className}</h2>
      {/* <img src={image} /> */}
      <p>{description}</p>
      <div className="subClass">
        <ul>
          <h3>Subclasses</h3>
          {subclasses.map((subclasses, index) => (
            <li key={index}>{subclasses}</li>
          ))}
        </ul>
      </div>
      <div className="features">
        <ul>
          <h3>Unique Features</h3>
          {features.map((features, index) => (
            <li key={index}>{features}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassCard;
