/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createHashHistory } from 'history'
import './scss/style.scss'
import './scss/_custom.scss'
import Cookies from "js-cookie";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))

const App = () => {
  let accessToken = Cookies.get("access");
  // console.log(accessToken==='undefined')
  // console.log(accessToken);
  // console.log(window.location.search)
  const history = createHashHistory()
  console.log(accessToken);

  useEffect(() => {
    console.log("app.js is running")
    if (accessToken=='undefined' || !accessToken) {
      console.log('hi');
      if (window.location.href !="http://localhost:3000/#/login") {
        window.location.replace("http://localhost:3000/#/login");
        // window.location.reload();
      }

    }

  }, [accessToken]);

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            name="Register Page"
            render={(props) => <Register {...props} />}
          />
          <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  )
}

export default App
