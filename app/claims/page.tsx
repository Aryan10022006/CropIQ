"use client";
import React, { useState, useMemo } from 'react';
import { 
  Title, Container, Card, Text, SimpleGrid, Badge, Group, ThemeIcon, Stack, 
  TextInput, Select, Button, Menu, ActionIcon, Progress, Tooltip, Modal,
  Tabs, Paper, Avatar, Divider, Timeline, rem
} from '@mantine/core';
import { 
  IconFileAlert, IconClock, IconCheck, IconX, IconSearch, 
  IconFilter, IconDownload, IconRefresh, IconDots, IconTrendingUp,
  IconAlertTriangle, IconCircleCheck, IconMessageCircle, IconFileAnalytics,
  IconMapPin, IconCalendar, IconUser, IconPhone
} from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ClaimsTable = dynamic(() => import('../components/claims/ClaimsTable'), { ssr: false });

export default function ClaimsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>('all');
  const [priorityFilter, setPriorityFilter] = useState<string | null>('all');
  const [selectedClaim, setSelectedClaim] = useState<any>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const claimStats = [
    { 
      title: 'Total Claims', 
      value: '2,847', 
      change: '+124 this week',
      percentage: 100,
      icon: IconFileAlert, 
      color: 'blue',
      gradient: { from: '#2563eb', to: '#3b82f6' }
    },
    { 
      title: 'Under Review', 
      value: '342', 
      change: 'Avg 4.2 days',
      percentage: 12,
      icon: IconClock, 
      color: 'orange',
      gradient: { from: '#f59e0b', to: '#fb923c' }
    },
    { 
      title: 'Approved', 
      value: '2,163', 
      change: '76.0% rate',
      percentage: 76,
      icon: IconCheck, 
      color: 'green',
      gradient: { from: '#059669', to: '#10b981' }
    },
    { 
      title: 'Flagged', 
      value: '342', 
      change: 'Requires action',
      percentage: 12,
      icon: IconAlertTriangle, 
      color: 'red',
      gradient: { from: '#dc2626', to: '#ef4444' }
    },
  ];

  const quickActions = [
    { label: 'Export All', icon: IconDownload, action: () => console.log('Export') },
    { label: 'Refresh Data', icon: IconRefresh, action: () => console.log('Refresh') },
    { label: 'Bulk Approve', icon: IconCircleCheck, action: () => console.log('Bulk Approve') },
  ];

  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        {/* Header with Actions */}
        <Group justify="space-between" align="flex-start">
          <div>
            <Title 
              order={1} 
              style={{ 
                fontSize: rem(36), 
                fontWeight: 800, 
                marginBottom: 8,
                color: '#0f172a',
                letterSpacing: '-0.02em'
              }}
            >
              PMFBY Claims Workflow
            </Title>
            <Text size="lg" c="dimmed" fw={500}>
              AI-powered verification • Real-time assessment • Blockchain integrity
            </Text>
          </div>
          <Group gap="xs">
            {quickActions.map((action, idx) => (
              <Button
                key={idx}
                leftSection={<action.icon size={18} />}
                variant="light"
                color="blue"
                onClick={action.action}
              >
                {action.label}
              </Button>
            ))}
          </Group>
        </Group>

        {/* Stats Cards with Progress */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {claimStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} shadow="sm" p="xl" radius="lg" withBorder>
                <Stack gap="md">
                  <Group justify="space-between" wrap="nowrap">
                    <ThemeIcon 
                      size={56} 
                      radius={14}
                      variant="gradient"
                      gradient={{ from: stat.color, to: stat.color, deg: 135 }}
                      style={{ boxShadow: `0 4px 12px ${stat.gradient.from}40` }}
                    >
                      <Icon size={28} stroke={2.5} />
                    </ThemeIcon>
                    <Badge 
                      size="lg" 
                      variant="light" 
                      color={stat.color}
                      style={{ fontWeight: 700 }}
                    >
                      {stat.change}
                    </Badge>
                  </Group>
                  <div>
                    <Text size={rem(48)} fw={800} lh={1} mb={8} c={`${stat.color}.6`}>
                      {stat.value}
                    </Text>
                    <Text size="sm" fw={600} c="dimmed" tt="uppercase" style={{ letterSpacing: '0.05em' }}>
                      {stat.title}
                    </Text>
                    <Progress 
                      value={stat.percentage} 
                      color={stat.color} 
                      size="sm" 
                      mt="md"
                      radius="xl"
                      animated
                    />
                  </div>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>

        {/* Filters and Search */}
        <Card shadow="sm" p="lg" radius="lg" withBorder>
          <Group gap="md" grow>
            <TextInput
              placeholder="Search claims by ID, farmer name, or location..."
              leftSection={<IconSearch size={18} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              size="md"
              styles={{
                input: {
                  borderRadius: rem(8),
                  fontWeight: 500
                }
              }}
            />
            <Select
              placeholder="Filter by Status"
              leftSection={<IconFilter size={18} />}
              data={[
                { value: 'all', label: 'All Status' },
                { value: 'pending', label: 'Pending Review' },
                { value: 'in-review', label: 'Under Review' },
                { value: 'approved', label: 'Approved' },
                { value: 'rejected', label: 'Rejected' },
                { value: 'flagged', label: 'Flagged' },
              ]}
              value={statusFilter}
              onChange={setPriorityFilter}
              size="md"
              clearable
            />
            <Select
              placeholder="Filter by Priority"
              leftSection={<IconAlertTriangle size={18} />}
              data={[
                { value: 'all', label: 'All Priority' },
                { value: 'critical', label: 'Critical' },
                { value: 'high', label: 'High Priority' },
                { value: 'medium', label: 'Medium' },
                { value: 'low', label: 'Low' },
              ]}
              value={priorityFilter}
              onChange={setPriorityFilter}
              size="md"
              clearable
            />
          </Group>
        </Card>

        {/* Claims Table with Enhanced Features */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Stack gap="lg">
            <Group justify="space-between">
              <div>
                <Text size="xl" fw={700} mb={4}>
                  All Claims Registry
                </Text>
                <Text size="sm" c="dimmed" fw={500}>
                  Real-time synchronized data • Click any claim for detailed assessment
                </Text>
              </div>
              <Group gap="xs">
                <Badge variant="dot" size="lg" color="red">Critical</Badge>
                <Badge variant="dot" size="lg" color="orange">In Review</Badge>
                <Badge variant="dot" size="lg" color="green">Approved</Badge>
                <Badge variant="dot" size="lg" color="gray">Pending</Badge>
              </Group>
            </Group>
            <ClaimsTable />
          </Stack>
        </Card>

        {/* Quick Insights */}
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Stack gap="sm">
              <Group>
                <ThemeIcon size={40} radius="md" variant="light" color="blue">
                  <IconTrendingUp size={22} />
                </ThemeIcon>
                <div>
                  <Text size="xs" c="dimmed" fw={600} tt="uppercase">Processing Time</Text>
                  <Text size="lg" fw={700}>4.2 days avg</Text>
                </div>
              </Group>
              <Progress value={68} color="blue" size="sm" />
              <Text size="xs" c="dimmed">32% faster than last month</Text>
            </Stack>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Stack gap="sm">
              <Group>
                <ThemeIcon size={40} radius="md" variant="light" color="green">
                  <IconCircleCheck size={22} />
                </ThemeIcon>
                <div>
                  <Text size="xs" c="dimmed" fw={600} tt="uppercase">Approval Rate</Text>
                  <Text size="lg" fw={700}>76.0%</Text>
                </div>
              </Group>
              <Progress value={76} color="green" size="sm" />
              <Text size="xs" c="dimmed">Above industry standard</Text>
            </Stack>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Stack gap="sm">
              <Group>
                <ThemeIcon size={40} radius="md" variant="light" color="orange">
                  <IconFileAnalytics size={22} />
                </ThemeIcon>
                <div>
                  <Text size="xs" c="dimmed" fw={600} tt="uppercase">AI Confidence</Text>
                  <Text size="lg" fw={700}>94.8%</Text>
                </div>
              </Group>
              <Progress value={94.8} color="orange" size="sm" />
              <Text size="xs" c="dimmed">High accuracy verification</Text>
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}


