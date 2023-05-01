import React from 'react'
import './About.css'

const About = () => {
  return (
<>
  {/* Menu
================================================== */}
  <nav id="art-menu" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      {/* for better mobile display */}
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a
          className="navbar-brand"
          href="https://codepen.io/jvjijith/pen/woMywq"
        >
          rccodex
        </a>
      </div>
      {/* Navigation Toggling */}
      <div className="collapse navbar-collapse" id="navbar-collasped">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#home" className="scroll-nav">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="scroll-nav">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="scroll-nav">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#portfolio" className="scroll-nav">
              Get-Code
            </a>
          </li>
          <li>
            <a href="#contact" className="scroll-nav">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* /.navbar-collapse */}
    </div>
    {/* /.container-fluid */}
  </nav>
  <div id="home" className="text-center">
    <div className="layer">
      <div className="content">
        <h1>
          Hi I'm{" "}
          <strong>
            <span>Baghi</span>
          </strong>
        </h1>
        <p className="lead">Front-End Developer and UX/UI designer</p>
        <a href="#about" className="fa fa-angle-down scroll-nav" />
      </div>
    </div>
  </div>
  <div id="about">
    <div className="container">
      <div className="section-title center text-center">
        <h2>
          <strong>ABOUT Me</strong>
        </h2>
        <div className="line"></div>
      </div>
      <div className="gap" />
      <div className="row">
        <div className="col-md-6">
          <p>
            Hi there, I’m <strong>Baghi</strong>.
          </p>
          <p>
            Iam a Computer engineering Graduate with excellent typing and
            programming skills. I have been working as a freelancer locally in
            my home town(Kerala, India) since the day i graduated from my
            college .
          </p>
          <p>
            I love my work and enjoy each new project as I get it. Feel free to
            have a look at my portfolio and don’t hesitate to contact me if you
            think I can be of service to you.
          </p>
          <p>
            <strong>Thanks</strong> for stopping by!
          </p>
        </div>
        <div className="col-md-6">
          <div className="progress progress-striped active">
            <div
              className="progress-bar progress-bar-success"
              role="progressbar"
              style={{ width: "70%" }}
            >
              70% - eCommerce
            </div>
          </div>
          <div className="progress progress-striped active">
            <div
              className="progress-bar progress-bar-info"
              role="progressbar"
              style={{ width: "20%" }}
            >
              20% - Css
            </div>
          </div>
          <div className="progress progress-striped active">
            <div
              className="progress-bar progress-bar-warning"
              role="progressbar"
              style={{ width: "60%" }}
            >
              60% - User interface
            </div>
          </div>
          <div className="progress progress-striped active">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              style={{ width: "80%" }}
            >
              80% - WordPress
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xs-12 text-center">
      <blockquote>
        "It's not at all important to get it right the first time. It's vitally
        important to get it right the last time"
      </blockquote>
      <div className="joinjour text-center">
        <a href="#contact" className="btn btn-block scroll-nav">
          Book Me Now
        </a>
      </div>
    </div>
  </div>
  
 </>
  )
}

export default About