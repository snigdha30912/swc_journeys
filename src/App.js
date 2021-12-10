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
import Logout from "./components/Authentication/Logout";
import SearchBookmarks from "./components/Bookmarks/SearchBookmarks";
import Favorites from "./components/Bookmarks/Favorites";



function App() {
  let accessToken = Cookies.get("access");
  // console.log(accessToken==='undefined')
  // console.log(accessToken);
  // console.log(window.location.search)
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
          <Route path="/logout">
            <Logout />
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
        <Route path="/search">
            <SearchBookmarks/>
        </Route>
        <Route path="/favorites">
            <Favorites/>
        </Route>
          <Route exact path="/">
            <Bookmarks />
          </Route>
        </Switch>
      </div>      
    </div>
    
    
    
  );
}

export default withRouter(App);
