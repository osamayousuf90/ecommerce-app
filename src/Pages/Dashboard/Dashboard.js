import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import TableProjects from "../../Components/Table/TableProject"


const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <Sidebar index={"1"} />
        <div className="dashboard_rightBar">
          <TableProjects/>
          <br />
        </div>      
      </div>   
   </div>
  )
}

export default Dashboard