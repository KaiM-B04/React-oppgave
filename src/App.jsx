import classesData from "./JavaScript/classes";
import ClassCard from "./Components/ClassCard";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Baldur&apos;s Gate 3 Playable Classes</h1>
        <div className="class-card-container">
          {classesData.map((classInfo, index) => (
            <ClassCard
              key={index}
              className={classInfo.name}
              description={classInfo.description}
              subclasses={classInfo.subclasses}
              features={classInfo.features}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
