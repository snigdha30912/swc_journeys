import axios from "axios";
import { useState, useEffect } from "react";
const CreateNewTimeline = ({id, date}) => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState("Paste the url and click on submit");
  const bookmarks = [];
  const datefield = {date};
  const submitUrl = () => {
      
      bookmarks.push({id}.id);
      console.log(bookmarks);
      
      
        
        console.log(datefield.date);
        console.log(name);
    const data = { name: name ,date_started : datefield.date, bookmarks : bookmarks };
    axios.post("http://127.0.0.1:8000/timelines/", data).then((response) => {
      setStatus(
        response.status == 201
          ? "Successfully submitted"
          : "Something Went Wrong"
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={submitUrl}>submit</button>
      <p>{status}</p>
    </div>
  );
};

export default CreateNewTimeline;
