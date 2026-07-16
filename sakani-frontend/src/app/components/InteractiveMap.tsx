import { useEffect, useRef, useState } from "react";

interface MapProps {
  lat?: number;
  lng?: number;
  onChange?: (lat: number, lng: number) => void;
  readonly?: boolean;
}

export default function InteractiveMap({ lat, lng, onChange, readonly = false }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Default to Cairo coordinates
  const defaultLat = lat || 30.0444;
  const defaultLng = lng || 31.2357;

  useEffect(() => {
    let mapInstance: any = null;
    let markerInstance: any = null;
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const loadGoogleMaps = () => {
      if ((window as any).google && (window as any).google.maps) {
        initGoogleMap();
        return;
      }
      
      const scriptId = "google-maps-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMapCallback`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      (window as any).initGoogleMapCallback = () => {
        initGoogleMap();
      };
    };

    const initGoogleMap = () => {
      if (!containerRef.current) return;
      const maps = (window as any).google.maps;
      const center = { lat: defaultLat, lng: defaultLng };
      
      mapInstance = new maps.Map(containerRef.current, {
        center,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
      });

      markerInstance = new maps.Marker({
        position: center,
        map: mapInstance,
        draggable: !readonly,
      });

      if (!readonly && onChange) {
        mapInstance.addListener("click", (e: any) => {
          const clickedLat = e.latLng.lat();
          const clickedLng = e.latLng.lng();
          markerInstance.setPosition(e.latLng);
          onChange(clickedLat, clickedLng);
        });

        markerInstance.addListener("dragend", (e: any) => {
          const draggedLat = e.latLng.lat();
          const draggedLng = e.latLng.lng();
          onChange(draggedLat, draggedLng);
        });
      }
      setMapLoaded(true);
    };

    const loadLeaflet = () => {
      const linkId = "leaflet-css-link";
      if (!document.getElementById(linkId)) {
        const link = document.createElement("link");
        link.id = linkId;
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      const scriptId = "leaflet-js-script";
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.async = true;
        script.onload = () => initLeafletMap();
        document.head.appendChild(script);
      } else {
        if ((window as any).L) {
          initLeafletMap();
        } else {
          script.addEventListener("load", () => initLeafletMap());
        }
      }
    };

    const initLeafletMap = () => {
      if (!containerRef.current || mapInstance) return;
      const L = (window as any).L;
      if (!L) return;

      const center = [defaultLat, defaultLng];
      mapInstance = L.map(containerRef.current, {
        zoomControl: !readonly,
        attributionControl: false,
      }).setView(center, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapInstance);

      const defaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      markerInstance = L.marker(center, {
        draggable: !readonly,
        icon: defaultIcon,
      }).addTo(mapInstance);

      if (!readonly && onChange) {
        mapInstance.on("click", (e: any) => {
          const { lat: clickedLat, lng: clickedLng } = e.latlng;
          markerInstance.setLatLng(e.latlng);
          onChange(clickedLat, clickedLng);
        });

        markerInstance.on("dragend", () => {
          const newPos = markerInstance.getLatLng();
          onChange(newPos.lat, newPos.lng);
        });
      }
      setMapLoaded(true);
    };

    if (apiKey) {
      loadGoogleMaps();
    } else {
      loadLeaflet();
    }

    return () => {
      if (mapInstance && typeof mapInstance.remove === "function") {
        try {
          mapInstance.remove();
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, [lat, lng, readonly]);

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-2xl overflow-hidden min-h-[220px]">
      <div ref={containerRef} className="w-full h-full min-h-[220px]" style={{ zIndex: 1 }} />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 z-10 text-xs text-gray-400">
          جاري تحميل الخريطة...
        </div>
      )}
    </div>
  );
}
