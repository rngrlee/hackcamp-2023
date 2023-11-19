import { useEffect } from 'react';
import './mapFiles/jquery-jvectormap-2.0.5.css';
import $ from 'jquery';
import './mapFiles/jquery-jvectormap-2.0.5.min.js';
import './mapFiles/jquery-jvectormap-europe-merc.js';

const JVectorMapComponent = () => {
  useEffect(() => {
    $(function () {
      $('#world-map').vectorMap({
        map: 'europe_merc',
        onRegionClick: function (event, code) {
          console.log('Success! ' + code + ' clicked.');
        },
      });
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div id="world-map" style={{ width: '600px', height: '400px' }}></div>
  );
};

export default JVectorMapComponent;
