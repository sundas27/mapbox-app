import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl, Marker, NavigationControl, ViewStateChangeEvent } from 'react-map-gl';
import { Row } from 'react-bootstrap';

import "mapbox-gl/dist/mapbox-gl.css"; 
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

import { GEO_LOCATE_CONTROL_STYLE } from '../../utils/geocodeLocation';
import { ILocation, IViewPort } from '../../interfaces';
import AddressList from '../common/addressList';

interface IMapProps {
  locations: ILocation[];
}

function Map({ locations } : IMapProps) {

  const [viewPort, setViewPort] = useState<IViewPort>({});

  // TODO: This component should be re-rendered when viewport is changed after selecting location in list group
  // Also Needed to figure out the check that should be applied here so that user's own location is set only once
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        let newViewport = {
          width: 80,
          height: 80,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 12
        }
        setViewPort(newViewport);
      })
    }, [viewPort]);
      
    const onMove = (event : ViewStateChangeEvent) => {
        const coords = event.viewState;
         setViewPort({ width: 80,
            height: 80, longitude: coords.longitude, latitude: coords.latitude, zoom: coords.zoom})
    }

    return (
      <>
      {locations?.length > 0 && (
        <Row>
          <AddressList setViewPort={setViewPort} locations={locations}/>
        </Row>
      )}
      <Row>
      <div className='mapContainer'>
        <ReactMapGL {...viewPort}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
          attributionControl
          doubleClickZoom
          scrollZoom
          keyboard
          dragPan
          onMove={onMove}
          styleDiffing>
          <GeolocateControl
            style={GEO_LOCATE_CONTROL_STYLE}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            showUserHeading={true}
          />
          {!!viewPort.longitude && !!viewPort.latitude && (
            <Marker
              longitude={viewPort.longitude}
              latitude={viewPort.latitude}>
              <div className="marker temporary-marker"><span></span></div>
            </Marker>
          )}
          <NavigationControl
              showCompass
              showZoom
              visualizePitch
              position="top-left"
          />
        </ReactMapGL>
      </div>
      </Row>
      </>
    )
}

export default Map;