
import { useEffect, useState } from "react";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
const CommunityDetail = ({communityid}) => {
  const [communitydetail, setCommunitydetail] = useState(null);
  const id = communityid;
  const apiURL = "http://127.0.0.1:8000/communities/communitiesApi/"+id;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCommunitydetail(data);
        console.log(communitydetail);
      });
  }, []);

  return (
      <div>
         <h1>hello</h1>
      </div>
          

      
    // <div className="communitiesdetail">
    //   <h1>{communitydetail[0].community_name}</h1>
    // <p>{communitydetail[0].description}</p>
    //   <div className="communitydetail">
    //     <Grid
    //       container
    //       spacing={24}
    //       style={{ width: "120%", position: "absolute", paddingLeft: "300px" }}
    //     >
    //       {communitydetail[0].posts &&
    //         communitydetail[0].posts.map((post, index) => {
    //           console.log(post.toString());

    //           return (
    //             <div style={{ paddingBottom: "10px" }}>
    //               {post.id}
    //             </div>
    //           );
    //         })}
    //     </Grid>
    //   </div>
    // </div>
   );
};

export default CommunityDetail;
