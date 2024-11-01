import "../WorkCard.css";
import WorkData from "./WorkData";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkData.map((data, key) => {
          return (
            <WorkCard
              imgsrc={data.imgSrc}
              title={data.title}
              text={data.text}
              view={data.view}
              source={data.source}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
