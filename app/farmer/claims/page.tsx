'use client';
import React from 'react';
import {
  Container, Title, Text, Card, Stack, Group, Badge,
  ThemeIcon, Paper, SimpleGrid, Button, Timeline, rem
} from '@mantine/core';
import {
  IconFileText, IconClock, IconCheck, IconAlertCircle,
  IconCurrencyRupee, IconCalendar, IconMapPin, IconCamera,
  IconFileUpload, IconEye
} from '@tabler/icons-react';
import Link from 'next/link';

export default function FarmerClaimsPage() {
  const myClaims = [
    {
      id: 'CLM-2024-1245',
      fieldName: 'Field 2 - East Plot',
      crop: 'Soybean',
      damageType: 'Pest Infestation',
      filedDate: 'Oct 18, 2024',
      status: 'Under Review',
      statusColor: 'blue',
      claimAmount: '₹45,000',
      inspectionDate: 'Oct 22, 2024',
      estimatedTime: '5-7 days',
      progress: 60
    }
  ];

  const claimHistory = [
    {
      id: 'CLM-2023-892',
      crop: 'Cotton',
      damageType: 'Drought',
      filedDate: 'Sep 12, 2023',
      status: 'Approved',
      statusColor: 'green',
      amount: '₹62,000',
      paidDate: 'Oct 05, 2023'
    },
    {
      id: 'CLM-2023-654',
      crop: 'Wheat',
      damageType: 'Hailstorm',
      filedDate: 'Mar 08, 2023',
      status: 'Approved',
      statusColor: 'green',
      amount: '₹38,500',
      paidDate: 'Mar 28, 2023'
    }
  ];

  const claimProcess = [
    { title: 'Report Damage', description: 'File claim with photos and details', status: 'completed' },
    { title: 'Document Verification', description: 'Our team reviews your submission', status: 'completed' },
    { title: 'Field Inspection', description: 'UAV and IoT sensor assessment', status: 'current' },
    { title: 'AI Analysis', description: 'Automated damage calculation', status: 'pending' },
    { title: 'Approval & Payment', description: 'Claim settlement to bank account', status: 'pending' }
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
              My Insurance Claims
            </Title>
            <Text size="lg" c="dimmed" fw={500}>
              Track your PMFBY claims and get instant updates
            </Text>
          </div>
          <Button
            leftSection={<IconFileUpload size={18} />}
            variant="filled"
            color="blue"
            size="md"
            component={Link}
            href="/farmer/claims/new"
          >
            File New Claim
          </Button>
        </Group>

        {/* Stats */}
        <SimpleGrid cols={{ base: 1, sm: 4 }} spacing="lg">
          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={48} radius="md" variant="light" color="blue">
                <IconFileText size={24} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="blue.6">1</Text>
                <Text size="xs" c="dimmed" fw={600}>Active Claims</Text>
              </div>
            </Group>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={48} radius="md" variant="light" color="green">
                <IconCheck size={24} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="green.6">2</Text>
                <Text size="xs" c="dimmed" fw={600}>Approved</Text>
              </div>
            </Group>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={48} radius="md" variant="light" color="teal">
                <IconCurrencyRupee size={24} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="teal.6">₹1.0L</Text>
                <Text size="xs" c="dimmed" fw={600}>Total Claimed</Text>
              </div>
            </Group>
          </Card>

          <Card shadow="sm" p="lg" radius="lg" withBorder>
            <Group gap="md">
              <ThemeIcon size={48} radius="md" variant="light" color="orange">
                <IconClock size={24} />
              </ThemeIcon>
              <div>
                <Text size={rem(24)} fw={800} c="orange.6">5-7</Text>
                <Text size="xs" c="dimmed" fw={600}>Days Avg</Text>
              </div>
            </Group>
          </Card>
        </SimpleGrid>

        {/* Active Claim */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Text size="xl" fw={700} mb="lg">Active Claim</Text>
          {myClaims.map((claim) => (
            <Stack key={claim.id} gap="lg">
              <Group justify="space-between">
                <div>
                  <Group gap="xs" mb={4}>
                    <Text size="lg" fw={700}>{claim.id}</Text>
                    <Badge color={claim.statusColor} size="lg">{claim.status}</Badge>
                  </Group>
                  <Text size="sm" c="dimmed">Filed on {claim.filedDate}</Text>
                </div>
                <Paper p="lg" radius="md" bg="blue.0" style={{ textAlign: 'center' }}>
                  <Text size="xs" c="dimmed" fw={600} mb={4}>Claim Amount</Text>
                  <Text size={rem(28)} fw={800} c="blue.6">{claim.claimAmount}</Text>
                </Paper>
              </Group>

              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
                <Paper p="md" radius="md" withBorder>
                  <Group gap="xs" mb="xs">
                    <IconMapPin size={18} color="var(--mantine-color-blue-6)" />
                    <Text size="sm" fw={600}>Field Details</Text>
                  </Group>
                  <Text size="sm" fw={700}>{claim.fieldName}</Text>
                  <Text size="xs" c="dimmed">{claim.crop}</Text>
                </Paper>

                <Paper p="md" radius="md" withBorder>
                  <Group gap="xs" mb="xs">
                    <IconAlertCircle size={18} color="var(--mantine-color-orange-6)" />
                    <Text size="sm" fw={600}>Damage Type</Text>
                  </Group>
                  <Text size="sm" fw={700}>{claim.damageType}</Text>
                </Paper>

                <Paper p="md" radius="md" withBorder>
                  <Group gap="xs" mb="xs">
                    <IconCalendar size={18} color="var(--mantine-color-green-6)" />
                    <Text size="sm" fw={600}>Inspection</Text>
                  </Group>
                  <Text size="sm" fw={700}>{claim.inspectionDate}</Text>
                  <Text size="xs" c="dimmed">{claim.estimatedTime}</Text>
                </Paper>
              </SimpleGrid>

              {/* Claim Timeline */}
              <Paper p="lg" radius="md" bg="gray.0">
                <Text size="sm" fw={700} mb="md">Claim Process</Text>
                <Timeline active={2} bulletSize={28} lineWidth={3} color="blue">
                  {claimProcess.map((step, idx) => (
                    <Timeline.Item
                      key={idx}
                      title={step.title}
                      bullet={
                        step.status === 'completed' ? <IconCheck size={16} /> :
                        step.status === 'current' ? <IconClock size={16} /> : undefined
                      }
                    >
                      <Text size="xs" c="dimmed">{step.description}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Paper>

              <Group gap="sm">
                <Button
                  leftSection={<IconEye size={16} />}
                  variant="light"
                  color="blue"
                >
                  View Details
                </Button>
                <Button
                  leftSection={<IconCamera size={16} />}
                  variant="outline"
                  color="blue"
                >
                  Upload Photos
                </Button>
              </Group>
            </Stack>
          ))}
        </Card>

        {/* Claim History */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Text size="xl" fw={700} mb="lg">Claim History</Text>
          <Stack gap="md">
            {claimHistory.map((claim) => (
              <Paper key={claim.id} p="lg" radius="md" withBorder>
                <Group justify="space-between">
                  <div>
                    <Group gap="xs" mb={4}>
                      <Text size="md" fw={700}>{claim.id}</Text>
                      <Badge color={claim.statusColor}>{claim.status}</Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                      {claim.crop} • {claim.damageType} • Filed: {claim.filedDate}
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text size="lg" fw={800} c="green.6">{claim.amount}</Text>
                    <Text size="xs" c="dimmed">Paid: {claim.paidDate}</Text>
                  </div>
                </Group>
              </Paper>
            ))}
          </Stack>
        </Card>

        {/* Help Section */}
        <Card shadow="sm" p="lg" radius="lg" withBorder bg="blue.0">
          <Group justify="space-between">
            <div>
              <Text size="lg" fw={700} c="blue.7" mb={4}>Need Help with Your Claim?</Text>
              <Text size="sm" c="dimmed">
                Our support team is available 24/7 to assist you
              </Text>
            </div>
            <Button variant="filled" color="blue" component={Link} href="/farmer/support">
              Contact Support
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
