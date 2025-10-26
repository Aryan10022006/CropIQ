'use client';
import React, { useState } from 'react';
import {
  Container, Title, Text, SimpleGrid, Card, Stack, Group, Badge,
  ThemeIcon, Paper, Progress, Button, Tabs, rem
} from '@mantine/core';
import {
  IconPlant, IconMapPin, IconDroplet, IconTemperature,
  IconAlertCircle, IconTrendingUp, IconCalendar, IconEye
} from '@tabler/icons-react';
import Link from 'next/link';

export default function MyFieldsPage() {
  const fields = [
    {
      id: 1,
      name: 'Field 1 - North Plot',
      crop: 'Cotton',
      area: '5.2 acres',
      sowingDate: 'June 15, 2024',
      health: 92,
      status: 'Excellent',
      color: 'green',
      soilMoisture: 82,
      temperature: '28°C',
      ndvi: 0.78,
      alerts: 0,
      location: 'Survey No. 45/2'
    },
    {
      id: 2,
      name: 'Field 2 - East Plot',
      crop: 'Soybean',
      area: '4.8 acres',
      sowingDate: 'July 02, 2024',
      health: 78,
      status: 'Good',
      color: 'teal',
      soilMoisture: 68,
      temperature: '27°C',
      ndvi: 0.65,
      alerts: 1,
      location: 'Survey No. 46/1'
    },
    {
      id: 3,
      name: 'Field 3 - South Plot',
      crop: 'Wheat',
      area: '2.5 acres',
      sowingDate: 'November 10, 2024',
      health: 65,
      status: 'Needs Attention',
      color: 'orange',
      soilMoisture: 45,
      temperature: '26°C',
      ndvi: 0.52,
      alerts: 2,
      location: 'Survey No. 47/3'
    },
  ];

  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        {/* Header */}
        <Group justify="space-between">
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
              My Fields
            </Title>
            <Text size="lg" c="dimmed" fw={500}>
              Monitor crop health and field conditions in real-time
            </Text>
          </div>
          <Button
            leftSection={<IconPlant size={18} />}
            variant="filled"
            color="green"
            size="md"
          >
            Add New Field
          </Button>
        </Group>

        {/* Field Cards */}
        <SimpleGrid cols={{ base: 1, lg: 2, xl: 3 }} spacing="lg">
          {fields.map((field) => (
            <Card key={field.id} shadow="md" p="xl" radius="lg" withBorder>
              <Stack gap="md">
                {/* Header */}
                <Group justify="space-between">
                  <div>
                    <Group gap="xs" mb={4}>
                      <ThemeIcon size={40} radius="md" variant="light" color={field.color}>
                        <IconPlant size={22} />
                      </ThemeIcon>
                      <div>
                        <Text size="lg" fw={700}>{field.name}</Text>
                        <Text size="sm" c="dimmed">{field.crop}</Text>
                      </div>
                    </Group>
                  </div>
                  {field.alerts > 0 && (
                    <Badge
                      leftSection={<IconAlertCircle size={14} />}
                      color="orange"
                      variant="filled"
                      size="lg"
                    >
                      {field.alerts} Alert{field.alerts > 1 ? 's' : ''}
                    </Badge>
                  )}
                </Group>

                {/* Health Status */}
                <Paper p="md" radius="md" bg={`${field.color}.0`}>
                  <Group justify="space-between" mb="xs">
                    <Text size="sm" fw={600} c={`${field.color}.7`}>Crop Health</Text>
                    <Text size="xl" fw={800} c={`${field.color}.6`}>{field.health}%</Text>
                  </Group>
                  <Progress value={field.health} color={field.color} size="lg" radius="xl" />
                  <Text size="xs" c="dimmed" mt="xs">{field.status}</Text>
                </Paper>

                {/* Field Details */}
                <SimpleGrid cols={2} spacing="sm">
                  <Paper p="md" radius="md" withBorder>
                    <Group gap="xs" mb="xs">
                      <IconMapPin size={16} color="var(--mantine-color-gray-6)" />
                      <Text size="xs" c="dimmed" fw={600}>Area</Text>
                    </Group>
                    <Text size="sm" fw={700}>{field.area}</Text>
                    <Text size="xs" c="dimmed">{field.location}</Text>
                  </Paper>
                  <Paper p="md" radius="md" withBorder>
                    <Group gap="xs" mb="xs">
                      <IconCalendar size={16} color="var(--mantine-color-gray-6)" />
                      <Text size="xs" c="dimmed" fw={600}>Sowing Date</Text>
                    </Group>
                    <Text size="sm" fw={700}>{field.sowingDate}</Text>
                  </Paper>
                </SimpleGrid>

                {/* Sensor Data */}
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Group gap="xs">
                      <IconDroplet size={18} color="var(--mantine-color-blue-6)" />
                      <Text size="sm" fw={600}>Soil Moisture</Text>
                    </Group>
                    <Text size="sm" fw={700} c="blue.6">{field.soilMoisture}%</Text>
                  </Group>
                  <Progress value={field.soilMoisture} color="blue" size="sm" />

                  <Group justify="space-between" mt="xs">
                    <Group gap="xs">
                      <IconTemperature size={18} color="var(--mantine-color-orange-6)" />
                      <Text size="sm" fw={600}>Temperature</Text>
                    </Group>
                    <Text size="sm" fw={700} c="orange.6">{field.temperature}</Text>
                  </Group>

                  <Group justify="space-between" mt="xs">
                    <Group gap="xs">
                      <IconTrendingUp size={18} color="var(--mantine-color-green-6)" />
                      <Text size="sm" fw={600}>NDVI Index</Text>
                    </Group>
                    <Text size="sm" fw={700} c="green.6">{field.ndvi}</Text>
                  </Group>
                </Stack>

                {/* Actions */}
                <Group gap="sm" grow>
                  <Link href={`/farmer/fields/${field.id}`} style={{ textDecoration: 'none', flex: 1 }}>
                    <Button
                      fullWidth
                      leftSection={<IconEye size={16} />}
                      variant="light"
                      color={field.color}
                    >
                      View Details
                    </Button>
                  </Link>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Summary Cards */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={56} radius="md" variant="light" color="green">
                <IconPlant size={28} />
              </ThemeIcon>
              <div>
                <Text size={rem(28)} fw={800} c="green.6">12.5</Text>
                <Text size="sm" c="dimmed" fw={600}>Total Acres</Text>
              </div>
            </Group>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={56} radius="md" variant="light" color="teal">
                <IconTrendingUp size={28} />
              </ThemeIcon>
              <div>
                <Text size={rem(28)} fw={800} c="teal.6">78%</Text>
                <Text size="sm" c="dimmed" fw={600}>Avg Health</Text>
              </div>
            </Group>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={56} radius="md" variant="light" color="orange">
                <IconAlertCircle size={28} />
              </ThemeIcon>
              <div>
                <Text size={rem(28)} fw={800} c="orange.6">3</Text>
                <Text size="sm" c="dimmed" fw={600}>Active Alerts</Text>
              </div>
            </Group>
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
