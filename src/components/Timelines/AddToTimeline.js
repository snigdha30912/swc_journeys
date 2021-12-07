import { useState, useEffect } from "react";
import { get, put} from '../Utility Functions/util';
import Dropdown from 'react-dropdown';

const AddToTimeline = ({ id }) => {
  const [status, setStatus] = useState("");
  const [timelines, setTimelines] = useState(null);
  const apiURL = "http://127.0.0.1:8000/timelines/timelines/";
  const [name, setName] = useState(null);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      setTimelines(res);
      console.log(id);
    });
  }, []);
  const onSelect = (option) => {
    console.log('You selected ', option.label);
    setSelected(option.label);
  }
  const submitUrl = () => {
    console.log("submitting");
    var timelineid = 0;
    for (var key in timelines) {
      console.log(key,timelines[key]["name"])
      if (timelines[key]["name"] === selected) {
        timelineid = timelines[key]["id"];
        break;
      }
    }
    const data = { name: selected, bookmarks: [id] };
    put('http://127.0.0.1:8000/timelines/timelines/' + timelineid + '/', data).then(()=>{
      console.log("posted");
      setStatus("posted");
    });
  }
  return (
    <div>
      <div className="heading-create-new-journey"><h3>Select timeline from the dropdown</h3></div>
      {(timelines == null) ? (<div>
        <p>Loading...</p>
      </div>) : (<div>
        <Dropdown options={timelines.map(a => a.name)} onChange={onSelect} value={selected} placeholder="Select an option" />
      </div>)}
      <button className="btn-create-new-journey" onClick={submitUrl} >Add to this journey</button>
      <p>{status}</p>
    </div>
  );

};




export default AddToTimeline;
