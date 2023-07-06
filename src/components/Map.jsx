// import { useState } from "react";
import styles from "./Map.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  // const [mapPosition] = useState(40, 0);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[40, 0]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker mapPosition={[40, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default Map;
