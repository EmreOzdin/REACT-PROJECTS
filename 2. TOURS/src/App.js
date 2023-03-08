import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN


function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <h2>Our Tours</h2>
      {loading ? (
        <div>
          <Loading />
          <Tours loading={loading} setLoading={setLoading} />
        </div>
      ) : (
        <Tours loading={loading} setLoading={setLoading} />
      )}
    </>
  );
}

export default App
