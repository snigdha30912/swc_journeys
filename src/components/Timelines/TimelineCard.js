import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons';
import { get } from '../Utility Functions/util';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 15,
  },
});

const Timeline = ({ time }) => {
  console.log(time);
  const classes = useStyles();
  const [timelinebookmarks, setTimelinebookmarks] = useState(null);
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";
  const history = useHistory();
  useEffect(() => {
    get(apiURL).then(res=>{
      setTimelinebookmarks(res);
    })
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

        <CardMedia
            className={classes.media}
            image="https://htmlcolorcodes.com/assets/images/colors/sapphire-blue-color-solid-background-1920x1080.png"
            
          />
       
        <div><h3>{time.name}</h3></div>
        <div><h5 className="data-timeline">{time.date_started.substr(0,10)}</h5>
        
        </div>
        <div><h5 onClick={()=>{history.push(`/timeline/${time.id}`) }} className="tt">View this timeline</h5></div>
        
        <div style={{paddingTop:"20px"}}>
          <FontAwesomeIcon className="share" icon={faShareAlt}/>
          Share in Community
        </div>
      </Card>
    </Grid>
  );
};

export default Timeline;
