import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CreateNewTimeline from '../Timelines/CreateNewTimeline';
import AddToTimeline from '../Timelines/AddToTimeline'
import { useState } from "react";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@mui/icons-material/Delete';
import { del } from "../Utility Functions/util";


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
    width:'400px',
    height:'200px'
  },
}));

const Bookmark = ({book}) => {
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);
  const [isCreateNewTimeline , setIsCreateNewTimeline] = useState(false);
  const [isAddToTimeline, setIsAddToTimeline] = useState(false);

  const handleDelete = ()=>{
    del('http://127.0.0.1:8000/bookmarksection/bookmarkApi/'+book.id+'/').then(()=>{
      console.log("deleted 🤔")
      window.location.reload();
    })
  
}

  const handleOpen = () => {
    setOpen(true);
    setIsAddToTimeline(false);
    setIsCreateNewTimeline(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        {window.location.pathname == "/explore"?(
          <></>
        ):(<DeleteIcon  
          onClick = {handleDelete}
          />)}
        
        
          <CardMedia
            className={classes.media}
            image={book.image_field}
            title={book.title_name}
          />
          
          <div><h3 className="bookmark_title">{book.title_name}</h3></div>
          <div><p className="bookmark_description">{book.description}</p></div>
          <Button onClick={urlpage} className="button-url" size="small" color="primary">
            Visit Page
          </Button>
        <div onClick={handleOpen} className="timelineadd">Add to your Timeline</div>
        {/* <CreateNewTimeline id={book.id} date = {book.date} />
         */}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}
            
           {
             !isAddToTimeline && !isCreateNewTimeline ?(
                <div className="custom-modal">
              <Button onClick={()=>{setIsCreateNewTimeline(false);setIsAddToTimeline(true)}} style={{color:'blue',padding:'15px',fontWeight:'normal'}}>Add to existing timeline</Button>
            <Button onClick={()=>{setIsCreateNewTimeline(true);setIsAddToTimeline(false)}} style={{color:'blue',padding:'15px',fontWeight:'normal'}}>Create New Timeline</Button>
            </div>
             ): isCreateNewTimeline?(
             <CreateNewTimeline id={book.id}/>
             ): isAddToTimeline?(
               <AddToTimeline id={book.id}/>
             ):(
               <></>
             )
           }
          </div>
        </Fade>
      </Modal>
      </Card>
    </Grid>
  );
};

export default Bookmark;
