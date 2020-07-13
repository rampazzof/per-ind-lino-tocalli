import React from "react"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

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
      <CookieConsent
        acceptOnScroll={true}
        buttonText="Ho capito"
        buttonStyle={{ backgroundColor: "#bfff00" }}
      >
        Questo sito web utilizza i cookie per migliorare l'esperienza
        dell'utente. Per maggiori dettagli sull'Informativa cookie e privacy
        policy clicca il seguente{" "}
        <Link style={{ color: "#bfff00" }} to="/cookie-e-privacy">
          link
        </Link>
      </CookieConsent>
      <Footer />
    </>
  )
}
export default Layout
