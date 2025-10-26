"use client";
import React from 'react';
import { Card, Text, Group, Stack, Badge, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconChartBar, IconTrendingUp, IconAlertCircle, IconCheck, IconClock } from '@tabler/icons-react';
import { ResponsiveLine } from '@nivo/line';

export default function AdvancedAnalytics() {
  const claimTrends = [
    {
      id: 'Claims Filed',
      color: '#4caf50',
      data: [
        { x: 'Jan', y: 120 },
        { x: 'Feb', y: 145 },
        { x: 'Mar', y: 135 },
        { x: 'Apr', y: 180 },
        { x: 'May', y: 165 },
        { x: 'Jun', y: 195 },
      ],
    },
    {
      id: 'Approved',
      color: '#2196f3',
      data: [
        { x: 'Jan', y: 95 },
        { x: 'Feb', y: 120 },
        { x: 'Mar', y: 110 },
        { x: 'Apr', y: 145 },
        { x: 'May', y: 135 },
        { x: 'Jun', y: 158 },
      ],
    },
  ];

  const stats = [
    {
      title: 'Avg Processing Time',
      value: '4.2 days',
      change: '-18%',
      trend: 'positive',
      icon: IconClock,
      color: 'blue',
    },
    {
      title: 'Approval Rate',
      value: '81.5%',
      change: '+5.2%',
      trend: 'positive',
      icon: IconCheck,
      color: 'green',
    },
    {
      title: 'Total Payout',
      value: '₹42.5L',
      change: '+23%',
      trend: 'positive',
      icon: IconTrendingUp,
      color: 'teal',
    },
    {
      title: 'Pending Claims',
      value: '342',
      change: '-12%',
      trend: 'positive',
      icon: IconAlertCircle,
      color: 'orange',
    },
  ];

  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" mb="xl">
        <div>
          <Group gap="sm" mb={4}>
            <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'brand', to: 'accent' }}>
              <IconChartBar size={24} />
            </ThemeIcon>
            <div>
              <Text size="xl" fw={700}>
                Advanced Analytics
              </Text>
              <Text size="sm" c="dimmed">
                Performance metrics and insights
              </Text>
            </div>
          </Group>
        </div>
        <Badge size="lg" variant="light" color="brand">
          Last 6 Months
        </Badge>
      </Group>

      {/* Stats Grid */}
      <SimpleGrid cols={2} spacing="md" mb="xl">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card
              key={idx}
              p="lg"
              style={{
                background: 'linear-gradient(135deg, #f8fdf8 0%, #ffffff 100%)',
                border: '1px solid rgba(76, 175, 80, 0.12)',
              }}
            >
              <Group justify="space-between" mb="sm">
                <ThemeIcon size={36} radius={10} variant="light" color={stat.color}>
                  <Icon size={20} />
                </ThemeIcon>
                <Badge
                  size="sm"
                  variant="light"
                  color={stat.trend === 'positive' ? 'green' : 'red'}
                >
                  {stat.change}
                </Badge>
              </Group>
              <Text size="xs" c="dimmed" mb={4}>
                {stat.title}
              </Text>
              <Text size="xl" fw={800} style={{ color: `var(--mantine-color-${stat.color}-6)` }}>
                {stat.value}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>

      {/* Trend Chart */}
      <Card
        p="lg"
        style={{
          background: '#ffffff',
          border: '1px solid rgba(76, 175, 80, 0.12)',
        }}
      >
        <Text size="sm" fw={600} mb="md">
          Claim Processing Trends
        </Text>
        <div style={{ height: 250 }}>
          <ResponsiveLine
            data={claimTrends}
            margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Month',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Claims',
              legendOffset: -40,
              legendPosition: 'middle',
            }}
            colors={{ datum: 'color' }}
            pointSize={8}
            pointBorderWidth={2}
            pointBorderColor="#ffffff"
            enableGridX={false}
            enableGridY={true}
            useMesh={true}
            curve="cardinal"
            lineWidth={3}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: '#868e96',
                    fontSize: 11,
                  },
                },
                legend: {
                  text: {
                    fill: '#495057',
                    fontWeight: 600,
                    fontSize: 12,
                  },
                },
              },
              grid: {
                line: {
                  stroke: '#e9ecef',
                  strokeWidth: 1,
                },
              },
            }}
          />
        </div>
      </Card>
    </Card>
  );
}
