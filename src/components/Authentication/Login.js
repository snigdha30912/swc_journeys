import React, {useState} from 'react';
import axios from "axios";
import background from '../../static/images/umum.webp'
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


const clientId ='398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com';


function Login({}) {
  const history = useHistory();
  const onSuccess = async (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    let res1 = await axios.post(
      "http://localhost:8000/social_auth/google/",
      {
          
        auth_token: res.tokenId
      }
    );

    console.log(res1.data);
    Cookies.set("access", res1.data.tokens.access);
    Cookies.set("refresh", res1.data.tokens.refresh);
    
    alert(
      `Logged in successfully welcome ${res.profileObj.name} . \n See console for full profile object.`
    );
    history.push('/');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <>
    <link rel="stylesheet" href="nicepage.css" media="screen"/>
<link rel="stylesheet" href="Home.css" media="screen"/>
    <script class="u-script" type="text/javascript" src="jquery-1.9.1.min.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>
    <meta name="generator" content="Nicepage 3.23.9, nicepage.com"/>
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i"/>
    <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
    <section className="u-align-center u-clearfix u-image u-section-1" src="" dataImageWidth="1920" dataImageHeight="1080" id="sec-8980">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h1 className="u-align-center u-custom-font u-font-roboto u-text u-text-default u-text-1">
        <span style={{fontSize: "4.5rem", fontWeight: "700"}} className="u-text-custom-color-1">Journeys&nbsp;&nbsp;</span>
        <span style={{fontSize: "3.75rem"}}></span>
      </h1>
      <img className="u-image u-image-default u-preserve-proportions u-image-1" src="images/journeys-logo.jpg" alt="" dataImageWidth="190" dataImageHeight="183"></img>
      <h3 className="u-custom-font u-font-roboto u-text u-text-custom-color-1 u-text-default u-text-2">by SWC&nbsp;&nbsp;</h3>
      <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <a onClick={renderProps.onClick} disabled={renderProps.disabled} className="u-border-2 u-border-custom-color-1 u-border-hover-custom-color-1 u-btn u-btn-round u-button-style u-hover-custom-color-1 u-none u-radius-50 u-text-custom-color-1 u-text-hover-white u-btn-1">Login with google</a>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ visibility : "hidden",marginTop: '100px' }}
        isSignedIn={true}
  
      />
      {/* <div className="u-social-icons u-spacing-43 u-social-icons-1">
        <a className="u-social-url" title="facebook" target="_blank" href="https://facebook.com/name"><span className="u-icon u-social-facebook u-social-icon u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" ><use xlink:href="#svg-bf37"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-bf37"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
        </a>
        <a className="u-social-url" title="twitter" target="_blank" href="https://twitter.com/name"><span className="u-icon u-social-icon u-social-twitter u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xlink:href="#svg-4d48"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-4d48"><circle fill="currentColor" className="st0" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"></path></svg></span>
        </a>
        <a className="u-social-url" title="instagram" target="_blank" href="https://instagram.com/name"><span className="u-icon u-social-icon u-social-instagram u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xlink:href="#svg-71b9"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-71b9"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
        </a>
      </div> */}
    </div>
  </section>

    {/* <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      
    </div> */}
      </>
  );
}

export default Login;