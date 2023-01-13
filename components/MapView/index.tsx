import React, { useRef } from 'react';

export const MapView = () => {
    
    const mapRef = useRef<HTMLDivElement>(null);

    return <div ref={mapRef} className='map' />
}