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
  const [count, setCount] = useState(2)
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/?page="+page.toString();
  const [bookmarks, setBookmarks] = useState(null);
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
                {page<=1?(<CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true" >&laquo;</span>
                </CPaginationItem>):(<CPaginationItem aria-label="Previous" >
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>)}
                
                </div>
                
                {pages && pages.map((i, index) => (
                  <div key = {i} onClick={()=>setPage(i)}>
                    {i==page?(<CPaginationItem active >{i}</CPaginationItem>):(<CPaginationItem >{i}</CPaginationItem>)}
                
                </div>

))}
                <div onClick={()=>setPage(page+1)}>
                  {
                    page>=count?(<CPaginationItem aria-label="Next" disabled>
                    <span aria-hidden="true">&raquo;</span>
                  </CPaginationItem>):(<CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>)
                  }
                
                </div>
              </CPagination>
             
             
  </>
  ) : <CSpinner color="warning" />}

  </>);
}
export default Bookmarks;