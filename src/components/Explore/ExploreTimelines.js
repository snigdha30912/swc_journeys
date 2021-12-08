import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Timeline from "../Timelines/TimelineCard";
import { get } from '../Utility Functions/util';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ExploreTimelines = () => {
  const classes = useStyles();
  const [timelines, setTimelines] = useState(null);

  const apiURL = "http://127.0.0.1:8000/timelines/timelines/discover/";

  useEffect(() => {

      get(apiURL).then(res=>{
        setTimelines(res);
      })
  }, []);

  return (
    <div className="timeline">
      
     

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
          {console.log(timelines)}
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

export default ExploreTimelines;
