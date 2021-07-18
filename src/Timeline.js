import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 15,
  },
});

const Timeline = ({ time }) => {
  const classes = useStyles();
  const [timelinebookmarks, setTimelinebookmarks] = useState(null);
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";
  const history = useHistory();
  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimelinebookmarks(data);
      });
  }, []);

  
  return (
    <Grid
      item
      md={3}
      style={{
        width: "400px",
        height: "200px",
        margin: "10px 10px 10px 10px",
        paddingBottom: "20px",
      }}
    >
      <Card
        className={classes.root}
        style={{ width: "400px", height: "190px", paddingBottom: "20px" }}
      >
        {/* <CardActionArea></CardActionArea> */}
          {/* <CardMedia
            className={classes.media}
            name={time.name}
            date={time.date_started}
          /> */}
          {/* <CardContent style={{ height: "300px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textAlign: "left" }}
            >
              {time.name}
              <br />
              {time.date_started.substr(0,10)}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                width: "190px",
                height: "200px",
                textAlign: "center",
                whiteSpace: "pre-wrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {timelinebookmarks && time.bookmarks.map((id)=>(
              timelinebookmarks
                .filter((timelinebookmark) => (timelinebookmark.id === id ))
                .map((filteredbookmark) => (
                  
                  <li>{filteredbookmark.title_name}</li>
                  
                  
               
                ))))}
              
              
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ height: "50px" }}>
          <Button size="small" color="primary">
            Share 
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        <CardMedia
            className={classes.media}
            image="https://htmlcolorcodes.com/assets/images/colors/cadet-blue-color-solid-background-1920x1080.png"
            
          />
       
        <div><h3>{time.name}</h3></div>
        <div><h5 className="data-timeline">{time.date_started.substr(0,10)}</h5>
        
        </div>
        <div><h5 onClick={()=>{history.push(`/timeline/${time.id}`) }} className="tt">View this timeline</h5></div>
        
        <div>
          <FontAwesomeIcon className="share" icon={faShareAlt}/>
          Share in Community
        </div>
      </Card>
    </Grid>
  );
};

export default Timeline;
