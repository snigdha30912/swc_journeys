/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/util'
import {
  CRow,
} from '@coreui/react'
import TimelineCard from 'src/components/TimelineCard'


const Timelines = () => {
  const apiURL = "http://127.0.0.1:8000/timelines/timelines/";
  const [timelines, setTimelines] = useState(null);
  useEffect(() => {
    get(apiURL).then(res => {
      setTimelines(res);
    })
  }, []);
  return (<>

<CRow>

            {timelines && timelines.map((time, index) => (
          
            <TimelineCard key = {time.id} time = {time}/>
             ))}
          </CRow>
  

  </>);
}
export default Timelines;
