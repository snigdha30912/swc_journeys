import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const refresh = refreshToken => {
    
    console.log("Refreshing token!");
  
    return new Promise((resolve, reject) => {
        axios
            .post("http://localhost:8000/auth/token/refresh/", { refresh: refreshToken })
            .then(res => {
                if (res.status != 200) {
                    
                    // set message and return.
                    console.log("Login again");
                    resolve(false);
                } else {
                    const  accessToken  = res.data.access;
                    Cookies.set("access", accessToken);
                    resolve(accessToken);
                }
            });
    });
  };
  

const hasAccess = async (accessToken, refreshToken) => {
    if (!refreshToken) return null;

    if (accessToken === undefined) {
        // generate new accessToken
        accessToken = await refresh(refreshToken);
        return accessToken;
    }

    return accessToken;
};


export const postRequest = async (accessToken, refreshToken, url, data) => {
    console.log(accessToken, refreshToken);
    return new Promise((resolve, reject) => {
        axios
            .post(
                url,
                data,
                { headers: { authorization: `Bearer ${accessToken}` } }
            )
            .then(async res => {
              console.log(res.status);
                // if (res.status !=200 && res.status!= 201 && res.status!=401) {
                //     if (res.data.message === "User not authenticated") {
                //         console.log("Login again");
                //         // set err message to login again.
                //     } else if (
                //         res.status == 401
                //     ) {
                //         const accessToken = await refresh(refreshToken);
                //         return await postRequest(
                //             accessToken,
                //             refreshToken
                //         );
                //     }
  
                //     resolve(false);
                // } else {
                    // protected route has been accessed, response can be used.
                    console.log("Protected route accessed!");
                    resolve(true);
                
            }).catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                var accessToken;
                refresh(refreshToken).then(accessToken =>{
                    accessToken = accessToken;
                    console.log(accessToken);
                    postRequest(accessToken,refreshToken,url,data);
                    
                });
                
                });
    });
  };
  
  
export const post = async (url, data) => {
      let accessToken = Cookies.get("access");
      let refreshToken = Cookies.get("refresh");
  
      accessToken = await hasAccess(accessToken, refreshToken);
  
      if (!accessToken) {
          // Set message saying login again.
      } else {
          await postRequest(accessToken, refreshToken, url, data);
      }
  };

  export const getRequest = async (accessToken, refreshToken, url) => {
    console.log(accessToken, refreshToken);
    return new Promise((resolve, reject) => {
        axios
            .get(
                url,
                
                { headers: { authorization: `Bearer ${accessToken}` } }
            )
            .then(async res => {
              console.log(res.status);
                // if (res.status !=200 && res.status!= 201 && res.status!=401) {
                //     if (res.data.message === "User not authenticated") {
                //         console.log("Login again");
                //         // set err message to login again.
                //     } else if (
                //         res.status == 401
                //     ) {
                //         const accessToken = await refresh(refreshToken);
                //         return await getRequest(
                //             accessToken,
                //             refreshToken
                //         );
                //     }
  
                //     resolve(false);
                // } else {
                    // protected route has been accessed, response can be used.
                    console.log("Protected route accessed!");
                    resolve(res.data.results);
                
            }).catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                var accessToken;
                refresh(refreshToken).then(accessToken =>{
                    accessToken = accessToken;
                    console.log(accessToken);
                    getRequest(accessToken,refreshToken,url);
                    
                });
                
                });
   
    });
  };

  export const get = async (url) => {

    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);

    if (!accessToken) {
        // Set message saying login again.
    } else {
        console.log("processsing")
        const data = await getRequest(accessToken, refreshToken, url)
        console.log(data);
           return data; 
        
    
    }
};