/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import CIcon from '@coreui/icons-react'
import { post,del } from '../utilities/util'
import {
  cisStar,
  cilStar,
  cilOptions,
  cilExternalLink,
  cilBookmark
  
} from '@coreui/icons'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardGroup,
    CCardHeader,
    CCardImage,
    CCardLink,
    CCardSubtitle,
    CCardText,
    CCardTitle,
    CListGroup,
    CListGroupItem,
    CNav,
    CNavItem,
    CNavLink,
    CCol,
    CRow,
    
      CDropdown,
      CDropdownMenu,
      CDropdownItem,
      CDropdownToggle,
      CWidgetStatsA,
      CSpinner,
    
  } from '@coreui/react'
import Bookmarks from 'src/views/bookmarks/Bookmarks';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     width:'400px',
//     height:'200px'
//   },
// }));
const bookmarkApiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";
const ExploreBookmarkCard = ({book}) => {
  const [isBookmark,setIsBookmark] = useState(book.favorite)
 const [posting,setPosting] = useState(false)
  
  const addToBookmarks = () => {
    const data = { url_field: book.url_field };
    setPosting(true)
    console.log(book.url_field)
    post(bookmarkApiURL, data).then(() => {
      console.log("added new bookmark")
      setIsBookmark(true);
      setPosting(false)
      
    }
    );
  }
  
  const removeFromBookmarks = ()=>{
    
    del('http://127.0.0.1:8000/bookmarksection/bookmarkApi/'+book.id+'/').then(()=>{
      console.log("deleted 🤔")
      window.location.reload()
      setIsBookmark(false);
    })
  }
  
//   const classes = useStyles();
  
//   const [open, setOpen] = useState(false);
//   const [isCreateNewTimeline , setIsCreateNewTimeline] = useState(false);
//   const [isAddToTimeline, setIsAddToTimeline] = useState(false);

//   const handleDelete = ()=>{
//     del('http://127.0.0.1:8000/bookmarksection/bookmarkApi/'+book.id+'/').then(()=>{
//       console.log("deleted 🤔")
//       window.location.reload();
//     })
  
// }

//   const handleOpen = () => {
//     setOpen(true);
//     setIsAddToTimeline(false);
//     setIsCreateNewTimeline(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const url = book.url_field
//   const urlpage = () =>{

//     window.open(url, "_blank")
//   }
  return (
    // <Grid
    //   item
    //   md={3}
    //   style={{
    //     width: "400px",
    //     height: "400px",
    //     margin: "10px 10px 10px 10px",
    //     paddingBottom: "20px",
    //   }}
    // >
    //   <Card
    //     className={classes.root}
    //     style={{ width: "400px", height: "400px" }}
    //   >
    //     {window.location.pathname == "/explore"?(
    //       <></>
    //     ):(<DeleteIcon  
    //       onClick = {handleDelete}
    //       />)}
        
        
    //       <CardMedia
    //         className={classes.media}
    //         image={book.image_field}
    //         title={book.title_name}
    //       />
          
    //       <div><h3 className="bookmark_title">{book.title_name}</h3></div>
    //       <div><p className="bookmark_description">{book.description}</p></div>
    //       <Button onClick={urlpage} className="button-url" size="small" color="primary">
    //         Visit Page
    //       </Button>
    //     <div onClick={handleOpen} className="timelineadd">Add to your Timeline</div>
    //     {/* <CreateNewTimeline id={book.id} date = {book.date} />
    //      */}
    //     <Modal
    //     aria-labelledby="transition-modal-title"
    //     aria-describedby="transition-modal-description"
    //     className={classes.modal}
    //     open={open}
    //     onClose={handleClose}
    //     closeAfterTransition
    //     BackdropComponent={Backdrop}
    //     BackdropProps={{
    //       timeout: 500,
    //     }}
    //   >
    //     <Fade in={open}>
    //       <div className={classes.paper}>
    //         {/* <h2 id="transition-modal-title">Transition modal</h2>
    //         <p id="transition-modal-description">react-transition-group animates me.</p> */}
            
    //        {
    //          !isAddToTimeline && !isCreateNewTimeline ?(
    //             <div className="custom-modal">
    //           <Button onClick={()=>{setIsCreateNewTimeline(false);setIsAddToTimeline(true)}} style={{color:'blue',padding:'15px',fontWeight:'normal'}}>Add to existing timeline</Button>
    //         <Button onClick={()=>{setIsCreateNewTimeline(true);setIsAddToTimeline(false)}} style={{color:'blue',padding:'15px',fontWeight:'normal'}}>Create New Timeline</Button>
    //         </div>
    //          ): isCreateNewTimeline?(
    //          <CreateNewTimeline id={book.id}/>
    //          ): isAddToTimeline?(
    //            <AddToTimeline id={book.id}/>
    //          ):(
    //            <></>
    //          )
    //        }
    //       </div>
    //     </Fade>
    //   </Modal>
    //   </Card>
    // </Grid>
    <CCol xs>
    <CCard>
    
    <div className='container' style={{position:'relative'}}></div>
   
    
    <CCardImage orientation="top" src={book.image_field} style={{width:'300px',height:'200px',display:'block'}} />
    {posting?(<CSpinner size='sm' style={{position:'absolute',bottom:10,right:10, color:'##4f5d73'}}/>):(isBookmark?
    
        (
    <CIcon onClick = {removeFromBookmarks} icon={cilBookmark}  size="lg"  style={{position:'absolute',bottom:10,right:10, color:'#f9b115',cursor:'pointer',}}/>
    ):(<CIcon onClick = {addToBookmarks} icon={cilBookmark}  size="lg"  style={{position:'absolute',bottom:10,right:10, color:'#4f5d73',cursor:'pointer'}}/>
    ))}
    
    <a href={book.url_field} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>
    <CIcon icon={cilExternalLink}  size="m"  style={{position:'absolute',bottom:10,right:40,cursor:'pointer', color:"4f5d73"}}/>
    </a>
    <CCardBody>
      
      <CCardTitle style={{
           maxWidth: '100%',
           display: '-webkit-box',
           WebkitBoxOrient: 'vertical',
           WebkitLineClamp: 2,
           overflow: 'hidden',
           textOverflow: 'ellipsis',
      }}>{book.title_name}</CCardTitle>
      <CCardText style={{
  maxWidth: '100%',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}}>
        {book.description}
      </CCardText>
    </CCardBody>
    
    
    <CCardFooter>
      <small className="text-medium-emphasis">Added on {book.date.substring(0,10)}</small>
    </CCardFooter>
  </CCard>
  </CCol>
  );
};

ExploreBookmarkCard.propTypes = {
    book : PropTypes.object.isRequired
  };

export default ExploreBookmarkCard;