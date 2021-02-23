import React from "react"
import "../styles/footer.css"

const Footer = () => {
  return(
    <footer className="footer">
      © {new Date().getFullYear()} Koji Dev Blog
    </footer>
  )
}

export default Footer;