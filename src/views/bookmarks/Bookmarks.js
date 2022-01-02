/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react'
import {get} from '../../utilities/util'



const Bookmarks = ()=>{
    const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";
    const [bookmarks,setBookmarks] = useState(null);
    useEffect(() => { 
        get(apiURL).then(res=>{
        setBookmarks(res);
        console.log("hi")
        console.log(res)
        })
      },[]);
    return (<>
    <h1>Bookmarks</h1>
    </>);
}
export default Bookmarks;