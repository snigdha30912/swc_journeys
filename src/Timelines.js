import axios from "axios";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Timeline from "./Timeline";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Timelines = () => {
  const classes = useStyles();
  const [timelines, setTimelines] = useState(null);

  const apiURL = "http://127.0.0.1:8000/timelines/timelines";

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimelines(data);
      });
  }, []);

  return (
    <div className="tiemeline">
      <h1>My Timelines</h1>

      <div
        className="times"
        style={{
          position: "absolute",
          zIndex: "10",
          width: "1200px",
          right: "0px",
          margin: "10px 10px 10px 10px",
        }}
      >
        <Grid container spacing={24} style={{ width: "120%" }}>
          {timelines && timelines.map((time, index) => (
              

              
                <div style={{ paddingBottom: "10px" }}>
                  <Timeline time={time} />
                </div>
             
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Timelines;
