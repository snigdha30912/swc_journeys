import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import Logout from "../Authentication/Logout";
const NavBar = ()=>{
return (
    <>
    <TopNavBar/>
    <div style={{width:"300px", height:"700px", position:"absolute", top:"100", left:"0",marginTop:"30px"}}>
      
      <SideNavBar />
      <Logout/>
     
      

      </div>
    </>

)
}
export default NavBar;
