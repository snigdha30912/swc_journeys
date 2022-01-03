/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import {
    CWidgetStatsB,
    CCol,
    CRow,
  } from '@coreui/react'



const colorList = ['success','info','warning','primary']
const TimelineCard = ({time}) => {
    
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
//     <CCol xs>
//     <CCard>
//     <CCardImage orientation="top" src={book.image_field} style={{width:'300px',height:'200px'}}/>
//     <CCardBody>
//       <CCardTitle style={{
//            maxWidth: '100%',
//            display: '-webkit-box',
//            WebkitBoxOrient: 'vertical',
//            WebkitLineClamp: 2,
//            overflow: 'hidden',
//            textOverflow: 'ellipsis',
//       }}>{book.title_name}</CCardTitle>
//       <CCardText style={{
//   maxWidth: '100%',
//   display: '-webkit-box',
//   WebkitBoxOrient: 'vertical',
//   WebkitLineClamp: 3,
//   overflow: 'hidden',
//   textOverflow: 'ellipsis',
// }}>
//         {book.description}
//       </CCardText>
//     </CCardBody>
//     <CCardFooter>
//       <small className="text-medium-emphasis">Added on {book.date}</small>
//     </CCardFooter>
//   </CCard>
//   </CCol>
  <CCol xs={12} sm={6} lg={3}>
 
  
   <CWidgetStatsB
                className="mb-4"
                color= {colorList[Math.floor(Math.random() * 4)]}
                inverse
                value={time.name}
                title={`Created by @${time.author}`}
                progress={{ value: 100 }}
                text={time.bookmarks.length==1?`Contains ${time.bookmarks.length} bookmark`:`Contain ${time.bookmarks.length} bookmarks`}
              />
</CCol>
  );
};

TimelineCard.propTypes = {
    time : PropTypes.object.isRequired
  };

export default TimelineCard;
