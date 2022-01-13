import React from "react";

const Display = ({ numberLayout, setNumberLayout }) => {
  const handleClick = (number) => {
    setNumberLayout(number);
  };

  return (
    <div className="product-list__display">
      <div
        className={`product-list__display--column ${
          numberLayout === 2 ? "active" : ""
        }`}
        onClick={() => handleClick(2)}
      >
        <span></span>
        <span></span>
      </div>
      <div
        className={`product-list__display--column ${
          numberLayout === 3 ? "active" : ""
        }`}
        onClick={() => handleClick(3)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`product-list__display--column ${
          numberLayout === 4 ? "active" : ""
        }`}
        onClick={() => handleClick(4)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`product-list__display--column ${
          numberLayout === 5 ? "active" : ""
        }`}
        onClick={() => handleClick(5)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <List
        onClick={() => handleClick(1)}
      >
        <span></span>
        <span></span>
        <span></span>
      </List> */}
    </div>
  );
};

export default Display;
