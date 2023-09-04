const ClassCard = ({ className, description, subclasses, features }) => {
  return (
    <div className="class-card">
      <h2>{className}</h2>
      <p>{description}</p>
      <ul>
        <h3>Subclasses</h3>
        {subclasses.map((subclasses, index) => (
          <li key={index}>{subclasses}</li>
        ))}
      </ul>
      <ul>
        <h3>Unique Features</h3>
        {features.map((features, index) => (
          <li key={index}>{features}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassCard;
