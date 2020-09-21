import React, { Component } from 'react'

export class Team extends Component {
    render() {
        return (
            <div className="container">
            <div class="row pt-5 mb-3">
                <div class="col-md-12">
                  <h1 class="text-center">Our Team</h1>
                </div>
              </div>
              
              <div class="row team mb-5">
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 pt-5">
                  <img class="rounded-circle" src="" alt="" />
                  <div class="team-info pt-3">
                    <p class="text-center name"></p>
                    <p class="text-center post"></p>
                    <p class="text-center call"></p>
                    <p class="text-center mail"></p>
                  </div>              
                </div>
                
                </div>
              </div>
        )
    }
}

export default Team
