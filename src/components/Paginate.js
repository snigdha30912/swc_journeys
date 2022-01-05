/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import {
    CSpinner,
    CRow,
    CPagination,
    CPaginationItem,
  } from '@coreui/react'

const Paginate = ({pageCount,onPageChange,currentPage}) => {
  let items = []
  const temp = ()=>{
    console.log("Clicked")
    onPageChange(2)
  }
  for(let i=1; i<=pageCount; i++) {
    if(currentPage===i){
      items.push(<CPaginationItem key={i} active>{i}</CPaginationItem>)
    } else {
      items.push(<CPaginationItem key={i} onClick={()=>{onPageChange(i)}}>{i}</CPaginationItem>)
    }
  }
  return (
    <CPagination size="lg" style={{padding:"20px"}}className="justify-content-center" aria-label="Page navigation example">
    {/* <CPaginationItem aria-label="Previous" disabled>
      <span aria-hidden="true">&laquo;</span>
    </CPaginationItem> */}
    {items}
    {/* <CPaginationItem aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </CPaginationItem> */}
  </CPagination>
  )
}

Paginate.propTypes = {
  pageCount : PropTypes.number.isRequired,
  onPageChange : PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Paginate;