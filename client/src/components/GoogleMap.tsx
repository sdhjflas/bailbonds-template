/*
 * DESIGN: Velocity Minimalism — Google Map Component
 * Embedded map with location marker using iframe
 */

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  title: string;
  zoom?: number;
}

export default function GoogleMap({ latitude, longitude, title, zoom = 15 }: GoogleMapProps) {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.5${latitude.toString().slice(-4)}${longitude.toString().slice(-4)}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i${1024 * zoom}!2i${768 * zoom}!4f13.1!3m3!1m2!1s0x${Math.floor(longitude * 1000000)}%3A0x${Math.floor(latitude * 1000000)}!2sBail%20America%20Liberty!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <div className="w-full h-96 rounded-2xl border border-blue-200/50 overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDummyKey&q=${latitude},${longitude}`}
      />
    </div>
  );
}
