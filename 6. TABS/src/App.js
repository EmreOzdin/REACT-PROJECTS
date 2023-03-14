import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState();
  const [num, setNum] = useState(0);

  const handleClick = (id) => {
    setNum(id);
  };
  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <div className="section">
      <h1 className="title">Experience</h1>
      <div className="underline"></div>
      <div className="section-content" style={{ display: "flex" }}>
        <div className="row">
          {data?.map((item) => {
            return (
              <>
                <div style={{ display: "flex" }}>
                  <h2 className="job-btn" onClick={handleClick(item.id)}>
                    {item.company}
                  </h2>
                </div>
              </>
            );
          })}
          <div>
            <h2 className="job-info">{data[num]?.title}</h2>
            {console.log(data[num])}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App

//another version of data fetching

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //     const data = response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
