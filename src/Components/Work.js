import React from 'react'
import './Work.css'
import { useState } from 'react';
import axios from 'axios'

const Work = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/contact', {
      name: name,
      email: email,
      message: message
    })
    .then((response) => {
      console.log(response);
      // do something with the response
    })
    .catch((error) => {
      console.log(error);
      // handle the error
    });
  };
  return (
    <div><div id="portfolio" className="text-center">
    <div className="container">
      <div className="section-title center">
        <h2>My WORKS</h2>
        <div className="line"></div>
      </div>
      <div className="gap" />
      <section id="works" className="container">
        <ul className="portfolio-items col-4">
          <li className="portfolio-item apps">
            
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo apps">
            <div className="item-inner">
            <img
                src="https://i.ibb.co/9NBfyZm/Screenshot.png"
                alt=""
              />
              <h5>Get code from <a href="https://youtu.be/s22I8dswAnY"> youtube description</a></h5>
              
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo web">
            <div className="item-inner">
              <img
                src="https://i.ibb.co/n0w59vK/Screenshot-110.png"
                alt=""
              />
               <h5>Get code from <a href="https://youtu.be/yKtycp-jQWU"> youtube description</a></h5>
              
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo web apps">
            <div className="item-inner">
              <img
                src="https://i.ibb.co/vYmrckh/Screenshot-111.png"
                alt=""
              />
               <h5>Get code from <a href="https://youtu.be/kQ3sSawjp4s"> youtube description</a></h5>
              
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item apps web">
            <div className="item-inner">
              <img
                src="https://i.ibb.co/jRPzB7b/Screenshot-112.png"
                alt=""
              />
            <h5>Get code from <a href="https://youtu.be/z9A7mJDiaZk"> youtube description</a></h5>
               
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item apps">
            <div className="item-inner">
              <img
                src="https://i.ibb.co/TtpCzjm/Screenshot-113.png"
                alt=""
              />
               <h5>Get code from <a href="https://youtu.be/yja-5ZbPIuE"> youtube description</a></h5>
              
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item web">
            <div className="item-inner">
              <img
                src="https://i.ibb.co/n1WP513/Screenshot-115.png"
                alt=""
              />
               <h5>Get code from <a href="https://youtu.be/wix9qo8oWx8"> youtube description</a></h5>
              
            </div>
          </li>
          {/*/.portfolio-item*/}
          <li className="portfolio-item logo">
            <div className="item-inner">
              <img
                src="https://i.ibb.co/vcJHV0Z/Screenshot-116.png"
                alt=""
              />
               <h5>Get code from <a href="https://youtu.be/tw81OvkhXKY"> youtube description</a></h5>
              
            </div>
          </li>
          {/*/.portfolio-item*/}
        </ul>
      </section>
      {/*/#portfolio*/}
    </div>
  </div>
  <div id="contact" className="text-center">
    <div className="container">
      <div className="section-title center">
        <h2>Get in Touch</h2>
        <div className="line"></div>
      </div>
      <div className="gap" />
      <div className="address">
        Want to get in touch with me? just feel free to drop me a line anytime.{" "}
      </div>
      <div id="contact-form">
        <div id="message" />
        <form
          method="post"
          action="php/contact.php"
          name="contactform"
          id="contactform"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            id="name"
            className="inputForm2"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input name="email" type="text" id="email" placeholder="Email"  onChange={(event) => setEmail(event.target.value)} />
          <textarea
            name="comments"
            id="comments"
            placeholder="Message"
            defaultValue={""}
            onChange={(event) => setMessage(event.target.value)}
          />
          <input
            type="submit"
            className="send_message transition"
            id="submit"
            defaultValue="Send Message"
           
          />
        </form>
      </div>
    </div>
  </div></div>
  )
}

export default Work