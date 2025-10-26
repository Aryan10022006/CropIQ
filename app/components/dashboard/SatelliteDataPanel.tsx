"use client";
import React from 'react';
import { Card, Text, Group, Stack, Badge, ThemeIcon, SimpleGrid, Progress, Divider, Tabs } from '@mantine/core';
import { IconSatellite, IconWaveSine, IconEye, IconCloudDownload, IconCalendar, IconMapPin } from '@tabler/icons-react';

export default function SatelliteDataPanel() {
  const satellites = [
    {
      name: 'Sentinel-2',
      type: 'Multispectral',
      bands: 13,
      resolution: '10-60m',
      revisit: '5 days',
      status: 'active',
      lastPass: 'Oct 24, 2025',
      coverage: 92,
      color: '#2196f3'
    },
    {
      name: 'Landsat 8/9',
      type: 'Multispectral',
      bands: 11,
      resolution: '15-100m',
      revisit: '8 days',
      status: 'active',
      lastPass: 'Oct 22, 2025',
      coverage: 88,
      color: '#4caf50'
    },
    {
      name: 'Hyperion',
      type: 'Hyperspectral',
      bands: 242,
      resolution: '30m',
      revisit: '16 days',
      status: 'scheduled',
      lastPass: 'Oct 10, 2025',
      coverage: 76,
      color: '#9c27b0'
    },
  ];

  const spectralIndices = [
    { name: 'NDVI', value: 0.78, description: 'Vegetation Health', color: '#4caf50', status: 'Healthy' },
    { name: 'EVI', value: 0.65, description: 'Enhanced Vegetation', color: '#66bb6a', status: 'Good' },
    { name: 'SAVI', value: 0.72, description: 'Soil-Adjusted VI', color: '#81c784', status: 'Normal' },
    { name: 'NDRE', value: 0.58, description: 'Red-Edge Index', color: '#ff9800', status: 'Moderate' },
    { name: 'REIP', value: 0.48, description: 'Red-Edge Inflection', color: '#ffa726', status: 'Monitor' },
    { name: 'NDWI', value: 0.42, description: 'Water Index', color: '#2196f3', status: 'Low' },
    { name: 'PRI', value: 0.55, description: 'Photosynthetic Efficiency', color: '#8bc34a', status: 'Good' },
    { name: 'ΔNDVI', value: 0.12, description: 'Temporal Change', color: '#00bcd4', status: 'Improving' },
  ];

  const preprocessingSteps = [
    { step: 'Radiometric Correction', status: 'completed', progress: 100 },
    { step: 'Atmospheric Correction', status: 'completed', progress: 100 },
    { step: 'Cloud/Shadow Masking', status: 'completed', progress: 100 },
    { step: 'Spatial Resampling', status: 'in-progress', progress: 78 },
    { step: 'Temporal Interpolation', status: 'pending', progress: 0 },
    { step: 'Data Tiling', status: 'pending', progress: 0 },
  ];

  return (
    <Stack gap="lg">
      {/* Satellite Fleet Status */}
      <Card className="clean-card" p="lg">
        <Group justify="space-between" mb="md">
          <div>
            <Group gap="sm" mb={4}>
              <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                <IconSatellite size={24} />
              </ThemeIcon>
              <div>
                <Text size="lg" fw={700}>
                  Satellite Data Sources
                </Text>
                <Text size="sm" c="dimmed">
                  Multi-source fusion for comprehensive monitoring
                </Text>
              </div>
            </Group>
          </div>
          <Badge size="lg" variant="light" color="blue" leftSection={<IconCloudDownload size={14} />}>
            3 Sources Active
          </Badge>
        </Group>

        <SimpleGrid cols={3} spacing="md">
          {satellites.map((sat) => (
            <Card
              key={sat.name}
              p="md"
              style={{
                background: `linear-gradient(135deg, ${sat.color}10 0%, ${sat.color}20 100%)`,
                border: `1px solid ${sat.color}30`,
              }}
            >
              <Group justify="space-between" mb="sm">
                <Badge size="sm" variant="filled" color={sat.status === 'active' ? 'green' : 'orange'}>
                  {sat.status}
                </Badge>
                <Text size="xs" c="dimmed">
                  {sat.type}
                </Text>
              </Group>

              <Text size="lg" fw={700} mb="xs">
                {sat.name}
              </Text>

              <Stack gap={6} mb="sm">
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">Spectral Bands</Text>
                  <Text size="xs" fw={600}>{sat.bands}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">Resolution</Text>
                  <Text size="xs" fw={600}>{sat.resolution}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">Revisit Time</Text>
                  <Text size="xs" fw={600}>{sat.revisit}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">Last Pass</Text>
                  <Text size="xs" fw={600}>{sat.lastPass}</Text>
                </Group>
              </Stack>

              <Text size="xs" c="dimmed" mb={4}>Coverage</Text>
              <Progress value={sat.coverage} color={sat.color} size="sm" radius="xl" />
            </Card>
          ))}
        </SimpleGrid>
      </Card>

      {/* Spectral Indices Grid */}
      <Card className="clean-card" p="lg">
        <Group justify="space-between" mb="md">
          <div>
            <Text size="lg" fw={700}>
              Spectral Vegetation Indices
            </Text>
            <Text size="sm" c="dimmed">
              MATLAB-processed multispectral feature extraction
            </Text>
          </div>
          <Badge size="sm" variant="light" color="violet">
            8 Indices Computed
          </Badge>
        </Group>

        <SimpleGrid cols={4} spacing="sm">
          {spectralIndices.map((index) => (
            <Card
              key={index.name}
              p="sm"
              style={{
                background: `linear-gradient(135deg, ${index.color}08 0%, ${index.color}15 100%)`,
                border: `1px solid ${index.color}25`,
              }}
            >
              <Text size="xs" c="dimmed" mb={2}>
                {index.description}
              </Text>
              <Group justify="space-between" align="flex-end">
                <div>
                  <Text size="xl" fw={700} style={{ lineHeight: 1 }}>
                    {index.value}
                  </Text>
                  <Text size="xs" fw={600} c="dimmed">
                    {index.name}
                  </Text>
                </div>
                <Badge size="xs" variant="light" color={index.color}>
                  {index.status}
                </Badge>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Card>

      {/* MATLAB Preprocessing Pipeline */}
      <Card className="clean-card" p="lg">
        <Group justify="space-between" mb="md">
          <div>
            <Text size="lg" fw={700}>
              MATLAB Preprocessing Pipeline
            </Text>
            <Text size="sm" c="dimmed">
              Image Processing & Hyperspectral Toolbox
            </Text>
          </div>
          <Badge size="sm" variant="light" color="indigo">
            3/6 Stages Complete
          </Badge>
        </Group>

        <Stack gap="md">
          {preprocessingSteps.map((step, idx) => (
            <div key={idx}>
              <Group justify="space-between" mb={6}>
                <Group gap="xs">
                  <ThemeIcon
                    size={28}
                    radius="xl"
                    variant="light"
                    color={step.status === 'completed' ? 'green' : step.status === 'in-progress' ? 'blue' : 'gray'}
                  >
                    <Text size="xs" fw={700}>
                      {idx + 1}
                    </Text>
                  </ThemeIcon>
                  <Text size="sm" fw={600}>
                    {step.step}
                  </Text>
                </Group>
                <Badge
                  size="xs"
                  variant="light"
                  color={step.status === 'completed' ? 'green' : step.status === 'in-progress' ? 'blue' : 'gray'}
                >
                  {step.status}
                </Badge>
              </Group>
              <Progress
                value={step.progress}
                color={step.status === 'completed' ? 'green' : step.status === 'in-progress' ? 'blue' : 'gray'}
                size="xs"
                radius="xl"
              />
            </div>
          ))}
        </Stack>
      </Card>

      {/* Temporal Metrics */}
      <Card
        p="md"
        style={{
          background: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)',
          border: '1px solid rgba(63, 81, 181, 0.2)',
        }}
      >
        <Group gap="md">
          <ThemeIcon size={36} radius="xl" variant="light" color="indigo">
            <IconCalendar size={20} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={700}>
              Temporal Analysis Window
            </Text>
            <Text size="xs" c="dimmed">
              Processing ΔNDVI slope analysis • Phenology markers tracking • Multi-temporal stress detection
            </Text>
          </div>
        </Group>
      </Card>
    </Stack>
  );
}
