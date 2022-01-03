/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/util'
import {
  CRow,
  CSpinner,
} from '@coreui/react'
import BookmarkCard from '../../components/BookmarkCard'


const Favorites = () => {
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/favorites/";
  const [bookmarks, setBookmarks] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      setBookmarks(res);
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
export default Favorites;