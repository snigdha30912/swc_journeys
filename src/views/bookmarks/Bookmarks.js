/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/util'
import {
  CSpinner,
  CRow,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import ReactImg from 'src/assets/images/react.jpg'
import BookmarkCard from '../../components/BookmarkCard'
import CIcon from '@coreui/icons-react'


const Bookmarks = () => {
  const [page, setPage] = useState(1)

  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/?page="+page.toString();
  const [bookmarks, setBookmarks] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      setBookmarks(res);
      console.log(res)
    })
  }, [apiURL]);
  return (<>

    {bookmarks != null? (<><CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
      
      {bookmarks && bookmarks.map((book, index) => (
        <div key={book.id} style={{marginTop:'35px'}}>
          <BookmarkCard book={book} />
        </div>
      ))}

    
  </CRow>
  <CPagination aria-label="Page navigation example" style={{marginTop:'20px'}}>
              <div onClick={()=>setPage(page-1)}>
                <CPaginationItem aria-label="Previous" >
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                </div>
                <div onClick={()=>setPage(1)}>
                <CPaginationItem active>1</CPaginationItem>
                </div>
                <div onClick={()=>setPage(2)}>
                <CPaginationItem>2</CPaginationItem>
                </div>
                <div onClick={()=>setPage(3)}>
                <CPaginationItem>3</CPaginationItem>
                </div>
                <div onClick={()=>setPage(page+1)}>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
                </div>
              </CPagination>
              {page}
  </>
  ) : <CSpinner color="warning" />}

  </>);
}
export default Bookmarks;