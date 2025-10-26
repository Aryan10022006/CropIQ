"use client";
import React, { useState } from 'react';
import { 
  Container, Title, SimpleGrid, Card, Text, Badge, Group, Stack, Button,
  ThemeIcon, Progress, Select, TextInput, Tabs, Paper, Timeline, ActionIcon,
  Tooltip, rem, Divider
} from '@mantine/core';
import { 
  IconAlertTriangle, IconDroplet, IconFlask, IconBug, IconCloudRain,
  IconTemperature, IconWind, IconSearch, IconFilter, IconBell,
  IconSend, IconEye, IconCheck, IconClock, IconAlertCircle,
  IconLeaf, IconSun, IconCloudStorm
} from '@tabler/icons-react';

const alerts = [
  {
    id: 1,
    type: 'CRITICAL',
    severity: 'critical',
    category: 'PEST ALERT',
    color: 'red',
    icon: IconBug,
    title: 'Whiteflies Infestation - Field 4',
    description: 'High population density detected via IoT sensors and UAV imagery analysis',
    action: 'Apply neem-based pesticide within 48 hours. Recommended: Azadirachtin 0.15%',
    location: 'Plot ID: MH-14-245, Sector B',
    timestamp: '2 hours ago',
    affected: '4.5 hectares',
    confidence: 94,
    status: 'pending',
    farmer: 'Ramesh Kumar',
    contact: '+91 98765 43210'
  },
  {
    id: 2,
    type: 'HIGH',
    severity: 'high',
    category: 'IRRIGATION',
    color: 'orange',
    icon: IconDroplet,
    title: 'Soil Moisture Critical - Field 2',
    description: 'Current moisture: 18% (threshold: 25%). Sensor readings below optimal range',
    action: 'Irrigate within 24-48 hours. Required: 40mm water depth',
    location: 'Plot ID: MH-14-189, Sector A',
    timestamp: '5 hours ago',
    affected: '3.2 hectares',
    confidence: 89,
    status: 'in-progress',
    farmer: 'Sunita Patil',
    contact: '+91 98765 12345'
  },
  {
    id: 3,
    type: 'MEDIUM',
    severity: 'medium',
    category: 'SOIL HEALTH',
    color: 'yellow',
    icon: IconFlask,
    title: 'High Salinity Detected - Field 3',
    description: 'EC reading 1.8 dS/m exceeds threshold for optimal crop growth',
    action: 'Check drainage system. Consider leaching if rainfall is insufficient',
    location: 'Plot ID: MH-14-312, Sector C',
    timestamp: '1 day ago',
    affected: '2.8 hectares',
    confidence: 87,
    status: 'resolved',
    farmer: 'Prakash Deshmukh',
    contact: '+91 98765 67890'
  },
  {
    id: 4,
    type: 'HIGH',
    severity: 'high',
    category: 'WEATHER',
    color: 'orange',
    icon: IconCloudStorm,
    title: 'Heavy Rainfall Expected',
    description: 'IMD forecasts 150mm+ rainfall in next 72 hours. Potential waterlogging risk',
    action: 'Ensure drainage channels are clear. Postpone fertilizer application',
    location: 'District: Ahmednagar (All sectors)',
    timestamp: '30 minutes ago',
    affected: '120 hectares',
    confidence: 96,
    status: 'pending',
    farmer: 'Multiple farmers',
    contact: 'Broadcast alert'
  },
  {
    id: 5,
    type: 'MEDIUM',
    severity: 'medium',
    category: 'NUTRITION',
    color: 'blue',
    icon: IconLeaf,
    title: 'Nitrogen Deficiency - Field 7',
    description: 'NDVI analysis shows chlorophyll stress. Leaf yellowing detected in UAV imagery',
    action: 'Apply urea 50kg/hectare or equivalent nitrogen source within 1 week',
    location: 'Plot ID: MH-14-456, Sector D',
    timestamp: '3 hours ago',
    affected: '5.1 hectares',
    confidence: 92,
    status: 'pending',
    farmer: 'Vijay Shinde',
    contact: '+91 98765 11111'
  },
  {
    id: 6,
    type: 'LOW',
    severity: 'low',
    category: 'ADVISORY',
    color: 'teal',
    icon: IconSun,
    title: 'Optimal Weather for Spraying',
    description: 'Wind speed <10km/h, no rain forecast for 48h. Ideal conditions for pesticide application',
    action: 'Schedule spray operations between 6-10 AM for best effectiveness',
    location: 'District: All regions',
    timestamp: '1 hour ago',
    affected: 'N/A',
    confidence: 98,
    status: 'active',
    farmer: 'All registered farmers',
    contact: 'SMS broadcast'
  }
];

export default function AlertsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<string | null>('all');
  const [statusFilter, setStatusFilter] = useState<string | null>('all');
  const [activeTab, setActiveTab] = useState<string | null>('all');

  const alertStats = [
    { label: 'Critical', value: 1, color: 'red', icon: IconAlertCircle },
    { label: 'High Priority', value: 2, color: 'orange', icon: IconAlertTriangle },
    { label: 'Medium', value: 2, color: 'yellow', icon: IconClock },
    { label: 'Resolved', value: 1, color: 'green', icon: IconCheck },
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'critical': return 'red';
      case 'high': return 'orange';
      case 'medium': return 'yellow';
      case 'low': return 'teal';
      default: return 'gray';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'red';
      case 'in-progress': return 'blue';
      case 'resolved': return 'green';
      case 'active': return 'teal';
      default: return 'gray';
    }
  };

  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        {/* Header */}
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
              Farmer Alert System (CropIQ)
            </Title>
            <Text size="lg" c="dimmed" fw={500}>
              Real-time monitoring • SMS & app notifications • AI-powered advisories
            </Text>
          </div>
          <Group gap="xs">
            <Button
              leftSection={<IconBell size={18} />}
              variant="light"
              color="blue"
            >
              Send Broadcast
            </Button>
            <Button
              leftSection={<IconAlertTriangle size={18} />}
              variant="filled"
              color="red"
            >
              Create Alert
            </Button>
          </Group>
        </Group>

        {/* Alert Statistics */}
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg">
          {alertStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} shadow="sm" p="lg" radius="lg" withBorder>
                <Group gap="sm" wrap="nowrap">
                  <ThemeIcon 
                    size={48} 
                    radius="md" 
                    variant="light" 
                    color={stat.color}
                  >
                    <Icon size={24} stroke={2} />
                  </ThemeIcon>
                  <div style={{ flex: 1 }}>
                    <Text size={rem(32)} fw={800} lh={1} c={`${stat.color}.6`}>
                      {stat.value}
                    </Text>
                    <Text size="xs" c="dimmed" fw={600} tt="uppercase">
                      {stat.label}
                    </Text>
                  </div>
                </Group>
              </Card>
            );
          })}
        </SimpleGrid>

        {/* Filters */}
        <Card shadow="sm" p="lg" radius="lg" withBorder>
          <Group gap="md" grow>
            <TextInput
              placeholder="Search alerts by farmer, location, or keyword..."
              leftSection={<IconSearch size={18} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              size="md"
            />
            <Select
              placeholder="Filter by Severity"
              leftSection={<IconFilter size={18} />}
              data={[
                { value: 'all', label: 'All Severity' },
                { value: 'critical', label: 'Critical' },
                { value: 'high', label: 'High Priority' },
                { value: 'medium', label: 'Medium' },
                { value: 'low', label: 'Low' },
              ]}
              value={severityFilter}
              onChange={setSeverityFilter}
              size="md"
              clearable
            />
            <Select
              placeholder="Filter by Status"
              data={[
                { value: 'all', label: 'All Status' },
                { value: 'pending', label: 'Pending' },
                { value: 'in-progress', label: 'In Progress' },
                { value: 'resolved', label: 'Resolved' },
                { value: 'active', label: 'Active' },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              size="md"
              clearable
            />
          </Group>
        </Card>

        {/* Alerts Grid */}
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card key={alert.id} shadow="md" p="xl" radius="lg" withBorder>
                <Stack gap="md">
                  {/* Header */}
                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs">
                      <ThemeIcon 
                        size={48} 
                        radius="md" 
                        variant="light" 
                        color={getSeverityColor(alert.severity)}
                      >
                        <Icon size={24} stroke={2} />
                      </ThemeIcon>
                      <div>
                        <Badge 
                          size="lg" 
                          variant="filled" 
                          color={getSeverityColor(alert.severity)}
                          style={{ fontWeight: 700 }}
                        >
                          {alert.type}
                        </Badge>
                        <Text size="xs" c="dimmed" mt={4}>
                          {alert.timestamp}
                        </Text>
                      </div>
                    </Group>
                    <Badge 
                      size="md" 
                      variant="dot" 
                      color={getStatusColor(alert.status)}
                    >
                      {alert.status}
                    </Badge>
                  </Group>

                  <Divider />

                  {/* Content */}
                  <div>
                    <Text fw={700} size="lg" mb="xs">
                      {alert.title}
                    </Text>
                    <Text size="sm" c="dimmed" mb="md">
                      {alert.description}
                    </Text>

                    {/* Action Box */}
                    <Paper
                      p="md"
                      radius="md"
                      style={{
                        background: `var(--mantine-color-${getSeverityColor(alert.severity)}-0)`,
                        border: `2px solid var(--mantine-color-${getSeverityColor(alert.severity)}-2)`,
                      }}
                    >
                      <Group gap="xs" mb="xs">
                        <IconAlertCircle size={16} style={{ color: `var(--mantine-color-${getSeverityColor(alert.severity)}-6)` }} />
                        <Text size="sm" fw={700} c={`${getSeverityColor(alert.severity)}.7`}>
                          Recommended Action
                        </Text>
                      </Group>
                      <Text size="sm" fw={500}>
                        {alert.action}
                      </Text>
                    </Paper>
                  </div>

                  {/* Metadata */}
                  <Group gap="xl" grow>
                    <div>
                      <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Location</Text>
                      <Text size="sm" fw={500}>{alert.location}</Text>
                    </div>
                    <div>
                      <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Affected Area</Text>
                      <Text size="sm" fw={500}>{alert.affected}</Text>
                    </div>
                  </Group>

                  <Group gap="xl" grow>
                    <div>
                      <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Farmer</Text>
                      <Text size="sm" fw={500}>{alert.farmer}</Text>
                    </div>
                    <div>
                      <Text size="xs" c="dimmed" fw={600} tt="uppercase" mb={4}>Contact</Text>
                      <Text size="sm" fw={500}>{alert.contact}</Text>
                    </div>
                  </Group>

                  {/* Confidence */}
                  <div>
                    <Group justify="space-between" mb={4}>
                      <Text size="xs" c="dimmed" fw={600} tt="uppercase">AI Confidence</Text>
                      <Text size="xs" fw={700}>{alert.confidence}%</Text>
                    </Group>
                    <Progress value={alert.confidence} color={getSeverityColor(alert.severity)} size="sm" />
                  </div>

                  <Divider />

                  {/* Actions */}
                  <Group gap="sm" grow>
                    <Button
                      leftSection={<IconSend size={16} />}
                      variant="light"
                      color={getSeverityColor(alert.severity)}
                      size="sm"
                    >
                      Send SMS
                    </Button>
                    <Button
                      leftSection={<IconEye size={16} />}
                      variant="outline"
                      size="sm"
                    >
                      View Details
                    </Button>
                    <Button
                      leftSection={<IconCheck size={16} />}
                      variant="subtle"
                      color="green"
                      size="sm"
                    >
                      Mark Resolved
                    </Button>
                  </Group>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
