import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CreateNewTimeline from './CreateNewTimeline';
import AddToTimeline from './AddToTimeline'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Bookmark = ({book}) => {
  const classes = useStyles();
  const url = book.url_field
  const urlpage = () =>{

    window.open(url, "_blank")
  }
  return (
    <Grid
      item
      md={3}
      style={{
        width: "400px",
        height: "400px",
        margin: "10px 10px 10px 10px",
        paddingBottom: "20px",
      }}
    >
      <Card
        className={classes.root}
        style={{ width: "400px", height: "400px" }}
      >
        
          <CardMedia
            className={classes.media}
            image={book.image_field}
            title={book.title_name}
          />
          
          <div><h3>{book.title_name}</h3></div>
          <div><p className="bookmark_description">{book.description}</p></div>
          <Button onClick={urlpage} className="button-url" size="small" color="primary">
            Visit Page
          </Button>
        <div className="timelineadd">Add to your Timeline</div>
        {/* <CreateNewTimeline id={book.id} date = {book.date} />
        <AddToTimeline id = {book.id} /> */}
      </Card>
    </Grid>
  );
};

export default Bookmark;
