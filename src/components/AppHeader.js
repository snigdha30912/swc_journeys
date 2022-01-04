/* eslint-disable prettier/prettier */
import React from 'react'
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CForm,
  CFormInput,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBookmark, cilPlus, cilFork, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [keyword, setKeyword] = useState("")
 const history = useHistory();
 const handleSearch=(e)=>{

  // history.push({
  //   pathname:'/search/',
  //   search:'?search='+keyword,
  // });
  // window.location.reload();
  
 }
 const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Vertically centered modal</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
          </CNavItem>
          <CNavItem>
            
          </CNavItem>
          <CNavItem>
          
          </CNavItem>
        </CHeaderNav>
        <div style={{ cursor:"pointer", position:"relative", marginRight:"30px",}}>
        <CIcon icon={cilFork} size="xxl" />
        <CIcon style={{position:"absolute", color:"#2eb85c",top:"-13px", left:"20px", marginBottom:"30px"}} icon={cilPlus} size="lg" />
        </div>
        <div style={{ cursor:"pointer", position:"relative", marginRight:"30px",}}>
        <CIcon icon={cilBookmark} size="xxl" />
        <CIcon style={{position:"absolute", color:"#2eb85c",top:"-13px", left:"20px", marginBottom:"30px"}} icon={cilPlus} size="lg" />
        </div>
        <CForm className="d-flex">
            <CFormInput id="searchKey"type="search" className="me-2" placeholder="Search" 
            value={keyword} 
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            onChange={(e) => setKeyword(e.target.value)} />
            <CNavLink to="/search" component={NavLink} activeClassName="active">
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
            </CNavLink>
          </CForm>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
