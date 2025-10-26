"use client";
import React, { useMemo, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Popup, LayersControl, CircleMarker, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mockFarms from '../../data/mockFarms';
import { Button, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';

export default function MapDisplay() {
  const router = useRouter();
  const [showPest, setShowPest] = useState(true);

  const style = (feature: any) => {
    const level = feature?.properties?.riskLevel;
    if (level === 'High') return { color: '#ff4d4f', weight: 2, fillOpacity: 0.2 };
    if (level === 'Medium') return { color: '#f7b801', weight: 2, fillOpacity: 0.15 };
    return { color: '#2ecc71', weight: 2, fillOpacity: 0.12 };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const props = feature.properties || {};
    const popupContent = document.createElement('div');
    const title = document.createElement('div');
    title.innerHTML = `<strong>${props.id} — ${props.farmerName}</strong>`;
    const btn = document.createElement('button');
    btn.innerText = 'Review Claim';
    btn.style.marginTop = '8px';
    btn.onclick = () => router.push(`/plot/${props.id}`);
    popupContent.appendChild(title);
    popupContent.appendChild(btn);
    layer.bindPopup(popupContent);
  };

  return (
    <div style={{ height: '80vh', position: 'relative' }}>
      <MapContainer center={[28.704, 78.034] as [number, number]} zoom={14} style={{ height: '100%', borderRadius: 12 }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <GeoJSON data={mockFarms as any} pathOptions={style as any} onEachFeature={onEachFeature} />

        <LayersControl position="topright">
          <LayersControl.Overlay name="Pest Risk" checked={showPest}>
            <LayerGroup>
              {/* mock pest hotspots */}
              <CircleMarker center={[28.705, 78.033] as [number, number]} radius={30} pathOptions={{ color: '#ff6b6b', fillOpacity: 0.15 }} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Soil Moisture">
            <LayerGroup>
              <CircleMarker center={[28.7035, 78.036] as [number, number]} radius={20} pathOptions={{ color: '#38b2ac', fillOpacity: 0.12 }} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}
