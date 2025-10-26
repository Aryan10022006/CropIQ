'use client';
import React from 'react';
import {
  Container, Title, Text, Card, Stack, Group, Badge,
  ThemeIcon, Paper, SimpleGrid, rem, Divider
} from '@mantine/core';
import {
  IconAlertTriangle, IconBug, IconDroplet, IconCloudRain,
  IconFlask, IconLeaf, IconSun, IconTemperature, IconCalendar
} from '@tabler/icons-react';

export default function FarmerAlertsPage() {
  const alerts = [
    {
      id: 1,
      title: 'Irrigation Required - Field 2',
      message: 'Soil moisture has dropped to 45%. Irrigate within 24-48 hours to maintain optimal crop health.',
      type: 'High Priority',
      category: 'Water Management',
      time: '2 hours ago',
      color: 'orange',
      icon: IconDroplet,
      action: 'Start irrigation system or water manually'
    },
    {
      id: 2,
      title: 'Pest Alert - Nearby Detection',
      message: 'Whiteflies detected in neighboring farms. Monitor your crops closely for early signs.',
      type: 'Critical',
      category: 'Pest Control',
      time: '5 hours ago',
      color: 'red',
      icon: IconBug,
      action: 'Inspect crops daily and apply neem spray if needed'
    },
    {
      id: 3,
      title: 'Weather Advisory - Rain Expected',
      message: 'Light to moderate rain forecasted for tomorrow. Good for soil moisture.',
      type: 'Information',
      category: 'Weather',
      time: '8 hours ago',
      color: 'blue',
      icon: IconCloudRain,
      action: 'Postpone fertilizer application until after rain'
    },
    {
      id: 4,
      title: 'Nitrogen Deficiency Detected',
      message: 'Crop health analysis shows early signs of nitrogen stress in Field 3.',
      type: 'Medium',
      category: 'Nutrition',
      time: '1 day ago',
      color: 'yellow',
      icon: IconLeaf,
      action: 'Apply urea 25kg per acre within one week'
    },
    {
      id: 5,
      title: 'Optimal Spraying Conditions',
      message: 'Wind speed favorable for pesticide application today between 6-10 AM.',
      type: 'Advisory',
      category: 'Farm Operations',
      time: '1 day ago',
      color: 'teal',
      icon: IconSun,
      action: 'Schedule spray operations during recommended time'
    }
  ];

  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        {/* Header */}
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
            Alerts & Advisories
          </Title>
          <Text size="lg" c="dimmed" fw={500}>
            Real-time notifications to protect and optimize your crops
          </Text>
        </div>

        {/* Alert Stats */}
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
          <Paper p="md" radius="md" withBorder>
            <Group gap="xs" mb="xs">
              <ThemeIcon size={36} radius="md" variant="light" color="red">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="red.6">1</Text>
                <Text size="xs" c="dimmed" fw={600}>Critical</Text>
              </div>
            </Group>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Group gap="xs" mb="xs">
              <ThemeIcon size={36} radius="md" variant="light" color="orange">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="orange.6">1</Text>
                <Text size="xs" c="dimmed" fw={600}>High Priority</Text>
              </div>
            </Group>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Group gap="xs" mb="xs">
              <ThemeIcon size={36} radius="md" variant="light" color="yellow">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="yellow.6">1</Text>
                <Text size="xs" c="dimmed" fw={600}>Medium</Text>
              </div>
            </Group>
          </Paper>

          <Paper p="md" radius="md" withBorder>
            <Group gap="xs" mb="xs">
              <ThemeIcon size={36} radius="md" variant="light" color="teal">
                <IconSun size={20} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="teal.6">2</Text>
                <Text size="xs" c="dimmed" fw={600}>Advisories</Text>
              </div>
            </Group>
          </Paper>
        </SimpleGrid>

        {/* Alerts List */}
        <Stack gap="md">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card key={alert.id} shadow="md" p="xl" radius="lg" withBorder>
                <Group justify="space-between" mb="md" wrap="nowrap">
                  <Group gap="md" wrap="nowrap">
                    <ThemeIcon size={64} radius="md" variant="light" color={alert.color}>
                      <Icon size={32} stroke={2} />
                    </ThemeIcon>
                    <div>
                      <Group gap="xs" mb={4}>
                        <Text size="lg" fw={700}>{alert.title}</Text>
                      </Group>
                      <Group gap="xs">
                        <Badge variant="filled" color={alert.color} size="md">
                          {alert.type}
                        </Badge>
                        <Badge variant="light" color="gray" size="sm">
                          {alert.category}
                        </Badge>
                        <Badge variant="dot" color="gray" size="sm">
                          {alert.time}
                        </Badge>
                      </Group>
                    </div>
                  </Group>
                </Group>

                <Text size="md" mb="md" fw={500}>
                  {alert.message}
                </Text>

                <Divider mb="md" />

                <Paper
                  p="md"
                  radius="md"
                  style={{
                    background: `var(--mantine-color-${alert.color}-0)`,
                    border: `2px solid var(--mantine-color-${alert.color}-2)`
                  }}
                >
                  <Group gap="xs" mb="xs">
                    <IconCalendar size={18} color={`var(--mantine-color-${alert.color}-6)`} />
                    <Text size="sm" fw={700} c={`${alert.color}.7`}>
                      Recommended Action
                    </Text>
                  </Group>
                  <Text size="sm" fw={500}>
                    {alert.action}
                  </Text>
                </Paper>
              </Card>
            );
          })}
        </Stack>

        {/* Help Section */}
        <Card shadow="sm" p="lg" radius="lg" withBorder bg="green.0">
          <Text size="lg" fw={700} c="green.7" mb="xs">
            📱 SMS Notifications Active
          </Text>
          <Text size="sm" c="dimmed">
            All critical alerts are automatically sent to your registered mobile number
          </Text>
        </Card>
      </Stack>
    </Container>
  );
}
