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
  return (
    <Grid
      item
      md={3}
      style={{
        width: "400px",
        height: "500px",
        margin: "10px 10px 10px 10px",
        paddingBottom: "20px",
      }}
    >
      <Card
        className={classes.root}
        style={{ width: "400px", height: "600px", paddingBottom: "20px" }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={book.image_field}
            title={book.title_name}
          />
          <CardContent style={{ height: "300px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textAlign: "left" }}
            >
              {book.title_name}
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
              {book.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ height: "50px" }}>
          {/* <Button size="small" color="primary">
            
          </Button> */}

          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
        <CreateNewTimeline id={book.id} date = {book.date} />
        <AddToTimeline id = {book.id} />
      </Card>
    </Grid>
  );
};

export default Bookmark;
