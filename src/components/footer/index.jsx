import React from "react"

import logoBlack from "../../images/logo-black.jpg"

import "./style.css"

const Footer = () => (
  <div className="footer">
    <div className="footer-item">
      <div>Per. Ind. Lino Tocalli</div>
      <div className="margin-top-separator">
        Via Serta, 190 - 23017 Morbegno (SO)
      </div>
      <div className="margin-top-separator">Tel.: +39.349.28.10.172</div>
      <div>mail: lino.tocalli@live.com</div>
      <div>Pec: lino.tocalli@pec.eppi.it</div>
      <div className="margin-top-separator">P. Iva 00948340146</div>
    </div>

    <div className="footer-item footer-image">
      <img className="footer-img" src={logoBlack} alt="logo black" />
    </div>
  </div>
)

export default Footer
