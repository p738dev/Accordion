import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          currentOpen={currentOpen}
          onCurrentOpen={setCurrentOpen}
          title={item.title}
          num={index}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
