import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header title={courseName} />
      <Content courseContents={courseParts} />
      <Total courseContents={courseParts} />
    </div>
  );
};

export default App;
