import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-info">
              <div>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span><br/>
                {props.data ? props.data.address_1 : "loading"}<br/>
                {props.data ? props.data.address_2 : "loading"}<br/>
                {props.data ? props.data.address_3: "loading"}
              </p>
              </div>
              <div>
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}<br/>
                {props.data ? props.data.phone_1 : "loading"}<br/>
                {props.data ? props.data.phone_2 : "loading"}<br/>
                {props.data ? props.data.phone_3 : "loading"}
              </p>
              </div>
              <div>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}<br/>
                {props.data ? props.data.email_1 : "loading"}<br/>
                {props.data ? props.data.email_2 : "loading"}<br/>
              </p>
              </div>
            </div>
          </div>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
