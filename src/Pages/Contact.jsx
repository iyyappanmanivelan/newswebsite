import React, { useState } from "react";
import { Envelope, GeoAlt, PhoneVibrate,ArrowReturnLeft } from "react-bootstrap-icons";
import {Link, useNavigate} from 'react-router-dom'

function Contact() {
  const[fname,setfname]=useState('')
  const[email,seteamil]=useState('')
  const[company,setcompany]=useState('')
  const[phone,setphone]=useState('')
  const[message,setmessage]=useState('')
  const  nav= useNavigate()

  const submit=()=>{
      if(!fname && !email){
        alert('pls fill name and email')
      }
      else if(!company && !phone){
        alert('pls fill company name and phone number')
      }
      else if(!message){
        alert('pls write your message')
      }
      else(
      setTimeout(() => {
          alert('messege sended')
          nav('/')
      }, 1000)
        
      )
  }

  return (
   
    <>
      <section className="contact">

      <div className="news-head text-center mb-4">
      <div className="go-back">
                     <Link to='/'><ArrowReturnLeft />Go Back</Link>
                    </div>
            <div className="title">
              <h1>
                A<span>to</span>Z
              </h1>
              <h2>News</h2>
            </div>
            <div className="title-full text-center">
              <h6>The art of publishing</h6>
            </div>
          </div>
        <div className="container">
       
          <div className="contact-page">
            <div className="row">
              <div className="col-md-6">
                <div className="intro text-center">
                  <div className="highlight">
                    <h4>Let's Chat</h4>
                  </div>
                  <div className="desc">
                    <p>
                      When you hava any question want to post any add or simply
                      want to connect
                    </p>
                  </div>
                  <div className="desc-2">
                    <p>Feel free to send me a message in the contact form</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-form">
                  <div className="contact-name text-center">
                    <h4>CONTACT</h4>
                  </div>
                  <div className="req">
                    <p>*Required</p>
                  </div>
                  <div className="name text-center">
                    <input type="text" placeholder="Name*" onChange={(e)=>{setfname(e.target.value)}} />
                  </div>
                  <div className="email text-center">
                    <input type="text" placeholder="Email*"  onChange={(e)=>{seteamil(e.target.value)}}/>
                  </div>
                  <div className="company text-center">
                    <input type="text" placeholder="Company*" onChange={(e)=>{setcompany(e.target.value)}} />
                  </div>
                  <div className="phone text-center">
                    <input type="text" placeholder="Phone +91" onChange={(e)=>{setphone(parseInt(e.target.value))}} />
                  </div>
                  <div className="message text-center">
                    <textarea rows="4" cols="32" placeholder="message" onChange={(e)=>{setmessage(e.target.value)}} />
                  </div>
                  <div className="submit text-center">
                    <button className="btn btn-primary" onClick={submit}>SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
