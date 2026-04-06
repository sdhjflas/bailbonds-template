/*
 * DESIGN: Velocity Minimalism — Google Map Component
 * Embedded map with location marker
 */
import { useEffect, useRef } from "react";

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  title: string;
  zoom?: number;
}

export default function GoogleMap({ latitude, longitude, title, zoom = 15 }: GoogleMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new google.maps.Map(mapContainer.current, {
      center: { lat: latitude, lng: longitude },
      zoom: zoom,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#0D0D0D" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ color: "#f0f0f0" }],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#e8f4f8" }],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [{ color: "#f0f0f0" }],
        },
      ],
    });

    // Add marker
    new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map.current,
      title: title,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: "#2563eb",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
      },
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
      content: `<div style="color: #0D0D0D; font-family: system-ui; padding: 8px;"><strong>${title}</strong></div>`,
      position: { lat: latitude, lng: longitude },
    });
    infoWindow.open(map.current);
  }, [latitude, longitude, title, zoom]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-96 rounded-2xl border border-blue-200/50 overflow-hidden shadow-lg"
    />
  );
}
