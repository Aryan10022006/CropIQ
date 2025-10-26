"use client";
import React from 'react';
import { Card, Text, Group, Stack, Badge, ThemeIcon, Divider } from '@mantine/core';
import { IconCloudRain, IconTemperature, IconWind, IconDroplet, IconSun } from '@tabler/icons-react';

export default function WeatherIntegration() {
  const weatherData = {
    current: {
      temp: 28,
      humidity: 65,
      windSpeed: 12,
      rainfall: 5.2,
      condition: 'Partly Cloudy',
    },
    forecast: [
      { day: 'Today', temp: 28, rain: 5.2, risk: 'Low' },
      { day: 'Tomorrow', temp: 32, rain: 0, risk: 'Medium' },
      { day: 'Day 3', temp: 35, rain: 0, risk: 'High' },
    ],
  };

  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" mb="lg">
        <div>
          <Group gap="sm" mb={4}>
            <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'cyan', to: 'blue' }}>
              <IconCloudRain size={24} />
            </ThemeIcon>
            <div>
              <Text size="xl" fw={700}>
                Weather Integration
              </Text>
              <Text size="sm" c="dimmed">
                Real-time meteorological data
              </Text>
            </div>
          </Group>
        </div>
        <Badge size="lg" variant="light" color="blue">
          Live Data
        </Badge>
      </Group>

      {/* Current Weather */}
      <Card
        p="lg"
        mb="md"
        style={{
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
          border: '1px solid rgba(33, 150, 243, 0.2)',
        }}
      >
        <Text size="lg" fw={700} mb="md">
          Current Conditions
        </Text>
        <Group justify="space-between">
          <Group gap="xl">
            <div>
              <Group gap="xs" mb={4}>
                <IconTemperature size={20} color="#f44336" />
                <Text size="sm" c="dimmed">Temperature</Text>
              </Group>
              <Text size="xl" fw={700}>{weatherData.current.temp}°C</Text>
            </div>
            <Divider orientation="vertical" />
            <div>
              <Group gap="xs" mb={4}>
                <IconDroplet size={20} color="#2196f3" />
                <Text size="sm" c="dimmed">Humidity</Text>
              </Group>
              <Text size="xl" fw={700}>{weatherData.current.humidity}%</Text>
            </div>
            <Divider orientation="vertical" />
            <div>
              <Group gap="xs" mb={4}>
                <IconWind size={20} color="#4caf50" />
                <Text size="sm" c="dimmed">Wind</Text>
              </Group>
              <Text size="xl" fw={700}>{weatherData.current.windSpeed} km/h</Text>
            </div>
          </Group>
        </Group>
      </Card>

      {/* 3-Day Forecast */}
      <Text size="sm" fw={600} mb="sm" c="dimmed" tt="uppercase" style={{ letterSpacing: '0.05em' }}>
        3-Day Forecast
      </Text>
      <Stack gap="xs">
        {weatherData.forecast.map((day, idx) => (
          <Card
            key={idx}
            p="md"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(76, 175, 80, 0.12)',
            }}
          >
            <Group justify="space-between">
              <Group gap="md">
                <ThemeIcon size={36} radius="xl" variant="light" color="blue">
                  <IconSun size={20} />
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">{day.day}</Text>
                  <Text size="xs" c="dimmed">{day.temp}°C • Rain: {day.rain}mm</Text>
                </div>
              </Group>
              <Badge
                size="sm"
                variant="light"
                color={day.risk === 'High' ? 'red' : day.risk === 'Medium' ? 'orange' : 'green'}
              >
                {day.risk} Risk
              </Badge>
            </Group>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
