import React from 'react'
import DashboardLayout from './DashboardLayout'


const DashBoard = () => {
  return (
    <div className="dashboard bg-blue-100">
        <h1 className="dashboard-title"></h1>
        {/* <img src="edd.jpg" alt="Dashboard Overview" className="dashboard-image" /> */}
        <p className="dashboard-description">Welcome to your dashboard! Here you can manage your study groups, view notifications, and access settings.</p>
        {/* Additional dashboard content can be added here */}
      </div>
  )
}

export default DashBoard
