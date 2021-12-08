import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Bookmark from '../Bookmarks/BookmarkCard';
import { get } from '../Utility Functions/util';
import NavBar from '../Navbar/NavBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import { post } from '../Utility Functions/util';
import SendIcon from '@mui/icons-material/Send';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '400px',
    height: '200px'
  },
}));


const ExploreBookmarks = () => {
  const classes = useStyles();
  const [bookmarks, setBookmarks] = useState(null);
  const [open, setOpen] = useState(false);
  const [isCreateNewTimeline, setIsCreateNewTimeline] = useState(false);
  const [isAddToTimeline, setIsAddToTimeline] = useState(false);
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState("Paste the url and click on submit");
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)


  const getData = async() => {

    get('http://127.0.0.1:8000/bookmarksection/bookmarkApi/discover')
    .then(res => {
        console.log("YAHA PAR HAI DATA",res)
        const data = res
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(book => 
            <div>
              <Bookmark book={book} />
            </div>
          )
          setData(postData)
          setPageCount(Math.ceil(data.length / perPage))
    });
  }



const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage *perPage)
};
  const submitUrl = () => {

    const data = { url_field: url };
    // axios.post('http://127.0.0.1:8000/bookmarksection/bookmarkApi/', data)
    //       .then(response => {setStatus(response.status==201? "Successfully submitted":"Something Went Wrong")});
    post('http://127.0.0.1:8000/bookmarksection/bookmarkApi/discover', data);
  }


  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/discover";

  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if (reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
    
    get(apiURL).then(res => {
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
  useEffect(() => {
    getData()
  }, [offset])

  return (
    <>
      <div className="bookmark">

        {/* <div className="books" style={{ position: "absolute", zIndex: "10", width: "1200px", right: "0px", margin: "10px 10px 10px 10px" }}>
          <Grid container spacing={24} style={{ width: "120%" }}>
            {bookmarks &&
              bookmarks.map((book, index) => {
                console.log(book.toString());

                return (
                  <div>
                    <Bookmark book={book} />
                  </div>

                );
              })}
          </Grid>
        </div> */}
        <div style={{marginLeft:"300px"}}>
        {data}
       <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
  
            </div>


      </div>
    </>
  );
}

export default ExploreBookmarks;