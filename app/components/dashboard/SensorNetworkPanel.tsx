"use client";
import React from 'react';
import { Card, Text, Group, Stack, Badge, Progress, ThemeIcon, SimpleGrid, Divider } from '@mantine/core';
import { IconDroplet, IconTemperature, IconWind, IconLeaf, IconMapPin, IconActivity } from '@tabler/icons-react';

export default function SensorNetworkPanel() {
  const sensors = [
    {
      id: 'SNS-001',
      location: 'Field A - Zone 1',
      lat: '23.4567° N',
      lon: '77.8901° E',
      type: 'Soil Moisture',
      value: 42,
      unit: '%',
      status: 'optimal',
      icon: IconDroplet,
      color: '#2196f3',
      lastUpdate: '2 mins ago',
      threshold: { min: 30, max: 60 }
    },
    {
      id: 'SNS-002',
      location: 'Field A - Zone 2',
      lat: '23.4589° N',
      lon: '77.8923° E',
      type: 'Temperature',
      value: 28,
      unit: '°C',
      status: 'normal',
      icon: IconTemperature,
      color: '#ff9800',
      lastUpdate: '1 min ago',
      threshold: { min: 15, max: 35 }
    },
    {
      id: 'SNS-003',
      location: 'Field B - Zone 1',
      lat: '23.4512° N',
      lon: '77.8945° E',
      type: 'Leaf Wetness',
      value: 78,
      unit: '%',
      status: 'warning',
      icon: IconLeaf,
      color: '#4caf50',
      lastUpdate: '3 mins ago',
      threshold: { min: 0, max: 70 }
    },
    {
      id: 'SNS-004',
      location: 'Field B - Zone 2',
      lat: '23.4534° N',
      lon: '77.8967° E',
      type: 'Soil EC/Salinity',
      value: 2.4,
      unit: 'dS/m',
      status: 'optimal',
      icon: IconActivity,
      color: '#9c27b0',
      lastUpdate: '4 mins ago',
      threshold: { min: 0, max: 4 }
    },
  ];

  const networkStats = {
    totalSensors: 24,
    activeSensors: 22,
    offlineSensors: 2,
    dataPoints: '1.2M',
    uptime: 98.7
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'green';
      case 'normal': return 'blue';
      case 'warning': return 'orange';
      case 'critical': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Stack gap="lg">
      {/* Network Overview */}
      <Card className="clean-card" p="lg">
        <Group justify="space-between" mb="md">
          <div>
            <Text size="lg" fw={700}>
              IoT Sensor Network
            </Text>
            <Text size="sm" c="dimmed">
              Real-time ground truth data streams
            </Text>
          </div>
          <Badge size="lg" variant="light" color="green" leftSection={<IconActivity size={14} />}>
            {networkStats.activeSensors}/{networkStats.totalSensors} Active
          </Badge>
        </Group>

        <SimpleGrid cols={4} spacing="md">
          <Card
            p="md"
            style={{
              background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
              border: '1px solid rgba(33, 150, 243, 0.2)',
            }}
          >
            <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={4}>
              Total Sensors
            </Text>
            <Text size="xl" fw={700} c="#2196f3">
              {networkStats.totalSensors}
            </Text>
          </Card>

          <Card
            p="md"
            style={{
              background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
              border: '1px solid rgba(76, 175, 80, 0.2)',
            }}
          >
            <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={4}>
              Data Points
            </Text>
            <Text size="xl" fw={700} c="#4caf50">
              {networkStats.dataPoints}
            </Text>
          </Card>

          <Card
            p="md"
            style={{
              background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
              border: '1px solid rgba(255, 152, 0, 0.2)',
            }}
          >
            <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={4}>
              Network Uptime
            </Text>
            <Text size="xl" fw={700} c="#ff9800">
              {networkStats.uptime}%
            </Text>
          </Card>

          <Card
            p="md"
            style={{
              background: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)',
              border: '1px solid rgba(244, 67, 54, 0.2)',
            }}
          >
            <Text size="xs" c="dimmed" tt="uppercase" fw={600} mb={4}>
              Offline Sensors
            </Text>
            <Text size="xl" fw={700} c="#f44336">
              {networkStats.offlineSensors}
            </Text>
          </Card>
        </SimpleGrid>
      </Card>

      {/* Live Sensor Data */}
      <SimpleGrid cols={2} spacing="md">
        {sensors.map((sensor) => {
          const Icon = sensor.icon;
          const percentage = ((sensor.value - sensor.threshold.min) / (sensor.threshold.max - sensor.threshold.min)) * 100;
          
          return (
            <Card key={sensor.id} className="clean-card" p="lg">
              <Group justify="space-between" mb="md">
                <Group gap="sm">
                  <ThemeIcon
                    size={42}
                    radius={12}
                    variant="light"
                    style={{
                      background: `linear-gradient(135deg, ${sensor.color}15 0%, ${sensor.color}25 100%)`,
                      border: `1px solid ${sensor.color}30`,
                    }}
                  >
                    <Icon size={22} color={sensor.color} />
                  </ThemeIcon>
                  <div>
                    <Text size="sm" fw={700}>
                      {sensor.type}
                    </Text>
                    <Group gap={6}>
                      <IconMapPin size={12} color="#666" />
                      <Text size="xs" c="dimmed">
                        {sensor.location}
                      </Text>
                    </Group>
                  </div>
                </Group>
                <Badge size="sm" variant="light" color={getStatusColor(sensor.status)}>
                  {sensor.status}
                </Badge>
              </Group>

              <Group gap="xs" mb="sm">
                <Text size="2rem" fw={700} style={{ lineHeight: 1 }}>
                  {sensor.value}
                </Text>
                <Text size="lg" c="dimmed" fw={600}>
                  {sensor.unit}
                </Text>
              </Group>

              <Progress
                value={percentage}
                color={sensor.color}
                size="sm"
                radius="xl"
                mb="sm"
                styles={{
                  root: { background: '#f0f0f0' },
                }}
              />

              <Divider my="xs" />

              <Group justify="space-between">
                <Stack gap={2}>
                  <Text size="xs" c="dimmed">
                    Sensor ID
                  </Text>
                  <Text size="xs" fw={600}>
                    {sensor.id}
                  </Text>
                </Stack>
                <Stack gap={2}>
                  <Text size="xs" c="dimmed">
                    GPS Coordinates
                  </Text>
                  <Text size="xs" fw={600}>
                    {sensor.lat}, {sensor.lon}
                  </Text>
                </Stack>
                <Stack gap={2}>
                  <Text size="xs" c="dimmed">
                    Last Update
                  </Text>
                  <Text size="xs" fw={600} c="green">
                    {sensor.lastUpdate}
                  </Text>
                </Stack>
              </Group>
            </Card>
          );
        })}
      </SimpleGrid>

      {/* Sampling Frequency Info */}
      <Card
        p="md"
        style={{
          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
          border: '1px solid rgba(156, 39, 176, 0.2)',
        }}
      >
        <Group gap="md">
          <ThemeIcon size={36} radius="xl" variant="light" color="violet">
            <IconActivity size={20} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={700}>
              Sampling Frequency
            </Text>
            <Text size="xs" c="dimmed">
              Soil sensors: 15-min intervals • Weather stations: 5-min intervals • Leaf wetness: 10-min intervals
            </Text>
          </div>
        </Group>
      </Card>
    </Stack>
  );
}
