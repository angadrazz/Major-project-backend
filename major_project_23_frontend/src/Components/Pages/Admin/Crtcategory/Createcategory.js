import React from 'react'
import Adminmenu from '../../../Layouts/Adminmenu/Adminmenu';
import Layout from '../../../Layouts/Layout/Layout'
import "../Admindashboard.css";


function Createcategory() {
  return (
    <Layout title={'Hidden Brands - Create Category'}>

    <h2 className='admin_d_h2'>Admin Dashboard</h2>

      <div className="admin_m_main">

          <div className="admin_m_sub"><Adminmenu /></div>

          <div className="admin_m_sub1">Category</div>

      </div>
    </Layout>
  )
}

export default Createcategory
