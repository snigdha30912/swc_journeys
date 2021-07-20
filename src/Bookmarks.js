import axios from 'axios';
import {useState, useEffect} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Bookmark from './Bookmark'; 
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Bookmarks = () => {
    const classes = useStyles();
    const [bookmarks, setBookmarks] = useState(null);

    const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";

    

    useEffect(() => {
      fetch(apiURL)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setBookmarks(data)
      })
    }, []);


    return ( 
        <div className="bookmark">
     
      
      <div className="books" style={{position:"absolute", zIndex: "10", width:"1200px", right:"0px" ,margin:"10px 10px 10px 10px"}}>
        <Grid container spacing={24} style={{width:"120%"}}>
        {bookmarks &&
          bookmarks.map((book, index) => {
            console.log(book.toString());

            return (
                <div>
                    <Bookmark book = {book}/>
                </div>
               
        );
        })}
        </Grid>
        </div>
        </div>
    );
}
 
export default Bookmarks;