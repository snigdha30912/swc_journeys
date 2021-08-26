import Cookies from 'js-cookie';
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router';

const clientId =
  '398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com';

function Logout() {
  const history = useHistory();
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    Cookies.set("access",undefined);
    Cookies.set("refresh",undefined);
    history.push('/login');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;