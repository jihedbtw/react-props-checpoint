import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name">your name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter your email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
