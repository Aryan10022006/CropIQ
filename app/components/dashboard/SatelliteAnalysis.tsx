"use client";
import React, { useState } from 'react';
import { Card, Text, Group, Stack, Badge, ThemeIcon, Tabs, Progress, Button, Divider } from '@mantine/core';
import { IconSatellite, IconPhoto, IconAnalyze, IconDownload } from '@tabler/icons-react';

export default function SatelliteAnalysis() {
  const [activeTab, setActiveTab] = useState('ndvi');

  const analyses = {
    ndvi: {
      name: 'NDVI Analysis',
      health: 78,
      status: 'Good',
      color: 'green',
      lastUpdate: '2 hours ago',
    },
    moisture: {
      name: 'Soil Moisture',
      health: 45,
      status: 'Low',
      color: 'orange',
      lastUpdate: '3 hours ago',
    },
    thermal: {
      name: 'Thermal Imaging',
      health: 62,
      status: 'Moderate',
      color: 'yellow',
      lastUpdate: '1 hour ago',
    },
  };

  const insights = [
    { title: 'Vegetation Health', value: '78%', trend: '+5.2%', color: 'green' },
    { title: 'Crop Coverage', value: '92%', trend: '+2.1%', color: 'brand' },
    { title: 'Stress Zones', value: '3 detected', trend: 'Critical', color: 'red' },
  ];

  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" mb="xl">
        <div>
          <Group gap="sm" mb={4}>
            <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'teal', to: 'green' }}>
              <IconSatellite size={24} />
            </ThemeIcon>
            <div>
              <Text size="xl" fw={700}>
                Satellite Image Analysis
              </Text>
              <Text size="sm" c="dimmed">
                Multi-spectral crop monitoring
              </Text>
            </div>
          </Group>
        </div>
        <Group gap="sm">
          <Badge size="lg" variant="light" color="teal" leftSection={<IconPhoto size={14} />}>
            Sentinel-2
          </Badge>
          <Button size="xs" variant="light" color="brand" leftSection={<IconDownload size={14} />}>
            Export
          </Button>
        </Group>
      </Group>

      <Tabs value={activeTab} onChange={(val) => setActiveTab(val || 'ndvi')}>
        <Tabs.List mb="lg">
          <Tabs.Tab value="ndvi">NDVI</Tabs.Tab>
          <Tabs.Tab value="moisture">Moisture</Tabs.Tab>
          <Tabs.Tab value="thermal">Thermal</Tabs.Tab>
        </Tabs.List>

        {Object.entries(analyses).map(([key, data]) => (
          <Tabs.Panel key={key} value={key}>
            <Card
              p="lg"
              mb="md"
              style={{
                background: 'linear-gradient(135deg, #f8fdf8 0%, #ffffff 100%)',
                border: '1px solid rgba(76, 175, 80, 0.12)',
              }}
            >
              <Group justify="space-between" mb="md">
                <div>
                  <Text fw={700} size="lg">{data.name}</Text>
                  <Text size="xs" c="dimmed">Last updated: {data.lastUpdate}</Text>
                </div>
                <Badge size="lg" variant="light" color={data.color}>
                  {data.status}
                </Badge>
              </Group>
              
              <Progress 
                value={data.health} 
                size="xl" 
                radius="xl"
                color={data.color}
                animated
                mb="md"
              />
              
              <Text size="xs" c="dimmed" ta="center" mb="sm">
                Health Index: {data.health}%
              </Text>

              <Group justify="space-between">
                <Text size="sm" fw={600}>Health Score</Text>
                <Text size="xl" fw={800} style={{ color: `var(--mantine-color-${data.color}-6)` }}>
                  {data.health}%
                </Text>
              </Group>
            </Card>
          </Tabs.Panel>
        ))}
      </Tabs>

      <Divider my="lg" label="Key Insights" labelPosition="center" />

      <Stack gap="sm">
        {insights.map((insight, idx) => (
          <Card
            key={idx}
            p="md"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(76, 175, 80, 0.12)',
            }}
          >
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed">{insight.title}</Text>
                <Text size="lg" fw={700}>{insight.value}</Text>
              </div>
              <Badge
                size="md"
                variant="light"
                color={insight.color}
              >
                {insight.trend}
              </Badge>
            </Group>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
