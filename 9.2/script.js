function createMapMarker() {
    // TODO: add your own access token
    mapboxgl.accessToken = 'pk.eyJ1IjoidW5uaWtyaXNobmFubWNhIiwiYSI6ImNreDc1dHpoMDE0c3EycG81ZWpuZm83cW8ifQ.ogEOmQoDECk4in0xKYMg4Q';
  
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.091542, 42.358862],
      zoom: 12,
    });
    var marker = new mapboxgl.Marker()
    .setLngLat([-71.101,42.358])
    .addTo(map);
  
    // TODO: add a marker to the map
  }

  
  // Do not edit the code below
  window.onload = () => {
    createMapMarker();
  };
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { createMapMarker };
  }