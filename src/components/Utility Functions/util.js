import { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const refresh = refreshToken => {


    return new Promise((resolve, reject) => {
        axios
            .post("http://localhost:8000/auth/token/refresh/", { refresh: refreshToken })
            .then(res => {
                if (res.status != 200) {
                    toast.error("An error occured while refreshing token");
                    // set message and return.
                    resolve(false);
                } else {
                    const accessToken = res.data.access;
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
                // console.log('An error occurred:', error.response);
                if (error.response.status === 500) {
                    refresh(refreshToken).then(accessToken => {
                        toast("server me error ☠");
                    });
                }
                if (error.response.status === 401) {
                    refresh(refreshToken).then(accessToken => {
                        postRequest(accessToken, refreshToken, url, data);
                    });
                }
            });
    });
};


export const post = async (url, data) => {
    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);

    if (!accessToken) {
        // Set message saying login again.
        toast.error("Firse login kar😾");
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
                if (res.data.results == null)
                    resolve(res.data);
                resolve(res.data.results);

            }).catch(error => {
                // Handle error.
                if (error.response.status === 500) {
                    refresh(refreshToken).then(accessToken => {
                        toast("server me error ☠");
                    });
                }
                if (error.response.status === 401) {
                    refresh(refreshToken).then(accessToken => {
                        getRequest(accessToken, refreshToken, url);
                    });
                }

            });

    });
};

export const get = async (url) => {

    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);

    if (!accessToken) {
        // Set message saying login again.
        toast.error("Firse login kar😾");
    } else {
        const data = await getRequest(accessToken, refreshToken, url);
        return data;
    }
};

export const putRequest = async (accessToken, refreshToken, url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .put(
                url,
                data,
                { headers: { authorization: `Bearer ${accessToken}` } }
            )
            .then(async res => {
                resolve(true);

            }).catch(error => {
                // Handle error.
                if (error.response.status === 500) {
                    refresh(refreshToken).then(accessToken => {
                        toast("server me error ☠");
                    });
                }
                if (error.response.status === 401) {
                    refresh(refreshToken).then(accessToken => {
                        putRequest(accessToken, refreshToken, url, data);
                    });
                }
            });
    });
};


export const put = async (url, data) => {
    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);

    if (!accessToken) {
        // Set message saying login again.
        toast.error("Firse login kar😾");
    } else {
        await putRequest(accessToken, refreshToken, url, data);
    }
};


export const deleteRequest = async (accessToken, refreshToken, url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(
                url,
                
                { headers: { authorization: `Bearer ${accessToken}` } }
            )
            .then(async res => {
                resolve(true);

            }).catch(error => {
                // Handle error.
                // console.log('An error occurred:', error.response);
                if (error.response.status === 500) {
                    refresh(refreshToken).then(accessToken => {
                        toast("server me error ☠");
                    });
                }
                if (error.response.status === 401) {
                    refresh(refreshToken).then(accessToken => {
                        deleteRequest(accessToken, refreshToken, url, data);
                    });
                }
            });
    });
};


export const del = async (url, data) => {
    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");

    accessToken = await hasAccess(accessToken, refreshToken);

    if (!accessToken) {
        // Set message saying login again.
        toast.error("Firse login kar😾");
    } else {
        await deleteRequest(accessToken, refreshToken, url, data);
    }
};