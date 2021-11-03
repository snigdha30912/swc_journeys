import {useState,useEffect} from 'react';
import { get } from '../Utility Functions/util';
const ExploreCommunites = () => {
    const [exploreCommunities,setExploreCommunities] = useState(null);
    const apiURL = "http://127.0.0.1:8000/communities/communitiesApi/exploreCommunities/";
    useEffect(() => {
      
        get(apiURL).then(res=>{
          setExploreCommunities(res);
          console.log(res);
        });
       
    }, []);
    return (
        <>
        {exploreCommunities && exploreCommunities.map((community, index) => ( 
        <div class="flex">
            <div class="flex flex-col" >
                <div class=" flex my-2 mx-4 text-gray-400 text-xl">

                </div>

                <div class="w-96 mx-3 flex flex-row justify-evenly shadow-md tems-center rounded-lg py-6 h-24 my-3">
                    <div class="flex flex-row items-center">
                        <div class="mx-3">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="2.20703" y="2.19092" width="49.52" height="49.52" rx="24.76" fill="url(#pattern0)" stroke="#EEF2F5" stroke-width="3" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0" transform="scale(0.0078125)" />
                                    </pattern>
                                    <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAHvklEQVR4nOydbWxbVxnH/8fXsZ0574mzhqQNy5qEZaQke2lYVFi1DTQ6GETswyS2Me0DSAzQNGkgIQ0J8YENRKfxgTGJl3wYY0KiSGwUlm0qdGv30g5tYy55W7MkbZo6bt7s1HZ87z3IL3lp4zrO8fV9TuvzUz7E0bn3OTm/6/ucc597bWc0GtU0DQoKDMNwaprmdDqpe1K8OKg7UOwoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcQoAcRI+mQAnw/qb/7TnBw254Msa0vPts5N9lVeiYZGdHShotLSPlqDdALMU6Ox5/frR/8BbmYf+jQ7ozk0YnA8h84bcGcf6rfl30kLYfF4XJInZHgkvNz/RPzVF6DrqT/kslXZzts3b8RYen8Ohlv24q574Pbk210r0HVdiqFPDE7sfOxXjyUOfOQ69FvZ+8oOTY4jhxAK4d6H4HZbHEUIWZJw9Mnv6EcP8sTQWz36F8PxwXH88dkCR8kVKQQY/reNd/+VPFXbA4f/fZwctilaVqQQED90gBf8wL8IjmNH7I2YGXoB5tRY6vC3m2E/ggGCuBcigYCP/8dnp+07/aRhmJ/D6XF7g2aAXgCfmUIBJj6bhk0Yn5+1OepGJBAQCScm6sxuAwnlsZjdQTdALwAuqjURR4mLKPQa9AIc9U3rVkr2UusjCbseCQRc28lqG2xOwYkkXFmNhia7w25AAgENzVrX52yfBXF8qhO+q+0NmgF6AQBKbr/H9mkQw0299kbMjBQCtOt7tN1fsDEPMFy3Cy1ttsXLghQCAHge2e9obrdFAUNDI+77lh2hckAWAcxbcdXPD7j2PcDZ+i5ZkhjY2i+aE7178b0fwVNqxZ4tQKKCTALTiL/+oj7wgnHibZhmarWUXUIOBZnkDhhLnHNuuRVdN4PJctjpui6ZgBX4XCD8yqtzbw2fHw9kF9D+1Qw1YYNjaIlPRRE14autbG35RM0NN6K8YnX3tk+6MiOlAI7xdzA0gMAQuLl58/ufv+DlYBjPTPCBABaN1Cgn0oqDoaeKfbMR++qZJsXIp5GoJJli4RSO/AbnTopsGzHx20n+5GhqMsVWjvGEA5OzN+dwdI53V7CnOnibVyIJspwNAZz5Lw7+WHD0ATzi50+Mrq4m+Lqf9EsGvLfI7z6Ow7M0Fz4yIouA4CgO7Yeeyy0mmfjFSf5STsUVHorjoffx7oJgIMuRQoARx+GnYYheG359Fk+P5diWgSFi8u/6eTSHBGMDUggYeQ3hc4LbRgw8Nsj5BSecLKTbTETw3GkpTkT0AuIRTLwDJnotaCDIJyMC2/G/B7BkiMW0EnoBwREEhsUXvQemxeqZ7PgCjs2LxbQSegGLZ3Oa718Kf4iL/Rcmx5jIW8di6AXEwnltHlhmwpeyF+J5hbYEegEp8kiIYnczppZr9HmYXoDbi3wue9a51q97t0aVBNcB6AWUXw3mED8SP12WGvot78HB+DWl9Nck6AX42uFrFR+IPtHnLXZXsRurhMNaBr2AEg929Ihv/kUf27H14goH+5KPlUnw3Tn0AgC03YayesFtvRr/5XWpJ2ByyQTpNk0e3N8oGNFapBCgubDnYTjdgkuq3mp8/5ocT2IcHKUae7aTuaX41+UQkMgErdj7KEpEs+IPWtjdud3j43Xi97vQXSEWx3pkEQCgoRN3/gS1LYKbP9XBfngt01jqvmesK8isveyqYC/dzD5fQz/5WUW6kiQ3MXEMQ6/wwCATKEl+GEL/Kf5iAGF9tfbLHYz1VOHBJuzzwcFsfBRqM6SsCScJ6Et/nhx866OZieBS9paH7/36xj8aHB+dx3iEx0zUudjOq1LrNemQToAJ/pe5E7879583wuNrxcWsiXmp+3F7+lYI5CrKh8zlx6de6w++F+dG8szBk/UrZvvze7Yii4BFI3bHSL8/OpN+VGClln5lj75Es6AHP/6rPxpA6uaFYkKKd8Ab4YmXQyPJY73Yxl+Od8Cf5j64wk80l4ZewGhsdmBxtNgO/FXoBXwYOTsVD1H3ggx6AWPLEtybQAe9gIgZF64ppj+J6XKGXkCZ5tp0uZuBpLJqTYoPvsoHegGNJclLwyI3KLB2T10BemQr9AK6SxsSDrY6/sn2e7zNhemUfdALaHFX31YuUgRwAN+o3VWAHtkKvQAA99V8ZsvplKGvqqPNXVOoPtmFFAL2lO24q6ItmVdZDtciEu2qtdKfNd4hT2lFGCkEAPjDJ7/WV9mRTMabjSnDNlfZy60PpLP3ZY4sArwO1zPNX/l23U0aY+uquSy9Qlj9Hejw1P96+5ev94jexyIZclXEAAzHgj898++/zQ/pMNNznZWneis1z8O+3Y/W95Y6Sqi7aQ3SlSRXmY6HDy4On4jOTMfDpcy53VX5We/2W8ub3Uy6ruaDvAKKBF3XZckBRYsSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIwSQIzTMCT4Ho9ixTCM/wcAAP//Ta5J/5/bQSMAAAAASUVORK5CYII=" />
                                </defs>
                            </svg>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex font-medium text-color moderat text-lg">{community.community_name}</div>
                            <div class=" flex moderat component-color text-sm">{community.members.length} {community.members.length==1? "Member":"Members"}</div>
                        </div>
                    </div>
                    <a class="flex w-24 h-8 bg-gray-200 font-normal moderat text-sm items-center px-8 rounded-lg " href="#">
                        JOIN
                    </a>
                </div>

            </div>
        </div>
        ))}
        </>
    );
}

export default ExploreCommunites;