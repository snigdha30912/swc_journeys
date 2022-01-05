/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { get,del} from '../utilities/util'
import {
    CWidgetStatsB,
    CCol,
    CRow,
    CForm,
    CFormInput,
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CFormFloating,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CSpinner,
    CProgress,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAvatar,
  CPagination,
  CPaginationItem,
  } from '@coreui/react'

  import CIcon from '@coreui/icons-react'

  import {
    
    cilBookmark,
    cilExternalLink,
  
  } from '@coreui/icons'





const colorList = ['#65C3A1','#4BAA87','#32906E']
var j = 0;
const TimelineCard = ({time}) => {
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(2)
  const apiURL = 'http://localhost:8000/timelines/timelines/bookmarks/' + time.id.toString() + '/?page='+page.toString();
  const [visible, setVisible] = useState(false)
  const [bookmarks, setBookmarks] = useState(null)
  
  
  useEffect(() => {
    get(apiURL).then(res => {
      setBookmarks(res.results);
      setCount(Math.floor(res.count/12)+1);
    })
  }, [apiURL]);
  var pages = []
  
  for(var i = 1; i<=count;i++){
    pages.push(i);
  }
  

    return (
      <>
        <CCol xs={12} sm={6} lg={3} onClick={() => setVisible(!visible)}>
          <CWidgetStatsB style={{cursor:"pointer",backgroundColor:
                          colorList[(j++)%3]}}
                        className="mb-4"
                        inverse
                        value={time.name}
                        title={`Created by @${time.author}`}
                        progress={{ value: 100 }}
                        text={time.bookmarks.length==1?`Contains ${time.bookmarks.length} bookmark`:`Contains ${time.bookmarks.length} bookmarks`}
                      />
        <CModal size="xl" alignment="center" visible={visible} onClose={() => setVisible(false)} style={{color:"white"}}>
          <CModalHeader style={{backgroundColor:colorList[(j-1)%3], color:"white"}}>
            <CModalTitle style={{color:"white"}}>{time.name}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            {time.description}
            </CModalBody>
            <CModalBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead  style ={{backgroundColor:"#ECF8F3"}}>
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilBookmark} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Bookmark</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Created At</CTableHeaderCell>
                    <CTableHeaderCell>Visit Bookmark</CTableHeaderCell>
                    
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {bookmarks && bookmarks.map((book, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={book.image_field} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{book.title_name}</div>
                        <div className="small text-medium-emphasis">
                          Created by @{time.author}
                        </div>
                      </CTableDataCell>
                      
                      <CTableDataCell>
                        <div className="clearfix">
                          
                          <div className="float-end">
                            <small className="text-medium-emphasis">{book.date.substring(0,10)}</small>
                          </div>
                        </div>
                        
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <a href={book.url_field} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>
                        <CIcon size="sm" icon={cilExternalLink} />
                        </a>
                      </CTableDataCell>
                     
                    </CTableRow>
                  ))}
                  <CPagination align='center' size='sm' aria-label="Page navigation example" style={{marginTop:'20px'}}>
              <div >
                {page<=1?(<CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true" >&laquo;</span>
                </CPaginationItem>):(<CPaginationItem aria-label="Previous" onClick={()=>setPage(page-1)}>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>)}
                
                </div>
                
                {pages && pages.map((i, index) => (
                  <div key = {i} >
                    {i==page?(<CPaginationItem style={{backgroundColor:"#005b54", color:"white"}}>{i}</CPaginationItem>):(<CPaginationItem onClick={()=>setPage(i)}>{i}</CPaginationItem>)}
                
                </div>

))}
                <div >
                  {
                    page>=count?(<CPaginationItem aria-label="Next" disabled>
                    <span aria-hidden="true">&raquo;</span>
                  </CPaginationItem>):(<CPaginationItem aria-label="Next" onClick={()=>setPage(page+1)}>
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>)
                  }
                
                </div>
              </CPagination>
                </CTableBody>
              </CTable>
          </CModalBody>
          <CModalFooter>
          
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
           
          </CModalFooter>
        </CModal>
        </CCol>
      </>
    )
  };
    
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

TimelineCard.propTypes = {
    time : PropTypes.object.isRequired
  };

export default TimelineCard;
