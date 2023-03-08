import React, { useState, useEffect } from "react";
import axios from "axios";
import Tour from "./Tour";

const Tours = ({ setLoading }) => {
  const [data, setData] = useState([]);
  const url = "https://course-api.com/react-tours-project";
  const handleRemove = (id) => {
    setData(data.filter((tour) => tour.id !== id));
    // const newTours = data.filter((tour) => tour.id !== id);
    // setData(newTours);
  };

  useEffect(() => {
    fetchData(url);
    // console.log(data);
  }, []);

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <Tour data={data} handleRemove={handleRemove} />;
};
export default Tours;

//? to fetch data with axios

// const fetchData = (url) => {
//   axios
//     .get(url)
//     .then((res) => {
//       // setData(res.data);
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
