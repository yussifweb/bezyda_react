import React, { Component } from 'react'

export class Team extends Component {
    render() {
      const src = "images/" + this.props.src + ".png";
        return (
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 pt-5">
                  <img class="rounded-circle" src={src} alt={this.props.name} />
                  <div class="team-info pt-3">
                    <p class="text-center name">{this.props.name}</p>
                    <p class="text-center post">{this.props.post}</p>
                    <p class="text-center call">{this.props.tel}</p>
                    <p class="text-center mail">{this.props.mail}</p>
                  </div>              
                </div>        
        )
    }
}

export default Team
