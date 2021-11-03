import {useState,useEffect} from 'react';
import { post } from '../Utility Functions/util';
import NavBar from '../Navbar/NavBar';

const Home = () => {
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState("Paste the url and click on submit");

  useEffect(() => {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if(reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }

  }, []);


const submitUrl = () => {
  
  const data = { url_field: url };
  // axios.post('http://127.0.0.1:8000/bookmarksection/bookmarkApi/', data)
  //       .then(response => {setStatus(response.status==201? "Successfully submitted":"Something Went Wrong")});
  post('http://127.0.0.1:8000/bookmarksection/bookmarkApi/', data);
}
 
  return (
     <div>
       <div>
     <NavBar/>
     </div>

 

{/* <input type="text" name="url" onChange={(event)=>setUrl(event.target.value)}/>
<button onClick={submitUrl}>submit</button>
<p>{status}</p> */}


</div> 
  )};

export default Home;
