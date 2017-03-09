import React from 'react';
import Quote from './Quote';

import './Contact.css';


export default function Contact(props) {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact__container">
          <div className="row">
            <a className="contact__container__email" href="mailto:john@johnrowley.co">
              john@johnrowley.co
            </a>
          </div>

          <div className="row">
            <h3 className="contact__container__phone">509-994-8638</h3>
          </div>

          <div className="row">
            <p className="contact__container__paragraph">I work hard all days of the week, starting early in the morning
            with a nice cup of coffee. I prefer email, but feel free to give me
            a ring if you have any questions.</p>
          </div>

          <div className="row">

          </div>

          <div className="row">
            <p className="contact__container__copyright">Copyright 2017 John Rowley Co. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
