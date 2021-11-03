import {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { get } from '../Utility Functions/util';
import NavBar from '../Navbar/NavBar';


const useStyles = makeStyles({
  root: {
    maxWidth: 900,
   
  },
  media: {
    height: 15,
  },
});

const TimelineSpecific = () => {
const classes = useStyles();
    const timeline_id = window.location.pathname.substr(10)
    const [timeline, setTimeline] = useState(null);
  const apiURL1 = "http://127.0.0.1:8000/timelines/timelines/" + timeline_id + "/";

  const [timelinebookmarks, setTimelinebookmarks] = useState(null);
  const apiURL = "http://127.0.0.1:8000/bookmarksection/bookmarkApi/";
  console.log(apiURL1);
  const current_timeline = {
    bookmarks : []
  }
  useEffect(() => {
    get(apiURL).then(res=>{
      setTimelinebookmarks(res);
      console.log(res);
    })
  }, []);
  useEffect(() => {
    get(apiURL1).then(res=>{
      setTimeline(res);
      console.log(res);
    })
  }, []);
  {timeline && timelinebookmarks && timeline.bookmarks.map((id)=>(
              timelinebookmarks
                .filter((timelinebookmark) => (timelinebookmark.id === id ))
                .map((filteredbookmark) => (
                  current_timeline.bookmarks.push(filteredbookmark)
                ))))
            }
        
  return timeline==null?(<div></div>):(
      
      /*{ <NavBar/>
      <div style={{paddingTop:"20px"}}>
          <h2>{timeline.tname}</h2>
          <h4 style={{color:"gray",fontWeight:"normal"}}>{timeline.tdate}</h4>
      </div>
   <Grid
      item
      md={3}
      style={{
          position:"absolute",
        width: "600px",
        height: "300px",
        margin: "10px 10px 10px 350px",
        paddingBottom: "20px",
      }}
    >
        {timeline.bookmarks && timeline.bookmarks.map((bookmark,idx)=>(
            
            <Card onClick={()=>{window.open(bookmark.url_field, "_blank");window.focus()}}
        className={classes.root}
        style={{ width: "900px", height: "180px", marginBottom: "20px" }}
      >
          <CardMedia
            className={classes.media}
            image="https://htmlcolorcodes.com/assets/images/colors/royal-blue-color-solid-background-1920x1080.png"
            
          />
          <div className="timeline-tile">{bookmark.date.substr(0,10)}</div>
          <div><h3>{bookmark.title_name}</h3></div>
          <div><p className="bookmark_description1">{bookmark.description}</p></div>
       
        
      </Card>
     
        ))}
    </Grid> */
    <>
    <NavBar/>
    
    <div class="sm:hidden flex justify-center h-screen w-12 pt-8 px-2 shadow-lg">
      <ul>
        <li class="inline-block h-9 p-1 rounded-lg hover:bg-gray-200">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2"
              d="M20.5488 11.316V20.2341L15.5483 20.2335V14.7334V14.2334H15.0483H10.5483H10.0483V14.7334V20.2335L5.04883 20.2341V11.316C5.04883 11.2811 5.05611 11.2467 5.0702 11.2148C5.08428 11.183 5.10487 11.1544 5.13064 11.131L4.79598 10.7629L5.13064 11.131L12.6301 4.3121L12.2938 3.94216L12.6301 4.3121C12.6761 4.27026 12.7361 4.24707 12.7983 4.24707C12.8605 4.24707 12.9205 4.27025 12.9665 4.31209L20.467 11.131C20.4928 11.1544 20.5134 11.183 20.5275 11.2149C20.5415 11.2467 20.5488 11.2812 20.5488 11.316Z"
              fill="#3A4859" stroke="#243447" />
            <path
              d="M21.0488 20.7342V11.316C21.0488 11.2115 21.027 11.1081 20.9847 11.0126C20.9424 10.917 20.8807 10.8313 20.8033 10.761L13.3028 3.94213C13.1648 3.81661 12.9849 3.74706 12.7983 3.74707C12.6117 3.74708 12.4318 3.81663 12.2938 3.94216L4.79428 10.761C4.71697 10.8313 4.6552 10.917 4.61293 11.0126C4.57066 11.1081 4.54883 11.2115 4.54883 11.316V20.7342"
              stroke="#3A4859" stroke-width="1.63" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.29883 20.7341H23.2988" stroke="#3A4859" stroke-width="1.63" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M15.0483 20.7334V14.7334H10.5483V20.7334" stroke="#3A4859" stroke-width="1.63"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
        <li class="inline-block h-9 p-1 rounded-lg hover:bg-gray-200">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2"
              d="M12.8018 3.48413C11.0217 3.48413 9.28167 4.01197 7.80163 5.0009C6.32159 5.98984 5.16803 7.39545 4.48685 9.03998C3.80566 10.6845 3.62743 12.4941 3.97469 14.2399C4.32196 15.9858 5.17913 17.5894 6.4378 18.8481C7.69647 20.1068 9.30012 20.9639 11.0459 21.3112C12.7918 21.6585 14.6014 21.4802 16.2459 20.799C17.8904 20.1179 19.2961 18.9643 20.285 17.4843C21.2739 16.0042 21.8018 14.2642 21.8018 12.4841C21.8018 11.3022 21.569 10.1319 21.1167 9.03998C20.6644 7.94805 20.0015 6.95589 19.1657 6.12017C18.33 5.28444 17.3378 4.6215 16.2459 4.16921C15.154 3.71692 13.9837 3.48413 12.8018 3.48413ZM14.3922 14.0751L8.82372 16.4616L11.2102 10.8931L17.026 8.24931L14.3922 14.0751Z"
              fill="#3A4859" />
            <path
              d="M12.8018 21.4841C17.7723 21.4841 21.8018 17.4547 21.8018 12.4841C21.8018 7.51357 17.7723 3.48413 12.8018 3.48413C7.83119 3.48413 3.80176 7.51357 3.80176 12.4841C3.80176 17.4547 7.83119 21.4841 12.8018 21.4841Z"
              stroke="#3A4859" stroke-width="1.62" stroke-miterlimit="10" />
            <path d="M14.3922 14.0752L17.026 8.24927L11.2102 10.8931L8.82373 16.4616L14.3922 14.0752Z" stroke="#3A4859"
              stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
        <li class="inline-block h-9 p-1 rounded-lg hover:bg-gray-200">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2"
              d="M7.17578 9.48413C8.62553 9.48413 9.80078 8.30888 9.80078 6.85913C9.80078 5.40938 8.62553 4.23413 7.17578 4.23413C5.72603 4.23413 4.55078 5.40938 4.55078 6.85913C4.55078 8.30888 5.72603 9.48413 7.17578 9.48413Z"
              fill="#3A4859" />
            <path
              d="M7.17578 20.7341C8.62553 20.7341 9.80078 19.5589 9.80078 18.1091C9.80078 16.6594 8.62553 15.4841 7.17578 15.4841C5.72603 15.4841 4.55078 16.6594 4.55078 18.1091C4.55078 19.5589 5.72603 20.7341 7.17578 20.7341Z"
              stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M7.17578 9.48413C8.62553 9.48413 9.80078 8.30888 9.80078 6.85913C9.80078 5.40938 8.62553 4.23413 7.17578 4.23413C5.72603 4.23413 4.55078 5.40938 4.55078 6.85913C4.55078 8.30888 5.72603 9.48413 7.17578 9.48413Z"
              stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M18.4263 16.2341C19.876 16.2341 21.0513 15.0589 21.0513 13.6091C21.0513 12.1594 19.876 10.9841 18.4263 10.9841C16.9765 10.9841 15.8013 12.1594 15.8013 13.6091C15.8013 15.0589 16.9765 16.2341 18.4263 16.2341Z"
              stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M15.801 13.9841H13.0335C12.3738 13.9841 11.7222 13.8391 11.1248 13.5593C10.5274 13.2795 9.99879 12.8717 9.57647 12.365L7.17578 9.48413V15.4841"
              stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </li>
        <li class="inline-block h-9 p-1 rounded-lg hover:bg-gray-200">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2"
              d="M6.55184 15.9815L6.55185 15.1915L5.83782 15.5296C5.51392 15.683 5.1565 15.752 4.79878 15.7302C4.44106 15.7084 4.09467 15.5964 3.79184 15.4048C3.489 15.2131 3.23956 14.948 3.06671 14.634C2.89386 14.3201 2.80322 13.9675 2.80322 13.6092C2.80322 13.2508 2.89386 12.8982 3.06671 12.5843C3.23956 12.2703 3.489 12.0052 3.79184 11.8135L3.52445 11.391L3.79184 11.8135C4.09467 11.6219 4.44106 11.5099 4.79878 11.4881C5.1565 11.4663 5.51392 11.5353 5.83782 11.6887L6.55185 12.0269L6.55184 11.2368L6.55179 7.23416C6.55179 7.20132 6.55826 7.16881 6.57082 7.13848C6.58338 7.10815 6.6018 7.08059 6.62501 7.05738C6.64823 7.03416 6.67579 7.01575 6.70612 7.00318C6.73645 6.99062 6.76896 6.98415 6.80179 6.98415L11.1794 6.9842L11.9695 6.98421L11.6313 6.27018C11.4779 5.94629 11.4089 5.58886 11.4307 5.23114C11.4526 4.87343 11.5645 4.52704 11.7562 4.22421L11.343 3.96273L11.7562 4.22421C11.9478 3.92138 12.2129 3.67193 12.5269 3.49908C12.8408 3.32624 13.1934 3.2356 13.5518 3.2356C13.9102 3.2356 14.2627 3.32624 14.5767 3.49908C14.8906 3.67193 15.1557 3.92138 15.3474 4.22421L15.7606 3.96273L15.3474 4.22421C15.539 4.52704 15.651 4.87343 15.6728 5.23114C15.6947 5.58886 15.6257 5.94629 15.4723 6.27018L15.1341 6.98421L15.9241 6.9842L20.3018 6.98415C20.3681 6.98415 20.4316 7.01049 20.4785 7.05737C20.5254 7.10426 20.5518 7.16785 20.5518 7.23415L20.5518 10.547C20.2852 10.4927 20.0116 10.4733 19.7378 10.49C19.2118 10.5221 18.7024 10.6867 18.257 10.9685C17.8117 11.2504 17.4449 11.6403 17.1907 12.102C16.9365 12.5636 16.8032 13.0821 16.8032 13.6092C16.8032 14.1362 16.9365 14.6547 17.1907 15.1163C17.4449 15.578 17.8117 15.9679 18.257 16.2498C18.7024 16.5316 19.2118 16.6962 19.7378 16.7283C20.0116 16.7451 20.2852 16.7256 20.5518 16.6713L20.5518 19.9842C20.5518 20.0505 20.5254 20.114 20.4785 20.1609C20.4316 20.2078 20.3681 20.2341 20.3018 20.2341L6.80179 20.2342C6.76896 20.2342 6.73645 20.2277 6.70612 20.2151C6.67578 20.2026 6.64822 20.1841 6.62501 20.1609C6.6018 20.1377 6.58338 20.1102 6.57082 20.0798L6.10888 20.2712L6.57082 20.0798C6.55825 20.0495 6.55179 20.017 6.55179 19.9841L6.55184 15.9815Z"
              fill="#3A4859" stroke="#141D26" />
            <path
              d="M6.80179 20.7342C6.7033 20.7342 6.60577 20.7148 6.51477 20.6771C6.42378 20.6394 6.3411 20.5841 6.27146 20.5145C6.20181 20.4448 6.14657 20.3622 6.10888 20.2712C6.07119 20.1802 6.05179 20.0826 6.05179 19.9841L6.05184 15.9815C5.65174 16.171 5.21021 16.2562 4.76832 16.2293C4.32643 16.2023 3.89854 16.064 3.52445 15.8273C3.15037 15.5905 2.84223 15.263 2.62871 14.8752C2.41519 14.4874 2.30322 14.0519 2.30322 13.6092C2.30322 13.1664 2.41519 12.7309 2.62871 12.3431C2.84223 11.9553 3.15037 11.6278 3.52445 11.391C3.89854 11.1543 4.32643 11.016 4.76832 10.989C5.21021 10.9621 5.65174 11.0473 6.05184 11.2368L6.05179 7.23416C6.05179 7.13567 6.07119 7.03814 6.10888 6.94714C6.14657 6.85615 6.20182 6.77347 6.27146 6.70382C6.34111 6.63418 6.42379 6.57893 6.51478 6.54124C6.60578 6.50355 6.70331 6.48415 6.8018 6.48415L11.1794 6.4842C10.9899 6.0841 10.9047 5.64257 10.9317 5.20069C10.9586 4.7588 11.0969 4.33091 11.3337 3.95682C11.5704 3.58274 11.8979 3.2746 12.2857 3.06108C12.6735 2.84756 13.1091 2.7356 13.5518 2.7356C13.9945 2.7356 14.43 2.84756 14.8178 3.06108C15.2056 3.2746 15.5331 3.58274 15.7699 3.95682C16.0066 4.33091 16.1449 4.7588 16.1719 5.20069C16.1989 5.64257 16.1136 6.0841 15.9241 6.4842L20.3017 6.48415C20.5007 6.48415 20.6914 6.56317 20.8321 6.70382C20.9727 6.84447 21.0517 7.03523 21.0518 7.23414L21.0518 11.2368C20.6517 11.0473 20.2102 10.9621 19.7683 10.989C19.3264 11.016 18.8985 11.1543 18.5244 11.391C18.1503 11.6278 17.8422 11.9553 17.6287 12.3431C17.4152 12.7309 17.3032 13.1664 17.3032 13.6092C17.3032 14.0519 17.4152 14.4874 17.6287 14.8752C17.8422 15.263 18.1503 15.5905 18.5244 15.8273C18.8985 16.064 19.3264 16.2023 19.7683 16.2293C20.2102 16.2562 20.6517 16.171 21.0518 15.9815L21.0518 19.9842C21.0517 20.1831 20.9727 20.3738 20.8321 20.5145C20.6914 20.6551 20.5007 20.7342 20.3018 20.7342L6.80179 20.7342Z"
              stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </li>
        <li class="inline-block h-9 p-1 rounded-lg hover:bg-gray-200">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2"
              d="M13.1768 20.2334H5.27051C5.21249 20.2334 5.15685 20.2104 5.11583 20.1693L4.76227 20.5229L5.11583 20.1693C5.07481 20.1283 5.05176 20.0727 5.05176 20.0146V12.1084C5.05176 11.0414 5.26192 9.98485 5.67024 8.99908C6.07855 8.01332 6.67704 7.11762 7.43151 6.36315C8.18598 5.60868 9.08168 5.01019 10.0674 4.60188C11.0532 4.19356 12.1098 3.9834 13.1767 3.9834H13.1768C14.2437 3.9834 15.3003 4.19356 16.2861 4.60188C17.2718 5.0102 18.1675 5.60868 18.922 6.36316C19.6765 7.11763 20.275 8.01333 20.6833 8.9991L21.1452 8.80775L20.6833 8.9991C21.0916 9.98487 21.3018 11.0414 21.3018 12.1084V12.1084C21.3018 14.2633 20.4457 16.3299 18.922 17.8536C17.3983 19.3774 15.3317 20.2334 13.1768 20.2334Z"
              fill="#3A4859" stroke="#141D26" />
            <path
              d="M13.1768 20.7334H5.27051C5.07988 20.7334 4.89707 20.6577 4.76227 20.5229C4.62748 20.3881 4.55176 20.2053 4.55176 20.0146V12.1084C4.55176 10.9757 4.77485 9.85417 5.2083 8.80774C5.64174 7.76131 6.27705 6.8105 7.07796 6.0096C7.87886 5.20869 8.82967 4.57338 9.8761 4.13994C10.9225 3.70649 12.0441 3.4834 13.1767 3.4834H13.1768C14.3094 3.4834 15.431 3.70649 16.4774 4.13994C17.5238 4.57338 18.4746 5.2087 19.2756 6.0096C20.0765 6.81051 20.7118 7.76132 21.1452 8.80775C21.5787 9.85419 21.8018 10.9757 21.8018 12.1084V12.1084C21.8018 14.3959 20.8931 16.5897 19.2756 18.2072C17.6581 19.8247 15.4643 20.7334 13.1768 20.7334Z"
              stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M8.67676 13.6089C9.29808 13.6089 9.80176 13.1052 9.80176 12.4839C9.80176 11.8626 9.29808 11.3589 8.67676 11.3589C8.05544 11.3589 7.55176 11.8626 7.55176 12.4839C7.55176 13.1052 8.05544 13.6089 8.67676 13.6089Z"
              fill="#3A4859" />
            <path
              d="M13.1768 13.6089C13.7981 13.6089 14.3018 13.1052 14.3018 12.4839C14.3018 11.8626 13.7981 11.3589 13.1768 11.3589C12.5554 11.3589 12.0518 11.8626 12.0518 12.4839C12.0518 13.1052 12.5554 13.6089 13.1768 13.6089Z"
              fill="#3A4859" />
            <path
              d="M17.6768 13.6089C18.2981 13.6089 18.8018 13.1052 18.8018 12.4839C18.8018 11.8626 18.2981 11.3589 17.6768 11.3589C17.0554 11.3589 16.5518 11.8626 16.5518 12.4839C16.5518 13.1052 17.0554 13.6089 17.6768 13.6089Z"
              fill="#3A4859" />
          </svg>
        </li>
      </ul>
    </div>
    <div class="flex flex-wrap justify-around">
      
      <div>
        <div class=" pb-7 bg-gray-100 rounded-md shadow-lg max-w-lg my-12 mx-4" style={{"marginLeft": "15rem"}}>
          <div class="h-4 bg-gray-600"></div>
          <img src="https://i.ibb.co/XyWNY4t/image-34.png" alt="image-34" border="0" class=" -mt-2 absolute"></img>
          <h1 class=" text-center font-semibold mt-2 text-2xl">
          {timeline.name}
          </h1>
          <br></br>
          <p class=" mx-5">
            {timeline.description}
          </p>
          <br></br>
          <ul class="flex justify-between mx-5 flex-wrap">
            <li class=" text-gray-400 my-1 font-bold">
              TAGS
            </li>
            {timeline.tags && timeline.tags.map((tag,idx)=>(
              <div>
              <li class=" inline-block rounded-2xl bg-gray-200 py-1 px-5 text-center">
              {tag}</li>
              </div>
            ))}
            
            
          </ul>
          <br></br>
          <ul class=" flex flex-wrap mx-5">
            <li class=" text-gray-400 my-2 mr-8 font-bold">
              CREATOR
            </li>
            <li>
              {timeline.author}
            </li>
          </ul>
          <br></br>
          <ul class="flex mx-5">
            <li class=" text-gray-400 my-1 mr-4 font-bold">
              STARTED ON
            </li>
            <li class=" inline-block rounded-md bg-gray-200 py-1 px-5 text-center">
            {timeline.date_started}
            </li>
          </ul>
          <br></br>
          <ul class="flex mx-5">
            <li class=" text-gray-400 my-1 mr-4 font-bold">
              WEBSITE
            </li>
            <li class=" inline-block rounded-md bg-gray-200 py-1 px-5 text-center">
              swc.iitg.ac.in/election
            </li>
          </ul>
        </div>
        <div class="h-72 max-w-lg bg-gray-100 rounded-md shadow-lg grid grid-rows-5 justify-center mt-3 pt-7 mx-4" style={{"marginLeft":"15rem"}}>
          <div class="flex">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              class=" mt-1 mx-2">
              <path
                d="M10.9563 8.13379V4.88379C10.9563 4.55227 11.088 4.23433 11.3224 3.99991C11.5569 3.76549 11.8748 3.63379 12.2063 3.63379C12.5379 3.63379 12.8558 3.76549 13.0902 3.99991C13.3246 4.23433 13.4563 4.55227 13.4563 4.88379V10.1338C13.4563 10.7904 13.327 11.4406 13.0757 12.0472C12.8245 12.6538 12.4562 13.205 11.9919 13.6693C11.5276 14.1336 10.9764 14.5019 10.3698 14.7532C9.76312 15.0045 9.11294 15.1338 8.45633 15.1338C5.69491 15.1338 4.45633 13.6338 2.4208 9.3392C2.33856 9.19703 2.28514 9.04005 2.2636 8.87723C2.24206 8.7144 2.25282 8.54893 2.29527 8.39027C2.33771 8.23161 2.411 8.08287 2.51096 7.95255C2.61091 7.82223 2.73557 7.71288 2.87781 7.63076C3.02004 7.54864 3.17707 7.49535 3.33991 7.47395C3.50275 7.45255 3.66821 7.46344 3.82684 7.50602C3.98546 7.54859 4.13414 7.62201 4.26438 7.72208C4.39462 7.82214 4.50386 7.94689 4.58586 8.0892L5.95633 10.4629V3.88379C5.95633 3.55227 6.08803 3.23433 6.32245 2.99991C6.55687 2.76549 6.87481 2.63379 7.20633 2.63379C7.53785 2.63379 7.8558 2.76549 8.09022 2.99991C8.32464 3.23433 8.45633 3.55227 8.45633 3.88379V8.13379"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M10.9563 8.13379V2.88379C10.9563 2.55227 10.8246 2.23433 10.5902 1.99991C10.3558 1.76549 10.0378 1.63379 9.7063 1.63379C9.37478 1.63379 9.05684 1.76549 8.82242 1.99991C8.58799 2.23433 8.4563 2.55227 8.4563 2.88379V8.13379"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            VISIT WEBSITE
          </div>
          <div class="flex">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="mt-1 mx-2">
              <path
                d="M5.7063 15.1338C6.10412 15.1338 6.48565 14.9758 6.76696 14.6945C7.04826 14.4132 7.2063 14.0316 7.2063 13.6338V10.6338"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M11.2063 15.1338C10.8085 15.1338 10.4269 14.9758 10.1456 14.6945C9.86433 14.4132 9.7063 14.0316 9.7063 13.6338V10.6338"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M9.9563 10.6338H10.9563C11.3541 10.6338 11.7357 10.7919 12.017 11.0732C12.2983 11.3545 12.4563 11.736 12.4563 12.1338V12.6338C12.4563 13.0316 12.6143 13.4132 12.8956 13.6945C13.1769 13.9758 13.5585 14.1338 13.9563 14.1338"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M6.9563 10.6338H5.9563C5.55847 10.6338 5.17694 10.7919 4.89564 11.0732C4.61433 11.3545 4.4563 11.736 4.4563 12.1338V12.6338C4.4563 13.0316 4.29826 13.4132 4.01696 13.6945C3.73565 13.9758 3.35412 14.1338 2.9563 14.1338"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M4.48828 5.42781C4.31344 4.97542 4.24226 4.48959 4.27999 4.00606C4.31772 3.52253 4.4634 3.05361 4.7063 2.63382C5.25212 2.63351 5.78921 2.77078 6.26795 3.03294C6.74669 3.2951 7.15163 3.6737 7.44535 4.13375V4.13382H9.46726V4.13375C9.76098 3.6737 10.1659 3.2951 10.6447 3.03294C11.1234 2.77078 11.6605 2.63351 12.2063 2.63382C12.4492 3.05361 12.5949 3.52253 12.6326 4.00606C12.6703 4.48959 12.5992 4.97542 12.4243 5.42781V5.42781C12.7716 5.92885 12.9573 6.52418 12.9563 7.13382V7.63382C12.9563 8.42947 12.6402 9.19254 12.0776 9.75514C11.515 10.3178 10.752 10.6338 9.9563 10.6338H6.9563C6.16065 10.6338 5.39759 10.3178 4.83498 9.75514C4.27237 9.19254 3.9563 8.42947 3.9563 7.63382V7.13382C3.95532 6.52418 4.14096 5.92884 4.48828 5.42781L4.48828 5.42781Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            VISIT GITHUB
          </div>
          <div class="flex">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="mt-1 mx-2">
              <path
                d="M11.0813 10.7589C12.2549 10.7589 13.2063 9.80746 13.2063 8.63386C13.2063 7.46025 12.2549 6.50886 11.0813 6.50886C9.90769 6.50886 8.9563 7.46025 8.9563 8.63386C8.9563 9.80746 9.90769 10.7589 11.0813 10.7589Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.9563 6.50892V2.25897H6.8313C6.26771 2.25897 5.72721 2.48286 5.3287 2.88137C4.93018 3.27988 4.7063 3.82039 4.7063 4.38397C4.7063 4.94756 4.93018 5.48806 5.3287 5.88657C5.72721 6.28509 6.26771 6.50897 6.8313 6.50897L8.9563 6.50892Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.9563 10.7588V6.50886H6.8313C6.26771 6.50886 5.72721 6.73274 5.3287 7.13126C4.93018 7.52977 4.7063 8.07027 4.7063 8.63386C4.7063 9.19744 4.93018 9.73794 5.3287 10.1365C5.72721 10.535 6.26771 10.7589 6.8313 10.7589L8.9563 10.7588Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.9563 6.50892V2.25897H11.0813C11.6449 2.25897 12.1854 2.48286 12.5839 2.88137C12.9824 3.27988 13.2063 3.82039 13.2063 4.38397C13.2063 4.94756 12.9824 5.48806 12.5839 5.88657C12.1854 6.28509 11.6449 6.50897 11.0813 6.50897L8.9563 6.50892Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M8.9563 10.7587V12.8838C8.95631 13.3041 8.83168 13.7149 8.59819 14.0644C8.36469 14.4138 8.03281 14.6862 7.64452 14.847C7.25623 15.0079 6.82896 15.05 6.41675 14.968C6.00454 14.886 5.6259 14.6836 5.32871 14.3864C5.03152 14.0892 4.82913 13.7106 4.74713 13.2984C4.66514 12.8862 4.70722 12.4589 4.86805 12.0706C5.02889 11.6823 5.30126 11.3504 5.65071 11.1169C6.00017 10.8834 6.41101 10.7588 6.8313 10.7588L8.9563 10.7587Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            FIGMA
          </div>
          <div class="flex text-red-600">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="mt-1 mx-2">
              <path d="M3.4563 14.1342V3.6342" stroke="#E95959" stroke-width="0.81" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M3.4563 11.1341C7.4563 8.13414 10.4563 14.1341 14.4563 11.1341V3.63414C10.4563 6.63414 7.4563 0.634138 3.4563 3.63414"
                stroke="#E95959" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            MARK A FLAG
          </div>
          <div class="flex -ml-12">
            <div class=" py-1 h-8 px-4 rounded-md bg-red-600 text-white flex">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="mt-1 mx-2">
                <path
                  d="M8.4563 14.1339C9.4228 14.1339 10.2063 13.3504 10.2063 12.3839C10.2063 11.4174 9.4228 10.6339 8.4563 10.6339C7.4898 10.6339 6.7063 11.4174 6.7063 12.3839C6.7063 13.3504 7.4898 14.1339 8.4563 14.1339Z"
                  stroke="white" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M12.2063 6.63379C13.1728 6.63379 13.9563 5.85029 13.9563 4.88379C13.9563 3.91729 13.1728 3.13379 12.2063 3.13379C11.2398 3.13379 10.4563 3.91729 10.4563 4.88379C10.4563 5.85029 11.2398 6.63379 12.2063 6.63379Z"
                  stroke="white" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M4.7063 6.63379C5.6728 6.63379 6.4563 5.85029 6.4563 4.88379C6.4563 3.91729 5.6728 3.13379 4.7063 3.13379C3.7398 3.13379 2.9563 3.91729 2.9563 4.88379C2.9563 5.85029 3.7398 6.63379 4.7063 6.63379Z"
                  stroke="white" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M4.7063 6.63379V7.13391C4.7063 7.3309 4.7451 7.52596 4.82048 7.70795C4.89587 7.88994 5.00636 8.0553 5.14565 8.19459C5.28494 8.33387 5.4503 8.44436 5.6323 8.51974C5.81429 8.59512 6.00934 8.63392 6.20633 8.63391L10.7063 8.63382C11.1041 8.63381 11.4857 8.47578 11.767 8.19447C12.0483 7.91317 12.2063 7.53164 12.2063 7.13382V6.63379"
                  stroke="white" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.45645 8.63391L8.4563 10.6339" stroke="white" stroke-width="0.81" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              DELETE
            </div>
            <div class=" flex ">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="mt-1 mx-2">
                <path
                  d="M4.4563 10.6339C5.56087 10.6339 6.4563 9.73848 6.4563 8.63391C6.4563 7.52934 5.56087 6.63391 4.4563 6.63391C3.35173 6.63391 2.4563 7.52934 2.4563 8.63391C2.4563 9.73848 3.35173 10.6339 4.4563 10.6339Z"
                  stroke="#3A495A" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M11.4563 15.1339C12.5609 15.1339 13.4563 14.2385 13.4563 13.1339C13.4563 12.0293 12.5609 11.1339 11.4563 11.1339C10.3517 11.1339 9.4563 12.0293 9.4563 13.1339C9.4563 14.2385 10.3517 15.1339 11.4563 15.1339Z"
                  stroke="#3A495A" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M11.4563 6.13391C12.5609 6.13391 13.4563 5.23848 13.4563 4.13391C13.4563 3.02934 12.5609 2.13391 11.4563 2.13391C10.3517 2.13391 9.4563 3.02934 9.4563 4.13391C9.4563 5.23848 10.3517 6.13391 11.4563 6.13391Z"
                  stroke="#3A495A" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.774 5.21535L6.13831 7.55258" stroke="#3A495A" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M6.13831 9.71523L9.774 12.0525" stroke="#3A495A" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              SHARE
            </div>
          </div>
        </div>
        <br></br>
        <div class="h-72 max-w-lg bg-gray-100 rounded-md shadow-lg grid grid-rows-5 justify-center mt-3 pt-7 mx-4" style={{"marginLeft":"15rem"}}>
          
          <div class="flex">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              class=" mt-1 mx-2">
              <path
                d="M10.9563 8.13379V4.88379C10.9563 4.55227 11.088 4.23433 11.3224 3.99991C11.5569 3.76549 11.8748 3.63379 12.2063 3.63379C12.5379 3.63379 12.8558 3.76549 13.0902 3.99991C13.3246 4.23433 13.4563 4.55227 13.4563 4.88379V10.1338C13.4563 10.7904 13.327 11.4406 13.0757 12.0472C12.8245 12.6538 12.4562 13.205 11.9919 13.6693C11.5276 14.1336 10.9764 14.5019 10.3698 14.7532C9.76312 15.0045 9.11294 15.1338 8.45633 15.1338C5.69491 15.1338 4.45633 13.6338 2.4208 9.3392C2.33856 9.19703 2.28514 9.04005 2.2636 8.87723C2.24206 8.7144 2.25282 8.54893 2.29527 8.39027C2.33771 8.23161 2.411 8.08287 2.51096 7.95255C2.61091 7.82223 2.73557 7.71288 2.87781 7.63076C3.02004 7.54864 3.17707 7.49535 3.33991 7.47395C3.50275 7.45255 3.66821 7.46344 3.82684 7.50602C3.98546 7.54859 4.13414 7.62201 4.26438 7.72208C4.39462 7.82214 4.50386 7.94689 4.58586 8.0892L5.95633 10.4629V3.88379C5.95633 3.55227 6.08803 3.23433 6.32245 2.99991C6.55687 2.76549 6.87481 2.63379 7.20633 2.63379C7.53785 2.63379 7.8558 2.76549 8.09022 2.99991C8.32464 3.23433 8.45633 3.55227 8.45633 3.88379V8.13379"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M10.9563 8.13379V2.88379C10.9563 2.55227 10.8246 2.23433 10.5902 1.99991C10.3558 1.76549 10.0378 1.63379 9.7063 1.63379C9.37478 1.63379 9.05684 1.76549 8.82242 1.99991C8.58799 2.23433 8.4563 2.55227 8.4563 2.88379V8.13379"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ADD EXISTING BOOKMARKS
          </div>
          <div class="flex">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="mt-1 mx-2">
              <path
                d="M5.7063 15.1338C6.10412 15.1338 6.48565 14.9758 6.76696 14.6945C7.04826 14.4132 7.2063 14.0316 7.2063 13.6338V10.6338"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M11.2063 15.1338C10.8085 15.1338 10.4269 14.9758 10.1456 14.6945C9.86433 14.4132 9.7063 14.0316 9.7063 13.6338V10.6338"
                stroke="#243447" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M9.9563 10.6338H10.9563C11.3541 10.6338 11.7357 10.7919 12.017 11.0732C12.2983 11.3545 12.4563 11.736 12.4563 12.1338V12.6338C12.4563 13.0316 12.6143 13.4132 12.8956 13.6945C13.1769 13.9758 13.5585 14.1338 13.9563 14.1338"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M6.9563 10.6338H5.9563C5.55847 10.6338 5.17694 10.7919 4.89564 11.0732C4.61433 11.3545 4.4563 11.736 4.4563 12.1338V12.6338C4.4563 13.0316 4.29826 13.4132 4.01696 13.6945C3.73565 13.9758 3.35412 14.1338 2.9563 14.1338"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M4.48828 5.42781C4.31344 4.97542 4.24226 4.48959 4.27999 4.00606C4.31772 3.52253 4.4634 3.05361 4.7063 2.63382C5.25212 2.63351 5.78921 2.77078 6.26795 3.03294C6.74669 3.2951 7.15163 3.6737 7.44535 4.13375V4.13382H9.46726V4.13375C9.76098 3.6737 10.1659 3.2951 10.6447 3.03294C11.1234 2.77078 11.6605 2.63351 12.2063 2.63382C12.4492 3.05361 12.5949 3.52253 12.6326 4.00606C12.6703 4.48959 12.5992 4.97542 12.4243 5.42781V5.42781C12.7716 5.92885 12.9573 6.52418 12.9563 7.13382V7.63382C12.9563 8.42947 12.6402 9.19254 12.0776 9.75514C11.515 10.3178 10.752 10.6338 9.9563 10.6338H6.9563C6.16065 10.6338 5.39759 10.3178 4.83498 9.75514C4.27237 9.19254 3.9563 8.42947 3.9563 7.63382V7.13382C3.95532 6.52418 4.14096 5.92884 4.48828 5.42781L4.48828 5.42781Z"
                stroke="#3A4859" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            ADD A NEW BOOKMARK VIA URL 
          </div>
          <div class="flex -ml-12">
          </div>
        </div>
        
      </div>
      
      <div class=" md:ml-16 mt-12 space-y-6 ml-4">
      {current_timeline.bookmarks && current_timeline.bookmarks.map((bookmark,idx)=>(
        <div>
          <div
            class="max-w-md pt-4 px-4 border-l-8 border-gray-500 shadow rounded bg-gradient-to-r from-gray-50 to-gray-100">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"
               class="float-right -mt-1">
              <circle cx="18.4747" cy="19.1951" r="17.8456" fill="#EEF2F5" stroke="#CED1D5" stroke-width="0.81" />
              <path
                d="M24.131 26.7371L18.474 23.5946L12.8181 26.7371V12.2817C12.8181 12.1151 12.8843 11.9552 13.0022 11.8373C13.1201 11.7195 13.2799 11.6532 13.4466 11.6532H23.5025C23.6692 11.6532 23.8291 11.7195 23.9469 11.8373C24.0648 11.9552 24.131 12.1151 24.131 12.2817V26.7371Z"
                fill="#CED1D5" />
              <circle cx="18.4749" cy="19.1952" r="13.5" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use transform="scale(0.0078125)" />
                </pattern>
                <image id="image0" width="128" height="128"
                  //xlink:href="data:image/png;base64,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" 
                  />
              </defs>
            </svg>
            Medium
            <h5 class="font-semibold my-2">
            {bookmark.title_name}
            </h5>
            <p>{bookmark.description}</p>
            <span class="flex -ml-4">
              <a href="#"><svg width="69" height="70" viewBox="0 0 69 70" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <circle cx="34.7299" cy="30.881" r="18.2506" fill="white" />
                  </g>
                  <path
                    d="M40.3863 38.423L34.7292 35.2805L29.0734 38.423V23.9676C29.0734 23.8009 29.1396 23.641 29.2574 23.5232C29.3753 23.4053 29.5352 23.3391 29.7019 23.3391H39.7578C39.9245 23.3391 40.0843 23.4053 40.2022 23.5232C40.3201 23.641 40.3863 23.8009 40.3863 23.9676V38.423Z"
                    fill="#CED1D5" />
                  <defs>
                    <filter id="filter0_d" x="0.47937" y="0.630432" width="68.5011" height="68.5011"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix type="matrix"
                        values="0 0 0 0 0.0392157 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.12 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <a href="#" class="-ml-6"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <circle cx="35.231" cy="30.881" r="18.2506" fill="white" />
                    </g>
                    <path
                      d="M29.6051 39.131C31.0548 39.131 32.2301 37.9558 32.2301 36.506C32.2301 35.0563 31.0548 33.881 29.6051 33.881C28.1554 33.881 26.9801 35.0563 26.9801 36.506C26.9801 37.9558 28.1554 39.131 29.6051 39.131Z"
                      stroke="#CED1D5" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M29.6051 27.881C31.0548 27.881 32.2301 26.7058 32.2301 25.256C32.2301 23.8063 31.0548 22.631 29.6051 22.631C28.1554 22.631 26.9801 23.8063 26.9801 25.256C26.9801 26.7058 28.1554 27.881 29.6051 27.881Z"
                      stroke="#CED1D5" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M40.8553 34.631C42.3051 34.631 43.4803 33.4558 43.4803 32.006C43.4803 30.5563 42.3051 29.381 40.8553 29.381C39.4056 29.381 38.2303 30.5563 38.2303 32.006C38.2303 33.4558 39.4056 34.631 40.8553 34.631Z"
                      stroke="#CED1D5" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M38.2303 32.381H35.4628C34.8031 32.381 34.1515 32.236 33.5541 31.9562C32.9567 31.6764 32.4281 31.2686 32.0058 30.7618L29.6051 27.881V33.881"
                      stroke="#CED1D5" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                      <filter id="filter0_d" x="0.980469" y="0.630432" width="68.5011" height="68.5011"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix type="matrix"
                          values="0 0 0 0 0.0392157 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.12 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </a>
              </a>
              <a href="#" class="-ml-6">
                <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <circle cx="34.7321" cy="30.881" r="18.2506" fill="white" />
                  </g>
                  <path
                    d="M34.735 39.131C34.735 39.131 25.36 33.881 25.36 27.506C25.3602 26.3793 25.7506 25.2874 26.4649 24.4159C27.1791 23.5445 28.1732 22.9474 29.278 22.726C30.3828 22.5047 31.5301 22.6728 32.525 23.2018C33.5198 23.7308 34.3008 24.588 34.735 25.6277L34.735 25.6277C35.1692 24.588 35.9501 23.7308 36.945 23.2018C37.9398 22.6728 39.0872 22.5047 40.192 22.726C41.2968 22.9474 42.2908 23.5445 43.0051 24.4159C43.7194 25.2874 44.1098 26.3793 44.11 27.506C44.11 33.881 34.735 39.131 34.735 39.131Z"
                    stroke="#CED1D5" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <filter id="filter0_d" x="0.481567" y="0.630432" width="68.5011" height="68.5011"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix type="matrix"
                        values="0 0 0 0 0.0392157 0 0 0 0 0.0588235 0 0 0 0 0.0784314 0 0 0 0.12 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </a>
            </span>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>

  );
};

export default TimelineSpecific;
