import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

const refresh = refreshToken => {
    
  
    return new Promise((resolve, reject) => {
        axios
            .post("http://localhost:8000/auth/token/refresh/", { refresh: refreshToken })
            .then(res => {
                if (res.status != 200) {
                    
                    // set message and return.
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
    return new Promise((resolve, reject) => {
        axios
            .post(
                url,
                data,
                { headers: { authorization: `Bearer ${accessToken}` } }
            )
            .then(async res => {
                resolve(true);
                
            }).catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                var accessToken;
                refresh(refreshToken).then(accessToken =>{
                    accessToken = accessToken;
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
    return new Promise((resolve, reject) => {
        axios
            .get(
                url,
                
                { headers: { authorization: `Bearer ${accessToken}` } }
            )
            .then(async res => {
                if(res.data.results==null)
                    resolve(res.data);
                resolve(res.data.results);
                
            }).catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
                var accessToken;
                refresh(refreshToken).then(accessToken =>{
                    accessToken = accessToken;
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
        const data = await getRequest(accessToken, refreshToken, url);
        return data;
    }
};