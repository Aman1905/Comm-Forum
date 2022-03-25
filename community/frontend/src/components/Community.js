import React from 'react'
import './css/Community.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'

const Community = () => {
  return (
    <div className="community">
      <Header />
      <div className="comm__contents">
        <div className="comm__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Community