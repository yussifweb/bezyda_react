import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container">
             <div className="row pt-5 mb-3">
                <div className="col-md-12">
                 <h1 className="text-center">About Us</h1>
                </div>
              </div>
              
               <div key={this.props.vision} className="row mb-5">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                   <div className="vision thin">
                    <h3 className="">{this.props.vision}</h3>
                     <p>{this.props.v_content}</p>
                   </div>
                   <div className="mission thin">
                    <h3 className="">{this.props.mission}</h3>
                    <p>{this.props.m_content}</p>
                  </div>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                   <div className="values thin">
                    <h3>{this.props.value}</h3>
                    <div>
                    {
                     this.props.values.map((val) =>{
                     return <p>{val}</p>
                     }) 
                    }
                    </div>
                </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 m-auto">
                   <div className="motto text-center">
                      <h3>{this.props.motto}</h3>
                     <p>{this.props.m_cont}</p>
                   </div>
                 </div>
               </div>
            </div>
        )
    }
}

export default About
