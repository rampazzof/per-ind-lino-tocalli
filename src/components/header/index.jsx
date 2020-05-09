import React, { useState } from "react"

import { Icon } from "@chakra-ui/core"

import { MdHome, MdPhone, MdPlace } from "react-icons/md"
import "./style.css"

const defaultWidth = "50%"

export default () => {
  const [itemWidth, setItemWidth] = useState(defaultWidth)

  return (
    <div className="navbar">
      <div className="navbar-pointer" style={{ width: itemWidth }} />
      <div className="navbar-container">
        <div className="navbar-title">
          <span className="title">Studio Tecnico Per. Ind. Lino Tocalli </span>
        </div>
        <div className="navbar-item home">
          <a
            href="/"
            onMouseEnter={() => setItemWidth("55%")}
            onMouseLeave={() => setItemWidth(defaultWidth)}
          >
            Home
            <Icon as={MdHome} size={10} pb={2} />
          </a>
        </div>
        <div className="navbar-item map">
          <a
            href="#googlemaps"
            onMouseEnter={() => setItemWidth("70%")}
            onMouseLeave={() => setItemWidth(defaultWidth)}
          >
            Dove Siamo
            <Icon as={MdPlace} size={10} pb={2} />
          </a>
        </div>
        <div className="navbar-item contacts">
          <a
            href="#contacts"
            onMouseEnter={() => setItemWidth("85%")}
            onMouseLeave={() => setItemWidth(defaultWidth)}
          >
            Contatti
            <Icon as={MdPhone} size={10} pb={2} />
          </a>
        </div>
      </div>
    </div>
  )
}
