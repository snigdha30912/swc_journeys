import MenuListComposition from "./dropdown";
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { get } from '../Utility Functions/util';
const TopNavBar = () => {
 const [keyword, setKeyword] = useState("")
 const history = useHistory();
 const handleSearch=(e)=>{

  history.push({
    pathname:'/search/',
    search:'?search='+keyword,
  });
  window.location.reload();
  
 }
  return (
    <>
      <nav class="flex w-full sm:flex border-solid border-2 back h-20 sticky items-center hidden" >
        <div class="flex w-12 h-12 relative left-6 mt-4 md:left-12 lg:left-24 xl:left-32 ">
          <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M31.1891 26.2032L18.1891 33.7149C17.6469 34.0323 16.9063 34.1778 16.1392 34.1513C15.3061 34.1249 14.4465 33.9133 13.7588 33.5297L1.39352 26.3883C1.04967 26.1899 0.785177 25.9651 0.613254 25.7403C0.428106 25.5023 0.335532 25.2642 0.309082 25.0262C0.309082 24.9733 0.309082 24.9336 0.309082 24.8807V17.7393C0.335532 18.2154 0.705828 18.7179 1.39352 19.1146L13.7588 26.2561C15.068 27.0099 17.0518 27.0892 18.1891 26.4412L31.1891 18.9295C31.6785 18.6518 31.9297 18.2683 31.9562 17.8715V25.0262C31.9826 25.4626 31.7314 25.899 31.1891 26.2032Z"
              fill="#243447" />
            <path
              d="M31.0225 18.8929L31.0225 18.8929L31.017 18.8961L18.0142 26.4094L18.0135 26.4098C17.5163 26.6989 16.8045 26.8364 16.0428 26.8035C15.2845 26.7706 14.5147 26.5701 13.9135 26.224C13.9135 26.2239 13.9135 26.2239 13.9134 26.2239L1.54595 19.0812L1.54582 19.0811C0.91815 18.719 0.659302 18.3027 0.62659 17.9769V9.42037C0.62659 9.40399 0.6335 9.3884 0.643821 9.37808C0.64857 9.37333 0.653181 9.37057 0.657063 9.36904C0.660527 9.36768 0.665478 9.36643 0.673309 9.36689L0.680748 9.36733L0.688198 9.36743L14.2069 9.55262L18.0693 9.60553L18.0694 9.60553L31.619 9.78705V18.1181C31.6088 18.3663 31.4511 18.6561 31.0225 18.8929ZM31.8923 9.79073C31.8919 9.79072 31.8915 9.79071 31.8911 9.7907L31.8923 9.79072V9.79073ZM31.8965 9.79075C31.896 9.79076 31.8949 9.79077 31.8931 9.79075H31.8968L31.8965 9.79075Z"
              fill="#EEF2F5" stroke="#243447" stroke-width="0.661382" />
            <path
              d="M30.9981 10.2935L30.998 10.2936L17.9953 17.7936L17.9941 17.7943C17.5112 18.0751 16.8131 18.2117 16.0595 18.1791C15.31 18.1466 14.551 17.9483 13.9605 17.6084C13.9604 17.6084 13.9603 17.6083 13.9603 17.6083L1.59288 10.4656L1.59242 10.4654C0.994995 10.1214 0.74819 9.73519 0.711778 9.4439C0.679309 9.18414 0.800841 8.87037 1.2734 8.60113L1.27522 8.60008L14.278 1.1L14.2792 1.09932C14.7621 0.81857 15.4601 0.681918 16.2137 0.714547C16.9633 0.747002 17.7223 0.94531 18.3128 1.28525C18.3129 1.28528 18.3129 1.28531 18.313 1.28534L30.6804 8.42801L30.6808 8.42827C31.2772 8.77165 31.521 9.15719 31.5564 9.44836C31.5881 9.71019 31.4645 10.0247 30.9981 10.2935Z"
              fill="#EEF2F5" stroke="#243447" stroke-width="0.793659" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M10.7855 4.8965L13.8411 3.12399L22.3994 8.07113C25.0978 9.632 24.8862 11.4045 22.3994 12.8463C19.82 14.341 16.5131 14.513 13.6824 12.8728L16.7247 11.1135C17.7962 11.7352 18.7883 11.7616 19.5687 11.3119C20.3094 10.8886 20.2697 10.3727 19.3306 9.83041L10.7855 4.8965Z"
              fill="#243447" />
          </svg>
        </div>
        <div class="container flex-col moderat relative hidden md:left-16 lg:left-20 xl:left-36 md:inline-flex">
          <div class=" text-color text-xl inline-flex">
            <p class="inline-flex font-semibold leading-7">
              Journeys
            </p>
          </div>
          <div class=" inline-flex">
            <p class="flex leading-3 font-normal text-color text-l ">
              by SWC
            </p>
          </div>
        </div>
        <div class="hidden 2xl:flex flex-row mt-4 float-left relative right-80">
          <a class="flex px-3 justify-around items-center text-opacity-75 h-12 w-24 nav-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" href="#">Discover</a>
          <a class="flex px-3 justify-around items-center text-opacity-75 h-12 w-24 nav-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" href="#">Courses</a>
          <a class="flex px-3 justify-around items-center text-opacity-75 h-12 w-28 nav-moderat group border-solid border-transparent border-b-2 hover:border-gray-600 hover:text-opacity-100" href="#">My Journey</a>
        </div>
        <div class="relative right-6 inline-flex flex-row float-left">
          <div class="hidden mt-4 md:flex justify-around ">
            <i class="fas fa-search relative left-12 top-4"></i>
            <input type="text" class="w-72 h-12 border-2 mx-4 px-10 rounded-md "
            value={keyword} 
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search" >

            </input>
          </div>
          <div class="w-16 h-16 mt-6 hidden lg:flex">

          </div>
          <div class="w-16 h-16 mt-6 hidden lg:flex">
          </div>

          <div class="w-16 h-16 mt-6 flex" style={{"marginRight":"70px"}} >
            <div className = "dropdown">
            <button>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path
                    d="M16.9299 28.2349C23.5573 28.2349 28.9299 22.8623 28.9299 16.2349C28.9299 9.60745 23.5573 4.23486 16.9299 4.23486C10.3025 4.23486 4.92993 9.60745 4.92993 16.2349C4.92993 22.8623 10.3025 28.2349 16.9299 28.2349Z"
                    stroke="#3A4859" stroke-width="1.618" stroke-miterlimit="10" />
                  <path
                    d="M16.9299 20.2349C19.6914 20.2349 21.9299 17.9963 21.9299 15.2349C21.9299 12.4734 19.6914 10.2349 16.9299 10.2349C14.1685 10.2349 11.9299 12.4734 11.9299 15.2349C11.9299 17.9963 14.1685 20.2349 16.9299 20.2349Z"
                    stroke="#3A4859" stroke-width="1.618" stroke-miterlimit="10" />
                  <path
                    d="M8.90479 25.1566C9.65805 23.6756 10.8064 22.432 12.2228 21.5633C13.6392 20.6946 15.2683 20.2349 16.9299 20.2349C18.5914 20.2349 20.2206 20.6946 21.637 21.5633C23.0533 22.4319 24.2017 23.6756 24.955 25.1566"
                    stroke="#3A4859" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M25.9998 29.6566C28.485 29.6566 30.4998 27.6419 30.4998 25.1566C30.4998 22.6713 28.485 20.6566 25.9998 20.6566C23.5145 20.6566 21.4998 22.6713 21.4998 25.1566C21.4998 27.6419 23.5145 29.6566 25.9998 29.6566Z"
                    fill="#AEEFDC" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" transform="translate(0.929932 0.234863)" />
                  </clipPath>
                </defs>

              </svg>
            </button>
            <div class="dropdown-content" style={{"zIndex":"100"}}>
              <a href="#">Profile</a>
              <a href="/logout">Logout</a>
            </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

export default TopNavBar;