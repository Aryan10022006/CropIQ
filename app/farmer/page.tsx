'use client';
import React from 'react';
import { 
  Container, Title, Text, SimpleGrid, Card, Stack, Group, Badge, 
  ThemeIcon, Progress, Paper, Avatar, rem
} from '@mantine/core';
import { 
  IconPlant, IconDroplet, IconAlertCircle, IconCheck,
  IconCloudRain, IconTemperature, IconWind, IconSun,
  IconCurrencyRupee, IconCalendar, IconMapPin
} from '@tabler/icons-react';
import Link from 'next/link';

export default function FarmerDashboard() {
  const farmerStats = [
    { 
      label: 'My Fields', 
      value: '3', 
      sublabel: '12.5 acres total',
      icon: IconPlant, 
      color: 'green',
      href: '/farmer/my-fields'
    },
    { 
      label: 'Active Alerts', 
      value: '2', 
      sublabel: '1 high priority',
      icon: IconAlertCircle, 
      color: 'orange',
      href: '/farmer/alerts'
    },
    { 
      label: 'My Claims', 
      value: '1', 
      sublabel: 'Under review',
      icon: IconCheck, 
      color: 'blue',
      href: '/farmer/claims'
    },
    { 
      label: 'Insured Amount', 
      value: '₹2.4L', 
      sublabel: 'Kharif 2024-25',
      icon: IconCurrencyRupee, 
      color: 'teal',
      href: '/farmer/insurance'
    },
  ];

  const todayWeather = {
    temp: '28°C',
    condition: 'Partly Cloudy',
    humidity: '65%',
    wind: '12 km/h',
    rain: '20%',
  };

  const recentAlerts = [
    {
      id: 1,
      title: 'Irrigation Reminder',
      message: 'Soil moisture low in Field 2. Irrigate within 2 days.',
      time: '2 hours ago',
      type: 'warning',
      color: 'orange'
    },
    {
      id: 2,
      title: 'Pest Alert',
      message: 'Whiteflies detected nearby. Monitor your crops closely.',
      time: '5 hours ago',
      type: 'critical',
      color: 'red'
    },
    {
      id: 3,
      title: 'Weather Update',
      message: 'Light rain expected tomorrow. Good for crop growth.',
      time: '1 day ago',
      type: 'info',
      color: 'blue'
    },
  ];

  const cropHealth = [
    { field: 'Field 1 - Cotton', health: 92, status: 'Excellent', color: 'green' },
    { field: 'Field 2 - Soybean', health: 78, status: 'Good', color: 'teal' },
    { field: 'Field 3 - Wheat', health: 65, status: 'Needs Attention', color: 'orange' },
  ];

  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        {/* Welcome Header */}
        <div>
          <Group gap="md" mb="xs">
            <Avatar size={64} radius="xl" color="green">
              <IconPlant size={32} />
            </Avatar>
            <div>
              <Title 
                order={1} 
                style={{ 
                  fontSize: rem(32), 
                  fontWeight: 800, 
                  color: '#0f172a',
                  marginBottom: 4
                }}
              >
                Welcome, Ramesh Kumar
              </Title>
              <Group gap="xs">
                <IconMapPin size={16} />
                <Text size="md" c="dimmed" fw={500}>
                  Village: Shirdi, Dist: Ahmednagar, Maharashtra
                </Text>
              </Group>
            </div>
          </Group>
        </div>

        {/* Quick Stats */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {farmerStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Link 
                key={idx} 
                href={stat.href} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card 
                  shadow="sm" 
                  p="lg" 
                  radius="lg" 
                  withBorder
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    ':hover': { transform: 'translateY(-4px)' }
                  }}
                >
                  <Group gap="md" wrap="nowrap">
                    <ThemeIcon 
                      size={56} 
                      radius="md" 
                      variant="light" 
                      color={stat.color}
                    >
                      <Icon size={28} stroke={2} />
                    </ThemeIcon>
                    <div style={{ flex: 1 }}>
                      <Text size={rem(32)} fw={800} lh={1} c={`${stat.color}.6`}>
                        {stat.value}
                      </Text>
                      <Text size="sm" fw={600} c="dimmed" mt={4}>
                        {stat.label}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {stat.sublabel}
                      </Text>
                    </div>
                  </Group>
                </Card>
              </Link>
            );
          })}
        </SimpleGrid>

        {/* Weather Today */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Group justify="space-between" mb="lg">
            <div>
              <Text size="xl" fw={700} mb={4}>
                Today's Weather
              </Text>
              <Text size="sm" c="dimmed">
                Real-time conditions for your area
              </Text>
            </div>
            <ThemeIcon size={80} radius="xl" variant="light" color="blue">
              <IconCloudRain size={48} />
            </ThemeIcon>
          </Group>

          <SimpleGrid cols={{ base: 2, sm: 5 }} spacing="lg">
            <Paper p="md" radius="md" bg="gray.0">
              <Group gap="xs" mb="xs">
                <IconTemperature size={20} color="var(--mantine-color-red-6)" />
                <Text size="xs" c="dimmed" fw={600}>Temperature</Text>
              </Group>
              <Text size="xl" fw={700}>{todayWeather.temp}</Text>
            </Paper>
            <Paper p="md" radius="md" bg="gray.0">
              <Group gap="xs" mb="xs">
                <IconSun size={20} color="var(--mantine-color-yellow-6)" />
                <Text size="xs" c="dimmed" fw={600}>Condition</Text>
              </Group>
              <Text size="sm" fw={700}>{todayWeather.condition}</Text>
            </Paper>
            <Paper p="md" radius="md" bg="gray.0">
              <Group gap="xs" mb="xs">
                <IconDroplet size={20} color="var(--mantine-color-blue-6)" />
                <Text size="xs" c="dimmed" fw={600}>Humidity</Text>
              </Group>
              <Text size="xl" fw={700}>{todayWeather.humidity}</Text>
            </Paper>
            <Paper p="md" radius="md" bg="gray.0">
              <Group gap="xs" mb="xs">
                <IconWind size={20} color="var(--mantine-color-cyan-6)" />
                <Text size="xs" c="dimmed" fw={600}>Wind</Text>
              </Group>
              <Text size="xl" fw={700}>{todayWeather.wind}</Text>
            </Paper>
            <Paper p="md" radius="md" bg="gray.0">
              <Group gap="xs" mb="xs">
                <IconCloudRain size={20} color="var(--mantine-color-indigo-6)" />
                <Text size="xs" c="dimmed" fw={600}>Rain Chance</Text>
              </Group>
              <Text size="xl" fw={700}>{todayWeather.rain}</Text>
            </Paper>
          </SimpleGrid>
        </Card>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          {/* Crop Health Status */}
          <Card shadow="md" p="xl" radius="lg" withBorder>
            <Text size="xl" fw={700} mb="lg">
              My Crops Health
            </Text>
            <Stack gap="md">
              {cropHealth.map((crop, idx) => (
                <Paper key={idx} p="md" radius="md" withBorder>
                  <Group justify="space-between" mb="xs">
                    <Text size="sm" fw={600}>{crop.field}</Text>
                    <Badge color={crop.color} size="lg" fw={700}>{crop.health}%</Badge>
                  </Group>
                  <Progress 
                    value={crop.health} 
                    color={crop.color} 
                    size="lg" 
                    radius="xl"
                  />
                  <Text size="xs" c="dimmed" mt="xs" ta="right">{crop.status}</Text>
                </Paper>
              ))}
            </Stack>
          </Card>

          {/* Recent Alerts */}
          <Card shadow="md" p="xl" radius="lg" withBorder>
            <Group justify="space-between" mb="lg">
              <Text size="xl" fw={700}>
                Recent Alerts
              </Text>
              <Link href="/farmer/alerts" style={{ textDecoration: 'none' }}>
                <Text size="sm" c="blue" fw={600}>View All →</Text>
              </Link>
            </Group>
            <Stack gap="md">
              {recentAlerts.map((alert) => (
                <Paper 
                  key={alert.id} 
                  p="md" 
                  radius="md"
                  style={{
                    background: `var(--mantine-color-${alert.color}-0)`,
                    border: `2px solid var(--mantine-color-${alert.color}-2)`
                  }}
                >
                  <Group gap="xs" mb="xs">
                    <IconAlertCircle size={18} color={`var(--mantine-color-${alert.color}-6)`} />
                    <Text size="sm" fw={700} c={`${alert.color}.7`}>
                      {alert.title}
                    </Text>
                  </Group>
                  <Text size="sm" mb="xs">{alert.message}</Text>
                  <Text size="xs" c="dimmed">{alert.time}</Text>
                </Paper>
              ))}
            </Stack>
          </Card>
        </SimpleGrid>

        {/* Quick Actions */}
        <Card shadow="sm" p="lg" radius="lg" withBorder>
          <Text size="lg" fw={700} mb="md">
            Quick Actions
          </Text>
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
            <Link href="/farmer/claims/new" style={{ textDecoration: 'none' }}>
              <Paper p="lg" radius="md" bg="blue.0" style={{ cursor: 'pointer', textAlign: 'center' }}>
                <ThemeIcon size={48} radius="md" variant="light" color="blue" mx="auto" mb="sm">
                  <IconCheck size={24} />
                </ThemeIcon>
                <Text size="sm" fw={600} c="blue.7">File New Claim</Text>
              </Paper>
            </Link>
            <Link href="/farmer/advisory" style={{ textDecoration: 'none' }}>
              <Paper p="lg" radius="md" bg="green.0" style={{ cursor: 'pointer', textAlign: 'center' }}>
                <ThemeIcon size={48} radius="md" variant="light" color="green" mx="auto" mb="sm">
                  <IconPlant size={24} />
                </ThemeIcon>
                <Text size="sm" fw={600} c="green.7">Crop Advisory</Text>
              </Paper>
            </Link>
            <Link href="/farmer/weather" style={{ textDecoration: 'none' }}>
              <Paper p="lg" radius="md" bg="orange.0" style={{ cursor: 'pointer', textAlign: 'center' }}>
                <ThemeIcon size={48} radius="md" variant="light" color="orange" mx="auto" mb="sm">
                  <IconCloudRain size={24} />
                </ThemeIcon>
                <Text size="sm" fw={600} c="orange.7">Weather Forecast</Text>
              </Paper>
            </Link>
            <Link href="/farmer/support" style={{ textDecoration: 'none' }}>
              <Paper p="lg" radius="md" bg="teal.0" style={{ cursor: 'pointer', textAlign: 'center' }}>
                <ThemeIcon size={48} radius="md" variant="light" color="teal" mx="auto" mb="sm">
                  <IconCalendar size={24} />
                </ThemeIcon>
                <Text size="sm" fw={600} c="teal.7">Get Support</Text>
              </Paper>
            </Link>
          </SimpleGrid>
        </Card>
      </Stack>
    </Container>
  );
}
