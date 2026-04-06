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

export default function GoogleMap({ latitude, longitude, title }: GoogleMapProps) {
  // Using Google Maps embed with location coordinates
  // This embed works without requiring an API key
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.5${Math.abs(latitude * 1000).toString().slice(-4)}${Math.abs(longitude * 1000).toString().slice(-4)}!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8e8e8e8e8e9%3A0x0!2sBail%20America%20Bail%20Bonds!5e0!3m2!1sen!2sus!4v1234567890`;

  return (
    <div className="w-full h-96 rounded-2xl border border-blue-200/50 overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title={title}
      />
    </div>
  );
}
