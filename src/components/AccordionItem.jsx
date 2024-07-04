import React from "react";

const AccordionItem = ({
  num,
  title,
  children,
  currentOpen,
  onCurrentOpen,
}) => {
  const isOpen = num === currentOpen;

  const handleOpen = () => {
    onCurrentOpen(isOpen ? null : num);
  };

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleOpen}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default AccordionItem;
