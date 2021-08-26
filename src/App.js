import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router,Route, Switch, useHistory,withRouter} from 'react-router-dom';
import Communities from "./components/Communities/Communities";
import Timelines from "./components/Timelines/Timelines";
import Explore from "./components/Explore/Explore";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import TimelineSpecific from "./components/Timelines/TimelineSpecific";
import CommunityDetail from "./components/Communities/CommunityDetail";
import Login from "./components/Authentication/Login";
import Cookies from "js-cookie";



function App() {
  let accessToken = Cookies.get("access");
  console.log(accessToken==='undefined')
  console.log(accessToken);
  const history = useHistory();
    
  useEffect(() => {
    if(accessToken==='undefined')
    {
      history.push('/login');
    }
    
  }, [accessToken, history]);
  return (
      
    <div className="App">
      
      <div className="content">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/communities">
            <Communities />
          </Route>
          <Route path="/explore"> 
            <Explore />
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
    
    
    
    
  );
}

export default withRouter(App);
