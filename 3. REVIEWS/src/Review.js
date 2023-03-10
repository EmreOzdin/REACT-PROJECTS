import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [random, setRandom] = useState(0);
  const { id, name, image, job, text } = people[random];

  return (
    <div>
      <div key={id}>
        <h2>{name}</h2>
        <h2>{job}</h2>
        <h2>{text}</h2>
        <img src={image} style={{ width: "25%" }} />
      </div>
      <FaChevronLeft onClick={handleLeftClick} />
      <FaChevronRight onClick={handleRightClick} />
    </div>
  );
};

export default Review;
