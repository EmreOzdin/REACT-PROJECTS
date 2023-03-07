import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [user, setUser] = useState(data);

  const handleClear = () => {
    setUser([]);
  };

  return (
    <div className="justify-content-center align-items-center ">
      <div
        className="m-auto p-auto"
        style={{
          margin: "auto",
          width: "50vh",
          backgroundColor: "white",
        }}
      >
        <h1 className="text-left bg-white fs-1 p-2 px-4">
          {user?.length} birthdays today
        </h1>
        {user?.map((item) => (
          <List key={item.id} {...item} />
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center m-3">
        <button
          type="button"
          className="btn btn-danger pr-5"
          onClick={handleClear}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
