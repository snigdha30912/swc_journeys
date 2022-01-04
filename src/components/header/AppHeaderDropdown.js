/* eslint-disable prettier/prettier */
import React from 'react'
import Cookies from 'js-cookie'
import { GoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router'

import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilArrowCircleRight,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const clientId = '398500418397-csmd0de4p1l7b6smiclfbhafubv96vpi.apps.googleusercontent.com'

const AppHeaderDropdown = () => {

  const history = useHistory();

  const onSuccess = () => {
    console.log('Logout made successfully');
    Cookies.set("access",undefined);
    Cookies.set("refresh",undefined);
    history.push('/login');
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
       
        
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        
        <CDropdownDivider />
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
          render={renderProps => (
            <CDropdownItem href="#" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <CIcon icon={cilArrowCircleRight} className="me-2" />
              Log Out
            </CDropdownItem>
          )}
        ></GoogleLogout>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
