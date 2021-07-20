import {BrowserRouter as Router, Route,  useHistory, Link} from 'react-router-dom'; 
import {useEffect,useState} from 'react';
import Grid from "@material-ui/core/Grid";
import CommunityDetail from './CommunityDetail'
import background from "./background.svg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 15,
  },
});

const Communities = () => {
    const classes = useStyles();
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
     
        <div class="container inline-flex flex-col w-2/3 h-80 items-center" style={{backgroundImage: `url(${background})`,marginLeft:"230px"}}>
           <div class="relative text-white font-moderat font-black top-36 justify-around flex-shrink text-lg sm:xl md:text-2xl lg:text-4xl">
               <p>Find Communities Where you belong</p> 
           </div>
           <div class="relative top-44 ">
               <i class="fas fa-search relative left-8"></i>
               <input type="text" class="rounded-md md:w-48 lg:w-72 md:h-8 lg:h-10 px-10" placeholder="Search "/>
           </div>
        </div>

   

        <div className="community">
          <Grid container spacing={24} style={{ width: "120%" ,position:"absolute", paddingLeft : "300px"}}>

             
            {communitynames &&
              communitynames.map((community, index) => {
                console.log(community.toString());
                
                return (
               <Card
        className={classes.root}
        style={{ width: "400px", height: "100px", paddingBottom: "20px",marginTop:"20px", marginRight:"20px" }}
      >

        <CardMedia
            className={classes.media}  
          />     
          
          <div>
            <h1 className="community-name">{community.community_name}</h1>
            {!!community.members ==1  ?(
            <h5 className="commuinty-members">{community.members+' '}Member</h5>
            ):(
              <h5 className="commuinty-members">{community.members+' '}Members</h5>
            )}
            
           
          </div>
          <div>
             <Button className="community-btn" style={{backgroundColor:"#E2E5DE",color:"black",padding:"12px",marginLeft:"180px", fontSize:"10px",height:"20px",fontWeight:"bold"}}>Join</Button>
          </div>
          </Card>
                );
              })}
      <div>
        
    </div>
  
          </Grid>

            
        </div>
      </div>
    );
}
 
export default Communities;