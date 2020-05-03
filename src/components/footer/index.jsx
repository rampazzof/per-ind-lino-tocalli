import React from "react"

import logoBlack from "../../images/logo-black.jpg"

import "./style.css"

const Footer = () => (
  <div className="footer">
    <div id="contacts" className="footer-item">
      <div>Per. Ind. Lino Tocalli</div>
      <div>Via Serta, 190 - 23017 Morbegno (SO)</div>
      <div mt={2}>Tel.: +39.349.28.10.172</div>
      <div>mail: lino.tocalli@live.com</div>
      <div>Pec: lino.tocalli@pec.eppi.it</div>
    </div>
    <div className="footer-item">
      <img className="footer-img" src={logoBlack} />
      <div className="right">P. Iva 00948340146</div>
    </div>
  </div>
)

export default Footer
