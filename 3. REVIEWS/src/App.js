import React from 'react';
import Review from './Review';
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Review />
      </Container>
    </div>
  );
}

export default App;
