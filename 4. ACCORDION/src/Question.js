import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleId = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <div className="">
        <h5>{title}</h5>
      </div>
      <div className="d-flex">
        {isOpen ? (
          <div>
            <button className="btn" onClick={toggleId}>
              <AiOutlinePlus />
            </button>
          </div>
        ) : (
          <div className="">
            <button className="btn" onClick={toggleId}>
              <AiOutlineMinus />
            </button>
            <p>{info}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
