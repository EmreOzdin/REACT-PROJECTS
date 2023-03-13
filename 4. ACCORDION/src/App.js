import React, { useState } from 'react';
import data from './data';
import Question from "./Question";

function App() {
    return (
      <div className="container d-flex">
        <div className="">
          <h1>Questions And Answers About Login</h1>
        </div>
        <Question data={data} />
      </div>
    );
  };

export default App;
