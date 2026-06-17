"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Crosshair } from "@/lib/phosphor";
import { experiences, categoryGradients } from "@/config/site";
import type { Map as MapboxMap } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = "pk.eyJ1IjoiZGFuaWVsY2FsZWJlNzE5IiwiYSI6ImNtcDJ6anFzNjBneDUyd29zeGpyM2t0emUifQ.2NaDKNIi6tach7YSWxMPtQ";

const defaultCenter: [number, number] = [-43.9386, -19.9208];

const pins = [
  { id: "1", lng: -43.9386, lat: -19.9208, title: "Roda de Samba da Praça Sete", category: "Música", color: "#7B2CBF" },
  { id: "2", lng: -43.9450, lat: -19.9150, title: "Workshop de Massa Fresca", category: "Gastronomia", color: "#F97316" },
  { id: "3", lng: -43.9300, lat: -19.9250, title: "Mostra Ocupação 44", category: "Arte", color: "#BE123C" },
  { id: "4", lng: -43.9500, lat: -19.9300, title: "Trilha Ecológica Mangabeiras", category: "Natureza", color: "#22C55E" },
  { id: "5", lng: -43.9200, lat: -19.9100, title: "Eletrônica no Theatro", category: "Vida Noturna", color: "#581C87" },
  { id: "6", lng: -43.9350, lat: -19.9350, title: "Clube do Livro na Leitura", category: "Gastronomia", color: "#F97316" },
];

function getIsDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("hiven-theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getMapStyle(isDark: boolean): string {
  return isDark ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11";
}

function addPinsToMap(map: MapboxMap, mapboxgl: typeof import("mapbox-gl")["default"]) {
  pins.forEach((pin) => {
    const el = document.createElement("div");
    el.style.width = "20px";
    el.style.height = "20px";
    el.style.borderRadius = "50%";
    el.style.backgroundColor = pin.color;
    el.style.border = "3px solid #FFF8F5";
    el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    el.style.cursor = "pointer";
    el.style.transformOrigin = "center bottom";

    const popup = new mapboxgl.Popup({
      offset: 30,
      closeButton: false,
      className: "hiven-popup",
    }).setHTML(`
      <div style="padding: 4px 0;">
        <div style="font-size:13px;font-weight:600;font-family:Inter,sans-serif;">${pin.title}</div>
        <div style="font-size:11px;font-family:Inter,sans-serif;margin-top:2px;">${pin.category}</div>
      </div>
    `);

    new mapboxgl.Marker({ element: el })
      .setLngLat([pin.lng, pin.lat])
      .setPopup(popup)
      .addTo(map);
  });
}

function addUserMarker(map: MapboxMap, mapboxgl: typeof import("mapbox-gl")["default"], center: [number, number]) {
  const outer = document.createElement("div");
  outer.style.width = "24px";
  outer.style.height = "24px";
  outer.style.borderRadius = "50%";
  outer.style.background = "rgba(59,130,246,0.2)";
  outer.style.border = "2px solid #3B82F6";
  outer.style.boxShadow = "0 0 12px rgba(59,130,246,0.4)";
  outer.style.transformOrigin = "center center";

  const inner = document.createElement("div");
  inner.style.width = "10px";
  inner.style.height = "10px";
  inner.style.borderRadius = "50%";
  inner.style.background = "#3B82F6";
  inner.style.position = "absolute";
  inner.style.top = "50%";
  inner.style.left = "50%";
  inner.style.transform = "translate(-50%,-50%)";
  outer.appendChild(inner);

  new mapboxgl.Marker({ element: outer })
    .setLngLat(center)
    .addTo(map);
}

function getUserLocation(): Promise<[number, number] | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve([pos.coords.longitude, pos.coords.latitude]),
      () => resolve(null),
      { timeout: 5000, maximumAge: 60000 }
    );
  });
}

export function LiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MapboxMap | null>(null);
  const mapboxglRef = useRef<Awaited<typeof import("mapbox-gl")>["default"] | null>(null);
  const userCenter = useRef<[number, number]>(defaultCenter);

  const initMap = useCallback(async () => {
    if (!mapContainer.current || mapInstance.current) return;

    const mapboxgl = (await import("mapbox-gl")).default;
    mapboxgl.accessToken = TOKEN;
    mapboxglRef.current = mapboxgl;

    const geo = await getUserLocation();
    const center = geo ?? defaultCenter;
    userCenter.current = center;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: getMapStyle(getIsDark()),
      center,
      zoom: 14,
      pitch: 20,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "bottom-right");

    map.on("load", () => {
      map.resize();
      addPinsToMap(map, mapboxgl);
      if (geo) addUserMarker(map, mapboxgl, geo);
    });

    mapInstance.current = map;
  }, []);

  useEffect(() => {
    initMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [initMap]);

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      const map = mapInstance.current;
      const mbgl = mapboxglRef.current;
      if (!map || !mbgl) return;

      const isDark = getIsDark();
      const newStyle = getMapStyle(isDark);
      const currentStyle = map.getStyle().glyphs;

      if (currentStyle?.includes("dark") && !isDark) {
        map.setStyle(newStyle);
        map.once("style.load", () => {
          addPinsToMap(map, mbgl);
          if (userCenter.current !== defaultCenter) addUserMarker(map, mbgl, userCenter.current);
        });
      } else if (!currentStyle?.includes("dark") && isDark) {
        map.setStyle(newStyle);
        map.once("style.load", () => {
          addPinsToMap(map, mbgl);
          if (userCenter.current !== defaultCenter) addUserMarker(map, mbgl, userCenter.current);
        });
      }
    });

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          overline="Explore a cidade"
          title="Discover Around You"
          description="Mapa interativo com experiências geolocalizadas. Navegue, descubra e participe."
        />
      </div>

      <div className="mt-10 relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg relative"
        >
          <div ref={mapContainer} className="w-full h-[400px] sm:h-[500px] md:h-[600px]" />

          <div className="absolute top-4 left-4 z-10">
            <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full glass text-text-primary shadow-sm">
              {pins.length} experiências nas redondezas
            </span>
          </div>

          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-lg glass flex items-center justify-center shadow-sm text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => {
                const m = mapInstance.current;
                if (m) m.flyTo({ center: userCenter.current, zoom: 14, pitch: 20 });
              }}
            >
              <Crosshair size={18} weight="bold" />
            </button>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-3 overflow-x-auto scrollbar-hide">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex-shrink-0 w-56 rounded-xl overflow-hidden glass shadow-sm"
              >
                <div
                  className="w-full h-24"
                  style={{ background: categoryGradients[exp.categoryColor] ?? "var(--surface)" }}
                />
                <div className="p-2.5">
                  <div className="flex items-center gap-1">
                    <span
                      className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full text-text-on-dark"
                      style={{ backgroundColor: exp.categoryColor }}
                    >
                      {exp.category}
                    </span>
                  </div>
                  <h4 className="text-[12px] font-semibold text-text-primary mt-1">{exp.title}</h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={9} color="var(--text-secondary)" />
                    <span className="text-[10px] text-text-secondary">{exp.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .hiven-popup .mapboxgl-popup-content {
          border-radius: 12px !important;
          padding: 12px 16px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15) !important;
          border: 1px solid var(--border) !important;
          background: var(--elevated) !important;
          margin: 0 !important;
          color: var(--text-primary) !important;
        }
        .hiven-popup .mapboxgl-popup-content div {
          color: inherit !important;
        }
        .hiven-popup .mapboxgl-popup-tip {
          border-top-color: var(--elevated) !important;
        }
        .mapboxgl-popup-close-button {
          display: none !important;
        }
        .mapboxgl-ctrl-group {
          background: color-mix(in srgb, var(--elevated) 90%, transparent) !important;
          backdrop-filter: blur(12px) !important;
          border: 1px solid var(--border) !important;
          border-radius: 8px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
        }
        .mapboxgl-ctrl-group button {
          width: 32px !important;
          height: 32px !important;
          background-color: transparent !important;
        }
        .mapboxgl-ctrl-group button + button {
          border-top: 1px solid var(--border) !important;
        }
        .mapboxgl-ctrl-zoom-in, .mapboxgl-ctrl-zoom-out {
          background-image: none !important;
        }
        .mapboxgl-ctrl-icon {
          filter: invert(0.6) sepia(0.2) saturate(0) hue-rotate(0deg) brightness(0.4);
        }
      `}</style>
    </section>
  );
}
