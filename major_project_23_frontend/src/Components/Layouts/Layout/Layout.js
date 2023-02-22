import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {Helmet} from "react-helmet";

function Layout({children, title, description, keywords, author}) {
  return (
    <div>
      <Helmet>
          <meta charset="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
      </Helmet>
        <Navbar />
            <main>
                {children}
            </main>
        <Footer />
    </div>
  )
}

export default Layout
