import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Review = () => {
  const [number, setNumber] = useState(0);
  const { id, name, image, job, text } = people[number];

  const handleLeftClick = () => {
    number === 0 ? setNumber(people.length - 1) : setNumber(number - 1);
  };
  const handleRightClick = () => {
    number === people.length - 1 ? setNumber(0) : setNumber(number + 1);
  };
  const handleRandom = () => {
    setNumber(Math.floor(Math.random() * people.length));
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#90caf9"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              textTransform: "uppercase",
            }}
          >
            {job}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {text}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <FaChevronLeft
            onClick={handleLeftClick}
            color="#90caf9"
            cursor="pointer"
            fontSize="30"
          />
          <FaChevronRight
            onClick={handleRightClick}
            color="#90caf9"
            cursor="pointer"
            fontSize="30"
          />
        </Box>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
            m={2}
          >
            <Button variant="outlined" onClick={handleRandom}>
              Surpise Me!
            </Button>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};

export default Review;
