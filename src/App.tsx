import React from "react";
import LaughAndLearn from "./components/LaughAndLearn";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
        An advice and a cute dog
      </h1>
      <LaughAndLearn />
    </div>
  );
};

export default App;
