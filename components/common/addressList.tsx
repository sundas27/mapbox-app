import React from 'react';
import _ from 'lodash';
import ListGroup from 'react-bootstrap/ListGroup';

import { ILocation, IViewPort } from '../../interfaces';


interface IAddressListProps {
  locations: ILocation[];
  setViewPort: (location : IViewPort) => void;
}

function AddressList({ locations, setViewPort } : IAddressListProps) {

  const handleClick = (event : any) => {
    let selectedLocationName = event.target.innerText;
    const currentLocation = locations?.filter((location: ILocation) => {
        return location?.company === selectedLocationName
    })
    setViewPort(currentLocation[0]?.viewPort || {});
  }

  return (
    <ListGroup horizontal>
      {locations.map(
        (location: ILocation) =>
      <ListGroup.Item
        action
        className="d-flex justify-content-between align-items-start"
        onClick={(value) => handleClick(value)}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{location.company}</div>
        </div>
      </ListGroup.Item>
        )}
    </ListGroup>
  )
}

export default AddressList;