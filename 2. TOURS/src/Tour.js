import React, { useState } from 'react';

const Tour = ({ data, handleRemove }) => {
  return (
    <div>
      {data?.map((item) => {
        const { id, image, info, name, price } = item;
        return (
          <div className="container" key={id}>
            <img src={image} className="image" style={{ width: "50%" }} />
            <h5>{name}</h5>
            <h5>{info}</h5>
            <h5>{price}</h5>
            <button onClick={() => handleRemove(id)}>Not interested</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tour;
