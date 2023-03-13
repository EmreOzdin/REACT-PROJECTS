import React, { useState } from 'react';
import data from './data';
import Question from "./Question";

function App() {
    return (
      <div className="container d-flex">
        <div className="">
          <h1>Questionnaire</h1>
        </div>
        <div className="bg-danger">
          {data?.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </div>
    );
  };

export default App;
