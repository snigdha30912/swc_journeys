import axios from "axios";
import { useState, useEffect } from "react";
import { post } from '../Utility Functions/util';
const CreateNewTimeline = ({id}) => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState("");
  const bookmarks = [];
 
  const submitUrl = () => {
      
      bookmarks.push({id}.id);
      console.log(bookmarks);
      
      
        
        
        console.log(name);
    const data = {name: name ,bookmarks : bookmarks };
    post('http://127.0.0.1:8000/timelines/timelines/', data);

//     axios.post("http://127.0.0.1:8000/timelines/timelines/", data).then((response) => {
//       setStatus(
//         response.status == 201
//           ? "Successfully Created"
//           : "Something Went Wrong"
//       );
//     }).catch(error => {
//   console.log(error.message);
// })
  };

  return (
    <div>
      <div className="heading-create-new-journey"><h3>Give a name to your new Journey</h3></div>
      <input
        className="input-create-new-journey"
        type="text"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button 
      className="btn-create-new-journey"
      onClick={submitUrl}>Create New Journey</button>
      <p>{status}</p>
    </div>
  );
};

export default CreateNewTimeline;
