/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/util'
import {
  CRow,
  CSpinner,
} from '@coreui/react'
import TimelineCard from 'src/components/TimelineCard'


const Timelines = () => {
  const apiURL = "http://127.0.0.1:8000/timelines/timelines/";
  const [timelines, setTimelines] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      console.log(res);
      setTimelines(res.results);
    })
  }, []);
  return (<>
{timelines != null? (<CRow>

{timelines && timelines.map((time, index) => (

<TimelineCard key = {time.id} time = {time}/>
 ))}
</CRow>):<CSpinner className="spinner" />}

  

  </>);
}
export default Timelines;
