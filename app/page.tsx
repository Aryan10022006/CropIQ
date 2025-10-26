'use client';
import React, { memo } from 'react';
import { Container, Title, Text, Button, SimpleGrid, Paper, Stack, Group, ThemeIcon, Box } from '@mantine/core';
import { IconDrone, IconDeviceHeartMonitor, IconReportMoney, IconArrowRight, IconShieldCheck, IconChartLine } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  const features = [
    { icon: IconDrone, title: 'UAV-Powered Assessments', description: 'High-resolution drone imagery provides precise crop health analysis and damage assessment', color: 'blue' },
    { icon: IconDeviceHeartMonitor, title: 'Real-time Sensor Fusion', description: 'IoT sensors continuously monitor soil moisture, temperature, and environmental conditions', color: 'green' },
    { icon: IconReportMoney, title: 'Automated Claims', description: 'AI-powered verification streamlines PMFBY claims processing with blockchain security', color: 'teal' },
  ];

  return (
    <Box style={{ minHeight: '100vh', background: 'var(--mantine-color-gray-0)' }}>
      <Box style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ecfdf5 100%)', borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
        <Container size="xl" py={80}>
          <Stack gap={40} align="center">
            <Box style={{ textAlign: 'center' }}>
              <Group justify="center" mb="xl">
                <Box 
                  style={{ 
                    width: 120, 
                    height: 120, 
                    borderRadius: 24, 
                    overflow: 'hidden',
                    border: '3px solid var(--mantine-color-blue-3)',
                    boxShadow: '0 12px 48px rgba(59, 130, 246, 0.25)',
                    background: '#ffffff',
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="YieldGuard" 
                    width={120} 
                    height={120} 
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
                    priority 
                  />
                </Box>
              </Group>
              <Title 
                order={1} 
                size="3.5rem" 
                fw={900} 
                mb="md"
                style={{ 
                  background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text', 
                  letterSpacing: '-0.02em', 
                  lineHeight: 1.1 
                }}
              >
                Welcome to YieldGuard
              </Title>
              <Text 
                size="lg" 
                c="dimmed" 
                maw={750} 
                mt="lg" 
                fw={500} 
                style={{ lineHeight: 1.7, color: '#64748b' }}
              >
                The future of crop insurance. Fusing high-resolution UAV imagery with real-time IoT sensor data to deliver precise yield estimates and automated claim verification for PMFBY.
              </Text>
              <Group mt={40} justify="center" gap="lg">
                <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                  <Button 
                    size="xl" 
                    radius="lg" 
                    gradient={{ from: '#2563eb', to: '#1e40af', deg: 135 }} 
                    variant="gradient" 
                    rightSection={<IconArrowRight size={22} stroke={2.5} />}
                    component="div"
                    style={{ 
                      height: 64, 
                      paddingLeft: 48, 
                      paddingRight: 48, 
                      fontSize: '1.125rem', 
                      fontWeight: 700, 
                      boxShadow: '0 12px 48px rgba(37, 99, 235, 0.4)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Launch Assessor Dashboard
                  </Button>
                </Link>
                <Link href="/farmer" style={{ textDecoration: 'none' }}>
                  <Button 
                    size="xl" 
                    radius="lg" 
                    gradient={{ from: '#10b981', to: '#059669', deg: 135 }} 
                    variant="gradient" 
                    rightSection={<IconArrowRight size={22} stroke={2.5} />}
                    component="div"
                    style={{ 
                      height: 64, 
                      paddingLeft: 48, 
                      paddingRight: 48, 
                      fontSize: '1.125rem', 
                      fontWeight: 700, 
                      boxShadow: '0 12px 48px rgba(16, 185, 129, 0.4)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Farmer Portal (CropIQ)
                  </Button>
                </Link>
              </Group>
              <Group mt="xl" gap="xl" justify="center">
                <Group gap="xs"><ThemeIcon size="sm" radius="xl" color="green" variant="light"><IconShieldCheck size={14} /></ThemeIcon><Text size="sm" c="dimmed" fw={600}>Blockchain Secured</Text></Group>
                <Group gap="xs"><ThemeIcon size="sm" radius="xl" color="blue" variant="light"><IconChartLine size={14} /></ThemeIcon><Text size="sm" c="dimmed" fw={600}>AI-Powered Analytics</Text></Group>
              </Group>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container size="xl" py={80}>
        <Stack gap={50}>
          <Stack gap="md" align="center">
            <Title order={2} size="2.5rem" fw={800} ta="center" c="dark">Enterprise-Grade Features</Title>
            <Text size="lg" c="dimmed" ta="center" maw={600}>Cutting-edge technology designed for modern agricultural insurance assessment</Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Paper key={index} shadow="md" radius="lg" p="xl" withBorder style={{ background: '#ffffff', border: '1px solid var(--mantine-color-gray-2)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                  <Stack gap="lg">
                    <ThemeIcon size={60} radius="md" variant="light" color={feature.color} style={{ background: `var(--mantine-color-${feature.color}-0)` }}><Icon size={32} stroke={2} /></ThemeIcon>
                    <Stack gap="xs">
                      <Title order={3} size="1.3rem" fw={700}>{feature.title}</Title>
                      <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>{feature.description}</Text>
                    </Stack>
                  </Stack>
                </Paper>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
      <Box style={{ background: '#ffffff', borderTop: '1px solid var(--mantine-color-gray-2)', padding: '40px 0', marginTop: 80 }}>
        <Container size="xl">
          <Group justify="space-between" align="center">
            <Text size="sm" c="dimmed" fw={500}>© 2025 YieldGuard • Smart India Hackathon 2025</Text>
            <Group gap="lg">
              <Text size="sm" c="blue" fw={600} style={{ cursor: 'pointer' }}>Privacy Policy</Text>
              <Text size="sm" c="blue" fw={600} style={{ cursor: 'pointer' }}>Terms of Service</Text>
              <Text size="sm" c="blue" fw={600} style={{ cursor: 'pointer' }}>Support</Text>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
