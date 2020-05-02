import React, { useState } from "react"

import { Link as GatsbyLink } from "gatsby"
import { Link, Icon } from "@chakra-ui/core"

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
          <Link
            padding={10}
            as={GatsbyLink}
            to="/"
            onMouseEnter={() => setItemWidth("55%")}
            onMouseLeave={() => setItemWidth(defaultWidth)}
            color={"grey"}
          >
            Home
            <Icon as={MdHome} size={10} pb={2} />
          </Link>
        </div>
        <div className="navbar-item map">
          <Link
            padding={10}
            as={GatsbyLink}
            to="#googlemaps"
            onMouseEnter={() => setItemWidth("70%")}
            onMouseLeave={() => setItemWidth(defaultWidth)}
            color={"grey"}
          >
            Dove Siamo
            <Icon as={MdPlace} size={10} pb={2} />
          </Link>
        </div>
        <div className="navbar-item contacts">
          <Link
            padding={10}
            as={GatsbyLink}
            to="#contacts"
            onMouseEnter={() => setItemWidth("85%")}
            onMouseLeave={() => setItemWidth(defaultWidth)}
            color={"grey"}
          >
            Contatti
            <Icon as={MdPhone} size={10} pb={2} />
          </Link>
        </div>
      </div>
    </div>
  )
}
