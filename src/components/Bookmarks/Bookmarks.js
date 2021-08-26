import {useState, useEffect} from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Bookmark from './BookmarkCard'; 
import { get } from '../Utility Functions/util';
import NavBar from '../Navbar/NavBar';
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
      const reloadCount = sessionStorage.getItem('reloadCount');
      if(reloadCount < 2) {
        sessionStorage.setItem('reloadCount', String(reloadCount + 1));
        window.location.reload();
      } else {
        sessionStorage.removeItem('reloadCount');
      }

      get(apiURL).then(res=>{
        setBookmarks(res);
      })
      // .then(res=>{
      //   console.log(res);
      //   return res.json();
      // })
      // .then(data=>{
      //   setBookmarks(data)
      // })
      
    }, []);


    return ( 
        <div className="bookmark">
      <NavBar/>
      
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