"use client";
import React, { useState } from 'react';
import { Card, Text, Group, Stack, Badge, Button, SegmentedControl, ThemeIcon, Tooltip, ActionIcon } from '@mantine/core';
import { IconSatellite, IconMap, IconZoomIn, IconZoomOut, IconStack, IconTarget, IconAlertTriangle } from '@tabler/icons-react';

export default function AdvancedMapView() {
  const [mapType, setMapType] = useState('satellite');
  const [showHotspots, setShowHotspots] = useState(true);

  const hotspots = [
    { id: 1, lat: '23.45°N', lon: '77.89°E', risk: 'high', yield: 'Low (1.2 t/ha)', type: 'Stress Detection', color: '#f44336' },
    { id: 2, lat: '23.47°N', lon: '77.91°E', risk: 'medium', yield: 'Moderate (2.8 t/ha)', type: 'Moisture Deficit', color: '#ff9800' },
    { id: 3, lat: '23.43°N', lon: '77.87°E', risk: 'low', yield: 'High (3.9 t/ha)', type: 'Healthy', color: '#4caf50' },
  ];

  return (
    <Card className="clean-card" p="lg" style={{ height: '100%' }}>
      {/* Header Controls */}
      <Group justify="space-between" mb="md">
        <div>
          <Group gap="sm" mb={4}>
            <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
              <IconMap size={24} />
            </ThemeIcon>
            <div>
              <Text size="lg" fw={700}>
                Advanced Yield Prediction Map
              </Text>
              <Text size="sm" c="dimmed">
                Satellite imagery with AI-detected variability hotspots
              </Text>
            </div>
          </Group>
        </div>
        <Group gap="xs">
          <ActionIcon variant="light" color="blue" size="lg">
            <IconZoomIn size={20} />
          </ActionIcon>
          <ActionIcon variant="light" color="blue" size="lg">
            <IconZoomOut size={20} />
          </ActionIcon>
          <ActionIcon variant="light" color="teal" size="lg">
            <IconStack size={20} />
          </ActionIcon>
        </Group>
      </Group>

      <Group mb="md" gap="sm">
        <SegmentedControl
          value={mapType}
          onChange={setMapType}
          data={[
            { label: '🛰️ Satellite', value: 'satellite' },
            { label: '🗺️ Terrain', value: 'terrain' },
            { label: '📊 NDVI', value: 'ndvi' },
          ]}
          styles={{
            root: { background: 'rgba(76, 175, 80, 0.08)' },
          }}
        />
        <Button
          variant={showHotspots ? 'filled' : 'light'}
          color="orange"
          size="sm"
          leftSection={<IconTarget size={16} />}
          onClick={() => setShowHotspots(!showHotspots)}
        >
          {showHotspots ? 'Hide' : 'Show'} Hotspots
        </Button>
      </Group>

      {/* Map Container with Satellite Image */}
      <div style={{ 
        position: 'relative', 
        height: 450,
        borderRadius: 12,
        overflow: 'hidden',
        border: '2px solid rgba(76, 175, 80, 0.2)',
        background: '#f5f5f5'
      }}>
        {/* Satellite Image Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: mapType === 'satellite' 
            ? 'url(https://earthobservatory.nasa.gov/ContentFeature/PrecisionFarming/images/farmland.jpg)'
            : mapType === 'ndvi'
            ? 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/NDVI_062003.png/800px-NDVI_062003.png)'
            : 'url(https://tile.openstreetmap.org/12/2048/2048.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: mapType === 'ndvi' ? 'brightness(1.1) contrast(1.2)' : 'none'
        }} />

        {/* Overlay Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none'
        }} />

        {/* Hotspot Markers */}
        {showHotspots && hotspots.map((spot, idx) => (
          <Tooltip
            key={spot.id}
            label={
              <div>
                <Text size="xs" fw={700}>{spot.type}</Text>
                <Text size="xs">Location: {spot.lat}, {spot.lon}</Text>
                <Text size="xs">Predicted Yield: {spot.yield}</Text>
              </div>
            }
            withArrow
          >
            <div
              style={{
                position: 'absolute',
                top: `${30 + idx * 120}px`,
                left: `${150 + idx * 180}px`,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `${spot.color}30`,
                border: `3px solid ${spot.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                animation: 'pulse 2s infinite',
                zIndex: 10
              }}
            >
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: spot.color,
                boxShadow: `0 0 20px ${spot.color}`
              }} />
            </div>
          </Tooltip>
        ))}

        {/* Map Legend */}
        <div style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '12px 16px',
          borderRadius: 8,
          border: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <Text size="xs" fw={700} mb={6}>Risk Levels</Text>
          <Stack gap={4}>
            <Group gap={8}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4caf50' }} />
              <Text size="xs">Low Risk (≥ 3.5 t/ha)</Text>
            </Group>
            <Group gap={8}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff9800' }} />
              <Text size="xs">Medium (2-3.5 t/ha)</Text>
            </Group>
            <Group gap={8}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f44336' }} />
              <Text size="xs">High Risk (&lt; 2 t/ha)</Text>
            </Group>
          </Stack>
        </div>

        {/* Coordinates Overlay */}
        <div style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '8px 12px',
          borderRadius: 6,
          border: '1px solid rgba(0,0,0,0.1)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <Group gap={12}>
            <Badge size="sm" variant="dot" color="green">Live</Badge>
            <Text size="xs" fw={600}>23.4567°N, 77.8901°E</Text>
            <Badge size="sm" color="blue">Zoom: 15x</Badge>
          </Group>
        </div>
      </div>

      {/* Hotspot Details Table */}
      <Stack gap="xs" mt="md">
        <Text size="sm" fw={700} c="dimmed" tt="uppercase">
          Detected Variability Hotspots
        </Text>
        {hotspots.map((spot) => (
          <Card
            key={spot.id}
            p="sm"
            style={{
              background: `linear-gradient(135deg, ${spot.color}08 0%, ${spot.color}15 100%)`,
              border: `1px solid ${spot.color}30`,
            }}
          >
            <Group justify="space-between">
              <Group gap="sm">
                <ThemeIcon size={32} radius="md" color={spot.risk === 'high' ? 'red' : spot.risk === 'medium' ? 'orange' : 'green'}>
                  {spot.risk === 'high' ? <IconAlertTriangle size={18} /> : <IconTarget size={18} />}
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={600}>{spot.type}</Text>
                  <Text size="xs" c="dimmed">{spot.lat}, {spot.lon}</Text>
                </div>
              </Group>
              <div style={{ textAlign: 'right' }}>
                <Badge size="sm" variant="filled" color={spot.risk === 'high' ? 'red' : spot.risk === 'medium' ? 'orange' : 'green'}>
                  {spot.risk.toUpperCase()}
                </Badge>
                <Text size="xs" mt={4}>{spot.yield}</Text>
              </div>
            </Group>
          </Card>
        ))}
      </Stack>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </Card>
  );
}
