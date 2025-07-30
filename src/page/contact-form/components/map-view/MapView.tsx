import type { JSX } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "./MapView.module.css";

const MapView = (): JSX.Element => {
  return (
    <div className={Style.mapContainer}>
      <div className={Style.bgColor}> </div>
      <div className={Style.mapCard}>
        <MapContainer
          center={[13.061301115279695, 80.26008282523208]}
          zoom={13}
          scrollWheelZoom={false}
          className={Style.mapView}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[13.061301115279695, 80.26008282523208]}>
            <Popup>
              Floor 5, Executive Zone, Shakti Tower 1, 766, Anna Salai, Thousand
              Lights, Chennai, Tamil Nadu 600002
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
