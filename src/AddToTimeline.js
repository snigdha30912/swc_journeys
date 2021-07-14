import axios from "axios";
import { useState, useEffect } from "react";

const AddToTimeline = ({id}) => {
   
 
  const [status, setStatus] = useState("Paste the url and click on submit");
  const apiURL = "http://127.0.0.1:8000/timelines/";
  const [name,setName] = useState(null);

  
  const submitUrl = () => {
    {
            
            fetch(apiURL)
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                console.log(data);
                let filteredtimeline = data && data.filter((timeline) => timeline.name === name);
                let timelineId = filteredtimeline[0].id;
                const timelinedata = {bookmark_id : id}
                console.log(timelinedata)
                console.log(id);
                console.log(timelineId);
                console.log(JSON.stringify(timelinedata))


                  
                  
                  const requestOptions = {
                    method: "PUT",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(timelinedata),
                  };

                  fetch(apiURL + timelineId + '/', requestOptions).then((result) => {
                    result.json().then((resp) => {
                      console.log(resp);
                      
                    });
                  });
              });
              
    
    }
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

export default AddToTimeline;
