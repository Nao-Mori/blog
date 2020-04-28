import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(0,0,0,0.2)`,
      position: "fixed",
      top: "0",
      width:"100vw",
      zIndex: 1
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1060,
        padding: `1.0rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0, fontFamily:"Kalam", padding:0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
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
