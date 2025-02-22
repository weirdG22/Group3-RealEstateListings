import React from 'react';
import { useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarker } from "react-icons/fa";
import 'leaflet/dist/leaflet.css'; // Required for Leaflet CSS
import L from "leaflet";


// This is for map information
const faMapMarkerSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M10 0C4.477 0 0 4.477 0 10c0 4.935 3.054 9.168 7.318 11.206L15 30l7.682-8.794C26.946 19.168 30 14.935 30 10c0-5.523-4.477-10-10-10zm0 15a5 5 0 110-10 5 5 0 010 10z"/></svg>`;
const customIcon = new L.DivIcon({
    className: "custom-icon",
    html: `<div style="width: 30px; height: 30px; display: flex; justify-content: center; align-items: center;">${faMapMarkerSVG}</div>`,
    iconSize: [15, 15],  
    iconAnchor: [15, 30], 
  });
  
  const ListingsMap = ({ searchedAddress }) => {
    const [position, setPosition] = useState([40.0, -86.0]); // Initial position
    const [address, setAddress] = useState(searchedAddress);
  
    // Function to get coordinates from the address using Nominatim API
    const geocodeAddress = async (address) => {
      if (!address) return;
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setPosition([lat, lon]);
      }
    };
  
    // Whenever the searchedAddress prop changes, geocode the address
    useEffect(() => {
      geocodeAddress(searchedAddress);
    }, [searchedAddress]);
  
    // Update the map center position
    const MapUpdater = ({ position }) => {
      const map = useMap();
      map.setView(position, 13); // You can adjust the zoom level here
      return null;
    };
  
    return (
      <div className="w-[100%] h-[100%]">
        <MapContainer center={position} zoom={10} style={{ height: "100%", width: "100%", zIndex: 25 }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          
          <Marker position={position} icon={customIcon}>
            <Popup>{searchedAddress}</Popup>
          </Marker>
          
          <MapUpdater position={position} />
        </MapContainer>
      </div>
    );
  };
  

export default ListingsMap;