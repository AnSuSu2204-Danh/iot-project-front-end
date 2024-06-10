import React from 'react';

function Contact() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Contact Us</h1>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
