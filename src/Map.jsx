/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable array-callback-return */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PortalWithState } from 'react-portal';

import storeData from './stores';
import Form from './Form';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  overflow: hidden;

`;
const ModalBody = styled.section`
  width: 50%;
  max-width: 100%;
  max-height: 80%;
  margin: auto;
  overflow: auto;
  background-color: #525174;
  color: white;
`;
const RateButton = styled.button`
  padding: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-size: large;
  border: 3px solid #525174;
  font-family: 'Shadows Into Light';
  color: white;
  margin-top: 4rem;
  background-color: #799496;
`;
function Map() {
  const [currentStore, setCurrentStore] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 36.7507068, lng: -99.786444 },
      zoom: 2,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: '',
    });

    const locationButton = document.createElement('button');
    locationButton.textContent = 'Find a Bathroom Near You';
    locationButton.style = 'font-family: Shadows Into Light; color: white; background-color: #799496; margin-top: 10px; font-size: large;';
    locationButton.classList.add('custom-map-control-button');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener('click', () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // setLat(position.coords.latitude);
            // setLng(position.coords.longitude);
            // setZoom(10);
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here');
            infoWindow.open(map);
            map.setCenter(pos);
            map.setZoom(10);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          },
        );
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? 'Error: The Geolocation service failed.'
          : "Error: Your browser doesn't support geolocation.",
      );
      infoWindow.open(map);
    }
    const markTheMap = () => {
      const markers = storeData.map((store) => {
        const marker = new google.maps.Marker({
          position: store.coords,
          name: store.name,
          id: store.id,
          rating: store.rating,
          map,
        });
        return marker;
      });
    };

    function makeInfoWindowEvent() {
      const markers = storeData.map((store) => {
        const marker = new google.maps.Marker({
          position: store.coords,
          name: store.name,
          category: store.category,
          hours: store.hours,
          rating: store.rating,
          address: store.address,
          map,
        });

        marker.addListener('click', () => {
          const content = `<div style='background-color: #525174; color: white; padding: 10px; font-family: Khand, sans-serif;'><h2>${marker.name}</h2>`
          + `<p>${marker.category}</p>`
          + `<p>Hours: ${marker.hours}</p>`
          + `<p>Address: ${marker.address}</p>`
          + '<p>Visited this bathroom? Flush Flush what\'s the rush:</p>'
          + `<div>Average Rating: ${marker.rating}</div>`
          + '<button id="rate-button" style="background-color: #799496; color: white; font-family: Shadows Into Light; font-size: large;"/>Rate Bathroom</div>';
          infoWindow.setContent(content);
          infoWindow.open(map, marker);
        });
        google.maps.event.addListener(map, 'click', () => {
          infoWindow.close(map, marker);
        });
      });
    }
    markTheMap();
    makeInfoWindowEvent();
  }
  const renderPortal = () => (
    <ModalContainer onClick={(e) => setModalOpen(!modalOpen)}>
      <ModalBody onClick={(e) => {
        e.stopPropagation();
      }}
      >
        <Form />
      </ModalBody>
    </ModalContainer>
  );

  return (
    <div>
      <div>{initMap()}</div>
      <RateButton type="button" onClick={() => setModalOpen(!modalOpen)}>
        {!modalOpen ? 'Rate This Bathroom' : 'Hide Form'}
        {' '}
      </RateButton>
      {modalOpen
        ? (
          <PortalWithState defaultOpen closeOnEsc>
            {renderPortal}
          </PortalWithState>
        )
        : null}
    </div>
  );
}
export default Map;
