import React, { useEffect, useRef } from 'react';

function GoogleMap({ latitude, longitude }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const center = { lat: latitude, lng: longitude }; // Usamos las coordenadas pasadas como props

    const mapOptions = {
      center: center,
      zoom: 13,
    };

    let map = null;

    // Función que se ejecutará cuando la API de Google Maps se haya cargado
    const onMapLoad = () => {
      map = new window.google.maps.Map(mapRef.current, mapOptions);

      new window.google.maps.Marker({
        position: center,
        map: map,
        title: 'Ubicación Personalizada',
      });
    };

    // Verificar si la API de Google Maps ya está disponible
    if (window.google && window.google.maps) {
      onMapLoad();
    } else {
      // Si no está disponible, esperar a que se cargue
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDaeEzhrrV_OKvK8288Kc069ijQuwdeL9o&libraries=places`;
      script.async = true;

      script.onload = onMapLoad; // Llamar a la función onMapLoad cuando se cargue el script

      document.head.appendChild(script);
    }

    return () => {
      // Limpiar el mapa si es necesario al desmontar el componente
      if (map) {
        map = null;
      }
    };
  }, [latitude, longitude]);

  return (
    <div>
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}

export default GoogleMap;
