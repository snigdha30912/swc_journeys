import {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

import styled from 'styled-components';


const useStyles = makeStyles({
  root: {
    maxWidth: 900,
   
  },
  media: {
    height: 15,
  },
});

const TimelineSpecific = () => {
const classes = useStyles();
    const timeline_id = window.location.pathname.substr(10)
    const [timelines, setTimelines] = useState(null);
  const apiURL1 = "http://127.0.0.1:8000/timelines/timelines";
  const [timelinebookmarks, setTimelinebookmarks] = useState(null);
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";

  
  const current_timeline = {
      tid : null,
      tname : '',
      tdate : '',
      bookmarks : []
  }
  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimelinebookmarks(data);
      });
  }, []);
  useEffect(() => {
    fetch(apiURL1)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimelines(data);
      });
  }, []);
  console.log(timelines)
  console.log(timelinebookmarks)
  {timelines &&
          timelines.map((timeline, index) => {
            if(timeline.id == timeline_id){
                console.log(timeline);
                current_timeline.tid = timeline.id;
                current_timeline.tname =  timeline.name;
                current_timeline.tdate = timeline.date_started.substr(0,10);

                timelinebookmarks && timeline.bookmarks.map((id)=>(
              timelinebookmarks
                .filter((timelinebookmark) => (timelinebookmark.id === id ))
                .map((filteredbookmark) => (
                  current_timeline.bookmarks.push(filteredbookmark)
                    
                  
                  
                  
               
                ))))
            }

        
        })}
        
  return (
      <>
      <div>
          <h2>{current_timeline.tname}</h2>
          <h4 style={{color:"gray",fontWeight:"normal"}}>{current_timeline.tdate}</h4>
      </div>
   <Grid
      item
      md={3}
      style={{
          position:"absolute",
        width: "600px",
        height: "300px",
        margin: "10px 10px 10px 350px",
        paddingBottom: "20px",
      }}
    >
        {current_timeline.bookmarks && current_timeline.bookmarks.map((bookmark,idx)=>(
            
            <Card onClick={()=>{window.open(bookmark.url_field, "_blank");window.focus()}}
        className={classes.root}
        style={{ width: "900px", height: "180px", marginBottom: "20px" }}
      >
          <CardMedia
            className={classes.media}
            image="https://htmlcolorcodes.com/assets/images/colors/cadet-blue-color-solid-background-1920x1080.png"
            
          />
          <div className="timeline-tile">{bookmark.date.substr(0,10)}</div>
          <div><h3>{bookmark.title_name}</h3></div>
          <div><p className="bookmark_description1">{bookmark.description}</p></div>
       
        
      </Card>
     
        ))}
    </Grid>
    </>
  );
};

export default TimelineSpecific;
