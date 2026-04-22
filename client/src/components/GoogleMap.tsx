/*
 * DESIGN: Velocity Minimalism — Google Map Component
 * Interactive map using Leaflet.js with location markers
 */

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  latitude?: number;
  longitude?: number;
  title?: string;
  zoom?: number;
  query?: string; // address string — uses embed iframe instead of Leaflet
}

export default function GoogleMap({
  latitude = 30.0667,
  longitude = -94.7667,
  title = "Bail America Liberty",
  zoom = 14,
  query,
}: GoogleMapProps) {
  // If an address query is provided, use a simple OpenStreetMap embed iframe
  if (query) {
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik&marker=${encodeURIComponent(query)}&query=${encodeURIComponent(query)}`;
    return (
      <iframe
        title="Location map"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(query.replace(/\+/g, " "))}&output=embed`}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Dynamically load Leaflet
    const loadLeaflet = async () => {
      // Load Leaflet CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Load Leaflet JS
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = () => {
        const L = (window as any).L;

        // Initialize map
        if (!mapInstance.current && mapContainer.current) {
          mapInstance.current = L.map(mapContainer.current).setView(
            [latitude, longitude],
            zoom
          );

          // Add OpenStreetMap tiles
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }).addTo(mapInstance.current);

          // Add main location marker (red)
          const mainMarker = L.marker([latitude, longitude], {
            icon: L.divIcon({
              className: "custom-div-icon",
              html: `<div style='background-color:#dc2626; width: 40px; height: 40px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 4px solid white; box-shadow: 0 4px 12px rgba(220,38,38,0.6);'></div>`,
              iconSize: [40, 52],
              iconAnchor: [20, 52],
            }),
          }).addTo(mapInstance.current);

          mainMarker.bindPopup(`
            <div style="text-align: center; padding: 15px; min-width: 250px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              <h3 style="margin: 0 0 10px 0; color: #0066cc; font-size: 18px; font-weight: 700;">🏢 ${title}</h3>
              <p style="margin: 0 0 5px 0; font-size: 14px; color: #333; font-weight: 600;">2317 Beaumont Ave</p>
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Liberty, TX 77575</p>
              <p style="margin: 0 0 10px 0; font-size: 13px; color: #666;">Open 24/7</p>
              <a href="tel:+19363341110" style="display: inline-block; background: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: 600; font-size: 14px; margin-top: 5px;">📞 Call (936) 334-1110</a>
            </div>
          `).openPopup();

          // Add circle to highlight the area
          L.circle([latitude, longitude], {
            color: "#0066cc",
            fillColor: "#0066cc",
            fillOpacity: 0.1,
            radius: 500,
          }).addTo(mapInstance.current);
        }
      };
      document.head.appendChild(script);
    };

    loadLeaflet();

    return () => {
      // Cleanup on unmount
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [latitude, longitude, zoom, title]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-96 rounded-2xl border border-blue-200/50 overflow-hidden shadow-lg"
      style={{
        minHeight: "500px",
      }}
    />
  );
}
