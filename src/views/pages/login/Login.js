/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


const clientId ='398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com';

const Login = () => {
  const history = useHistory();
  const onSuccess = async (res) => {
    let res1 = await axios.post(
      "http://localhost:8000/social_auth/google/",
      {
        auth_token: res.tokenId
      }
    );
    console.log(res1.data);
    Cookies.set("access", res1.data.tokens.access);
    Cookies.set("refresh", res1.data.tokens.refresh);
    history.push('/');
  }
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Login with Google</h2>
                    <br></br>
                    <br></br>
                    <GoogleLogin
                      clientId={clientId}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                    />
                    {/* <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
