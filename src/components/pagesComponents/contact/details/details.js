import React, { useRef, useState } from 'react';
import cx from 'classnames';
import * as styles from './details.module.css';
import {
  heading__500,
  body,
  body__bold,
} from '../../../../styles/fonts.module.css';
import TextArrowButton from '../../../buttons/textArrowButton/textArrowButton';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const markers = [
  [36.201288, -83.539968],
  [32.503276, -96.536102],
];
const centerPosition = [
  (markers[0][0] + markers[1][0]) / 2,
  (markers[0][1] + markers[1][1]) / 2,
];
const defaultZoom = 4;
const minZoom = 3;
const maxZoom = 16;

const ContactDetails = () => {
  const mapRef = useRef(null);
  const [position, setPosition] = useState(centerPosition);
  const MarkerIcon = new Icon({
    iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='56'%3E%3Cpath fill-rule='evenodd' d='M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z'/%3E%3C/svg%3E`,
    iconSize: [46, 56],
    iconAnchor: [23, 56],
  });

  const changeLocation = (coords) => {
    setPosition(coords);
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className={styles.details}>
      <h3 className={cx(styles.heading, heading__500)}>Contact Details</h3>
      <div className={styles.offices}>
        <Office
          name={'Main Office'}
          action={() => {
            changeLocation(markers[0]);
          }}
        >
          <span>Mail : archone@mail.com</span>
          <span>Address : 1892 Chenoweth Drive TN</span>
          <span>Phone : 123-456-3451</span>
        </Office>
        <Office
          name={'Office II'}
          action={() => {
            changeLocation(markers[1]);
          }}
        >
          <span>Mail : archtwo@mail.com</span>
          <span>Address : 3399 Wines Lane TX</span>
          <span>Phone : 832-123-4321</span>
        </Office>
      </div>

      <div ref={mapRef} className={styles.mapContainer}>
        <MapContainer
          center={centerPosition}
          zoom={defaultZoom}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution={'<a href="http://osm.org/copyright">OpenStreetMap</a>'}
            url={'https://{s}.tile.osm.org/{z}/{x}/{y}.png'}
            maxZoom={maxZoom}
            minZoom={minZoom}
          />
          {markers.map((pos) => (
            <Marker
              position={pos}
              icon={MarkerIcon}
              key={`marker_${pos[0]}_${pos[1]}`}
            />
          ))}
          <ChangeLocation position={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default ContactDetails;

function Office({ name, action = () => {}, children }) {
  return (
    <div className={styles.office}>
      <h4 className={body__bold}>{name}</h4>
      <p className={body}>{children}</p>
      <TextArrowButton additionalClasses={[styles.viewButton]} onClick={action}>
        View on Map
      </TextArrowButton>
    </div>
  );
}
function ChangeLocation({ position }) {
  const map = useMap();
  map.panTo(position);
}
