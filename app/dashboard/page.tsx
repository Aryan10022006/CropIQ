'use client';
import React from 'react';
import { Title, Text, Grid, Paper, Stack, Group, ThemeIcon, Badge, Progress, rem } from '@mantine/core';
import { IconFileAlert, IconClock, IconCheck, IconAlertTriangle, IconMapPin } from '@tabler/icons-react';
import dynamic from 'next/dynamic';

const MapDisplay = dynamic(() => import('../components/dashboard/MapDisplay'), { ssr: false, loading: () => <div style={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--mantine-color-gray-1)', borderRadius: 12 }}><Text c="dimmed">Loading map...</Text></div> });

export default function DashboardPage() {
  const metrics = [
    { title: 'Total Claims', value: '2,847', change: '+12.5%', icon: IconFileAlert, color: 'blue' },
    { title: 'Pending Review', value: '342', change: '-8.2%', icon: IconClock, color: 'orange' },
    { title: 'Approved', value: '2,163', change: '+15.3%', icon: IconCheck, color: 'green' },
    { title: 'High Risk Plots', value: '89', change: '+3.1%', icon: IconAlertTriangle, color: 'red' },
  ];

  const recentActivity = [
    { plot: 'Plot #A-2847', status: 'Approved', amount: '₹45,000', time: '5 min ago', risk: 'Low', progress: 100 },
    { plot: 'Plot #B-1923', status: 'Under Review', amount: '₹32,500', time: '12 min ago', risk: 'Medium', progress: 50 },
    { plot: 'Plot #C-3421', status: 'High Priority', amount: '₹67,800', time: '25 min ago', risk: 'High', progress: 75 },
  ];

  return (
    <Stack gap="xl">
      <Stack gap={6}>
        <Title order={2} size={rem(36)} fw={800} c="#0f172a">
          YieldGuard Intelligence Dashboard
        </Title>
        <Text c="dimmed" size="sm" fw={500} style={{ color: '#64748b' }}>
          AI-powered crop monitoring (CropIQ) + PMFBY insurance claims assessment
        </Text>
      </Stack>

      <Grid gutter="lg">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 3 }}>
              <Paper 
                shadow="sm" 
                radius="lg" 
                p="xl" 
                withBorder 
                style={{ 
                  background: '#ffffff', 
                  height: '100%',
                  border: '1px solid var(--mantine-color-gray-2)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Stack gap="lg">
                  <Group justify="space-between" align="flex-start">
                    <ThemeIcon 
                      size={56} 
                      radius="lg" 
                      variant="light" 
                      color={metric.color}
                      style={{ boxShadow: `0 4px 12px rgba(0, 0, 0, 0.08)` }}
                    >
                      <Icon size={28} stroke={2.5} />
                    </ThemeIcon>
                    <Badge 
                      size="md" 
                      variant="light" 
                      color={metric.color}
                      styles={{ root: { fontWeight: 700 } }}
                    >
                      {metric.change}
                    </Badge>
                  </Group>
                  <Stack gap={6}>
                    <Text size={rem(48)} fw={800} lh={1} c={metric.color}>
                      {metric.value}
                    </Text>
                    <Text size="xs" c="dimmed" fw={700} tt="uppercase" style={{ letterSpacing: '1px' }}>
                      {metric.title}
                    </Text>
                  </Stack>
                </Stack>
              </Paper>
            </Grid.Col>
          );
        })}
      </Grid>

      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Paper 
            shadow="md" 
            radius="lg" 
            p="xl" 
            withBorder 
            style={{ 
              background: '#ffffff',
              border: '1px solid var(--mantine-color-gray-2)',
            }}
          >
            <Stack gap="lg">
              <Group justify="space-between" align="flex-start">
                <Stack gap={4}>
                  <Text size="xl" fw={800} c="#0f172a">Farm Plot Risk Map</Text>
                  <Text size="sm" c="dimmed" fw={500}>Geographic visualization of high-risk agricultural zones</Text>
                </Stack>
                <Badge 
                  size="lg" 
                  variant="light" 
                  color="blue" 
                  leftSection={<IconMapPin size={16} stroke={2.5} />}
                  styles={{ root: { fontWeight: 700, paddingRight: 16 } }}
                >
                  Live View
                </Badge>
              </Group>
              <div style={{ height: 520, borderRadius: 14, overflow: 'hidden', border: '2px solid var(--mantine-color-gray-2)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
                <MapDisplay />
              </div>
            </Stack>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Paper 
            shadow="md" 
            radius="lg" 
            p="xl" 
            withBorder 
            style={{ 
              background: '#ffffff', 
              height: '100%',
              border: '1px solid var(--mantine-color-gray-2)',
            }}
          >
            <Stack gap="lg">
              <Text size="xl" fw={800} c="#0f172a">Recent Activity</Text>
              <Stack gap="sm">
                {recentActivity.map((activity, index) => (
                  <Paper 
                    key={index} 
                    p="lg" 
                    radius="md" 
                    withBorder 
                    style={{ 
                      background: 'var(--mantine-color-gray-0)',
                      border: '1px solid var(--mantine-color-gray-2)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Stack gap="sm">
                      <Group justify="space-between" align="flex-start">
                        <Text fw={700} size="sm" c="#0f172a">{activity.plot}</Text>
                        <Badge 
                          size="sm" 
                          variant="dot" 
                          color={activity.risk === 'High' ? 'red' : activity.risk === 'Medium' ? 'orange' : 'green'}
                          styles={{ root: { fontWeight: 700 } }}
                        >
                          {activity.risk} Risk
                        </Badge>
                      </Group>
                      <Text size="xs" c="dimmed" fw={500}>{activity.status} • {activity.amount}</Text>
                      <Progress 
                        value={activity.progress} 
                        size="sm" 
                        radius="xl" 
                        color={activity.risk === 'High' ? 'red' : activity.risk === 'Medium' ? 'orange' : 'blue'} 
                      />
                      <Text size="xs" c="dimmed" fw={600}>{activity.time}</Text>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
