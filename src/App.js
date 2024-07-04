import React from "react";
import Accordion from "./components/Accordion";
import { faqs } from "./data";

const App = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

export default App;
