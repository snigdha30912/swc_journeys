import "./App.css";
import Home from "./Home";
import NavigationBar from "./Navbar";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Communities from "./Communities";
import Timelines from "./Timelines";
import Explore from "./Explore";
import Channels from "./Channels";
import Bookmarks from "./Bookmarks";
import TimelineSpecific from "./TimelineSpecific";
import CommunityDetail from "./CommunityDetail";
import { Container } from "@material-ui/core";




function App() {
  return (
    <Router> 
    <div className="App">
      
     <header>
      <nav class="container mx-auto flex border-solid border-2 back h-20 sticky" >
        <div class="flex w-12 h-12 relative left-32 mt-4">
          <img src="images/Group.svg" alt="" class=""/>
       </div>
        <div class="container inline-flex flex-col font-moderat relative left-36 mt-4">
                <div class=" text-color text-xl inline-flex">
                    <p class="inline-flex font-semibold leading-7">
                        Journeys
                    </p>
                </div>
                <div class=" inline-flex">
                    <p  class="flex leading-3 font-normal text-color text-l ">
                        by SWC
                    </p>
                </div>
            </div>
            <div class="relative right-6 inline-flex flex-row ">
                <div class="hidden mt-4 md:flex justify-around ">
                    <i class="fas fa-search relative left-12 top-4"></i>
                    <input type="text" class="w-72 h-12 border-2 mx-4 px-10 rounded-md " placeholder="Search"/>
                </div>
                <div class="w-16 h-16 mt-6 hidden lg:flex">
                    <a href=""><img src="/images/Gift.png" alt="Gift"/></a>
                </div>
                <div class="w-16 h-16 mt-6 hidden lg:flex">
                    <a href=""><img src="/images/Bell.png" alt=""/></a>
                </div>
                <div class="w-16 h-16 mt-6 flex ">
                    <a href=""><img src="/images/Profile.png" alt=""/></a>
                </div>
            </div>
      </nav>

     </header>
     
     
      <div style={{width:"300px", height:"700px", position:"absolute", top:"100", left:"0",marginTop:"30px"}}>
      
      <NavigationBar />
      
      

      </div>
      
      <div className="content">
        <Switch>
          <Route path="/communities">
            <Communities />
          </Route>
          <Route path="/explore"> 
            <Explore />
          </Route>
          <Route path="/channels">
            <Channels />
          </Route>
          <Route path="/timelines">
            <Timelines />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
           <Route path="/timeline/:id">
            <TimelineSpecific/>
          </Route>
          <Route path="/communities/:id">
            <CommunityDetail/>
        </Route>
          <Route exact path="/">
            <Home />
          </Route>
          
     
        
        
      
  
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
