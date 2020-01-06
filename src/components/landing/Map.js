import React, { Component } from 'react'

class Map extends Component {
  constructor() {
    super()
    this.hideRef = React.createRef()

  }

  showOverlay = (e) => {
    if (this.hideRef.current.classList.contains("fade-out")) {
      this.hideRef.current.classList.remove("fade-out");
    }
    this.hideRef.current.classList.add("fade-in");
  }

  hideOverlay = (e) => {
    if (this.hideRef.current.classList.contains("fade-in")) {
      this.hideRef.current.classList.remove("fade-in");
    }
    this.hideRef.current.classList.add('fade-out')
  }

  render() {
    return (
      <section className="map">
        <div className="maps_container">
          <div className="map_nodeWrapper" onMouseLeave={this.showOverlay}><iframe title="address" width="100%" src="https://maps.google.com/maps?width=100%&height=400&hl=es&coord=31.739669, -106.427940&q=Valle%20de%20Ju%C3%A1rez%206445%2C%20San%20Lorenzo%20Cd%20Ju%C3%A1rez%2C%20Chih.+(Primal%20Technologies)&ie=UTF8&t=&z=17&iwloc=B&output=embed"><a href="https://www.mapsdirections.info/calcular-ruta.html"></a></iframe></div>
          <div
            ref={this.hideRef}
            onClick={this.hideOverlay}
            className="map_infoWrapper"
          >
            <div className="map_iconItem">
              <i className="icon-location"></i>
            </div>
            <div className="map_infoItem">
              <p>Open the map</p>
              <i className="icon-cheveron-down"></i>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Map