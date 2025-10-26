'use client';
import React from 'react';
import {
  Container, Title, Text, Card, Stack, Group, ThemeIcon,
  Paper, SimpleGrid, rem, Tabs
} from '@mantine/core';
import {
  IconCloudRain, IconSun, IconTemperature, IconDroplet,
  IconWind, IconCloudStorm, IconSnowflake, IconCalendar
} from '@tabler/icons-react';

export default function WeatherPage() {
  const forecast = [
    { day: 'Today', temp: '28°C', condition: 'Partly Cloudy', rain: '20%', icon: IconSun },
    { day: 'Tomorrow', temp: '26°C', condition: 'Light Rain', rain: '60%', icon: IconCloudRain },
    { day: 'Monday', temp: '27°C', condition: 'Sunny', rain: '10%', icon: IconSun },
    { day: 'Tuesday', temp: '29°C', condition: 'Clear Sky', rain: '5%', icon: IconSun },
    { day: 'Wednesday', temp: '25°C', condition: 'Rainy', rain: '80%', icon: IconCloudStorm },
    { day: 'Thursday', temp: '26°C', condition: 'Cloudy', rain: '30%', icon: IconCloudRain },
    { day: 'Friday', temp: '28°C', condition: 'Partly Cloudy', rain: '15%', icon: IconSun },
  ];

  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        <div>
          <Title
            order={1}
            style={{
              fontSize: rem(32),
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: 8
            }}
          >
            Weather Forecast
          </Title>
          <Text size="lg" c="dimmed" fw={500}>
            7-day weather forecast for your farm location
          </Text>
        </div>

        {/* Current Weather */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Group justify="space-between" mb="lg">
            <div>
              <Text size="xl" fw={700} mb={4}>Current Weather</Text>
              <Text size="sm" c="dimmed">Shirdi, Ahmednagar District</Text>
            </div>
            <ThemeIcon size={100} radius="xl" variant="light" color="blue">
              <IconSun size={60} />
            </ThemeIcon>
          </Group>

          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg">
            <Paper p="lg" radius="md" bg="orange.0" style={{ textAlign: 'center' }}>
              <IconTemperature size={32} color="var(--mantine-color-orange-6)" style={{ margin: '0 auto 8px' }} />
              <Text size={rem(32)} fw={800} c="orange.6">28°C</Text>
              <Text size="xs" c="dimmed" fw={600}>Temperature</Text>
            </Paper>

            <Paper p="lg" radius="md" bg="blue.0" style={{ textAlign: 'center' }}>
              <IconDroplet size={32} color="var(--mantine-color-blue-6)" style={{ margin: '0 auto 8px' }} />
              <Text size={rem(32)} fw={800} c="blue.6">65%</Text>
              <Text size="xs" c="dimmed" fw={600}>Humidity</Text>
            </Paper>

            <Paper p="lg" radius="md" bg="cyan.0" style={{ textAlign: 'center' }}>
              <IconWind size={32} color="var(--mantine-color-cyan-6)" style={{ margin: '0 auto 8px' }} />
              <Text size={rem(32)} fw={800} c="cyan.6">12</Text>
              <Text size="xs" c="dimmed" fw={600}>Wind (km/h)</Text>
            </Paper>

            <Paper p="lg" radius="md" bg="indigo.0" style={{ textAlign: 'center' }}>
              <IconCloudRain size={32} color="var(--mantine-color-indigo-6)" style={{ margin: '0 auto 8px' }} />
              <Text size={rem(32)} fw={800} c="indigo.6">20%</Text>
              <Text size="xs" c="dimmed" fw={600}>Rain Chance</Text>
            </Paper>
          </SimpleGrid>
        </Card>

        {/* 7-Day Forecast */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Group gap="xs" mb="lg">
            <IconCalendar size={24} color="var(--mantine-color-blue-6)" />
            <Text size="xl" fw={700}>7-Day Forecast</Text>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
            {forecast.map((day, idx) => {
              const Icon = day.icon;
              return (
                <Paper key={idx} p="lg" radius="md" withBorder style={{ textAlign: 'center' }}>
                  <Text size="sm" fw={700} mb="md">{day.day}</Text>
                  <Icon size={48} color="var(--mantine-color-blue-6)" style={{ margin: '0 auto 12px' }} />
                  <Text size={rem(28)} fw={800} mb="xs">{day.temp}</Text>
                  <Text size="sm" c="dimmed" mb="xs">{day.condition}</Text>
                  <Group justify="center" gap="xs">
                    <IconDroplet size={16} color="var(--mantine-color-blue-6)" />
                    <Text size="xs" fw={600} c="blue.6">{day.rain}</Text>
                  </Group>
                </Paper>
              );
            })}
          </SimpleGrid>
        </Card>

        {/* Weather Advisory */}
        <Card shadow="sm" p="lg" radius="lg" withBorder bg="blue.0">
          <Group gap="md">
            <ThemeIcon size={48} radius="md" variant="light" color="blue">
              <IconCloudRain size={24} />
            </ThemeIcon>
            <div style={{ flex: 1 }}>
              <Text size="lg" fw={700} c="blue.7" mb={4}>Weather Advisory</Text>
              <Text size="sm" c="dimmed">
                Light rain expected tomorrow. Good conditions for crop growth. Postpone fertilizer application until after rain.
              </Text>
            </div>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
