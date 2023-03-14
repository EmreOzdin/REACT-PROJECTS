import React, { useState } from 'react';
import data from './data';

function App() {
  const [num, setNum] = useState(5);
  const [para, setPara] = useState(data.slice(num-1));
  console.log(para)

  return (
    <div className="container">
      <h2 className="section-center my-5">TIRED OF BORING LOREM IPSUM</h2>
      <form className="d-flex gap-5 justify-content-center align-items-center">
        <div className="align-items-center">
          <span>Paragraphs</span>
        </div>
        <div className=" gap-3" style={{width: "100px"}}>
          <input
            type="number"
            className="form-control"
            id="inputPassword2"
            min={0}
            max={8}
          />
        </div>
        <div className="pt-3">
          <button type="submit" className="btn btn-primary mb-3">
            GENERATE
          </button>
        </div>
      </form>
      <div className="row">
        <p></p>
      </div>
    </div>
  );
}

export default App;
