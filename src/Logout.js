import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
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