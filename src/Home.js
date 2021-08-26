import axios from 'axios';
import {useState,useEffect} from 'react';
import { post } from './util';
import Cookies from 'js-cookie';
const Home = () => {
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState("Paste the url and click on submit");

const submitUrl = () => {
  
  const data = { url_field: url };
  // axios.post('http://127.0.0.1:8000/bookmarksection/bookmarkApi/', data)
  //       .then(response => {setStatus(response.status==201? "Successfully submitted":"Something Went Wrong")});
  post('http://127.0.0.1:8000/bookmarksection/bookmarkApi/', data);
}
 
  return (<div>
    <input type="text" name="url" onChange={(event)=>setUrl(event.target.value)}/>
    <button onClick={submitUrl}>submit</button>
    <p>{status}</p>
    </div>
  
  )};

export default Home;
