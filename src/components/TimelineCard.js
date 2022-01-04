/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { get} from '../utilities/util'
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
  CAvatar
  } from '@coreui/react'

  import CIcon from '@coreui/icons-react'

  import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
    cilBookmark,
    cilExternalLink,
  } from '@coreui/icons'

  import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'



const colorList = ['info','warning','primary','danger']
var i = 0;
const TimelineCard = ({time}) => {
  const apiURL = 'http://localhost:8000/timelines/timelines/bookmarks/' + time.id.toString() + '/'
  const [visible, setVisible] = useState(false)
  const [bookmarks, setBookmarks] = useState(null)

  useEffect(() => {
    get(apiURL).then(res => {
      setBookmarks(res);
    })
  }, []);

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

    return (
      <>
        <CCol xs={12} sm={6} lg={3} onClick={() => setVisible(!visible)}>
          <CWidgetStatsB style={{cursor:"pointer"}}
                        className="mb-4"
                        color= {
                          colorList[(i++)%4]}
                        inverse
                        value={time.name}
                        title={`Created by @${time.author}`}
                        progress={{ value: 100 }}
                        text={time.bookmarks.length==1?`Contains ${time.bookmarks.length} bookmark`:`Contains ${time.bookmarks.length} bookmarks`}
                      />
        <CModal size="xl" alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>{time.name}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            {time.description}
            </CModalBody>
            <CModalBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
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
