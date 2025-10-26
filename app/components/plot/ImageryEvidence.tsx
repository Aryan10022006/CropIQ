"use client";
import React, { useState } from 'react';
import { Title, Card, Badge, Group, Text, Button, Stack } from '@mantine/core';
import { IconPhoto, IconDownload, IconMaximize, IconGitCompare } from '@tabler/icons-react';

export default function ImageryEvidence({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" mb="lg">
        <div>
          <Group gap="sm" mb={4}>
            <IconGitCompare size={24} color="#4caf50" />
            <div>
              <Title order={4} fw={700}>
                UAV High-Resolution Evidence
              </Title>
              <Text size="sm" c="dimmed">
                Drag the slider to compare before/after crop damage imagery
              </Text>
            </div>
          </Group>
        </div>
        <Group gap="sm">
          <Badge size="lg" variant="light" color="brand" leftSection={<IconPhoto size={14} />}>
            4K Resolution
          </Badge>
          <Button size="xs" variant="light" color="brand" leftSection={<IconDownload size={14} />}>
            Export
          </Button>
        </Group>
      </Group>

      <div style={{ 
        position: 'relative', 
        height: 480, 
        overflow: 'hidden', 
        borderRadius: 16,
        border: '2px solid #e9ecef',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        cursor: isDragging ? 'ew-resize' : 'default'
      }}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      >
        {/* Before Image */}
        <img 
          src={before} 
          alt="before" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            display: 'block',
            userSelect: 'none'
          }}
          draggable={false}
        />

        {/* After Image with Clip */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: `${pos}%`, 
          height: '100%', 
          overflow: 'hidden',
          borderRight: '4px solid #4caf50',
          boxShadow: '2px 0 12px rgba(76, 175, 80, 0.3)'
        }}>
          <img 
            src={after} 
            alt="after" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              display: 'block',
              position: 'absolute',
              left: 0,
              top: 0,
              userSelect: 'none'
            }}
            draggable={false}
          />
        </div>

        {/* Slider Handle */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: `${pos}%`,
          transform: 'translate(-50%, -50%)',
          width: 48,
          height: 48,
          backgroundColor: '#4caf50',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'ew-resize',
          boxShadow: '0 4px 12px rgba(76, 175, 80, 0.4), 0 0 0 4px rgba(76, 175, 80, 0.2)',
          zIndex: 10,
          pointerEvents: 'none',
          transition: 'transform 0.1s ease'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M15.5 5l-7 7 7 7M8.5 5l-7 7 7 7" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Labels */}
        <Badge
          size="lg"
          variant="filled"
          style={{ 
            position: 'absolute', 
            top: 20, 
            left: 20, 
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)'
          }}
        >
          BEFORE DAMAGE
        </Badge>
        <Badge
          size="lg"
          variant="filled"
          color="red"
          style={{ 
            position: 'absolute', 
            top: 20, 
            right: 20, 
            background: 'rgba(244, 67, 54, 0.9)',
            backdropFilter: 'blur(8px)'
          }}
        >
          AFTER DAMAGE
        </Badge>

        {/* Metadata */}
        <Stack gap={4} style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          padding: '12px 16px',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <Text size="xs" fw={600} c="dimmed">UAV Flight Data</Text>
          <Group gap="md">
            <Text size="xs">Oct 26, 2025 • 09:15 AM</Text>
            <Text size="xs">Altitude: 120m</Text>
            <Text size="xs">Resolution: 4K</Text>
          </Group>
        </Stack>

        {/* Range Input */}
        <input
          aria-label="Compare slider"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.currentTarget.value))}
          style={{ 
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'ew-resize',
            zIndex: 20
          }}
        />
      </div>

      {/* AI Analysis Summary */}
      <Card mt="lg" p="md" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)', border: '1px solid rgba(76, 175, 80, 0.2)' }}>
        <Group justify="space-between">
          <div>
            <Text size="sm" fw={600} mb={4}>
              🤖 AI Image Analysis Results
            </Text>
            <Text size="xs" c="dimmed">
              Damage detected: 32% crop loss • Hail impact pattern confirmed • Confidence: 96.8%
            </Text>
          </div>
          <Badge size="lg" variant="light" color="green">
            Verified
          </Badge>
        </Group>
      </Card>
    </Card>
  );
}

