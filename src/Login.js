import React, {useState} from 'react';
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';


const clientId ='398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com';


  



function Login({}) {
  
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
    
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      
    </div>
  );
}

export default Login;