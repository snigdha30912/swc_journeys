import {useState} from 'react';
import NavBar from "../Navbar/NavBar";
import background from "./images/background.svg";
import ExploreCommunities from "./ExploreCommunities";
import ExploreTimelines from "./ExploreTimelines";
import ExploreBookmarks from "./ExploreBookmarks";

const Explore = () => {
    const [index, setIndex] = useState(0);
    const components = [<ExploreBookmarks/>,<ExploreCommunities/>,<ExploreTimelines/>,<>Hackathons</>,<>Questions</>]
    const headings = ["Explore Bookmarks Based on your Interests", "Find Communities Where You Belong", "Learn From Experiences Of Others", "Check Your Skills", "Ask Questions"]
    return (
        <>
        <NavBar/>
        <div class="sm:hidden flex justify-center h-screen w-12 pt-8 px-2 shadow-lg" style={{"marginLeft": "20rem"}}>
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
        <div class="flex flex-col w-full" align="right">
            <div class="flex w-full h-80">
                <div class="w-full flex flex-col h-80 items-center" style={{backgroundImage: `url(${background})`, "width" : "95%", "marginLeft": "18rem"}}>
                   <div class="relative text-white font-moderat font-black top-36 justify-around flex-shrink text-lg sm:xl md:text-2xl lg:text-4xl">
                       <p>{headings[index]}</p> 
                   </div>
                   <div class="relative top-44 ">
                       <i class="fas fa-search relative left-8"></i>
                       <input type="text" class="rounded-md md:w-48 lg:w-72 md:h-8 lg:h-10 px-10" placeholder="Search "></input>
                   </div>
                </div>
            </div>
            <div class="flex flex-row justify-evenly h-12 shadow-md" style={{"marginLeft": "18rem"}}>
                <div class="flex px-3 justify-around items-center text-opacity-75 h-12 font-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" onClick={()=>{setIndex(0)}}>Bookmarks</div>
                <div class="flex px-3 justify-around items-center text-opacity-75 h-12 font-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" onClick={()=>{setIndex(1)}}>Communities</div>
                <div class="flex px-3 justify-around items-center text-opacity-75 h-12 font-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" onClick={()=>{setIndex(2)}}>Timelines</div>
                <div class="flex px-3 justify-around items-center text-opacity-75 h-12 font-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" onClick={()=>{setIndex(3)}}>Hackathons</div>
                <div class="flex px-3 justify-around items-center text-opacity-75 h-12 font-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" onClick={()=>{setIndex(4)}}>Questions</div>
            </div> 
            <div class="flex flex-row flex-wrap" style={{ "marginLeft": "18rem" }}>
                {components[index]}
                {/* <div class="flex">
                  <div class="flex flex-col" style={{"marginLeft":"18rem"}}>
                      <div class=" flex my-2 mx-4 text-gray-400 text-xl">
        
                      </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3" >
                          <div class="flex flex-row items-center">
                              <div class=" mx-3">
                                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                      <defs>
                                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                      <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                      </pattern>
                                      <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                      </defs>
                                      </svg>
                              </div>
                              <div class="flex flex-col">
                                  <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                  <div class=" flex moderat component-color text-sm">120 members</div>
                              </div>
                          </div>
                          <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                              JOIN
                          </a> 
                      </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                        <div class="flex flex-row items-center">
                            <div class=" mx-3">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                <div class=" flex moderat component-color text-sm">120 members</div>
                            </div>
                        </div>
                        <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                            JOIN
                        </a> 
                    </div>
                    <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                      <div class="flex flex-row items-center">
                          <div class=" mx-3">
                              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                  <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                  </pattern>
                                  <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAHvklEQVR4nOydbWxbVxnH/8fXsZ0574mzhqQNy5qEZaQke2lYVFi1DTQ6GETswyS2Me0DSAzQNGkgIQ0J8YENRKfxgTGJl3wYY0KiSGwUlm0qdGv30g5tYy55W7MkbZo6bt7s1HZ87z3IL3lp4zrO8fV9TuvzUz7E0bn3OTm/6/ucc597bWc0GtU0DQoKDMNwaprmdDqpe1K8OKg7UOwoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcRI+mQAnw/qb/7TnBw254Msa0vPts5N9lVeiYZGdHShotLSPlqDdALMU6Ox5/frR/8BbmYf+jQ7ozk0YnA8h84bcGcf6rfl30kLYfF4XJInZHgkvNz/RPzVF6DrqT/kslXZzts3b8RYen8Ohlv24q574Pbk210r0HVdiqFPDE7sfOxXjyUOfOQ69FvZ+8oOTY4jhxAK4d6H4HZbHEUIWZJw9Mnv6EcP8sTQWz36F8PxwXH88dkCR8kVKQQY/reNd/+VPFXbA4f/fZwctilaVqQQED90gBf8wL8IjmNH7I2YGXoB5tRY6vC3m2E/ggGCuBcigYCP/8dnp+07/aRhmJ/D6XF7g2aAXgCfmUIBJj6bhk0Yn5+1OepGJBAQCScm6sxuAwnlsZjdQTdALwAuqjURR4mLKPQa9AIc9U3rVkr2UusjCbseCQRc28lqG2xOwYkkXFmNhia7w25AAgENzVrX52yfBXF8qhO+q+0NmgF6AQBKbr/H9mkQw0299kbMjBQCtOt7tN1fsDEPMFy3Cy1ttsXLghQCAHge2e9obrdFAUNDI+77lh2hckAWAcxbcdXPD7j2PcDZ+i5ZkhjY2i+aE7178b0fwVNqxZ4tQKKCTALTiL/+oj7wgnHibZhmarWUXUIOBZnkDhhLnHNuuRVdN4PJctjpui6ZgBX4XCD8yqtzbw2fHw9kF9D+1Qw1YYNjaIlPRRE14autbG35RM0NN6K8YnX3tk+6MiOlAI7xdzA0gMAQuLl58/ufv+DlYBjPTPCBABaN1Cgn0oqDoaeKfbMR++qZJsXIp5GoJJli4RSO/AbnTopsGzHx20n+5GhqMsVWjvGEA5OzN+dwdI53V7CnOnibVyIJspwNAZz5Lw7+WHD0ATzi50+Mrq4m+Lqf9EsGvLfI7z6Ow7M0Fz4yIouA4CgO7Yeeyy0mmfjFSf5STsUVHorjoffx7oJgIMuRQoARx+GnYYheG359Fk+P5diWgSFi8u/6eTSHBGMDUggYeQ3hc4LbRgw8Nsj5BSecLKTbTETw3GkpTkT0AuIRTLwDJnotaCDIJyMC2/G/B7BkiMW0EnoBwREEhsUXvQemxeqZ7PgCjs2LxbQSegGLZ3Oa718Kf4iL/Rcmx5jIW8di6AXEwnltHlhmwpeyF+J5hbYEegEp8kiIYnczppZr9HmYXoDbi3wue9a51q97t0aVBNcB6AWUXw3mED8SP12WGvot78HB+DWl9Nck6AX42uFrFR+IPtHnLXZXsRurhMNaBr2AEg929Ihv/kUf27H14goH+5KPlUnw3Tn0AgC03YayesFtvRr/5XWpJ2ByyQTpNk0e3N8oGNFapBCgubDnYTjdgkuq3mp8/5ocT2IcHKUae7aTuaX41+UQkMgErdj7KEpEs+IPWtjdud3j43Xi97vQXSEWx3pkEQCgoRN3/gS1LYKbP9XBfngt01jqvmesK8isveyqYC/dzD5fQz/5WUW6kiQ3MXEMQ6/wwCATKEl+GEL/Kf5iAGF9tfbLHYz1VOHBJuzzwcFsfBRqM6SsCScJ6Et/nhx866OZieBS9paH7/36xj8aHB+dx3iEx0zUudjOq1LrNemQToAJ/pe5E7879583wuNrxcWsiXmp+3F7+lYI5CrKh8zlx6de6w++F+dG8szBk/UrZvvze7Yii4BFI3bHSL8/OpN+VGClln5lj75Es6AHP/6rPxpA6uaFYkKKd8Ab4YmXQyPJY73Yxl+Od8Cf5j64wk80l4ZewGhsdmBxtNgO/FXoBXwYOTsVD1H3ggx6AWPLEtybQAe9gIgZF64ppj+J6XKGXkCZ5tp0uZuBpLJqTYoPvsoHegGNJclLwyI3KLB2T10BemQr9AK6SxsSDrY6/sn2e7zNhemUfdALaHFX31YuUgRwAN+o3VWAHtkKvQAA99V8ZsvplKGvqqPNXVOoPtmFFAL2lO24q6ItmVdZDtciEu2qtdKfNd4hT2lFGCkEAPjDJ7/WV9mRTMabjSnDNlfZy60PpLP3ZY4sArwO1zPNX/l23U0aY+uquSy9Qlj9Hejw1P96+5ev94jexyIZclXEAAzHgj898++/zQ/pMNNznZWneis1z8O+3Y/W95Y6Sqi7aQ3SlSRXmY6HDy4On4jOTMfDpcy53VX5We/2W8ub3Uy6ruaDvAKKBF3XZckBRYsSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIzTMCT4Ho9ixTCM/wcAAP//Ta5J/5/bQSMAAAAASUVORK5CYII="/>
                                  </defs>
                                  </svg>
                          </div>
                          <div class="flex flex-col">
                              <div class="flex font-medium text-color moderat text-lg">Figma</div>
                              <div class=" flex moderat component-color text-sm">120 members</div>
                          </div>
                      </div>
                      <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                          JOIN
                      </a> 
                  </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                        <div class="flex flex-row items-center">
                            <div class=" mx-3">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                <div class=" flex moderat component-color text-sm">120 members</div>
                            </div>
                        </div>
                        <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                            JOIN
                        </a> 
                    </div>
                    <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                      <div class="flex flex-row items-center">
                          <div class=" mx-3">
                              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                  <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                  </pattern>
                                  <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                  </defs>
                                  </svg>
                          </div>
                          <div class="flex flex-col">
                              <div class="flex font-medium text-color moderat text-lg">Figma</div>
                              <div class=" flex moderat component-color text-sm">120 members</div>
                          </div>
                      </div>
                      <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                          JOIN
                      </a> 
                  </div>
                      
                </div>
                </div> */}
                {/* <div class="flex flex-col">
                  <div class="flex">
                    <div class="flex flex-col">
                        <div class=" flex my-2 mx-4 text-gray-400 text-xl">
                        
                        </div>
                        <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                          <div class="flex flex-row items-center">
                              <div class=" mx-3">
                                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                      <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                      <defs>
                                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                      <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                      </pattern>
                                      <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                      </defs>
                                      </svg>
                              </div>
                              <div class="flex flex-col">
                                  <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                  <div class=" flex moderat component-color text-sm">120 members</div>
                              </div>
                          </div>
                          <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                              JOIN
                          </a> 
                      </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                        <div class="flex flex-row items-center">
                            <div class=" mx-3">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                <div class=" flex moderat component-color text-sm">120 members</div>
                            </div>
                        </div>
                        <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                            JOIN
                        </a> 
                    </div>
                    <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                      <div class="flex flex-row items-center">
                          <div class=" mx-3">
                              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                  <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                  </pattern>
                                  <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                  </defs>
                                  </svg>
                          </div>
                          <div class="flex flex-col">
                              <div class="flex font-medium text-color moderat text-lg">Figma</div>
                              <div class=" flex moderat component-color text-sm">120 members</div>
                          </div>
                      </div>
                      <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                          JOIN
                      </a> 
                  </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex flex-col">
                      <div class=" flex my-2 mx-4 text-gray-400 text-xl">
              
                      </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                        <div class="flex flex-row items-center">
                            <div class=" mx-3">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                <div class=" flex moderat component-color text-sm">120 members</div>
                            </div>
                        </div>
                        <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                            JOIN
                        </a> 
                    </div>
                    <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                      <div class="flex flex-row items-center">
                          <div class=" mx-3">
                              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                  <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                  </pattern>
                                  <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAHvklEQVR4nOydbWxbVxnH/8fXsZ0574mzhqQNy5qEZaQke2lYVFi1DTQ6GETswyS2Me0DSAzQNGkgIQ0J8YENRKfxgTGJl3wYY0KiSGwUlm0qdGv30g5tYy55W7MkbZo6bt7s1HZ87z3IL3lp4zrO8fV9TuvzUz7E0bn3OTm/6/ucc597bWc0GtU0DQoKDMNwaprmdDqpe1K8OKg7UOwoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcRI+mQAnw/qb/7TnBw254Msa0vPts5N9lVeiYZGdHShotLSPlqDdALMU6Ox5/frR/8BbmYf+jQ7ozk0YnA8h84bcGcf6rfl30kLYfF4XJInZHgkvNz/RPzVF6DrqT/kslXZzts3b8RYen8Ohlv24q574Pbk210r0HVdiqFPDE7sfOxXjyUOfOQ69FvZ+8oOTY4jhxAK4d6H4HZbHEUIWZJw9Mnv6EcP8sTQWz36F8PxwXH88dkCR8kVKQQY/reNd/+VPFXbA4f/fZwctilaVqQQED90gBf8wL8IjmNH7I2YGXoB5tRY6vC3m2E/ggGCuBcigYCP/8dnp+07/aRhmJ/D6XF7g2aAXgCfmUIBJj6bhk0Yn5+1OepGJBAQCScm6sxuAwnlsZjdQTdALwAuqjURR4mLKPQa9AIc9U3rVkr2UusjCbseCQRc28lqG2xOwYkkXFmNhia7w25AAgENzVrX52yfBXF8qhO+q+0NmgF6AQBKbr/H9mkQw0299kbMjBQCtOt7tN1fsDEPMFy3Cy1ttsXLghQCAHge2e9obrdFAUNDI+77lh2hckAWAcxbcdXPD7j2PcDZ+i5ZkhjY2i+aE7178b0fwVNqxZ4tQKKCTALTiL/+oj7wgnHibZhmarWUXUIOBZnkDhhLnHNuuRVdN4PJctjpui6ZgBX4XCD8yqtzbw2fHw9kF9D+1Qw1YYNjaIlPRRE14autbG35RM0NN6K8YnX3tk+6MiOlAI7xdzA0gMAQuLl58/ufv+DlYBjPTPCBABaN1Cgn0oqDoaeKfbMR++qZJsXIp5GoJJli4RSO/AbnTopsGzHx20n+5GhqMsVWjvGEA5OzN+dwdI53V7CnOnibVyIJspwNAZz5Lw7+WHD0ATzi50+Mrq4m+Lqf9EsGvLfI7z6Ow7M0Fz4yIouA4CgO7Yeeyy0mmfjFSf5STsUVHorjoffx7oJgIMuRQoARx+GnYYheG359Fk+P5diWgSFi8u/6eTSHBGMDUggYeQ3hc4LbRgw8Nsj5BSecLKTbTETw3GkpTkT0AuIRTLwDJnotaCDIJyMC2/G/B7BkiMW0EnoBwREEhsUXvQemxeqZ7PgCjs2LxbQSegGLZ3Oa718Kf4iL/Rcmx5jIW8di6AXEwnltHlhmwpeyF+J5hbYEegEp8kiIYnczppZr9HmYXoDbi3wue9a51q97t0aVBNcB6AWUXw3mED8SP12WGvot78HB+DWl9Nck6AX42uFrFR+IPtHnLXZXsRurhMNaBr2AEg929Ihv/kUf27H14goH+5KPlUnw3Tn0AgC03YayesFtvRr/5XWpJ2ByyQTpNk0e3N8oGNFapBCgubDnYTjdgkuq3mp8/5ocT2IcHKUae7aTuaX41+UQkMgErdj7KEpEs+IPWtjdud3j43Xi97vQXSEWx3pkEQCgoRN3/gS1LYKbP9XBfngt01jqvmesK8isveyqYC/dzD5fQz/5WUW6kiQ3MXEMQ6/wwCATKEl+GEL/Kf5iAGF9tfbLHYz1VOHBJuzzwcFsfBRqM6SsCScJ6Et/nhx866OZieBS9paH7/36xj8aHB+dx3iEx0zUudjOq1LrNemQToAJ/pe5E7879583wuNrxcWsiXmp+3F7+lYI5CrKh8zlx6de6w++F+dG8szBk/UrZvvze7Yii4BFI3bHSL8/OpN+VGClln5lj75Es6AHP/6rPxpA6uaFYkKKd8Ab4YmXQyPJY73Yxl+Od8Cf5j64wk80l4ZewGhsdmBxtNgO/FXoBXwYOTsVD1H3ggx6AWPLEtybQAe9gIgZF64ppj+J6XKGXkCZ5tp0uZuBpLJqTYoPvsoHegGNJclLwyI3KLB2T10BemQr9AK6SxsSDrY6/sn2e7zNhemUfdALaHFX31YuUgRwAN+o3VWAHtkKvQAA99V8ZsvplKGvqqPNXVOoPtmFFAL2lO24q6ItmVdZDtciEu2qtdKfNd4hT2lFGCkEAPjDJ7/WV9mRTMabjSnDNlfZy60PpLP3ZY4sArwO1zPNX/l23U0aY+uquSy9Qlj9Hejw1P96+5ev94jexyIZclXEAAzHgj898++/zQ/pMNNznZWneis1z8O+3Y/W95Y6Sqi7aQ3SlSRXmY6HDy4On4jOTMfDpcy53VX5We/2W8ub3Uy6ruaDvAKKBF3XZckBRYsSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIzTMCT4Ho9ixTCM/wcAAP//Ta5J/5/bQSMAAAAASUVORK5CYII="/>
                                  </defs>
                                  </svg>
                          </div>
                          <div class="flex flex-col">
                              <div class="flex font-medium text-color moderat text-lg">Figma</div>
                              <div class=" flex moderat component-color text-sm">120 members</div>
                          </div>
                      </div>
                      <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                          JOIN
                      </a> 
                  </div>
                  <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                    <div class="flex flex-row items-center">
                        <div class=" mx-3">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                </pattern>
                                <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                </defs>
                                </svg>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex font-medium text-color moderat text-lg">Figma</div>
                            <div class=" flex moderat component-color text-sm">120 members</div>
                        </div>
                    </div>
                    <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                        JOIN
                    </a> 
                </div>
                </div>
              </div>
                </div> */}
                {/* <div class="flex flex-col">
                  <div class="flex">
                    <div class="flex flex-col">
                        <div class=" flex my-2 mx-4 text-gray-400 text-xl">
                        </div>
                        <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                          <div class="flex flex-row items-center">
                              <div class=" mx-3">
                                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                      <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                      <defs>
                                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                      <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                      </pattern>
                                      <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                      </defs>
                                      </svg>
                              </div>
                              <div class="flex flex-col">
                                  <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                  <div class=" flex moderat component-color text-sm">120 members</div>
                              </div>
                          </div>
                          <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                              JOIN
                          </a> 
                      </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                        <div class="flex flex-row items-center">
                            <div class=" mx-3">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                <div class=" flex moderat component-color text-sm">120 members</div>
                            </div>
                        </div>
                        <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                            JOIN
                        </a> 
                    </div>
                    <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                      <div class="flex flex-row items-center">
                          <div class=" mx-3">
                              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                  <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                  </pattern>
                                  <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                  </defs>
                                  </svg>
                          </div>
                          <div class="flex flex-col">
                              <div class="flex font-medium text-color moderat text-lg">Figma</div>
                              <div class=" flex moderat component-color text-sm">120 members</div>
                          </div>
                      </div>
                      <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                          JOIN
                      </a> 
                  </div>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex flex-col">
                      <div class=" flex my-2 mx-4 text-gray-400 text-xl">
                      </div>
                      <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                        <div class="flex flex-row items-center">
                            <div class=" mx-3">
                                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                    <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAHvklEQVR4nOydbWxbVxnH/8fXsZ0574mzhqQNy5qEZaQke2lYVFi1DTQ6GETswyS2Me0DSAzQNGkgIQ0J8YENRKfxgTGJl3wYY0KiSGwUlm0qdGv30g5tYy55W7MkbZo6bt7s1HZ87z3IL3lp4zrO8fV9TuvzUz7E0bn3OTm/6/ucc597bWc0GtU0DQoKDMNwaprmdDqpe1K8OKg7UOwoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcRI+mQAnw/qb/7TnBw254Msa0vPts5N9lVeiYZGdHShotLSPlqDdALMU6Ox5/frR/8BbmYf+jQ7ozk0YnA8h84bcGcf6rfl30kLYfF4XJInZHgkvNz/RPzVF6DrqT/kslXZzts3b8RYen8Ohlv24q574Pbk210r0HVdiqFPDE7sfOxXjyUOfOQ69FvZ+8oOTY4jhxAK4d6H4HZbHEUIWZJw9Mnv6EcP8sTQWz36F8PxwXH88dkCR8kVKQQY/reNd/+VPFXbA4f/fZwctilaVqQQED90gBf8wL8IjmNH7I2YGXoB5tRY6vC3m2E/ggGCuBcigYCP/8dnp+07/aRhmJ/D6XF7g2aAXgCfmUIBJj6bhk0Yn5+1OepGJBAQCScm6sxuAwnlsZjdQTdALwAuqjURR4mLKPQa9AIc9U3rVkr2UusjCbseCQRc28lqG2xOwYkkXFmNhia7w25AAgENzVrX52yfBXF8qhO+q+0NmgF6AQBKbr/H9mkQw0299kbMjBQCtOt7tN1fsDEPMFy3Cy1ttsXLghQCAHge2e9obrdFAUNDI+77lh2hckAWAcxbcdXPD7j2PcDZ+i5ZkhjY2i+aE7178b0fwVNqxZ4tQKKCTALTiL/+oj7wgnHibZhmarWUXUIOBZnkDhhLnHNuuRVdN4PJctjpui6ZgBX4XCD8yqtzbw2fHw9kF9D+1Qw1YYNjaIlPRRE14autbG35RM0NN6K8YnX3tk+6MiOlAI7xdzA0gMAQuLl58/ufv+DlYBjPTPCBABaN1Cgn0oqDoaeKfbMR++qZJsXIp5GoJJli4RSO/AbnTopsGzHx20n+5GhqMsVWjvGEA5OzN+dwdI53V7CnOnibVyIJspwNAZz5Lw7+WHD0ATzi50+Mrq4m+Lqf9EsGvLfI7z6Ow7M0Fz4yIouA4CgO7Yeeyy0mmfjFSf5STsUVHorjoffx7oJgIMuRQoARx+GnYYheG359Fk+P5diWgSFi8u/6eTSHBGMDUggYeQ3hc4LbRgw8Nsj5BSecLKTbTETw3GkpTkT0AuIRTLwDJnotaCDIJyMC2/G/B7BkiMW0EnoBwREEhsUXvQemxeqZ7PgCjs2LxbQSegGLZ3Oa718Kf4iL/Rcmx5jIW8di6AXEwnltHlhmwpeyF+J5hbYEegEp8kiIYnczppZr9HmYXoDbi3wue9a51q97t0aVBNcB6AWUXw3mED8SP12WGvot78HB+DWl9Nck6AX42uFrFR+IPtHnLXZXsRurhMNaBr2AEg929Ihv/kUf27H14goH+5KPlUnw3Tn0AgC03YayesFtvRr/5XWpJ2ByyQTpNk0e3N8oGNFapBCgubDnYTjdgkuq3mp8/5ocT2IcHKUae7aTuaX41+UQkMgErdj7KEpEs+IPWtjdud3j43Xi97vQXSEWx3pkEQCgoRN3/gS1LYKbP9XBfngt01jqvmesK8isveyqYC/dzD5fQz/5WUW6kiQ3MXEMQ6/wwCATKEl+GEL/Kf5iAGF9tfbLHYz1VOHBJuzzwcFsfBRqM6SsCScJ6Et/nhx866OZieBS9paH7/36xj8aHB+dx3iEx0zUudjOq1LrNemQToAJ/pe5E7879583wuNrxcWsiXmp+3F7+lYI5CrKh8zlx6de6w++F+dG8szBk/UrZvvze7Yii4BFI3bHSL8/OpN+VGClln5lj75Es6AHP/6rPxpA6uaFYkKKd8Ab4YmXQyPJY73Yxl+Od8Cf5j64wk80l4ZewGhsdmBxtNgO/FXoBXwYOTsVD1H3ggx6AWPLEtybQAe9gIgZF64ppj+J6XKGXkCZ5tp0uZuBpLJqTYoPvsoHegGNJclLwyI3KLB2T10BemQr9AK6SxsSDrY6/sn2e7zNhemUfdALaHFX31YuUgRwAN+o3VWAHtkKvQAA99V8ZsvplKGvqqPNXVOoPtmFFAL2lO24q6ItmVdZDtciEu2qtdKfNd4hT2lFGCkEAPjDJ7/WV9mRTMabjSnDNlfZy60PpLP3ZY4sArwO1zPNX/l23U0aY+uquSy9Qlj9Hejw1P96+5ev94jexyIZclXEAAzHgj898++/zQ/pMNNznZWneis1z8O+3Y/W95Y6Sqi7aQ3SlSRXmY6HDy4On4jOTMfDpcy53VX5We/2W8ub3Uy6ruaDvAKKBF3XZckBRYsSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIzTMCT4Ho9ixTCM/wcAAP//Ta5J/5/bQSMAAAAASUVORK5CYII="/>
                                    </defs>
                                    </svg>
                            </div>
                            <div class="flex flex-col">
                                <div class="flex font-medium text-color moderat text-lg">Figma</div>
                                <div class=" flex moderat component-color text-sm">120 members</div>
                            </div>
                        </div>
                        <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                            JOIN
                        </a> 
                    </div>
                    <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                      <div class="flex flex-row items-center">
                          <div class=" mx-3">
                              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                  <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                  </pattern>
                                  <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                  </defs>
                                  </svg>
                          </div>
                          <div class="flex flex-col">
                              <div class="flex font-medium text-color moderat text-lg">Figma</div>
                              <div class=" flex moderat component-color text-sm">120 members</div>
                          </div>
                      </div>
                      <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                          JOIN
                      </a> 
                  </div>
                  <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                    <div class="flex flex-row items-center">
                        <div class=" mx-3">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3"/>
                                <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0" transform="scale(0.0078125)"/>
                                </pattern>
                                <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
                                </defs>
                                </svg>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex font-medium text-color moderat text-lg">Figma</div>
                            <div class=" flex moderat component-color text-sm">120 members</div>
                        </div>
                    </div>
                    <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                        JOIN
                    </a> 
                </div>
                </div>
              </div>
                </div>   */}
            </div>
           
        </div>
        </>
     );
}
 
export default Explore;