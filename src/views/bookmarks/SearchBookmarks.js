/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/util'
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
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import ReactImg from 'src/assets/images/react.jpg'
import BookmarkCard from '../../components/BookmarkCard'


const Bookmarks = () => {
  console.log(document.getElementById("searchKey").value)
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/search/?search="+document.getElementById("searchKey").value;
  const [bookmarks, setBookmarks] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      setBookmarks(res);
    })
  }, [apiURL]);
  return (<>


    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
      
        {bookmarks && bookmarks.map((book, index) => (
          <div key={book.id} style={{marginTop:'35px'}}>
            <BookmarkCard book={book} />
          </div>
        ))}

      
    </CRow>

  </>);
}
export default Bookmarks;