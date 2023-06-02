import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer id="footer">
    <div className="footer-top">
      <div className="container text-center">
        <div className="footer-logo">
          <a href="https://codepen.io/jvjijith/pen/woMywq">Baghi</a>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <a className="envelope" href="https://codepen.io/Baghi_9999">
                <i className="fa fa-codepen icon-sm" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="https://www.linkedin.com/in/rc-codex-469564261/">
                <i className="fa fa-linkedin icon-sm" />
              </a>
            </li>
            <li>
              <a className="instagram" href="https://www.instagram.com/rccodex/">
                <i className="fa fa-instagram icon-sm" />
              </a>
            </li>
            <li>
              <a className="youtube" href="https://www.youtube.com/channel/UCoCNtvth9gc2jH7Gfl6FDGw">
                <i className="fa fa-youtube icon-sm" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>© 2017 rccodex</p>
          </div>
          <div className="col-sm-6">
            <p className="pull-right">
              Developed by{" "}
              <a href="https://www.instagram.com/rccodex/">
             Baghi and Vaibhav
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
