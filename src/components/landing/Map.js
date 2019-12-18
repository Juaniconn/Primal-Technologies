import React from 'react'
import Map_Api from './Map_Api'
function Map(){
    return(
        <div className="map">
          <div className="container">
            <div className="map_nodeWrapper"><iframe width="100%" src="https://maps.google.com/maps?width=100%&height=400&hl=es&coord=31.739669, -106.427940&q=Valle%20de%20Ju%C3%A1rez%206445%2C%20San%20Lorenzo%20Cd%20Ju%C3%A1rez%2C%20Chih.+(Primal%20Technologies)&ie=UTF8&t=&z=17&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/calcular-ruta.html"></a></iframe></div>
            <div className="map_infoWrapper">
              <div className="map_iconItem">
                <i className="icon-location"></i>
              </div>
              <div className="map_infoItem">
                <p>Open the map</p>
                <i className="icon-cheveron-down"></i>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Map