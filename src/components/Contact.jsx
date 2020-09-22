import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
        <div className="container">
            <div className="row pt-5 mb-3">
                <div className="col-md-12">
                  <h1 className="text-center">Contact Us</h1>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5 mb-5">
                  <div className="msg rounded mb-2 thin">
                    <h3>Leave a Message</h3>
                    <form action="mailto:djiceman.gh@gmail.com" method="POST" enctype="multipart/form-data">
                      <div className="form-group">
                        <div className="form-group">
                          <input type="name" placeholder="Name" value="" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <input type="email" placeholder="Your Email" value="" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="Subject" value="" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <textarea name="message" id="message" value="message" placeholder="Your Message" className="form-control" cols="15" rows="8" required></textarea>
                        </div>
                        <input className="btn btn-success" type="submit" value="Submit" />
                      </div>                
                    </form>
                  </div>
                </div>
    
                <div key={this.props.name} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5 mb-5">
                  <div className="thin">
                    <h3>Address</h3>
                    {
                     this.props.address.map((addr) => {
                        return <div>
                            <p>{addr.name}</p>
                        </div>

                     })
                    }                    
                    <p>P.O Box 61, <br/>Bekwai - Ashanti <br/> Ghana <br/> West-Africa</p>
                    <p><i className="fa fa-envelope"></i><a className="mail" href="mailto:bezydagh@gmail.com"> bezydagh@gmail.com</a></p>
                  </div>

                    <div className="thin social-media">
                      <h3>Follow Us</h3>
                      {
                     this.props.online.map((onl) => {
                        return <div>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" href={onl.url}>
                            <i className={onl.src}></i> {onl.name}</a>
                        </li>
                      </ul>

                        </div>

                     })
                    }
                    </div>   
                  </div>                
              </div>   
         </div>
         
        )
    }
}

export default Contact
