import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="it" />
        <meta charSet="utf-8" />
        <meta name="description" content="Per. Ind. Lino Tocalli website" />
        <title>Per. Ind. Lino Tocalli</title>
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
export default Layout
