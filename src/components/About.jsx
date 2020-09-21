import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container">
             <div class="row pt-5 mb-3">
                <div class="col-md-12">
                 <h1 class="text-center">About Us</h1>
                </div>
              </div>
              
               <div class="row mb-5">
                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                   <div class="vision thin">
                     <h3 class=""></h3>
                     <p></p>
                   </div>
                   <div class="mission thin">
                    <h3 class=""></h3>
                    <p></p>
                  </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                   <div class="values thin">
                     <h3></h3>
                     <p></p>
                </div>
                 </div>
               </div>
               <div class="row">
                 <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 m-auto">
                   <div class="motto text-center">
                     <h3></h3>
                     <p></p>
                   </div>
                 </div>
               </div>
            </div>
        )
    }
}

export default About
