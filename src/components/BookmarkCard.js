/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import CIcon from '@coreui/icons-react'
import { post,put,del,get } from '../utilities/util'
import {
  cisStar,
  cilStar,
  cilOptions,
  cilExternalLink,
  
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
    CForm,
    CFormInput,
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
  } from '@coreui/react'
import Bookmarks from 'src/views/bookmarks/Bookmarks';

const timelineApiURL = 'http://127.0.0.1:8000/timelines/timelines/'
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

const BookmarkCard = ({book}) => {
  const [isFavorite,setIsFavorite] = useState(book.favorite)
  const [posting,setPosting] = useState(false)
  const [timelines, setTimelines] = useState(null);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    get(timelineApiURL).then(res => {
      setTimelines(res.results);
    });
  }, []);
  const addToFavorites = ()=>{
    book.favorite = true;
    put('http://127.0.0.1:8000/bookmarksection/bookmarkApi/'+book.id+'/', book).then(()=>{
      console.log("added to favorites")
      setIsFavorite(true);
      // window.location.reload();
    })
  }
  
  const removeFromFavorites = ()=>{
    book.favorite = false;
    put('http://127.0.0.1:8000/bookmarksection/bookmarkApi/'+book.id+'/', book).then(()=>{
      console.log("removed from favorites")
      setIsFavorite(false);
      // window.location.reload();
    })
  }
  const handleDelete = ()=>{
    del('http://127.0.0.1:8000/bookmarksection/bookmarkApi/'+book.id+'/').then(()=>{
      console.log("deleted 🤔")
      window.location.reload()
    })
  
  }
  const [newVisible, setNewVisible] = useState(false)
  const [existingVisible, setExistingVisible] = useState(false)
  const addTimeline = () => {
    setPosting(true)
    console.log(document.getElementById('TimelineNameInput').value)
    const data = {name: document.getElementById('TimelineNameInput').value , description: document.getElementById('TimelineDescriptionInput').value, bookmarks: [book.id]};
    post(timelineApiURL, data).then(() => {
      console.log("added new timeline")
      setPosting(false)
      setNewVisible(false)
    });

  }

  const AddToNewTimelineButton = () => {
    return (
      <>
        <CDropdownItem style={{cursor:"pointer"}} onClick={() => setNewVisible(!newVisible)}>Add To New Timeline</CDropdownItem>
        <CModal alignment="center" visible={newVisible} onClose={() => setNewVisible(false)}>
          <CModalHeader>
            <CModalTitle>Start New Timeline</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Enter the name of the new timeline you wish to create. This bookmark will be automatically added to this timeline.
          </CModalBody>
          <CFormFloating style={{margin:"20px"}}>
            <CFormInput
              type="name"
              id="TimelineNameInput"
              placeholder="name@example.com"
            />
            <CFormLabel htmlFor="TimelineNameInput">Enter Name Here</CFormLabel>
            <CFormInput
              style={{marginTop:"10px"}}
              type="name"
              id="TimelineDescriptionInput"
              placeholder="name@example.com"
            />
            <CFormLabel style={{marginTop:"70px"}} htmlFor="TimelineDescriptionInput">Enter Description Here</CFormLabel>
          </CFormFloating>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setNewVisible(false)}>
              Close
            </CButton>
            {posting?(<CSpinner/>):(<CButton onClick={addTimeline} color="primary">{'Save Timeline'}</CButton>)}
          </CModalFooter>
        </CModal>
      </>
    )
  }
  const addExistingTimeline = ()=>{
    setPosting(true)
    let timeline_id = document.getElementById("existingTimelinesMenu").selectedOptions[0].value
    if(timeline_id==="none"){
      alert("Please select an option");
      setPosting(false)
    }
    else {
    const data = { bookmarks: [book.id] };
    put('http://127.0.0.1:8000/timelines/timelines/' + timeline_id + '/', data).then(()=>{
      console.log("added to existing timeline");
      setPosting(false)
      setExistingVisible(false)
    });
  }
  }
  const AddToExistingTimelineButton = () => {
    return (
      <>
        <CDropdownItem style={{cursor:"pointer"}} onClick={() => setExistingVisible(!existingVisible)}>Add To Existing Timeline</CDropdownItem>
        <CModal alignment="center" visible={existingVisible} onClose={() => setExistingVisible(false)}>
          <CModalHeader>
            <CModalTitle>Add to Existing Timeline</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Select the timeline you wish to add this bookmark to.
          </CModalBody>
          <CFormSelect id="existingTimelinesMenu" style={{ width:"80%", margin:"10px"}} className="mb-3" aria-label="Large select example">
            <option value="none">Open this timeline menu</option>
            {timelines && timelines.map((time,index)=>(
              <option key={time.id} value={time.id}>{time.name}</option>
            ))}
          </CFormSelect>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setExistingVisible(false)}>
              Close
            </CButton>
            {posting?(<CSpinner/>):(<CButton onClick={addExistingTimeline} color="primary">{'Save Changes'}</CButton>)}
          </CModalFooter>
        </CModal>
      </>
    )
  }

  return (
    <CCol xs>
    <CCard>
    
    <div className='container' style={{position:'relative'}}></div>
   
    <CDropdown alignment="end" color='danger' style={{position:'absolute',top:10,right:10}}>
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                {AddToNewTimelineButton()}
                {AddToExistingTimelineButton()}
                <CDropdownItem onClick = {handleDelete}>Delete Bookmark</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
    <CCardImage orientation="top" src={book.image_field} style={{width:'300px',height:'200px',display:'block'}} />
    {isFavorite?(<CIcon onClick = {removeFromFavorites} icon={cilStar}  size="lg"  style={{position:'absolute',bottom:10,right:10, color:'#f9b115',cursor:'pointer',}}/>
    ):(<CIcon onClick = {addToFavorites} icon={cilStar}  size="lg"  style={{position:'absolute',bottom:10,right:10, color:'#4f5d73',cursor:'pointer'}}/>
    )}
    
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

BookmarkCard.propTypes = {
    book : PropTypes.object.isRequired
  };

export default BookmarkCard;
