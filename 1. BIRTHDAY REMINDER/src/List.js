import React from 'react';

const List = ({ id, image, name, age }) => {
  // const { id, image, name, age } = item;
  console.log(5);
  return (
    <div className="d-flex">
      <div className="d-flex justify-content-center align-items-center m-5">
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{
            borderRadius: "50%",
            width: "75px",
            height: "75px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="card-body mt-5">
        <p className="card-text text-center">{name}</p>
        <p className="card-text text-center">{age}</p>
      </div>
    </div>
  );
};

export default List;
