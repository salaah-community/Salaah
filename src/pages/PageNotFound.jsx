import React from 'react'
import '../styles/PageNotFound.css'
import Navbar from '../components/Navbar'

const PageNotFound = () => {
  return (
    <>

      <div className=''>
        <div className="nav-not-found" style={{ height: "100px" }}><Navbar /></div>
        <div style={{ height: "calc(100vh - 100px)", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }} lclassName="pnf">
          <span style={{ fontSize: '7rem' }} className='Ultrabold' id='L'>4</span>
          <span style={{ fontSize: '7rem' }} className='Ultrabold' id='I'>0</span>
          <span style={{ fontSize: '7rem' }} className='Ultrabold' id='G'>4</span>
          <h1 style={{ fontSize: '3rem' }} className='Ultrabold'>Page Not Found</h1>
        </div>
      </div>
    </>
  )
}

export default PageNotFound