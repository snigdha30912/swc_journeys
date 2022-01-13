/* eslint-disable prettier/prettier */
import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import Cookies from "js-cookie";

// routes config
import routes from '../routes'

const AppContent = () => {
  let accessToken = Cookies.get("access");
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
    <CContainer lg>
      <Suspense fallback={<CSpinner className="spinner" />}>
        <Switch>
          {(!!accessToken || accessToken!='undefined') ? (<>{routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
        
          <Redirect from="/" to="/bookmark" /></>) : (<Redirect to="/login" />)}
          
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
