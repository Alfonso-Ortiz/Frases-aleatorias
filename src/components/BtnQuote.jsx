import React from "react";

const BtnQuote = ({ objStylebtn, handleClick }) => {
  return (
    <button className="card__btn" style={objStylebtn} onClick={handleClick}>
      &gt;
    </button>
  );
};

export default BtnQuote;
