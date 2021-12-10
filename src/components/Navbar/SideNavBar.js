import { useState, useEffect } from 'react';
import { get } from '../Utility Functions/util';
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

const SideNavBar = () => {
  const history = useHistory();
  const [timelines, setTimelines] = useState(null);
  const [communities, setCommunities] = useState(null);

  const timelineApiURL = "http://127.0.0.1:8000/timelines/timelines/";
  const communityApiURL = "http://127.0.0.1:8000/communities/communitiesApi/";
 
  useEffect(() => {
    get(timelineApiURL).then(res => {
      setTimelines(res);
    });
  }, []);

  useEffect(() => {
    get(communityApiURL).then(res => {
      setCommunities(res);
    });
  }, []);

  return (
    <>
      <nav class="h-12 p-2 shadow-md sm:hidden">
        <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-left">
          <path
            d="M31.2389 26.1187L18.2389 33.6304C17.6967 33.9478 16.9561 34.0933 16.189 34.0668C15.3559 34.0404 14.4963 33.8288 13.8086 33.4453L1.44333 26.3038C1.09948 26.1055 0.834982 25.8807 0.663059 25.6558C0.47791 25.4178 0.385336 25.1797 0.358887 24.9417C0.358887 24.8888 0.358887 24.8491 0.358887 24.7962V17.6548C0.385336 18.1309 0.755633 18.6334 1.44333 19.0302L13.8086 26.1716C15.1178 26.9254 17.1016 27.0048 18.2389 26.3567L31.2389 18.845C31.7283 18.5673 31.9795 18.1838 32.006 17.787V24.9417C32.0324 25.3781 31.7812 25.8145 31.2389 26.1187Z"
            fill="#243447" />
          <path
            d="M31.0723 18.8085L31.0723 18.8084L31.0668 18.8116L18.064 26.3249L18.0633 26.3254C17.5661 26.6144 16.8543 26.752 16.0926 26.719C15.3343 26.6862 14.5645 26.4856 13.9633 26.1395C13.9633 26.1395 13.9633 26.1395 13.9632 26.1395L1.59576 18.9968L1.59562 18.9967C0.967955 18.6346 0.709106 18.2183 0.676394 17.8924V9.33593C0.676394 9.31955 0.683305 9.30396 0.693626 9.29364C0.698374 9.28889 0.702985 9.28613 0.706868 9.2846C0.710332 9.28324 0.715283 9.28199 0.723114 9.28245L0.730552 9.28289L0.738003 9.28299L14.2567 9.46818L18.1191 9.52109L18.1192 9.52109L31.6688 9.70261V18.0336C31.6586 18.2818 31.5009 18.5717 31.0723 18.8085ZM31.9421 9.70629C31.9418 9.70628 31.9413 9.70627 31.9409 9.70626L31.9421 9.70627V9.70629ZM31.9463 9.70631C31.9458 9.70631 31.9447 9.70633 31.9429 9.7063H31.9466L31.9463 9.70631Z"
            fill="#EEF2F5" stroke="#243447" stroke-width="0.661382" />
          <path
            d="M31.0482 10.209L31.0481 10.2091L18.0453 17.7092L18.0441 17.7099C17.5612 17.9906 16.8632 18.1273 16.1096 18.0946C15.36 18.0622 14.601 17.8639 14.0105 17.5239C14.0104 17.5239 14.0104 17.5239 14.0103 17.5238L1.64293 10.3812L1.64247 10.3809C1.04504 10.0369 0.798239 9.65072 0.761827 9.35942C0.729358 9.09967 0.85089 8.7859 1.32345 8.51665L1.32527 8.5156L14.3281 1.01553L14.3292 1.01484C14.8121 0.734097 15.5102 0.597445 16.2638 0.630074C17.0133 0.662529 17.7724 0.860837 18.3629 1.20078C18.3629 1.20081 18.363 1.20084 18.363 1.20087L30.7304 8.34354L30.7309 8.3438C31.3273 8.68718 31.571 9.07272 31.6064 9.36389C31.6382 9.62571 31.5145 9.94021 31.0482 10.209Z"
            fill="#EEF2F5" stroke="#243447" stroke-width="0.793659" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10.8354 4.81206L13.891 3.03955L22.4493 7.98669C25.1478 9.54756 24.9361 11.3201 22.4493 12.7619C19.8699 14.2566 16.563 14.4286 13.7323 12.7883L16.7747 11.0291C17.8461 11.6508 18.8382 11.6772 19.6186 11.2275C20.3594 10.8042 20.3197 10.2883 19.3805 9.74597L10.8354 4.81206Z"
            fill="#243447" />
        </svg>
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-right">
          <path
            d="M16.9297 28.2347C23.5571 28.2347 28.9297 22.8622 28.9297 16.2347C28.9297 9.60732 23.5571 4.23474 16.9297 4.23474C10.3023 4.23474 4.92969 9.60732 4.92969 16.2347C4.92969 22.8622 10.3023 28.2347 16.9297 28.2347Z"
            stroke="#3A4859" stroke-width="1.618" stroke-miterlimit="10" />
          <path
            d="M16.9297 20.2347C19.6911 20.2347 21.9297 17.9962 21.9297 15.2347C21.9297 12.4733 19.6911 10.2347 16.9297 10.2347C14.1683 10.2347 11.9297 12.4733 11.9297 15.2347C11.9297 17.9962 14.1683 20.2347 16.9297 20.2347Z"
            stroke="#3A4859" stroke-width="1.618" stroke-miterlimit="10" />
          <path
            d="M8.90479 25.1565C9.65805 23.6755 10.8064 22.4319 12.2228 21.5632C13.6392 20.6945 15.2683 20.2347 16.9299 20.2347C18.5914 20.2347 20.2206 20.6945 21.637 21.5632C23.0533 22.4318 24.2017 23.6755 24.955 25.1565"
            stroke="#3A4859" stroke-width="1.618" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </nav>
      <div class="flex w-72 shadow-lg h-screen hidden sm:block">
        <div class="flex justify-center pt-14 w-72 flex-row">
          <ul>
            <li class="my-2 w-36 h-11 rounded-lg hover:bg-gray-200 flex">
              <a class="m-2 flex" href="">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M20.2983 11.682V20.6001L15.2978 20.5995V15.0994V14.5994H14.7978H10.2978H9.79779V15.0994V20.5995L4.79834 20.6001V11.6819C4.79834 11.6471 4.80562 11.6126 4.81971 11.5808C4.8338 11.5489 4.85439 11.5204 4.88016 11.497L4.54549 11.1289L4.88016 11.497L12.3796 4.67807L12.0433 4.30813L12.3796 4.67807C12.4257 4.63623 12.4856 4.61304 12.5478 4.61304C12.61 4.61304 12.67 4.63622 12.716 4.67806L20.2165 11.497C20.2423 11.5204 20.2629 11.549 20.277 11.5808C20.2911 11.6127 20.2983 11.6471 20.2983 11.682Z"
                    fill="#3A4859" stroke="#243447" />
                  <path
                    d="M20.7983 21.1002V11.682C20.7983 11.5775 20.7765 11.4741 20.7342 11.3785C20.692 11.283 20.6302 11.1973 20.5529 11.127L13.0523 4.30809C12.9143 4.18258 12.7344 4.11303 12.5478 4.11304C12.3612 4.11304 12.1813 4.1826 12.0433 4.30813L4.54379 11.127C4.46648 11.1973 4.40471 11.283 4.36244 11.3785C4.32017 11.4741 4.29834 11.5774 4.29834 11.6819V21.1002"
                    stroke="#3A4859" stroke-width="1.63" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.04834 21.1001H23.0483" stroke="#3A4859" stroke-width="1.63" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M14.7979 21.0994V15.0994H10.2979V21.0994" stroke="#3A4859" stroke-width="1.63"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="font-medium ml-2" onClick={() => { history.push("/bookmarks") }}>Home</div>
              </a>
            </li>
            <li class="my-2 w-36 h-11 rounded-lg hover:bg-gray-200 flex">
              <a class="m-2 flex" href="">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M12.5513 3.8501C10.7712 3.8501 9.03118 4.37794 7.55114 5.36687C6.0711 6.3558 4.91755 7.76141 4.23636 9.40595C3.55517 11.0505 3.37694 12.8601 3.72421 14.6059C4.07147 16.3517 4.92864 17.9554 6.18731 19.2141C7.44599 20.4727 9.04963 21.3299 10.7955 21.6772C12.5413 22.0244 14.3509 21.8462 15.9954 21.165C17.64 20.4838 19.0456 19.3303 20.0345 17.8502C21.0234 16.3702 21.5513 14.6301 21.5513 12.8501C21.5513 11.6682 21.3185 10.4979 20.8662 9.40595C20.4139 8.31401 19.751 7.32186 18.9152 6.48613C18.0795 5.65041 17.0874 4.98747 15.9954 4.53518C14.9035 4.08289 13.7332 3.8501 12.5513 3.8501ZM14.1417 14.4411L8.57324 16.8276L10.9597 11.2591L16.7756 8.61528L14.1417 14.4411Z"
                    fill="#3A4859" />
                  <path
                    d="M12.5513 21.8501C17.5218 21.8501 21.5513 17.8207 21.5513 12.8501C21.5513 7.87953 17.5218 3.8501 12.5513 3.8501C7.58071 3.8501 3.55127 7.87953 3.55127 12.8501C3.55127 17.8207 7.58071 21.8501 12.5513 21.8501Z"
                    stroke="#3A4859" stroke-width="1.62" stroke-miterlimit="10" />
                  <path d="M14.1417 14.4411L16.7755 8.61523L10.9597 11.2591L8.57324 16.8275L14.1417 14.4411Z"
                    stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div class="font-medium ml-2" onClick={() => { history.push("/explore") }}>Explore</div>
              </a>
            </li>
            <li class="my-2 w-36 h-11 rounded-lg hover:bg-gray-200 flex">
              <a class="m-2 flex" href="">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M6.92529 9.8501C8.37504 9.8501 9.55029 8.67485 9.55029 7.2251C9.55029 5.77535 8.37504 4.6001 6.92529 4.6001C5.47555 4.6001 4.30029 5.77535 4.30029 7.2251C4.30029 8.67485 5.47555 9.8501 6.92529 9.8501Z"
                    fill="#3A4859" />
                  <path
                    d="M6.92529 21.1001C8.37504 21.1001 9.55029 19.9248 9.55029 18.4751C9.55029 17.0254 8.37504 15.8501 6.92529 15.8501C5.47555 15.8501 4.30029 17.0254 4.30029 18.4751C4.30029 19.9248 5.47555 21.1001 6.92529 21.1001Z"
                    stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6.92529 9.8501C8.37504 9.8501 9.55029 8.67485 9.55029 7.2251C9.55029 5.77535 8.37504 4.6001 6.92529 4.6001C5.47555 4.6001 4.30029 5.77535 4.30029 7.2251C4.30029 8.67485 5.47555 9.8501 6.92529 9.8501Z"
                    stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M18.1758 16.6001C19.6255 16.6001 20.8008 15.4248 20.8008 13.9751C20.8008 12.5254 19.6255 11.3501 18.1758 11.3501C16.726 11.3501 15.5508 12.5254 15.5508 13.9751C15.5508 15.4248 16.726 16.6001 18.1758 16.6001Z"
                    stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15.5505 14.3501H12.783C12.1233 14.3501 11.4717 14.2051 10.8743 13.9253C10.2769 13.6454 9.7483 13.2377 9.32599 12.7309L6.92529 9.8501V15.8501"
                    stroke="#3A4859" stroke-width="1.62" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div class="font-medium ml-2" onClick={() => { history.push("/timelines") }}>Timelines</div>
              </a>
            </li>
            
            
          </ul>
        </div>
        {/* <div class="w-72 grid justify-center text-gray-500 font-semibold">
          <div class="flex mb-2 mt-5">
            COMMUNITIES
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="float-right absolute ml-36 mt-1">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="#9797AA" stroke-width="0.81" stroke-miterlimit="10" />
              <path d="M5.5 8H10.5" stroke="#9797AA" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 5.5V10.5" stroke="#9797AA" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <ul>
            {communities && communities.map((community, index) => (
              <li class="my-1" style={{ 'textAlign': 'left' }}># {community.community_name}</li>
            ))}
          </ul>
        </div> */}
        {/* <div class="w-72 grid justify-center text-gray-500 font-semibold">
          <div class="flex mb-2 mt-5">
            TIMELINES
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="float-right absolute ml-36 mt-1">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="#9797AA" stroke-width="0.81" stroke-miterlimit="10" />
              <path d="M5.5 8H10.5" stroke="#9797AA" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 5.5V10.5" stroke="#9797AA" stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <ul>
            {timelines && timelines.map((time, index) => (
              <li class="my-1" style={{ 'textAlign': 'left' }}># {time.name}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default SideNavBar;