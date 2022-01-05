/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/util'
import {
  CSpinner,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import ReactImg from 'src/assets/images/react.jpg'
import BookmarkCard from '../../components/BookmarkCard'
import CIcon from '@coreui/icons-react'


const Bookmarks = () => {
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";
  const [bookmarks, setBookmarks] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      setBookmarks(res.results);
    })
  }, []);
  return (<>

    {bookmarks != null? (<CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
      
      {bookmarks && bookmarks.map((book, index) => (
        <div key={book.id} style={{marginTop:'35px'}}>
          <BookmarkCard book={book} />
        </div>
      ))}

    
  </CRow>) : <CSpinner color="warning" />}

  </>);
}
export default Bookmarks;