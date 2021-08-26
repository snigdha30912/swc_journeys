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
import { get } from './util';
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

  const apiURL = "http://127.0.0.1:8000/timelines/timelines/";

  useEffect(() => {
    const reloadCount = sessionStorage.getItem('reloadCount');
      if(reloadCount < 2) {
        sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        window.location.reload();
      } else {
        sessionStorage.removeItem('reloadCount');
      }
      get(apiURL).then(res=>{
        setTimelines(res);
      })
  }, []);

  return (
    <div className="timeline">
      <section>
      <div class="element-background flex flex-row px-4 py-10 mx-52 mt-24 h-60 border-5 border-transparent border-solid rounded-md">
        <div>
          <h2 class="mb-4 px-6 not-italic font-moderat text-color font-bold text-2xl">What are Timelines?</h2>
          <p class="pl-6 pr-60 mr-24 leading-tight not-italic font-moderat text-color font-normal text-sm ">
            Timelines are collection of Bookmarks, Urls, Videos. articles etc.
            related to a specific topic. These can be used to document your
            learning journeys and Project Journeys.
          </p>
        </div>
        <div class="-ml-40 mr-10 pr-28 relative bottom-12">
          <img class="h-60 w-10 relative top-2" src="/images/line.svg" alt="line" />
        </div>
        <div>
          <h4 class="-ml-28 mr-20 pr-20 leading-tight not-italic font-moderat text-color font-bold text-lg flex items-center">
            Get our chrome extention from chrome webstore to share and manage
            urls with one click.
          </h4>
          <a href="#"
            ><img class="-ml-28 mt-6 mr-20 pr-20 box-border" src="/images/ChromeWebStore.svg" alt="Chrome Web Store"
          /></a>
        </div>
      </div>
      
      <img class="absolute top-8 right-32" src="/images/illus2.svg" alt="illus2" />
      <img class="absolute py-10 top-56 px-4 right-64" src="/images/illus3.svg" alt="illus3" />
    
    </section>

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

export default Timelines;
