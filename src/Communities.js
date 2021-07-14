import {BrowserRouter as Router, Route,  useHistory, Link} from 'react-router-dom'; 
import {useEffect,useState} from 'react';
import Grid from "@material-ui/core/Grid";
import CommunityDetail from './CommunityDetail'

const Communities = () => {

    const [communitynames, setCommunitynames] = useState(null);

    const apiURL = "http://127.0.0.1:8000/communities/communitiesApi";

    

    useEffect(() => {
      fetch(apiURL)
      .then(res=>{
        return res.json();
      })
      .then(data=>{
        setCommunitynames(data)
      })
    }, []);
    

    return (
      <div className="communities">
        <h1>Join Community</h1>

        <div className="community">
          <Grid container spacing={24} style={{ width: "120%" ,position:"absolute", paddingLeft : "300px"}}>
            {communitynames &&
              communitynames.map((community, index) => {
                console.log(community.toString());
                const url = "/communities/" + community.id
                return (
                  <Link to= {url}>{community.community_name}</Link>
                );
              })}
      <div>
        <Router>
     
        <Route path="/communities/:id" component = {CommunityDetail} >
        </Route>
        
      
    </Router>
    </div>
          </Grid>
        </div>
      </div>
    );
}
 
export default Communities;