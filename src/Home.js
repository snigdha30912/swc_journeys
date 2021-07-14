import axios from 'axios';
import {useState,useEffect} from 'react';
const Home = () => {
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState("Paste the url and click on submit");

const submitUrl = () => {
  
  const data = { url_field: url };
  axios.post('http://127.0.0.1:8000/bookmarkApi/', data)
        .then(response => {setStatus(response.status==201? "Successfully submitted":"Something Went Wrong")});
}
 
  return (<div>
    <input type="text" name="url" onChange={(event)=>setUrl(event.target.value)}/>
    <button onClick={submitUrl}>submit</button>
    <p>{status}</p>
    </div>
  
  )};

export default Home;
