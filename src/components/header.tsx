import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(0,0,0,0.13)`,
      position: "fixed",
      top: "0",
      width:"100vw",
      zIndex: 1
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1350,
        padding: `1.0rem 1.0875rem`,
        display: "flex"
      }}
    >
      <div style={{ width: "1.8rem", marginRight:"10px" }}>
      <Link
          to="/"
        >
        <Image name = "icon" />
        </Link>
      </div>
      <h2 style={{ margin: 0, fontFamily:"Kalam", padding: "2px 0", fontSize: `1.6rem` }}>   
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Nao got her blog <strong style={{textDecoration: "line-through"}}>did</strong> done...
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
